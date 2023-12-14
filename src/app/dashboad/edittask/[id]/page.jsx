"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function Page() {
  const { id } = useParams();
  const [mainBox, setMainBox] = useState(true);
  const [successBox, setSuccessBox] = useState(false);
  const [error, setError] = useState("");
  const [preTask, setPreTask] = useState("");
  const { control, handleSubmit, setValue } = useForm();
  const session = useSession();

  useEffect(() => {
    const fatchDataOfSingleTask = async () => {
      try {
        const response = await axios.get(`/api/task//${id}`);
        if (response.data) {
          setPreTask(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fatchDataOfSingleTask();
  }, []);

  // get user info
  const [userInfo, setUserInfo] = useState({
    ownername: "",
    email: "",
  });

  useEffect(() => {
    if (session.data) {
      setUserInfo({
        ownername: session.data.user.name,
        email: session.data.user.email,
      });
    }
  }, [session]);

  // edit task
  const onSubmit = async (formData) => {
    const taskData = {
      ...formData,
      ownername: userInfo.ownername,
      email: userInfo.email,
    };
    if (
      taskData.ownername === "" ||
      taskData.tittle === "" ||
      taskData.category === "" ||
      taskData.description === ""
    ) {
      setError("All field are required!");
    }
    try {
      const response = await axios.put(
        `/api/task/${id}/?email=${userInfo.email}`,
        taskData
      );

      if (response.data) {
        setSuccessBox(true);
        setMainBox(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // update field value when preTask is updated
  useEffect(() => {
    setValue("tittle", preTask.tittle);
    setValue("category", preTask.category);
    setValue("description", preTask.description);
  }, [preTask, setValue]);

  // delete task
  const deleteTask = async () => {
    try {
      const response = await axios.delete(
        `/api/task/${id}/?email=${userInfo.email}`
      );

      if (response.data) {
        setSuccessBox(true);
        setMainBox(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {mainBox && (
        <div className="lg:p-20 p-10">
          <h1 className="text-4xl px-2 font-bold py-4">Edit task</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-5/12 w-12/12">
            <h1 className="text-red-950">{error}</h1>
            {/* Title */}
            <div className="p-2">
              <label className="text-xl block font-bold" htmlFor="tittle">
                Write task title
              </label>
              <Controller
                name="tittle"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="tittle"
                    className="block w-full p-2 text-sm px-4 shadow-md border-2 border-yellow-600 rounded-lg"
                    placeholder="Task title"
                  />
                )}
              />
            </div>
            {/* Category */}
            <div className="p-2">
              <label className="text-xl block font-bold" htmlFor="category">
                Select a Category
              </label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="block w-full p-2 text-sm px-4 shadow-md border-2 border-yellow-600 rounded-lg"
                  >
                    <option value={preTask.category} selected>
                      {preTask.category}
                    </option>
                    <option value="web-development">Web development</option>
                    <option value="graphic-design">Graphic design</option>
                    <option value="digital-marketing">Digital marketing</option>
                  </select>
                )}
              />
            </div>
            {/* Description */}
            <div className="p-2">
              <label className="text-xl block font-bold" htmlFor="description">
                Write task description
              </label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="block w-full max-h-40 p-2 text-sm px-4 shadow-md border-2 border-yellow-600 rounded-lg"
                    id="description"
                    placeholder="Start writing"
                  />
                )}
              />
            </div>
            <div className="p-2">
              <button
                className="p-2 px-4 bg-slate-900 text-xl text-white hover:bg-slate-600 rounded-lg"
                type="submit"
              >
                Update task
              </button>
            </div>
          </form>
          <div className="p-2">
            <button className="p-2 px-4 bg-slate-700 text-xl text-white hover:bg-slate-600 rounded-lg">
              Delete task
            </button>
          </div>
        </div>
      )}

      {successBox && (
        <div className="lg:p-20 p-10">
          <h1 className="text-xl px-2 font-bold py-4">Successfull!</h1>
          {/* Additional content or options related to success can go here */}
          <div className="p-2">
            <Link
              className="p-2 px-4 bg-slate-900 text-xl text-white hover:bg-slate-600 rounded-lg"
              href="/dashboad"
            >
              Go to Dashboad
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
