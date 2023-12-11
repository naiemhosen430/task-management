import Link from "next/link";
import React from "react";

export default function SingleTask({ taskid, tasktext, taskowner }) {
  return (
    <>
      <Link href={`/task/${taskid}`}>
        <div className="hover:bg-slate-300 rounded-lg hover:shadow-lg p-2 px-4">
          <h1 className="hover:underline text-lg font-bold">{tasktext}</h1>
          <h3 className="text-sm">{taskowner}</h3>
        </div>
      </Link>
    </>
  );
}
