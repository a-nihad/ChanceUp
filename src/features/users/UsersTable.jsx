import { useUsers } from "./useUsers";
import Loader from "../../ui/Loader";
import UsersRow from "./UsersRow";
import Pagination from "../../ui/Pagination";

function UsersTable() {
  const { users, isLoading, count } = useUsers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="divide-y-4 divide-color_light rounded-lg bg-color_white">
        <header className="grid grid-cols-[0.3fr_1.5fr_1fr_1.8fr_1fr_1.8fr_0.2fr]  rounded-t-lg bg-color_primary px-6 py-2 font-semibold text-color_white">
          <div></div>
          <div>Name</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Place</div>
          <div>Address</div>
          <div></div>
        </header>

        {users.map((user, index) => (
          <UsersRow key={user.id} user={user} index={index} />
        ))}

        {<Pagination count={count} />}
      </div>
    </>
  );
}

export default UsersTable;
