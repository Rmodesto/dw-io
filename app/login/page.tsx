import React from 'react';
import UserAuthForm from '../../components/UserAuthForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <UserAuthForm />
    </div>
  );
};

export default LoginPage;
