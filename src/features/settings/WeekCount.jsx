import { format } from "date-fns";
import Buttion from "../../ui/Buttion";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";
import { HiCalendarDays } from "react-icons/hi2";

function WeekCount({ onClose }) {
  const { settings } = useSettings();
  const { editSettings } = useEditSettings();

  function handleClick() {
    editSettings({
      ...settings,
      currentInstalment: settings.currentInstalment + 1,
    });
    onClose();
  }

  return (
    <div className=" flex w-max flex-col items-center gap-2 rounded-lg border bg-white p-8 shadow-lg ">
      <p className="text-color_text">
        <HiCalendarDays size={30} />
      </p>
      <h1 className="font-semibold ">
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
        className="mt-3 w-[250px]"
        onClick={handleClick}
      >
        Next Week
      </Buttion>
    </div>
  );
}

export default WeekCount;
