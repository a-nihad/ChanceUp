import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";

export function useUsers() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });
  return { users, isLoading, error };
}
