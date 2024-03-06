import { IoWallet } from "react-icons/io5";

function Logo({ sideBar }) {
  return (
    <div
      className={`flex items-center gap-3 text-2xl font-semibold text-color_light dark:text-color_grey ${sideBar ? "" : "hidden lg:flex"}`}
    >
      <IoWallet size={45} />
      <h1 className="text-2xl font-semibold">Kuri Wallet</h1>
    </div>
  );
}

export default Logo;
