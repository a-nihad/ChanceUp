import { HiMenuAlt1 } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi2";

function NavButtion({ sideBar, setSideBar }) {
  return (
    <>
      <button
        onClick={() => setSideBar(true)}
        className={`fixed left-3 top-3 z-50 rounded-md p-1 text-color_primary hover:bg-color_primary hover:text-color_white sm:left-6 sm:text-color_white lg:hidden ${sideBar ? "hidden" : ""} `}
      >
        <HiMenuAlt1 size={26} />
      </button>
      <button
        className={`fixed left-[235px] top-4 z-50 rounded-full border border-color_secondary_text bg-color_primary p-2 text-2xl text-color_white ${sideBar ? "" : "hidden"}`}
      >
        <HiChevronLeft />
      </button>
    </>
  );
}

export default NavButtion;
