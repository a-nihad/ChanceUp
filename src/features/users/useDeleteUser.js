import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import { toast } from "react-hot-toast";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("User successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteUser, isDeleting };
}
