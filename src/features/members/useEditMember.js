import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditMember } from "../../services/apiMembers";

export function useEditMember() {
  const queryClient = useQueryClient();

  const { mutate: editMember, isPending } = useMutation({
    mutationFn: ({ newMember, id }) => createEditMember(newMember, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["member"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editMember, isPending };
}
