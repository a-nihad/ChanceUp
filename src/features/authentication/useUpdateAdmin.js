import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateAdmin as updateAdminApi } from "../../services/apiAuth";

export function useUpdateAdmin() {
  const quaryClint = useQueryClient();

  const { mutate: updateAdmin, isPending: isUpdating } = useMutation({
    mutationFn: updateAdminApi,
    onSuccess: (data) => {
      toast.success("Admin account successfully updated");
      quaryClint.setQueryData(["admin"], data);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateAdmin, isUpdating };
}
