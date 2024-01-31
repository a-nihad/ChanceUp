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
        className="bg-color_primary text-color_white absolute left-3 top-3 rounded-xl p-3 text-3xl sm:left-6 sm:p-0 lg:hidden "
        onClick={showSideBar}
      >
        {sideBar ? (
          <span className="border-color_secondary_text bg-color_primary absolute left-56 rounded-full border p-2 text-2xl sm:left-52 ">
            <HiChevronLeft />
          </span>
        ) : (
          <HiMiniBars3 />
        )}
      </button>

      <div
        className={`bg-color_primary text-color_white row-span-full h-screen w-64 space-y-5 py-10 duration-500 ${
          sideBar ? "pl-8" : "w-2 sm:block sm:w-20 lg:w-64 lg:pl-8"
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
