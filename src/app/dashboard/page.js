'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { v4 as uuidv4 } from 'uuid';
import TopBar from '@/components/Topbar';

export default function Dashboard() {
  const router = useRouter();
  const [username, setUsername] = useState(null);

  useEffect(() => {   
   setTimeout(() => {
    if(localStorage.getItem("user") && localStorage.getItem("accessToken")) {
     const storedUsername = JSON.parse(localStorage.getItem('user'))['displayName'];
     setUsername(storedUsername);
     console.log("storedUsername", storedUsername);
    }
    else{
      router.push('/signin');
    }
     
     
    }, 2000);
  }, [router]);

  const handleCreateNewRoom = () => {
    if (username) {
      const uniqueId = uuidv4();
      router.push(`/${uniqueId}`);
    } else {
      router.push('/signin');
    }
  };

  if (username === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* <TopBar /> */}
      <h1>Welcome to Collaborative Spreadsheet</h1>
      <button onClick={handleCreateNewRoom}>Create New Room</button>
    </div>
    
  );
}
