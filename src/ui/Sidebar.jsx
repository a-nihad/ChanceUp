import { HiChevronLeft, HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Logo from "./Logo";
import NavList from "./NavList";

function Sidebar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const ref = useOutsideClick(() => setSideBar(false));
  return (
    <>
      <button
        className="absolute left-3 top-3 rounded-xl bg-color_primary p-3 text-3xl text-color_white sm:left-6 sm:p-0 lg:hidden "
        onClick={showSideBar}
      >
        {sideBar ? (
          <span className="absolute left-56 rounded-full border border-color_secondary_text bg-color_primary p-2 text-2xl sm:left-52 ">
            <HiChevronLeft />
          </span>
        ) : (
          <HiMiniBars3 />
        )}
      </button>

      <div
        className={`row-span-full h-screen space-y-5 bg-color_primary py-10 text-color_white duration-500 ${
          sideBar ? "pl-8 w-64 " : "w-2 bg-color_white sm:bg-color_primary sm:block sm:w-20 lg:w-64 lg:pl-8"
        }`}
        ref={ref}
      >
        <Logo sideBar={sideBar} />
        <NavList sideBar={sideBar} showSideBar={() => setSideBar(false)} />
      </div>
    </>
  );
}

export default Sidebar;
