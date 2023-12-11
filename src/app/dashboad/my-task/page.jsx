import SingleTask from "@/app/Components/CommonComponents/SingleTask";
import React from "react";

export default function page() {
  return (
    <>
      <div className="lg:p-20 p-10 px-5">
        <h1 className="text-4xl px-2 font-bold py-4">My task</h1>
        <div>
          <SingleTask
            taskid={"123"}
            tasktext={"Create a navigation manu by HTML, CSS"}
            taskowner={"MD Naiem"}
          />
        </div>
      </div>
    </>
  );
}
