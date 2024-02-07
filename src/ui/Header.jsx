import { HiArrowRightOnRectangle, HiMiniMoon } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-color_light flex justify-end px-10 py-3">
      <div className="text-color_primary_text flex items-center gap-8">
        <div className="hidden items-center gap-3 text-sm md:flex">
          <img
            className="outline-color_secondary_text aspect-square w-10 rounded-full object-cover object-center outline"
            src="default-user.jpg"
            alt={`avatar of Nihad`}
          />
          <h2> Nihad Karulai </h2>
        </div>
        <ul className="flex">
          <li className="hover:bg-color_white cursor-pointer rounded-lg p-2">
            <FaUser size={22} />
          </li>
          <li className="hover:bg-color_white cursor-pointer rounded-lg p-2">
            <HiMiniMoon size={22} />
          </li>
          <li className="hover:bg-color_white cursor-pointer rounded-lg p-2">
            <HiArrowRightOnRectangle size={22} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
