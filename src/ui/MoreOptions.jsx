import { useState } from "react";
import { TbLogout } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { HiCalendarDays } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useLogout } from "../features/authentication/useLogout";
import Collection from "../features/records/Collection";
import WeekCount from "../features/settings/WeekCount";
import ButtonIcon from "./ButtonIcon";
import Modal from "./Modal";

function MoreOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const logout = useLogout();

  return (
    <div ref={ref} className="relative">
      <ButtonIcon variation="special" onClick={() => setIsOpen(!isOpen)}>
        <IoSettingsOutline size={22} />
      </ButtonIcon>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-1 flex w-max flex-col gap-1 rounded-xl border border-color_grey_light bg-white p-3 text-sm shadow-lg dark:border-color_text dark:bg-dark_grey_light">
          <Modal>
            <Modal.Open windowName="next_week">
              <ButtonIcon variation="special_Primary" className="rounded-lg">
                <span className="flex items-center gap-2 px-2">
                  <HiCalendarDays size={22} /> Change Week
                </span>
              </ButtonIcon>
            </Modal.Open>

            <Modal.Open windowName="collection">
              <ButtonIcon variation="special_Primary" className="rounded-lg">
                <span className="flex items-center gap-2 px-2">
                  <GiReceiveMoney size={22} /> Collection
                </span>
              </ButtonIcon>
            </Modal.Open>

            <Modal.Window name="next_week" parentRef={ref}>
              <WeekCount setClose={() => setIsOpen(false)} />
            </Modal.Window>

            <Modal.Window name="collection" parentRef={ref}>
              <Collection setClose={() => setIsOpen(false)} />
            </Modal.Window>
          </Modal>

          <ButtonIcon
            variation="special_Primary"
            className="rounded-lg"
            onClick={logout}
          >
            <span className="flex items-center gap-2 px-2">
              <TbLogout size={22} /> Logout
            </span>
          </ButtonIcon>
        </div>
      )}
    </div>
  );
}

export default MoreOptions;
