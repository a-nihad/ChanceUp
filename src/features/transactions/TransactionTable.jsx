import { useSettings } from "../settings/useSettings";
import { useTransactions } from "./useTransactions";
import TransactionRow from "./TransactionRow";
import Loader from "../../ui/Loader";

function TransactionTable() {
  const { transactions, isLoading } = useTransactions();
  const { settings, settingsLoading } = useSettings();

  if (isLoading || settingsLoading) return <Loader />;

  return (
    <>
      <header className="sticky top-16 hidden grid-cols-[1fr_2.2fr_1fr_1.3fr_1fr] rounded-t-lg border border-color_grey_light bg-white px-4 py-2 text-sm font-semibold sm:grid md:grid-cols-[1fr_2.2fr_1fr_1.3fr_1fr] lg:grid-cols-[1fr_2.2fr_1fr_1.3fr_1fr] ">
        <h1 className="">Type</h1>
        <h1 className="">Customers</h1>
        <h1>Instalment</h1>
        <h1 className="">Date</h1>
        <h1 className="hidden lg:block ">Price</h1>
      </header>

      <div className=" divide-y-4 divide-color_light  bg-white ">
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            settings={settings}
          />
        ))}
      </div>
    </>
  );
}

export default TransactionTable;
