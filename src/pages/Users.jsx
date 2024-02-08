import UsersTable from "../features/users/UsersTable";

function Users() {
  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-color_primary ">
          All Users
        </h1>
        <p> TEST </p>
      </div>

      <div className="h-full">
        <UsersTable />
      </div>
    </div>
  );
}

export default Users;
