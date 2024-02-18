import Buttion from "../../ui/Buttion";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";

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
    <div className=" w-max space-y-8 rounded-lg border bg-white p-5 text-center shadow-lg sm:p-8">
      <h1 className="text-lg font-semibold md:text-xl">
        Current Week :-
        <span className="text-color_primary">
          {settings?.currentInstalment}
        </span>
      </h1>

      <div className="flex justify-end gap-3">
        <Buttion variation="secondary" onClick={onClose}>
          Cancel
        </Buttion>
        <Buttion variation="danger" onClick={handleClick}>
          Next Week
        </Buttion>
      </div>
    </div>
  );
}

export default WeekCount;
