import AddUser from "../features/users/AddUser";
import UsersTable from "../features/users/UsersTable";
import Header from "../ui/Header";

function Users() {
  return (
    <>
      <Header heading="All Users" />
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>Text</div>
          <AddUser />
        </div>

        <UsersTable />
      </div>
    </>
  );
}

export default Users;
