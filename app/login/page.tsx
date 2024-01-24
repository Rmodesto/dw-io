import { Auth } from 'firebase/auth';
import React from 'react';
import UserAuthForm from '../../components/UserAuthForm';

interface LoginPageProps {
  auth: Auth;
  uiConfig: {
    signInSuccessUrl: string;
    signInOptions: string[];
  };
}

// Correctly use LoginPageProps with React.FC
const LoginPage: React.FC<LoginPageProps> = ({ auth, uiConfig }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <UserAuthForm />
    </div>
  );
};

export default LoginPage;
