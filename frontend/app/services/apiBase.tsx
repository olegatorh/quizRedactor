import axios from 'axios'
import {getCookie} from "cookies-next";


export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/users/refresh/`, {
            refresh: refreshToken,
          });

          if (response.status === 200) {
            localStorage.setItem('access_token', response.data.access);

            originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
            return api(originalRequest);
          }
        }
      } catch (err) {
        console.error('Не вдалося оновити токен', err);
      }
    }

    return Promise.reject(error);
  }
);
