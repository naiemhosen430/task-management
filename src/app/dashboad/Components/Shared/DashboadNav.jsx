"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOpenInFull } from "react-icons/md";

export default function DashboadNav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Profile",
    "Add-task",
    "My-task",
    "Withdraw",
    "Members",
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
      <div
        onClick={toggleNav}
        className="border-2 lg:hidden border-blue-950 absolute p-1 px-4"
      >
        <MdOpenInFull className="text-xl" />
      </div>

      <div className="h-screen hidden w-2/12 bg-slate-900 lg:inline-block p-5">
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
        </ul>
      </div>

      {mobileNav && (
        <div onClick={toggleNav} className=" w-12/12 h-screen w-screen">
          <div
            onClick={handleSubboxClick}
            className="h-screen absolute w-10/12 bg-slate-900 lg:inline-block p-5"
          >
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
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
