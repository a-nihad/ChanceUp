import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => toast.error(err.message),
  });
  return signup;
}
