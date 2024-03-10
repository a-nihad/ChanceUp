import { NavLink } from "react-router-dom";
import * as hi2Icons from "react-icons/hi2";
import Collection from "../features/records/Collection";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 z-20 flex w-screen items-center justify-around border bg-white dark:bg-dark_white dark:border-dark_grey_light text-color_text sm:hidden ">
      {navigateList.map((data, index) => {
        if (index === 2)
          return (
            <Modal key={index}>
              <Modal.Open windowName="collection">
                <ButtonIcon variation="special" className="h-max dark:hover:bg-color_grey ">
                  <hi2Icons.HiMiniPlus size={22} />
                </ButtonIcon>
              </Modal.Open>
              <Modal.Window name="collection">
                <Collection />
              </Modal.Window>
            </Modal>
          );
        else
          return (
            <NavLink
              to={data.path}
              key={index}
              className={({ isActive }) => {
                return `p-4 hover:text-color_primary ${isActive && "bg-white dark:bg-dark_white text-color_primary "} `;
              }}
            >
              <div className="flex flex-col items-center text-2xl ">
                {data.icon} <span className="text-xs"> {data.title} </span>
              </div>
            </NavLink>
          );
      })}
    </div>
  );
}

export default BottomNavBar;

const navigateList = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <hi2Icons.HiHome />,
  },
  {
    title: "Members",
    path: "/members",
    icon: <hi2Icons.HiUsers />,
  },
  {},
  {
    title: "Records",
    path: "/records",
    icon: <hi2Icons.HiIdentification />,
  },
  {
    title: "History",
    path: "/transactions",
    icon: <hi2Icons.HiNewspaper />,
  },
];
