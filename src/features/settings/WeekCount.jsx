import { HiCalendarDays } from "react-icons/hi2";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";
import StyledModal from "../../ui/StyledModal";
import MiniLoader from "../../ui/MiniLoader";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";
import Today from "../../ui/Today";

function WeekCount({ onClose, setClose }) {
  const { settings, isLoading } = useSettings();
  const { editSettings, isPending } = useEditSettings();

  if (isLoading) return <Loader />;

  function handleClick() {
    editSettings({
      ...settings,
      currentInstalment: settings.currentInstalment + 1,
    });
    onClose();
    setClose();
  }

  return (
    <StyledModal icon={<HiCalendarDays size={30} />} className="items-center">
      <div className="font-semibold dark:text-color_grey ">
        Current Week :-
        <span className="px-1 text-color_primary">
          {settings?.currentInstalment}
        </span>
      </div>

      <Today />

      <Buttion className="mt-3 w-[250px] " onClick={handleClick}>
        {isPending ? <MiniLoader /> : "Next Week"}
      </Buttion>
    </StyledModal>
  );
}

export default WeekCount;
