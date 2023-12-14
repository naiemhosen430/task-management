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
            <Link key={singletask._id} href={`/dashboad/edittask/${singletask._id}`}>
              <div className="hover:bg-slate-300 rounded-lg hover:shadow-lg p-2 px-4">
                <h1 className="hover:underline text-lg font-bold">
                  {singletask.tittle}
                </h1>
                <h3 className="text-sm">
                  {singletask.ownername} / {singletask.category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
