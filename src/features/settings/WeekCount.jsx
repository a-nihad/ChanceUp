import { format } from "date-fns";
import Buttion from "../../ui/Buttion";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";
import { HiCalendarDays } from "react-icons/hi2";

function WeekCount({ onClose, setClose }) {
  const { settings } = useSettings();
  const { editSettings } = useEditSettings();

  function handleClick() {
    editSettings({
      ...settings,
      currentInstalment: settings.currentInstalment + 1,
    });
    onClose();
    setClose();
  }

  return (
    <div className=" dark:bg-dark_grey_light flex w-max flex-col items-center gap-2 rounded-lg border dark:border-dark_grey_light bg-white p-8 shadow-lg ">
      <p className="text-color_text">
        <HiCalendarDays size={30} />
      </p>
      <h1 className="font-semibold dark:text-color_grey ">
        Current Week :-
        <span className="px-1 text-color_primary">
          {settings?.currentInstalment}
        </span>
      </h1>

      <span className="text-sm text-color_primary">
        {format(new Date(), "LLLL dd - yyyy, EEEE")}
      </span>

      <Buttion
        variation="primary"
        className="mt-3 w-[250px] border dark:border-color_primary_dark "
        onClick={handleClick}
      >
        Next Week
      </Buttion>
    </div>
  );
}

export default WeekCount;
