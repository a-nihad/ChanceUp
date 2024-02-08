import { useUsers } from "./useUsers";
import Loader from "../../ui/Loader";
import UsersRow from "./UsersRow";
import Buttion from "../../ui/Buttion";
import CreateUserForm from "./CreateUserForm";

function UsersTable() {
  const { users, isLoading, error } = useUsers();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="divide-y-4 divide-color_light rounded-lg bg-color_white">
        <header className="grid grid-cols-[0.6fr_1.8fr_1.3fr_1fr_1fr_1fr_1fr]  rounded-t-lg bg-color_primary px-6 py-2 font-semibold text-color_white">
          <div></div>
          <div>Name</div>
          <div>Phone</div>
          <div>Lot</div>
          <div>Amount</div>
          <div>Count</div>
          <div>Status</div>
        </header>

        {users.map((user, index) => (
          <UsersRow key={user.id} user={user} index={index} />
        ))}
      </div>

      <CreateUserForm />
    </>
  );
}

export default UsersTable;
