import { auth } from '@clerk/nextjs';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { redirect } from 'next/navigation';

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect('/');
  }
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
