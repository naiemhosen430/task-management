"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdReorder } from "react-icons/md";

export default function Menu() {
  // defining state
  const [showLogres, setshowLogres] = useState(false);
  const [sshowlogout, setshowlogout] = useState(false);
  const [menuBox, setMenuBox] = useState(false);
  const [myInfo, setMyInfo] = useState({
    name: "no name",
    balance: 0.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQUKnJyenabp9WJBm3UmgQGPdYrPDgCdQ3HYHH0VQZ1J6Pcd00N2AySxJfxitS7SL8nU&usqp=CAU",
  });
  //   const accessinfo = localStorage.getItem("accesstoken");
  const accessinfo = false;
  useEffect(() => {
    if (!accessinfo) {
      setshowLogres(true);
      setshowlogout(false);
    } else {
      setshowlogout(true);
      setshowLogres(false);
    }
  }, [accessinfo]);

  // onclick hundler
  const toggleMenuBox = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };

  const handleLogoutAndToggle = () => {
    toggleMenuBox();
  };

  return (
    <>
      <div className="flex sticky top-0 backdrop-blur-md z-20 justify-center items-center py-2 px-4">
        <div className="lg:w-3/12 w-5/12 text-black">
          <Link href={"/"} className="font-bold block text-2xl">
            TMA
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="lg:w-6/12 hidden z-20 lg:flex items-center shadow-md rounded-md justify-center"
        >
          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/categorise"}
          >
            Categorise
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/dashboad"}
          >
            Dashboad
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            Review
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            Contract
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            About me
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            href={"/"}
          >
            FAQ
          </Link>
        </div>

        <div className="lg:w-3/12 w-4/12 lg:flex justify-end text-center">
          {showLogres && (
            <>
              <Link
                className="py-2 hidden px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-700 text-white font-bold"
                href={"/register"}
              >
                Join
              </Link>
            </>
          )}
          {sshowlogout && (
            <div className="lg:w-12/12 hidden space-x-4 lg:flex text-center">
              <button
                onClick={handleLogoutAndToggle}
                className="py-2 hidden px-4 lg:block rounded-md shadow-md hover:bg-slate-700 bg-slate-800 text-white font-bold"
              >
                Logout
              </button>
              <div className="p-2 flex items-center space-x-4">
                <h1 className="text-xl font-bold text-white">{myInfo.name}</h1>
                <img
                  className="w-10 h-10 rounded-full inline-block"
                  src={myInfo.image}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>

        <div
          onClick={toggleMenuBox}
          className="w-3/12 lg:hidden text-right font-bold p-2 py-0 rounded-md hover:text-slate-700"
        >
          <MdReorder className="text-4xl inline-block" />
        </div>
      </div>

      {menuBox && (
        <div className="h-screen backdrop-blur-md" data-aos="fade-right">
          {sshowlogout && (
            <div className="w-12/12 space-x-4">
              <div className="p-2 flex items-center justify-center space-x-4">
                <div className="text-center">
                  <h1 className="text-2xl p-2 font-bold text-white">
                    {myInfo.balance}
                  </h1>
                </div>
                <h1 className="text-xl font-bold text-white">{myInfo.name}</h1>
                <img
                  className="w-8 h-8 rounded-full inline-block"
                  src={`${myInfo.image}`}
                  alt=""
                />
              </div>
            </div>
          )}

          <div className="shadow-md rounded-md">
            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              onClick={toggleMenuBox}
              href={"/categorise"}
            >
              Categorise
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/dashboad"}
              onClick={toggleMenuBox}
            >
              Dashboad
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              Review
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              Contract
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              About me
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              href={"/"}
              onClick={toggleMenuBox}
            >
              FAQ
            </Link>
          </div>

          <div className="space-x-4 my-20 lg:flex mx-4 text-center">
            {showLogres && (
              <>
                <Link
                  onClick={toggleMenuBox}
                  className="py-2 px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-800 text-white font-bold"
                  href={"/register"}
                >
                  Join
                </Link>
              </>
            )}
            {sshowlogout && (
              <div className="lg:w-3/12 w-12/12 space-x-4 lg:flex mx-4 text-center">
                <Link
                  onClick={handleLogoutAndToggle}
                  href={"/register"}
                  className="py-2 px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-800 text-white font-bold"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
