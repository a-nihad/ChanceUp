import { MdPendingActions } from "react-icons/md";
import { HiCalendarDays } from "react-icons/hi2";
import { BsCashStack } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import StatusBox from "./StatusBox";

function Status({ settings, count }) {
  const { totalInstallment, currentInstalment } = settings;
  return (
    <div className="grid gap-4 py-4 grid-cols-2">
      <StatusBox
        icon={<FaUserAlt  />}
        title="Members "
        value={count}
        color="red"
      />
      <StatusBox
        icon={<BsCashStack  />}
        title="Instalment"
        value={totalInstallment}
        color="yellow"
        side="right"
      />
      <StatusBox
        icon={<HiCalendarDays  />}
        title="Current "
        value={currentInstalment}
        color="green"
      />
      <StatusBox
        icon={<MdPendingActions  />}
        title="Balance "
        value={totalInstallment - currentInstalment}
        color="indigo"
        side="right"
      />
    </div>
  );
}

export default Status;
