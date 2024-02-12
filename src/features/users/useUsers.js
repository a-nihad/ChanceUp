import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import { useSearchParams } from "react-router-dom";

export function useUsers() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  // Search
  const search = searchParams.get("search");

  const users = search
    ? data.filter((value) => value.name.toLowerCase().includes(search))
    : data;

  return { users, isLoading, error };
}
