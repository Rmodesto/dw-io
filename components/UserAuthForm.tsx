'use client';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../app/utils/authStateListener';
import {
  GoogleAuthProvider,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '../firebase/clientApp';
import PasswordResetForm from './PasswordResetForm';

interface FirebaseError extends Error {
  code?: string;
}

const UserAuthForm = () => {
  const router = useRouter();
  const {
    user,
    setUser,
    email,
    setEmail,
    password,
    passwordErr,
    setPassword,
    setEmailErr,
    setPasswordErr,
    resetEmailErr,
    setResetEmailErr,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  const handlePasswordResetClick = () => {
    setIsResettingPassword(true);
  };

  useEffect(() => {
    if (user) {
      router.push('/dashboard'); // Redirect to dashboard if user is logged in
    }
  }, [user, router]);

  if (isResettingPassword) {
    return (
      <PasswordResetForm setIsResettingPassword={setIsResettingPassword} />
    );
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      setEmailErr('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setUser(userCredential.user);
      setEmailErr('');
      setPasswordErr('');
      router.push('/dashboard');
    } catch (error) {
      const fbError = error as FirebaseError;
      console.error('SignIn error:', fbError);
      if (
        fbError.code === 'auth/wrong-password' ||
        fbError.code === 'auth/user-not-found'
      ) {
        setPasswordErr('Incorrect email or password.'); // Set the error message here
      } else {
        setPasswordErr(fbError.message || 'An unexpected error occurred.');
      }
      setIsLoading(false);
    }
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user); // Update user state with the authenticated user
      })
      .catch((error) => {
        setEmailErr(error.message); // Update error state with the error message
      });
  };

  const handlePasswordReset = () => {
    if (!email) {
      setResetEmailErr('Please enter your email to reset password.');
      return;
    }

    sendPasswordResetEmail(getAuth(), email)
      .then(() => {
        alert('Password reset email sent! Check your inbox.');
      })
      .catch((error) => {
        console.error('Reset password error:', error);
        setResetEmailErr(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {isResettingPassword ? (
        <PasswordResetForm setIsResettingPassword={setIsResettingPassword} />
      ) : (
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email to sign in to your account
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* ... rest of your JSX ... */}
              {passwordErr && <p className="text-red-500">{passwordErr}</p>}
            </div>

            <div>
              {isResettingPassword ? (
                <PasswordResetForm
                  setIsResettingPassword={setIsResettingPassword}
                />
              ) : (
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging In...' : 'Log In'}
                </button>
              )}
            </div>

            <div className="mt-4">
              <button
                onClick={handlePasswordResetClick}
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Password
              </button>
              {resetEmailErr && (
                <p className="text-red-500 text-xs italic mt-2">
                  {resetEmailErr}
                </p>
              )}
            </div>
          </form>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1">
              <hr className="border-gray-300" />
            </div>
            <div className="text-gray-500">Or continue with</div>
            <div className="flex-1">
              <hr className="border-gray-300" />
            </div>
          </div>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Google
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            Don’t have an account?
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAuthForm;
