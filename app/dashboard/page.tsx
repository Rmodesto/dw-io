// pages/dashboard.tsx
'use client';
import { useRouter } from 'next/navigation'; // Corrected import
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../utils/authStateListener'; // Adjust the path as necessary
import DashboardContent from './DashboardContent'; // Adjust the path as necessary

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log('Checking authentication status...');

    if (!authContext.user) {
      console.log('User not authenticated. Redirecting to login...');
      router.push('/login');
    } else {
      console.log('User is authenticated. Showing dashboard...');
      router.push('/dashboard');
      setIsLoading(false);
    }
  }, [authContext.user, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DashboardContent />
    </div>
  );
}
