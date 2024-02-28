import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function BackButtion({ className }) {
  const navigate = useNavigate();
  return (
    <button
      className={`flex items-center gap-2 rounded-xl border p-2 px-4 ${className} `}
      onClick={() => navigate(-1)}
    >
      <IoArrowBack /> Back
    </button>
  );
}

export default BackButtion;
