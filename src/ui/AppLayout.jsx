import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <Header />
      <main className="bg-color_light px-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
