// UserAuthForm.client.tsx
import React from 'react';
import { useLoginForm } from '@/components/hooks/useLoginForm'; // Adjust the import path as needed

interface UserAuthFormProps {
  onLogin: (email: string, password: string) => void;
}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ onLogin }) => {
  const { formData, handleEmailChange, handlePasswordChange, handleSubmit } =
    useLoginForm(({ email, password }) => {
      onLogin(email, password);
    });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={formData.password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default UserAuthForm;
