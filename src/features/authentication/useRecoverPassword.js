import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { recoverPassword as recoverPasswordApi } from "../../services/apiAuth";

export function useRecoverPassword() {
  const { mutate: recoverPassword, isPending } = useMutation({
    mutationFn: recoverPasswordApi,
    onSuccess: () => toast.success("Check your registered email address"),
    onError: (err) => toast.error(err.message),
  });
  return { recoverPassword, isPending };
}
