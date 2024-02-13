import Operations from "../../ui/Operations";
import SearchBar from "../../ui/SearchBar";

function RecordsTableOperations() {
  return (
    <div className="flex items-center justify-between">
      <SearchBar />
      <div className="flex gap-3">
        <Operations
          defaultValue="Filter"
          filterField="status"
          options={[
            { value: "all", label: "All" },
            { value: "done", label: "Done" },
            { value: "waiting", label: "Waiting" },
            { value: "pending", label: "Pending" },
          ]}
        />

        <Operations
          defaultValue="Sort by"
          filterField="sortBy"
          options={[
            { label: "Sort by (A-Z)", value: "name-asc" },
            { label: "Sort by (Z-A)", value: "name-des" },
          ]}
        />
      </div>
    </div>
  );
}

export default RecordsTableOperations;
