import { useQuery } from "@tanstack/react-query";
import { getAdmin } from "../../services/apiAuth";

export function useAdmin() {
  const { data: admin, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: getAdmin,
  });

  return { admin, isLoading, isAuthenticated: admin?.role === "authenticated" };
}
