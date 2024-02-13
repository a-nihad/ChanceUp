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

  // Sorting;
  const sortValue = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortValue.split("-");
  const sortBy = { field, direction };

  // ******************

  const { data, isLoading, error } = useQuery({
    queryKey: ["user", filter, sortBy],
    queryFn: () => getUsers({ filter, sortBy }),
  });

  // Search
  const search = searchParams.get("search");
  const users = search
    ? data.filter((value) => value.name.toLowerCase().includes(search))
    : data;

  return { users, isLoading, error };
}
