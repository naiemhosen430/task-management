import Link from "next/link";
import React from "react";

export default function SingleTask({
  taskid,
  tasktext,
  taskcatagory,
  taskowner,
}) {
  return (
    <>
      <Link href={`/dashboad/edittask/${taskid}`}>
        <div className="hover:bg-slate-300 rounded-lg hover:shadow-lg p-2 px-4">
          <h1 className="hover:underline text-lg font-bold">{tasktext}</h1>
          <h3 className="text-sm">
            {taskowner} / {taskcatagory}
          </h3>
        </div>
      </Link>
    </>
  );
}
