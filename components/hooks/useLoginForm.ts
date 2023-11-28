// hooks/useLoginForm.ts
import { useState, useCallback } from 'react';

type LoginFormState = {
  email: string;
  password: string;
};

type UseLoginFormReturn = {
  formData: LoginFormState;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useLoginForm = (
  onSubmit: (formData: LoginFormState) => void
): UseLoginFormReturn => {
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((formData) => ({ ...formData, email: e.target.value }));
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((formData) => ({ ...formData, password: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
    },
    [formData, onSubmit]
  );

  return { formData, handleEmailChange, handlePasswordChange, handleSubmit };
};
