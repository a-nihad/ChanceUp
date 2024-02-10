import { HiArrowRightOnRectangle, HiMiniMoon } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

function Header({ heading }) {
  return (
    <div className="flex justify-between pb-3 pl-3 pt-4 sm:pl-0 sm:pt-5">
      <h1 className="text-2xl font-semibold text-color_primary ">{heading}</h1>

      <div className="flex gap-2 text-color_primary">
        <ButtonIcon variation="secondary">
          <HiMiniMoon size={22} />
        </ButtonIcon>

        <ButtonIcon variation="secondary">
          <HiArrowRightOnRectangle size={22} />{" "}
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Header;
