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
    <div className="App min-h-screen flex items-center justify-center relative">
  <div
    className="absolute inset-0 bg-cover bg-center z-[-1]"
    style={{ backgroundImage: 'url("/images/dashboardimg.jpeg")' }}
  ></div>
  <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full relative my-12 md:my-20 md:w-[350px] md:h-[350px]">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-9">
      Welcome to Collaborative Spreadsheet
    </h1>
    <p className="text-gray-600 text-center mb-9">
      Manage your data collaboratively in real-time.
    </p>
    <div className="flex justify-center mt-6">
      <button
        onClick={handleCreateNewRoom}
        className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:ring focus:ring-blue-300 focus:outline-none mt-7"
      >
        Create New Sheet
      </button>
    </div>
  </div>
</div>

  );
}
