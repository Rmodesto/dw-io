// signup page
'use client';

import React from 'react';

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
    <div className="container mx-auto">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your email"
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-primary">
          Sign up with email
        </button>
      </form>
      <button onClick={onGoogleSignUp} className="btn btn-outline">
        Continue with Google
      </button>
    </div>
  );
};

export default SignUp;
