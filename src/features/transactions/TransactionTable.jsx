import { useSettings } from "../settings/useSettings";
import { useTransactions } from "./useTransactions";
import TableHeader from "../../ui/table/TableHeader";
import TransactionRow from "./TransactionRow";
import Loader from "../../ui/Loader";

function TransactionTable({ recent }) {
  const { transactions, isLoading } = useTransactions();
  const { settings, settingsLoading } = useSettings();

  if (isLoading || settingsLoading) return <Loader />;
  const transactionsList = recent ? transactions.slice(0, 6) : transactions;

  return (
    <>
      <TableHeader className="mt-1 grid grid-cols-[3fr_.8fr_.8fr] text-center md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:grid-cols-[1.2fr_1.5fr_1fr_1fr_1fr]">
        <h1 className="hidden text-right md:text-left lg:flex">Date - Time</h1>
        <h1 className="text-left ">Members</h1>
        <h1>Instalment</h1>
        <h1>Price</h1>
        <h1 className="hidden md:block">Type</h1>
      </TableHeader>

      {transactionsList.map((transaction) => (
        <div key={transaction.id}>
          <TransactionRow transaction={transaction} settings={settings} />
        </div>
      ))}
    </>
  );
}

export default TransactionTable;
