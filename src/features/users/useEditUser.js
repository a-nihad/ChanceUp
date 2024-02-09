import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditUser } from "../../services/apiUsers";
import { toast } from "react-hot-toast";

export function useEditUser() {
  const queryClient = useQueryClient();

  const { mutate: editingUser } = useMutation({
    mutationFn: ({ newUser, id }) => createEditUser(newUser, id),
    onSuccess: () => {
      toast.success("User successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editingUser };
}
