"use client";
import { useEffect, useState } from "react";
import PageHeader from "../Components/CommonComponents/PageHeader";
import SingleTask from "../Components/CommonComponents/SingleTask";
import CetagoriSection from "./Components/CetagoriSection";
import axios from "axios";

export default function page() {
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

  console.log({ task });
  return (
    <>
      <PageHeader
        headertaxt={"Categorise"}
        description={
          "Here are a lots of cetagory that can help you to find your skill related task"
        }
      />

      {/* cetagory section  */}
      <CetagoriSection
        cetagory={[
          "Web-developer",
          "Graphic-design",
          "digital-merketing",
          "SEO",
        ]}
      />

      <div className="p-10 lg:px-40">
        {task.map((singletask) => (
          <SingleTask
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
