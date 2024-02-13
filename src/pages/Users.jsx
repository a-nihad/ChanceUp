import AddUser from "../features/users/AddUser";
import UsersTable from "../features/users/UsersTable";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";
import Operations from "../ui/Operations";

function Users() {
  return (
    <>
      <Header heading="All Users" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <SearchBar />
          <div className="flex gap-3">
            <AddUser />
            <Operations
              defaultValue="Sort by"
              filterField="sortBy"
              options={[
                { label: "Sort by (A-Z)", value: "name-asc" },
                { label: "Sort by (Z-A)", value: "name-des" },
              ]}
            />
          </div>
        </div>

        <UsersTable />
      </div>
    </>
  );
}

export default Users;
