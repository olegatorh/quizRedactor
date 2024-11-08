"use client";

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/services/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Header = ({ children }: LayoutProps) => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  return (
    <div>
      <header>
        <nav>
          {!isLoggedIn && (
            <>
              <button onClick={() => router.push('/login')}>Login</button>
              <button onClick={() => router.push('/register')}>Register</button>
            </>
          )}

          {isLoggedIn && (
            <>
              <button onClick={logout}>Logout</button>
              <button onClick={() => router.push('/quiz')}>Quiz Redactor</button>
            </>
          )}

          <button onClick={() => router.push('/')}>Home</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Header;
