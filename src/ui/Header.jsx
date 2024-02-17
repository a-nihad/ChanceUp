import { HiArrowRightOnRectangle, HiMiniMoon } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

function Header() {
  const { pathname } = useLocation();
  return (
    <div className="sticky top-0 z-20 flex justify-between bg-color_white px-5 py-3 lg:px-10">
      <h1 className="pl-9 text-2xl font-semibold capitalize text-color_primary sm:pl-0 ">
        {pathname.slice(1)}
      </h1>

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
