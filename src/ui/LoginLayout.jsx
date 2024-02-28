import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="h-screen w-screen md:grid md:grid-cols-2 ">
      <div className=" hidden flex-col items-center justify-center gap-5 bg-color_primary md:flex lg:flex">
        <h1 className="text-3xl text-white"> Welcome! </h1>
        <img
          src="/password.svg"
          alt="login_png"
          className="w-4/6 text-white lg:w-3/6"
        />
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-6">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
