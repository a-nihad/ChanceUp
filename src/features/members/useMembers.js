import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getMembers } from "../../services/apiMembers";

export function useMembers() {
  const [searchParams] = useSearchParams();

  // Filtering
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
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

  const allMembers = data;

  // Searching
  const search = searchParams.get("search");
  const searched = !search
    ? data || {}
    : data.filter((value) => value.name.toLowerCase().includes(search));

  // Pending
  const pending = Number(searchParams.get("pending"));
  const pendingValue = pending
    ? searched.filter((value) => pending - value.instalment > 0)
    : searched || {};

  const dataCount = pendingValue.length;

  // Pagination
  const PAGE_SIZE = searchParams.get("pageSize") || 15;
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const from = (page - 1) * PAGE_SIZE;
  const to = page * PAGE_SIZE;
  const members =
    pendingValue.length > 1 ? pendingValue.slice(from, to) : pendingValue;

  return { members, isLoading, error, dataCount, allMembers };
}
