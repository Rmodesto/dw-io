// UserAuthForm
import { useLoginForm } from '@/components/hooks/useLoginForm'; // Adjust the import path as needed

import Link from 'next/link';
import React from 'react';
import BackButton from './BackButton';
import GoogleIcon from './Google';

interface UserAuthFormProps {
  onLogin: (email: string, password: string) => void;
}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ onLogin }) => {
  const { formData, handleEmailChange, handlePasswordChange, handleSubmit } =
    useLoginForm(({ email, password }) => {
      onLogin(email, password);
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <BackButton />
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="text-center text-2xl font-bold font-Alegreya">
            <span className="text-purple-900">D</span>
            <span className="text-aqua-200">W</span>
          </h3>
          <h1 className="text-center text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-center text-xs mb-2 font-light">
            Enter your email to sign in to your account
          </p>
          <input
            className="shadow appearance-none border border-purple-900 rounded w-full py-2 px-3 text-gray-700 font-light text-sm focus:outline-none focus:shadow-outline"
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="Youremail@email.com"
          />
          <button
            className="bg-purple-900 w-full mt-2 text-white-300 font-regular
             py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <div className="flex items-center mt-2 justify-center space-x-2">
            <div className="flex-grow h-0.5 w-3 bg-gray-400"></div>
            <p className="px-4 text-center text-xs text-gray-600">
              Or continue with
            </p>

            <div className="flex-grow h-0.5 w-3 bg-gray-400"></div>
          </div>
          <button
            className="flex items-center justify-center border border-aqua-200 w-full mt-2 hover:bg-blue-700 text-white font-regular py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <GoogleIcon />
            Google
          </button>
          <Link href="/signup">
            <p className="text-center text-xs mt-2 underline-offset-4 underline-aqua">
              Don't have an account? Sign Up.
            </p>
          </Link>
        </form>
        <p className="text-center text-xs">
          &copy;2023 Dream Whisper. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default UserAuthForm;
