import AddUser from "../features/users/AddUser";
import UsersTable from "../features/users/UsersTable";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";
import Operations from "../ui/Operations";
import { FaSortAlphaDownAlt } from "react-icons/fa";

function Users() {
  return (
    <>
      <Header heading="All Users" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-5">
          <SearchBar />
          <div className="flex items-center gap-2">
            <AddUser />
            <Operations
              defaultValue="Sort by"
              filterField="sortBy"
              options={[
                { label: "Sort by (A-Z)", value: "name-asc" },
                { label: "Sort by (Z-A)", value: "name-des" },
              ]}
              icon={<FaSortAlphaDownAlt />}
            />
          </div>
        </div>

        <UsersTable />
      </div>
    </>
  );
}

export default Users;
