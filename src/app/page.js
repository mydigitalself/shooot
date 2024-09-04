'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from './supabaseClient';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/s/signup');
      }
    };
    checkUser();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Shooot!</h1>
    </div>
  );
};

export default Home;
