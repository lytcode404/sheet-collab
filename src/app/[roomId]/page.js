'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TopBar from '@/components/TopBar';
import Sheet2 from '@/components/Sheet2';

export default function Room() {
  const { roomId } = useParams(); 
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!(localStorage.getItem('user') && localStorage.getItem('accessToken'))) {
      router.push('/signin');
    } else {
      setUsername(localStorage.getItem('user').displayName);
      setIsUsernameSet(true);
    }
  }, [router]);

  return (
    <div className="App">
      <TopBar />
      {isUsernameSet && <Sheet2 roomId={roomId} username={username} />}
    </div>
  );
}
