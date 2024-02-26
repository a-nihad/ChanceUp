import { useQuery } from "@tanstack/react-query";
import { getCuttentUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCuttentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
