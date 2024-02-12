import RecordsTable from "../features/records/RecordsTable";
import RecordsTableOperations from "../features/records/RecordsTableOperations";
import Header from "../ui/Header";

function Records() {
  return (
    <>
      <Header heading="Records" />
      <div className="flex flex-col gap-3">
        <RecordsTableOperations />
        <RecordsTable />
      </div>
    </>
  );
}

export default Records;
