// LoginPage.tsx
'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const UserAuthForm = dynamic(() => import('@/components/UserAuthForm'), {
  ssr: false,
});

const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Implement your login logic here
    console.log('Login with:', email, password);
  };

  return (
    <div>
      <UserAuthForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
