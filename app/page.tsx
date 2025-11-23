'use client';
import {SignInButton,SignUpButton} from "@clerk/nextjs";
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
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-6xl">Welcome to SJEC Farm</h1>
      <div>
        <h1 className="mt-6 text-2xl">To continue with please login....</h1>
      </div>
      <img src="/sjec-logo.png" className="w-60 h-60 rounded-4xl mt-10"/>
      
      <div className="flex flex-col items-center">
      
        <SignInButton mode="modal">
          <button className="bg-gray-200 font-bold rounded-4xl p-24 pt-2 pb-2 mt-4 mr-4 text-black border-3 w-40 h-10 border-blue-800">
            Log in
          </button>
        </SignInButton>
        
       <h1 > Don't have an account? </h1>

        <SignUpButton mode="modal">
          <button className="bg-gray-200 font-bold text-black rounded-4xl border-3 w-40 h-10 border-blue-800 p-24 pt-2 pb-2 mt-10 ">Sign Up</button>
        </SignUpButton>
        </div>
       
      
    </main>
 
  );
}
