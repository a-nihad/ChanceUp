import AddUser from "../features/users/AddUser";
import UsersTable from "../features/users/UsersTable";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";

function Users() {
  return (
    <>
      <Header heading="All Users" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <SearchBar />
          <AddUser />
        </div>

        <UsersTable />
      </div>
    </>
  );
}

export default Users;
