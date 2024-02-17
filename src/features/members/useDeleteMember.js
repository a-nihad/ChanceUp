import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMember as deleteMemberApi } from "../../services/apiMembers";
import { toast } from "react-hot-toast";

export function useDeleteMember() {
  const queryClient = useQueryClient();
  const { mutate: deleteMember } = useMutation({
    mutationFn: deleteMemberApi,
    onSuccess: () => {
      toast.success("Member successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["member"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteMember };
}
