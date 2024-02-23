import TransactionTableOperations from "../features/transactions/TransactionTableOperations";
import TransactionTable from "../features/transactions/TransactionTable";

function Transactions() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-3">
      <TransactionTableOperations />
      <TransactionTable />
    </div>
  );
}

export default Transactions;
