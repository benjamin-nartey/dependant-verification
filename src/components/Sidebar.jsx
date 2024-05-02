import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";

import { MdDashboard } from "react-icons/md";

import logo from "@/assets/logo-cocobod.png";

function Sidebar({ closeToggle }) {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  const isNotActiveStyle =
    "px-5 py-2 flex items-center text-white gap-3 w-full hover:bg-[#9D9D9D] hover:text-[#0E1B39] hover:font-semibold transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "px-5 py-2 flex items-center text-[#0E1B39] gap-3 bg-[#e2d5d5] font-bold w-full transition-all duration-200 ease-in-out capitalize";

  return (
    <div
      style={{ minWidth: "220px" }}
      className="flex flex-col justify-between bg-[#0E1B39] h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      <div className="w-full h-[18vh] sticky top-0 z-10 bg-[#0E1B39] grid place-items-center px-5">
        <div className=" logo-box flex justify-center items-center gap-2 ">
          <img className="w-[45px] h-auto " src={logo} alt="logo" />
          <div className="line w-[1.2px] h-[25px] bg-[#fff] "></div>
          <h4 className="">
            <span className="block text-[12px] text-[#fff] font-semibold">
              Ghana Cocoa Board
            </span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col h-[82%] justify-between gap-8 py-3">
        <nav className="flex flex-col gap-4 text-[15px] ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiFillHome size={18} />
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <MdDashboard size={18} />
            Dashboard
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
