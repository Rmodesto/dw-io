import { PowerIcon } from '@heroicons/react/24/outline';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
  const router = useRouter();
  const auth = getAuth();

  const handleSignOut = async () => {
    console.log('handleSignOut is called');
    try {
      await signOut(auth);
      console.log('Sign-out successful.');
      router.push('/');
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <button onClick={handleSignOut} className="...">
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Sign Out</div>
    </button>
  );
};

export default SignOutButton;
