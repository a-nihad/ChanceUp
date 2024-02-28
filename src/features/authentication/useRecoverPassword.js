import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { recoverPassword as recoverPasswordApi } from "../../services/apiAuth";

export function useRecoverPassword() {
  const navigate = useNavigate();
  const { mutate: recoverPassword } = useMutation({
    mutationFn: recoverPasswordApi,
    onSuccess: () => {
      toast.success("Check your registered email address");
      navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return recoverPassword;
}
