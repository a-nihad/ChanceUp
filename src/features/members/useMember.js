import { useQuery } from "@tanstack/react-query";
import { getMember } from "../../services/apiMembers";

export function useMember(id) {
  const { isLoading, data: member } = useQuery({
    queryKey: ["memberData"],
    queryFn: () => getMember(id),
  });

  return { isLoading, member };
}
