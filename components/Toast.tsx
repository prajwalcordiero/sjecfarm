"use client";
import React from "react";

export default function Toast({ message }: { message: string }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-full shadow-lg animate-fade">
      {message}
    </div>
  );
}
