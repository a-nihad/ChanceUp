import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavBar from "./BottomNavBar";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <main className="mb-14 min-h-screen bg-color_light sm:mb-1 sm:ml-20 lg:ml-64 ">
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
