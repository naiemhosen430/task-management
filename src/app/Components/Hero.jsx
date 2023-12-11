import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b to-slate-500 from-white lg:p-20 lg:py-28 py-16 p-10">
        <h1 className="lg:text-5xl text-3xl text-center font-bold">
          Join the largest community to enhance your skills with various tasks
        </h1>
        <div className="text-center py-5">
          <Link
            href={"/aboutus"}
            className="inline-block m-4 border-4 hover:border-none hover:text-white border-blue-950 p-2 px-8 text-black font-bold rounded-md hover:bg-gray-800"
          >
            About us
          </Link>
          <Link
            href={"/dashboad"}
            className="inline-block m-4 border-4 hover:border-none hover:text-white font-bold border-blue-950 p-2 px-8 bg-slate-900 text-white rounded-md hover:bg-gray-800"
          >
            Get start
          </Link>
        </div>
      </div>
    </>
  );
}
