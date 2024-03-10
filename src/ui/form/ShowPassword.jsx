import { HiEye, HiEyeSlash } from "react-icons/hi2";

function ShowPassword({ children, show, setShow }) {
  return (
    <div className="relative flex flex-col">
      {children}
      <span
        className="absolute bottom-3 right-3 text-color_text"
        onClick={() => setShow(!show)}
      >
        {show ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
      </span>
    </div>
  );
}

export default ShowPassword;
