import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";
import { useSearchParams } from "react-router-dom";

export function useTransactions() {
  const [searchParams] = useSearchParams();

  // Filtering
  const filterValue = searchParams.get("payment_type");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "payment_type", value: filterValue };

  const { data, isLoading, error } = useQuery({
    queryKey: ["transaction", filter],
    queryFn: () => getTransactions({ filter }),
  });

  // Searching
  const search = searchParams.get("search");
  const transactions = !search
    ? data || {}
    : data.filter((value) => value.members.name.toLowerCase().includes(search));

  return { transactions, isLoading, error };
}
