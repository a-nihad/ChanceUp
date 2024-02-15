import { useUsers } from "../../features/users/useUsers";
import Loader from "../../ui/Loader";
import EmptyResult from "../../ui/EmptyResult";
import RecordsRow from "./RecordsRow";
import Pagination from "../../ui/Pagination";

function RecordsTable() {
  const { users, isLoading, count } = useUsers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="space-y-1 rounded-lg">
        <header className="sticky top-16 grid grid-cols-[40px_1.8fr_1fr_1fr_1fr_28px] rounded-t-lg bg-color_primary  px-4 py-2 text-center text-sm font-semibold text-color_white md:grid-cols-[40px_1.8fr_1fr_1fr_1fr_1fr_1fr_28px]">
          <h1></h1>
          <h1 className="text-left">Name</h1>
          <h1 className="hidden md:block">Lots</h1>
          <h1 className="hidden md:block">Amount</h1>
          <h1>Count</h1>
          <h1>Pending</h1>
          <h1>Status</h1>
          <div></div>
        </header>

        <div className="no-scrollbar max-h-[620px] divide-y-4 divide-color_white overflow-y-scroll bg-white ">
          {users.map((user, index) => (
            <RecordsRow key={user.id} user={user} index={index} />
          ))}
        </div>

        <Pagination count={count} />
      </div>
    </>
  );
}

export default RecordsTable;
