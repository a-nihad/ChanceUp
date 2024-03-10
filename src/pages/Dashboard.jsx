import { useMembers } from "../features/members/useMembers";
import { useSettings } from "../features/settings/useSettings";
import TransactionTable from "../features/transactions/TransactionTable";
import WinnwerMessage from "../features/dashboard/WinnwerMessage";
import StatusChart from "../features/dashboard/StatusChart";
import Status from "../features/dashboard/Status";
import Loader from "../ui/Loader";

function Dashboard() {
  const { settings, isLoading: settingsLoading } = useSettings();
  const { isLoading, dataCount, allMembers } = useMembers();

  if (isLoading || settingsLoading) return <Loader />;

  const { totalInstallment, currentInstalment } = settings;

  const paymentSuccess = allMembers.filter(
    (member) => member.instalment >= currentInstalment,
  );

  const currenWeek = [
    {
      name: "Finished",
      value: paymentSuccess.length,
      color: "#ef4444",
    },
    {
      name: "Remaining ",
      value: dataCount - paymentSuccess.length,
      color: "#22c55e",
    },
  ];

  const installments = [
    {
      name: "Finished",
      value: currentInstalment,
      color: "#f97316",
    },
    {
      name: "Remaining ",
      value: totalInstallment - currentInstalment,
      color: "#14b8a6",
    },
  ];

  return (
    <div>
      <WinnwerMessage settings={settings} />
      <div className="grid lg:grid-cols-2">
        <Status settings={settings} count={dataCount} />
        <div className="grid grid-cols-2 gap-4 lg:p-4 lg:pr-0 ">
          <StatusChart data={currenWeek} heading="Collection" />
          <StatusChart data={installments} heading="Installments" />
        </div>
      </div>
      <TransactionTable recent={true} />
    </div>
  );
}

export default Dashboard;
