'use client';
import { User } from 'firebase/auth';
import React, { ReactNode, createContext, useState } from 'react';

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void; // Updated to accept User | null
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  emailErr: string;
  setEmailErr: (error: string) => void;
  passwordErr: string;
  setPasswordErr: (error: string) => void;
  resetEmailErr: string;
  setResetEmailErr: (error: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  emailErr: '',
  setEmailErr: () => {},
  passwordErr: '',
  setPasswordErr: () => {},
  resetEmailErr: '',
  setResetEmailErr: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [resetEmailErr, setResetEmailErr] = useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        emailErr,
        setEmailErr,
        passwordErr,
        setPasswordErr,
        resetEmailErr,
        setResetEmailErr,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
