import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditUser } from "../../services/apiUsers";
import { toast } from "react-hot-toast";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createEditUser,
    onSuccess: () => {
      toast.success("New User successfully created");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutate };
}
