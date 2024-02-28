import { IoWallet } from "react-icons/io5";

function AuthHeader({ heading, message }) {
  return (
    <header className="flex flex-col items-center">
      <span className="text-color_primary">
        <IoWallet size={60} />
      </span>
      <h1 className="text-left text-xl font-semibold lg:text-2xl">{heading}</h1>
      <p className="text-color_text ">{message}</p>
    </header>
  );
}

export default AuthHeader;
