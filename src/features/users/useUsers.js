import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import { useSearchParams } from "react-router-dom";

export function useUsers() {
  const [searchParams] = useSearchParams();

  // Filtering
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : filterValue === "pending"
        ? { field: "pending", value: 0, method: "gt" }
        : { field: "status", value: filterValue };
  // ******************

  const { data, isLoading, error } = useQuery({
    queryKey: ["user", filter],
    queryFn: () => getUsers({ filter }),
  });

  // Search
  const search = searchParams.get("search");

  const users = search
    ? data.filter((value) => value.name.toLowerCase().includes(search))
    : data;

  return { users, isLoading, error };
}
