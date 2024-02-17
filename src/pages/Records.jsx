import RecordsTable from "../features/records/RecordsTable";
import RecordsTableOperations from "../features/records/RecordsTableOperations";

function Records() {
  return (
    <div className="flex flex-col gap-3">
      <RecordsTableOperations />
      <RecordsTable />
    </div>
  );
}

export default Records;
