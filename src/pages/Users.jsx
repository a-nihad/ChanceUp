import Loader from "../ui/Loader";
import { useUsers } from "../features/users/useUsers";

function Users() {
  const { users, isLoading, error } = useUsers();

  if (isLoading) return <Loader />;

  console.log(users);
  
  return <div>Users</div>;
}

export default Users;
