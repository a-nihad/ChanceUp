import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import NavButtion from "./NavButtion";
import NavList from "./NavList";
import Logo from "./Logo";

function Sidebar() {
  const [sideBar, setSideBar] = useState(false);
  const ref = useOutsideClick(() => setSideBar(false));
  return (
    <>
      <NavButtion sideBar={sideBar} setSideBar={setSideBar} />
      <div
        className={`fixed z-40 min-h-screen space-y-5 bg-color_primary py-10 text-color_grey duration-500 dark:bg-dark_white ${
          sideBar ? "w-64 pl-8" : " hidden sm:block sm:w-20 lg:min-w-64 lg:pl-8"
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
