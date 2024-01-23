import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/clientApp';
import Login from '../login/page'; // Ensure this import is correct

const uiConfig = {
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

const SignInScreen: React.FC = () => {
  return (
    <div>
      <Login auth={auth} uiConfig={uiConfig} />
    </div>
  );
};

export default SignInScreen;
