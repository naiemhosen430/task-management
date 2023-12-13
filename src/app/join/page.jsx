"use client";
import { signIn } from "next-auth/react";

export default function page() {
  return (
    <>
      <div className="p-10 lg:p-20">
        <h1 className="text-3xl p-2 text-center font-bold">
          Log in to your account
        </h1>
        <div className="text-center py-20">
          <button
            onClick={() => signIn("google")}
            className="py-2 px-8 border-2 hover:bg-white border-yellow-950 bg-slate-400 rounded-md text-xl font-bold shadow-lg"
          >
            Join with Google
          </button>
        </div>
      </div>
    </>
  );
}
