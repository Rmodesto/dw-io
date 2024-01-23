import {
  AuthError,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/clientApp';

const UserAuthForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful sign-in
    } catch (error) {
      const authError = error as AuthError;
      // Handle errors
      console.error(authError.message);
    }
  };

  const handleEmailSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in
    } catch (error) {
      const authError = error as AuthError;
      // Handle errors
      console.error(authError.message);
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

export default UserAuthForm;
