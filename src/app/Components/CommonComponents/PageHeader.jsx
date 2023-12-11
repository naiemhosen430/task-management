import React from "react";

export default function PageHeader({ headertaxt, description }) {
  return (
    <>
      <div className="lg:p-10 p-5">
        <div className="lg:p-20 p-10 bg-slate-800 rounded-lg">
          <h1 className="text-2xl font-bold text-white">
            Welcome to {headertaxt}
          </h1>
          <h2 className="text-lg py-2 text-slate-400">{description}</h2>
        </div>
      </div>
    </>
  );
}
