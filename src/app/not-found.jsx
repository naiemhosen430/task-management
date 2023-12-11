"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Custom500() {
  // disstructure back function from useRouter
  const { back } = useRouter();
  console.log(back);

  return (
    <>
      <div className="h-screen p-10">
        <div className="lg:w-6/12 m-auto">
          <img
            className="w-6/12 m-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM5_CfkBPJfi57x7J4Y2VYKJXVQ5hUeyC7w&usqp=CAU"
            alt=""
          />
          <h1 className="text-2xl p-2 text-center font-bold">
            Ops! Something went wrong.
          </h1>

          <div className="text-center py-5">
            <button onClick={back}>
              <a className="inline-block p-2 px-8 bg-slate-900 text-white rounded-md hover:bg-gray-800">
                Go Back
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
