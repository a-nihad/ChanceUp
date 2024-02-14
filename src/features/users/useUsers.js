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

  // Searching
  const search = searchParams.get("search");

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // ******************

  const {
    data: { data: users, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", filter, sortBy, page, search],
    queryFn: () => getUsers({ filter, sortBy, page, search }),
  });

  return { users, isLoading, error, count };
}
