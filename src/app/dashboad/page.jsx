"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import SingleTask from "../Components/CommonComponents/SingleTask";

export default function Page() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fatchdata = async () => {
      try {
        const response = await axios.get(`/api/task`);
        setTask(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fatchdata();
  }, []);
  return (
    <>
      <div className="h-screen overflow-y-scroll">
        <div className="lg:p-20 p-10 text-center">
          <div className="lg:inline-block w-12/12 lg:w-3/12 bg-slate-900 rounded-md m-4 shadow-md p-10 px-5 text-center">
            <h1 className="text-3xl font-bold text-white">01</h1>
            <h1 className="text-lg font-bold text-slate-600">
              Your total task
            </h1>
          </div>
          <div className="lg:inline-block w-12/12 lg:w-3/12 bg-slate-900 rounded-md m-4 shadow-md p-10 px-5 text-center">
            <h1 className="text-3xl font-bold text-white">00</h1>
            <h1 className="text-lg font-bold text-slate-600">Completed task</h1>
          </div>
          <div className="lg:inline-block w-12/12 lg:w-3/12 bg-slate-900 rounded-md m-4 shadow-md p-10 px-5 text-center">
            <h1 className="text-3xl font-bold text-white">00</h1>
            <h1 className="text-lg font-bold text-slate-600">My task</h1>
          </div>
        </div>
        <div>
          <div className="bg-slate-400 rounded-md m-4 shadow-md p-10 px-5">
            <h1 className="text-2xl font-bold text-black">
              Our amazing service is waiting for you. Join now for enhance your
              skill
            </h1>
            <h1 className="text-lg font-bold text-slate-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              inventore! Hic repellendus aut ipsa molestias minus facere earum
              saepe, ratione odio quibusdam voluptatem eum, exercitationem
              impedit vitae doloremque dolores corrupti.
            </h1>
            <Link
              className="p-2 px-4 text-lg rounded-md bg-slate-900 text-white hover:bg-slate-700 my-5 inline-block"
              href={"/"}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="p-10 lg:px-40">
        <h1 className="font-bold text-3xl p-5">Top tasks</h1>
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
    </>
  );
}
