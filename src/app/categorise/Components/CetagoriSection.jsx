"use client";
import React, { useEffect, useState } from "react";

export default function CetagoriSection({ cetagory }) {
  const [option, setOption] = useState([]);

  useEffect(() => {
    setOption(cetagory);
  }, [cetagory]);
  return (
    <>
      <div className="lg:pt-4 p-2 border-2 border-blue-950 overflow-x-scroll flex rounded-md m-4 lg:mx-20">
        {option.map((i) => (
          <button
            key={i}
            className="p-1 lg:w-36 w-60 block hover:bg-slate-500 mx-4 px-4 text-sm font-bold"
          >
            {i}
          </button>
        ))}
      </div>
    </>
  );
}
