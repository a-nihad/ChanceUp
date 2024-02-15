import { useUsers } from "./useUsers";
import Loader from "../../ui/Loader";
import UsersRow from "./UsersRow";
import Pagination from "../../ui/Pagination";

function UsersTable() {
  const { users, isLoading, count } = useUsers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="space-y-1 rounded-lg">
        <header className="sticky top-16 grid grid-cols-[40px_2fr_1fr_0.7fr_28px] rounded-t-lg bg-color_primary px-4 py-2 text-sm font-semibold text-color_white md:grid-cols-[40px_1.5fr_1.8fr_1fr_1.2fr_28px] lg:grid-cols-[40px_1.5fr_1.8fr_1.2fr_1.2fr_1.8fr_28px] ">
          <div></div>
          <h1 className="">Name</h1>
          <h1 className="hidden md:block ">Email</h1>
          <h1>Place</h1>
          <h1 className="text-center md:text-left ">Phone</h1>
          <h1 className="hidden lg:block ">Address</h1>
          <div></div>
        </header>

        <div className="no-scrollbar max-h-[620px] divide-y-4 divide-color_white overflow-y-scroll bg-white ">
          {users.map((user, index) => (
            <UsersRow key={user.id} user={user} index={index} />
          ))}
        </div>

        {<Pagination count={count} />}
      </div>
    </>
  );
}

export default UsersTable;
