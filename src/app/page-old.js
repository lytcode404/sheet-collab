'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleCreateNewRoom = () => {
    if (username) {
      const uniqueId = uuidv4();
      router.push(`/${uniqueId}`);
    } else {
      router.push('/login');
    }
  };

  if (username === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Welcome to Collaborative Spreadsheet</h1>
      <button onClick={handleCreateNewRoom}>Create New Room</button>
    </div>
  );
}
