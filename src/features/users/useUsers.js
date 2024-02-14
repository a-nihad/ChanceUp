import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../ui/Pagination";

export function useUsers() {
  const queryClint = useQueryClient();
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

  // Query
  const {
    data: { data: users, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", filter, sortBy, page, search],
    queryFn: () => getUsers({ filter, sortBy, page, search }),
  });

  // Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClint.prefetchQuery({
      queryKey: ["user", filter, sortBy, page + 1, search],
      queryFn: () => getUsers({ filter, sortBy, page: page + 1, search }),
    });

  if (page > 1)
    queryClint.prefetchQuery({
      queryKey: ["user", filter, sortBy, page - 1, search],
      queryFn: () => getUsers({ filter, sortBy, page: page - 1, search }),
    });

  return { users, isLoading, error, count };
}
