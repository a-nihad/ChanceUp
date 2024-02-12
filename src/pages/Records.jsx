import RecoedsTable from "../features/records/RecordsTable";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";

function Records() {
  return (
    <>
      <Header heading="Records" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <SearchBar />
          <div>Text</div>
        </div>

        <RecoedsTable />
      </div>
    </>
  );
}

export default Records;
