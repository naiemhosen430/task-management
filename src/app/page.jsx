"use client";
import Hero from "./Components/Hero";
import SingleTask from "./Components/CommonComponents/SingleTask";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
      <Hero />

      <div className="p-10 lg:px-40">
        <h1 className="p-5 text-3xl font-bold items-center">Top task</h1>
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
