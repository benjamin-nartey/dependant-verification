import { Fragment, useState } from "react";

import { HiArrowLeft, HiMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillCloseCircle, AiOutlinePoweroff } from "react-icons/ai";
import { useLocation } from "react-router-dom/dist";

import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom/dist";
import SearchInput from "@/components/SearchInput";
import { getContrastingColor } from "@/lib/getContrastingColors";
import { getRandomColor } from "@/lib/getRandomColor";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleLogout, setToggleLogout] = useState(false);
  const [avatarBackground] = useState(getRandomColor());
  const [avatarText] = useState(getContrastingColor(avatarBackground));

  const location = useLocation();
  const hideInput = location.pathname === "/dashboard";

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="absolute right-8 top-16 z-[99]">
        {toggleLogout && (
          <button className="lg:px-4 lg:py-2 lg:z-50 lg:bg-white lg:rounded-md lg:text-base lg:font-medium lg:flex lg:items-center lg:justify-center lg:gap-2 hidden">
            <AiOutlinePoweroff size={18} /> Logout
          </button>
        )}
      </div>
      <div className="lg:flex bg-[#f4e7ed] max-md:flex-col min-h-screen transition-height duration-75 ease-out overflow-hidden">
        <div className="lg:flex lg:flex-initial lg:h-screen hidden">
          <Sidebar />
        </div>
        <div className="main-content-column bg-[#eaf0fd] h-screen w-full overflow-y-auto overflow-x-hidden">
          <div className="flex w-full justify-between items-center sticky top-0 z-10">
            <div className="w-full relative h-full p-5">
              <div className="w-full flex justify-between items-center">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  <HiArrowLeft className="cursor-pointer text-[#0E1B39]" />
                  <span className="text-[#0E1B39]">Back</span>
                </div>
                {!hideInput && <SearchInput />}
                <HiMenu
                  onClick={() => setToggleSidebar(true)}
                  className="text-[25px] text-[#0E1B39] cursor-pointer lg:hidden "
                />

                <div className="lg:block hidden">
                  <div className="flex items-center lg:gap-4 gap-2">
                    <div
                      style={{
                        backgroundColor: `${avatarBackground}`,
                        color: `${avatarText}`,
                      }}
                      className={`w-10 h-10 text-center lg:text-base text-sm rounded-full grid place-items-center font-bold uppercase`}
                    >
                      B
                    </div>

                    <div className="flex flex-col ">
                      <div className="text-[14px] ">Benjamin Nartey</div>
                      <div className="text-xs text-black/70">
                        benjamin.nartey@gmail.com
                      </div>
                    </div>
                    <div>
                      <button onClick={() => setToggleLogout(!toggleLogout)}>
                        <MdOutlineKeyboardArrowDown size={24} color="#000" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 min-h-screen">
            <Outlet />
          </div>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2 z-20">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer text-[#e2d5d5] "
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Navigation;
