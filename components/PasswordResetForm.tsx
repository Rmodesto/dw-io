import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from '../firebase/clientApp';

interface PasswordResetFormProps {
  setIsResettingPassword: (isResetting: boolean) => void;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  setIsResettingPassword,
}) => {
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailErr, setResetEmailErr] = useState('');

  const handleShowResetForm = () => {
    setIsResettingPassword(true);
  };

  const handlePasswordReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!resetEmail) {
      setResetEmailErr('Please enter your email for password reset.');
      return;
    }

    sendPasswordResetEmail(getAuth(), resetEmail)
      .then(() => {
        alert('Password reset email sent! Check your inbox.');
        setResetEmail('');
      })
      .catch((error) => {
        console.error('Reset password error:', error);
        setResetEmailErr(error.message);
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
      <div>
        <label htmlFor="reset-email" className="sr-only">
          Email address
        </label>
        <input
          id="reset-email"
          name="resetEmail"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Enter your email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
        />
        {resetEmailErr && (
          <p className="text-red-500 text-xs italic">{resetEmailErr}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Reset Email
        </button>
      </div>
    </form>
  );
};

export default PasswordResetForm;
