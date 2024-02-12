import { NavLink } from "react-router-dom";
import * as hi2Icons from "react-icons/hi2";
import * as haIcons from "react-icons/fa";

function NavList({ sideBar, showSideBar }) {
  return (
    <nav>
      <ul
        className={`flex flex-col space-y-1 ${sideBar ? "" : "hidden sm:block"}`}
      >
        {navigateList.map((data) => (
          <NavLink
            to={data.path}
            key={data.title}
            className={({ isActive }) => {
              return `text-md flex items-center gap-3 rounded-l-full px-7 py-3 text-color_secondary_text transition-all duration-500 hover:bg-white hover:text-color_primary_text ${isActive && "bg-white text-color_primary_text "} `;
            }}
            onClick={showSideBar}
          >
            <span className={`text-2xl ${!sideBar ? "hidden sm:block" : ""}`}>
              {data.icon}
            </span>
            <span
              className={`capitalize ${sideBar ? "" : "hidden lg:block "} `}
            >
              {data.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;

const navigateList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <hi2Icons.HiHome />,
  },
  {
    title: "Installments",
    path: "/installments",
    icon: <hi2Icons.HiMiniCheckCircle />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <hi2Icons.HiUsers />,
  },
  {
    title: "Records",
    path: "/records",
    icon: <hi2Icons.HiIdentification />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <hi2Icons.HiCog6Tooth />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <haIcons.FaUserTie />,
  },
];
