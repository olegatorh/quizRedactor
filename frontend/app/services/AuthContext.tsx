"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = getCookie('access_token');
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    deleteCookie('access_token');
    deleteCookie('refresh_token');
    deleteCookie('email');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
