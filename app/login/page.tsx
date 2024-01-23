'use client';

import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React from 'react';

interface LoginProps {
  auth: Auth;
  uiConfig: {
    signInSuccessUrl: string;
    signInOptions: string[];
  };
}

const Login: React.FC<LoginProps> = ({ auth, uiConfig }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Handle successful sign-in (e.g., redirect to dashboard)
    } catch (error) {
      // Handle errors
    }
  };

  const handleEmailSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in with Email</button>
      </form>
    </div>
  );
};

export default Login;
