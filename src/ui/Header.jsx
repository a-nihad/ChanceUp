import { HiArrowRightOnRectangle, HiMiniMoon } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

function Header({ heading }) {
  return (
    <div className="sticky top-0 z-30 flex justify-between bg-color_white pb-3 pl-9 pt-4 sm:pl-0 sm:pt-5">
      <h1 className="text-2xl font-semibold text-color_primary ">{heading}</h1>

      <div className="flex gap-2 text-color_primary">
        <ButtonIcon variation="special_secondary">
          <HiMiniMoon size={22} />
        </ButtonIcon>

        <ButtonIcon variation="special_secondary">
          <HiArrowRightOnRectangle size={22} />{" "}
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Header;
