import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../ui/Pagination";

export function useMembers() {
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

  // Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["member", filter, sortBy],
    queryFn: () => getMembers({ filter, sortBy }),
  });

  // Searching
  const search = searchParams.get("search");
  const searched = !search
    ? data || {}
    : data.filter((value) => value.name.toLowerCase().includes(search));

  const dataCount = searched.length;

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const from = (page - 1) * PAGE_SIZE;
  const to = page * PAGE_SIZE;
  const members = searched.length > 1 ? searched.slice(from, to) : searched;

  return { members, isLoading, error, dataCount };
}
