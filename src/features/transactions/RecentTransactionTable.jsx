import { useSettings } from "../settings/useSettings";
import { useTransactions } from "./useTransactions";
import TransactionRow from "./TransactionRow";
import Loader from "../../ui/Loader";

function RecentTransactionTable() {
  const { transactions, isLoading } = useTransactions();
  const { settings, settingsLoading } = useSettings();

  if (isLoading || settingsLoading) return <Loader />;

  const recentTransactions = transactions.slice(0, 6);

  return (
    <div className="pt-3 lg:pt-0">
      <header className="sticky top-16 mt-1 grid grid-cols-[3fr_.8fr_.8fr] rounded-lg border border-color_grey_light bg-color_primary px-4 py-3 text-sm font-semibold text-color_light sm:grid md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:mt-0 lg:grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr] ">
        <h1 className="hidden text-right md:text-left lg:flex">Date - Time</h1>
        <h1>Members</h1>
        <h1 className="text-center ">Instalment</h1>
        <h1 className="text-center ">Price</h1>
        <h1 className=" hidden text-center md:block ">Type</h1>
      </header>

      <div>
        {recentTransactions.map((transaction) => {
          return (
            <div
              className=" divide-y-4 divide-color_light"
              key={transaction.id}
            >
              <TransactionRow transaction={transaction} settings={settings} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentTransactionTable;
