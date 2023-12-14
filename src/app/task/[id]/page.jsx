"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [task, setTask] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fatchDataOfSingleTask = async () => {
      try {
        const response = await axios.get(`/api/task//${id}`);
        if (response.data) {
          setTask(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fatchDataOfSingleTask();
  }, []);
  return (
    <>
      <div className="lg:w-10/12 w-12/12 m-auto p-5">
        <h1 className="text-2xl py-2 font-bold">{task.tittle}</h1>
        <h1 className="text-xl py-2 font-bold">{task.category}</h1>
        <h1 className="text-lg py-2">{task.description}</h1>
      </div>
    </>
  );
}
