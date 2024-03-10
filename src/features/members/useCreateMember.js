import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditMember } from "../../services/apiMembers";

export function useCreateMember() {
  const queryClient = useQueryClient();

  const { mutate: createMember, isPending } = useMutation({
    mutationFn: createEditMember,
    onSuccess: () => {
      toast.success("New Member successfully created");
      queryClient.invalidateQueries({
        queryKey: ["member"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createMember, isPending };
}
