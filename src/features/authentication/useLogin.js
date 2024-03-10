import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const queryClint = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (admin) => {
      queryClint.setQueryData(["admin"], admin.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      console.log("Error", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isPending };
}
