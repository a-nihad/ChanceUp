import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditUser } from "../../services/apiUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createEditUser,
    onSuccess: () => {
      alert("New User successfully created");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: (err) => {
      alert(err.message);
    },
  });

  return { mutate };
}
