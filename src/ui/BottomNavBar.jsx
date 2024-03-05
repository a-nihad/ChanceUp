import { NavLink } from "react-router-dom";
import * as hi2Icons from "react-icons/hi2";
import { HiMiniPlus } from "react-icons/hi2";
import Modal from "./Modal";
import Collection from "../features/records/Collection";
import ButtonIcon from "./ButtonIcon";

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 z-20 flex w-screen justify-around border bg-white text-color_text sm:hidden ">
      {navigateList.map((data, index) => {
        return (
          <>
            <div className={`${index === 2 ? "flex items-center " : "hidden"}`}>
              <Modal>
                <Modal.Open windowName="collection">
                  <ButtonIcon variation="special">
                    <HiMiniPlus size={22} />
                  </ButtonIcon>
                </Modal.Open>
                <Modal.Window name="collection">
                  <Collection />
                </Modal.Window>
              </Modal>
            </div>

            <NavLink
              to={data.path}
              key={data.title}
              className={({ isActive }) => {
                return `p-6 px-4 hover:text-color_primary ${isActive && "bg-white text-color_primary "} `;
              }}
            >
              <div className="text-2xl flex flex-col items-center ">
                {data.icon} <span className="text-xs" > {data.title} </span>
              </div>
            </NavLink>
          </>
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
