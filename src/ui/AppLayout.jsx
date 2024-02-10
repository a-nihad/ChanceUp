import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="grow bg-color_light px-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
