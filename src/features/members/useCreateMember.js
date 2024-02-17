import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditMember } from "../../services/apiMembers";
import { toast } from "react-hot-toast";

export function useCreateMember() {
  const queryClient = useQueryClient();

  const { mutate: createMember } = useMutation({
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

  return { createMember };
}
