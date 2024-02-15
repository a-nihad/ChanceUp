import Operations from "../../ui/Operations";
import SearchBar from "../../ui/SearchBar";
import { FaFilter, FaSortAlphaDownAlt } from "react-icons/fa";

function RecordsTableOperations() {
  return (
    <div className="flex items-center justify-between gap-5 ">
      <SearchBar />
      <div className="flex gap-2">
        <Operations
          defaultValue="Filter"
          filterField="status"
          options={[
            { value: "all", label: "All" },
            { value: "done", label: "Done" },
            { value: "waiting", label: "Waiting" },
            { value: "pending", label: "Pending" },
          ]}
          icon={<FaFilter />}
        />

        <Operations
          defaultValue="SortBy"
          filterField="sortBy"
          options={[
            { label: "Sort by (A-Z)", value: "name-asc" },
            { label: "Sort by (Z-A)", value: "name-des" },
          ]}
          icon={<FaSortAlphaDownAlt />}
        />
      </div>
    </div>
  );
}

export default RecordsTableOperations;
