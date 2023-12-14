"use client";
import SingleTask from "@/app/Components/CommonComponents/SingleTask";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [task, setTask] = useState([]);
  const session = useSession();
  useEffect(() => {
    const fatchdata = async () => {
      try {
        console.log({ session });
        const response = await axios.get(
          `/api/mytask/${session.data.user.email}`
        );
        setTask(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fatchdata();
  }, [session]);
  return (
    <>
      <div className="lg:p-20 p-10 px-5">
        <h1 className="text-4xl px-2 font-bold py-4">My task</h1>
        <div>
          {task.map((singletask) => (
            <SingleTask
              key={singletask._id}
              taskid={singletask._id}
              tasktext={singletask.tittle}
              taskowner={singletask.ownername}
              taskcatagory={singletask.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}
