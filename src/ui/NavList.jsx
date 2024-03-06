import { NavLink } from "react-router-dom";
import * as hi2Icons from "react-icons/hi2";

function NavList({ sideBar, showSideBar }) {
  return (
    <nav>
      <ul
        className={`flex flex-col space-y-1 ${sideBar ? "" : "hidden sm:block "}`}
      >
        {navigateList.map((data) => (
          <NavLink
            to={data.path}
            key={data.title}
            className={({ isActive }) => {
              return `text-md flex items-center gap-3 rounded-l-full px-7 py-3 transition-all duration-500 hover:bg-white dark:hover:bg-color_primary_dark dark:hover:text-color_grey hover:text-color_primary ${isActive && "bg-white dark:bg-color_primary_dark dark:text-color_grey text-color_primary "} `;
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
    title: "Transactions",
    path: "/transactions",
    icon: <hi2Icons.HiNewspaper />,
  },
  {
    title: "Installments",
    path: "/installments",
    icon: <hi2Icons.HiMiniCheckCircle />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <hi2Icons.HiCog6Tooth />,
  },
];
