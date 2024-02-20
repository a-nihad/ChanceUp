import { HiCalendarDays } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";

import { FaGift } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";
import WeekCount from "../features/settings/WeekCount";
import WeeklyWinner from "../features/records/WeeklyWinner";
import Collection from "../features/records/Collection";

function Header() {
  const { pathname } = useLocation();
  return (
    <div className="sticky top-0 z-20 flex justify-between bg-color_white px-5 py-3 lg:px-10">
      <h1 className="pl-9 text-2xl font-semibold capitalize text-color_primary sm:pl-0 ">
        {pathname.slice(1)}
      </h1>

      <div className="flex gap-2 text-color_primary">
        <Modal>
          <Modal.Open windowName="next_week">
            <ButtonIcon>
              <HiCalendarDays size={22} />
            </ButtonIcon>
          </Modal.Open>

          <Modal.Open windowName="winner">
            <ButtonIcon>
              <FaGift size={20} />
            </ButtonIcon>
          </Modal.Open>

          <Modal.Open windowName="collection">
            <ButtonIcon>
              <GiReceiveMoney size={22} />
            </ButtonIcon>
          </Modal.Open>

          <Modal.Window name="next_week">
            <WeekCount />
          </Modal.Window>

          <Modal.Window name="winner">
            <WeeklyWinner />
          </Modal.Window>

          <Modal.Window name="collection">
            <Collection />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
