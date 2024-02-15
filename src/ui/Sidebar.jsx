import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Logo from "./Logo";
import NavList from "./NavList";

function Sidebar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const ref = useOutsideClick(() => setSideBar(false));
  return (
    <>
      <button onClick={showSideBar}>
        {sideBar ? (
          <span className="fixed left-[235px] top-4 z-50 rounded-full border border-color_secondary_text bg-color_primary p-2 text-2xl text-color_white ">
            <HiChevronLeft />
          </span>
        ) : (
          <span className="fixed left-3 top-4 z-50 h-max rounded-md p-1 text-2xl text-color_primary hover:bg-color_primary hover:text-color_white sm:left-5 sm:text-3xl sm:text-color_white lg:hidden ">
            <HiMenuAlt1 />
          </span>
        )}
      </button>

      <div
        className={`fixed z-40 min-h-screen space-y-5 bg-color_primary py-10 text-color_white duration-500 ${
          sideBar
            ? "w-64 pl-8"
            : " hidden bg-color_white sm:block sm:w-20 sm:bg-color_primary lg:top-0 lg:min-w-64 lg:pl-8"
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
