import RecordsTable from "../features/records/RecordsTable";
import RecordsTableOperations from "../features/records/RecordsTableOperations";

function Records() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-3">
      <RecordsTableOperations />
      <RecordsTable />
    </div>
  );
}

export default Records;
