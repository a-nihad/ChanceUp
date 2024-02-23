import { FaFilter } from "react-icons/fa";
import Operations from "../../ui/Operations";
import SearchBar from "../../ui/SearchBar";

function TransactionTableOperations() {
  return (
    <div className="flex items-center justify-between gap-5">
      <SearchBar />
      <div className="flex items-center gap-2">
        <Operations
          defaultValue="Filter"
          filterField="payment_type"
          options={[
            { value: "all", label: "All" },
            { value: "credit", label: "Credit" },
            { value: "debit", label: "Debit" },
          ]}
          icon={<FaFilter />}
        />
      </div>
    </div>
  );
}

export default TransactionTableOperations;
