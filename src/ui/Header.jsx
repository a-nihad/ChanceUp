import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaGift } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import WeeklyWinner from "../features/records/WeeklyWinner";
import MoreOptions from "./MoreOptions";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-20 flex justify-between bg-color_white px-5 py-3 dark:bg-dark_light lg:px-10">
      <h1 className="pl-9 text-2xl font-semibold capitalize text-color_primary sm:pl-0 ">
        {pathname.slice(1)}
      </h1>

      <div className="flex gap-2 text-color_primary">
        <Modal>
          <Modal.Open windowName="winner">
            <ButtonIcon>
              <FaGift size={20} />
            </ButtonIcon>
          </Modal.Open>

          <Modal.Window name="winner">
            <WeeklyWinner />
          </Modal.Window>
        </Modal>

        <ButtonIcon
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <MdSunny size={21} /> : <IoMoon size={21} />}
        </ButtonIcon>

        <MoreOptions />
      </div>
    </div>
  );
}

export default Header;
