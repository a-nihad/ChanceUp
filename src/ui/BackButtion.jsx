import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import ButtionIcon from "../ui/ButtonIcon";

function BackButtion() {
  const navigate = useNavigate();
  return (
    <ButtionIcon
      onClick={() => navigate(-1)}
      variation="special_Primary"
      className={"flex items-center gap-3 rounded-lg border-color_text px-4 "}
    >
      <IoArrowBack /> Back
    </ButtionIcon>
  );
}

export default BackButtion;
