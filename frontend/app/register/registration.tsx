import {api} from "@/app/services/apiBase";


export async function registration(username: string, email: string, password: string) {
  try {
    const response = await api.post(`/users/register/`, {
      username: username,
      email: email,
      password: password,
    });

    if (response.status === 201) {
      console.log('registration correct');
      return true
    }
    else return false
  } catch (error) {
    console.error('registration error:', error);
    return false
  }
}