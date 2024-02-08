import { FaUserPlus } from "react-icons/fa6";
import UsersTable from "../features/users/UsersTable";
import ButtonIcon from "../ui/form/ButtonIcon";

function Users() {
  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-color_primary ">
          All Users
        </h1>
        <div className="flex items-center gap-2">
          Text
          <ButtonIcon>
            <FaUserPlus size={22} />
          </ButtonIcon>
        </div>
      </div>

      <div className="h-full">
        <UsersTable />
      </div>
    </div>
  );
}

export default Users;
