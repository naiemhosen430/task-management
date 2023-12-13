"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function TaskSubmitForm() {
  const { control, handleSubmit } = useForm();

  // get user info
  const [userInfo, setUserInfo] = useState({
    ownername: "",
    email: "",
  });
  const session = useSession();
  useEffect(() => {
    if (session.data) {
      setUserInfo({
        ownername: session.data.user.name,
        email: session.data.user.email,
      });
    }
  }, [session]);

  // submit
  const onSubmit = async (formData) => {
    const taskData = {
      ...formData,
      ownername: userInfo.ownername,
      email: userInfo.email,
    };

    try {
      const response = await axios.post(
        `/api/task/${userInfo.email}`,
        taskData
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="lg:p-20 p-10">
        <h1 className="text-4xl px-2 font-bold py-4">Add a new task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-5/12 w-12/12">
          {/* Title */}
          <div className="p-2">
            <label className="text-xl block font-bold" htmlFor="tittle">
              Write task title
            </label>
            <Controller
              name="tittle"
              control={control}
              defaultValue=""
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
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="block w-full p-2 text-sm px-4 shadow-md border-2 border-yellow-600 rounded-lg"
                >
                  <option value="" disabled>
                    Select
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
              defaultValue=""
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
              Add task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
