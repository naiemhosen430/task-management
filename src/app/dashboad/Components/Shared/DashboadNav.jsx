"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOpenInFull } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";

export default function DashboadNav() {
  const [userInfo, setUserInfo] = useState({
    name: "user",
    email: "no email",
  });
  const session = useSession();
  useEffect(() => {
    if (session.data) {
      setUserInfo({
        name: session.data.user.name,
        email: session.data.user.email,
      });
    }
  }, [session]);
  const [mobileNav, setMobileNav] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Profile",
    "Add-task",
    "My-task",
  ]);

  //   onclick
  const toggleNav = () => {
    if (mobileNav === false) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };

  const handleSubboxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {/* for mobile toggle */}
      <div
        onClick={toggleNav}
        className="border-2 lg:hidden border-blue-950 absolute p-1 px-4"
      >
        <MdOpenInFull className="text-xl" />
      </div>
      {/* for large device */}
      <div className="h-screen hidden w-3/12 bg-slate-900 lg:inline-block p-5">
        <div className="py-5">
          <h1 className="text-xl text-center text-white font-bold">
            {userInfo.name}
          </h1>
          <h1 className="text-sm text-center text-slate-700 font-bold">
            {userInfo.email}
          </h1>
        </div>
        <ul>
          <Link
            href={`/dashboad`}
            className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
          >
            Dashboard
          </Link>
          {menuItems.map((item) => (
            <Link
              href={`/dashboad/${item.toLowerCase()}`}
              key={item}
              className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
            >
              {item}
            </Link>
          ))}
          <Link
            onClick={signOut}
            className="cursor-pointer my-5 bg-slate-800 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
            href={"/join"}
          >
            Sign Out
          </Link>
        </ul>
      </div>
      {/* for small device  */}
      {mobileNav && (
        <div onClick={toggleNav} className=" w-12/12 h-screen w-screen">
          <div
            onClick={handleSubboxClick}
            className="h-screen absolute w-10/12 bg-slate-900 lg:inline-block p-5"
          >
            <h1 className="text-xl text-center text-white font-bold">
              {userInfo.name}
            </h1>
            <h1 className="text-sm text-center text-slate-700 font-bold">
              {userInfo.email}
            </h1>
            <ul>
              <Link
                href={`/dashboad`}
                onClick={toggleNav}
                className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
              >
                Dashboard
              </Link>
              {menuItems.map((item) => (
                <Link
                  href={`/dashboad/${item.toLowerCase()}`}
                  onClick={toggleNav}
                  key={item}
                  className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                >
                  {item}
                </Link>
              ))}
              <Link
                onClick={signOut}
                className="cursor-pointer my-5 bg-slate-800 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                href={"/join"}
              >
                Sign Out
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
