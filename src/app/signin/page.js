"use client";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("accessToken")) {
      router.push("/dashboard");
    }
  }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyBQMlj2XmHsCuqJVc8nbsZ37Li4zUz5PxM",
    authDomain: "pinwheel-c6d2a.firebaseapp.com",
    projectId: "pinwheel-c6d2a",
    storageBucket: "pinwheel-c6d2a.appspot.com",
    messagingSenderId: "1044776781758",
    appId: "1:1044776781758:web:28d31b3ba1d14694ca9bef",
    measurementId: "G-2X9MR053F0",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const accessToken = result.user.accessToken;
        const user = result.user;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="container mx-auto max-w-5xl shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Reduced gap to decrease space */}
          {/* Left Section */}
          <div className="bg-white py-8 px-6"> {/* Reduced padding */}
            <div className="max-w-md mx-auto">
              <img className="mb-6 w-16 mx-auto" src="images/flower.svg" alt="" /> {/* Reduced size */}
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Sign In</h1> {/* Smaller font */}
              <p className="text-center text-gray-600 mb-8">Sign in to access your dashboard and manage your ideas.</p> {/* Reduced margin */}
              <div className="signin-options">
                <Button onClick={handleGoogleSignIn} className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300"> {/* Reduced button padding */}
                  Sign In With Google
                </Button>
              </div>
              
              
              
            </div>
          </div>

          {/* Right Section */}
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6 text-white"> {/* Reduced padding */}
            <img
              className="absolute inset-0 object-cover w-full h-full opacity-10 pointer-events-none"
              src="images/login-banner-bg.svg"
              alt=""
            />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-bold mb-4"> {/* Smaller font */}
                Turn Your Ideas <br /> Into Reality
              </h2>
              <div className="swiper auth-banner-carousel mb-4"> {/* Reduced spacing */}
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img width={400} height={300} className="mx-auto" src="images/login-carousel-img-1.png" alt="" /> {/* Reduced image size */}
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
