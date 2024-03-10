import { Outlet } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <main className="mb-14 min-h-screen bg-color_light dark:bg-dark_light sm:mb-0 sm:ml-20 lg:ml-64 ">
        <Header />
        <div className="px-5 pb-5 lg:px-10">
          <Outlet />
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}

export default AppLayout;
