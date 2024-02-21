import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-color_light sm:ml-20 lg:ml-64 ">
        <Header />
        <div className="px-5 pb-5 lg:px-10">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
