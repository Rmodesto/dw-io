// signup page
'use client';

import Link from 'next/link';
import React from 'react';
import GoogleIcon from '../../components/Google';

interface SignUpProps {
  onEmailSignUp: (email: string) => void;
  onGoogleSignUp: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onEmailSignUp, onGoogleSignUp }) => {
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEmailSignUp(email);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side of the screen - Blank */}
      <div className="w-1/2 bg-purple-300"></div>

      {/* Right side of the screen - Form */}
      <div className="w-1/2 flex items-center justify-center bg-purple-100">
        <div className="p-6 space-y-6 bg-purple-100">
          <div className="text-center">
            <h3 className="text-center text-2xl font-bold font-Alegreya">
              <span className="text-purple-900">D</span>
              <span className="text-aqua-200">W</span>
            </h3>
            <h2 className="text-2xl m-0 font-bold">Create an account</h2>
            <p className="text-sm text-gray-600">
              Enter your email below to create your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="youremail@email.com"
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-blue-700"
            >
              Sign up with email
            </button>
          </form>
          <div className="flex items-center justify-between">
            <div className="flex-grow h-0.5 w-3 bg-gray-400"></div>
            <span className="flex-none uppercase px-2 text-sm text-black-500">
              or continue with
            </span>
            <div className="flex-grow h-0.5 w-3 bg-gray-400"></div>
          </div>
          <button
            onClick={onGoogleSignUp}
            className="flex items-center justify-center w-full border-aqua-200 px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            <GoogleIcon />
            Google
          </button>
          <div className="text-sm text-black-500 text-center pt-0">
            <p className="text-black-500">
              By clicking continue, you agree to our{' '}
            </p>
            <Link href="#" className="underline-aqua-200">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/Privacy" className="underline-aqua">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
