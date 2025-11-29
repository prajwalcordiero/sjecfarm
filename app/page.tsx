"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/home");
    }
  }, [isSignedIn, router]);

  if (isSignedIn === undefined || isSignedIn) {
    return null;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 p-6">
      {/* Logo */}
      <img
        src="/sjec-logo.png"
        alt="SJEC Farm Logo"
        className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg mb-6"
      />

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 text-center">
        Welcome to SJEC Farm
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-2xl text-green-800 text-center">
        To continue, please log in or sign up
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 items-center">
        <SignInButton mode="modal">
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full px-10 py-3 md:px-12 md:py-4 shadow-md transition-all duration-300">
            Log In
          </button>
        </SignInButton>

        <SignUpButton mode="modal">
          <button className="bg-white hover:bg-green-100 text-green-800 font-semibold rounded-full px-10 py-3 md:px-12 md:py-4 shadow-md border-2 border-green-700 transition-all duration-300">
            Sign Up
          </button>
        </SignUpButton>
      </div>

      {/* Extra Text */}
      <p className="mt-6 text-green-900 text-center">
        Don't have an account? Create one to start shopping fresh from SJEC Farm!
      </p>
    </main>
  );
}
