import Filter from "../../ui/Filter";
import SearchBar from "../../ui/SearchBar";

function RecordsTableOperations() {
  return (
    <div className="flex items-center justify-between">
      <SearchBar />
      <div>
        <Filter
          filterField="status"
          options={[
            { value: "all", label: "All" },
            { value: "done", label: "Done" },
            { value: "waiting", label: "Waiting" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </div>
    </div>
  );
}

export default RecordsTableOperations;
