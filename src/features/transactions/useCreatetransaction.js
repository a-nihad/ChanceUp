import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransactions } from "../../services/apiTransactions";

export function useCreatetransaction() {
  const queryClient = useQueryClient();

  const { mutate: createTransaction } = useMutation({
    mutationFn: createTransactions,
    onSuccess: () => {
      toast.success("Transaction completed");
      queryClient.invalidateQueries({
        queryKey: ["transaction"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createTransaction };
}
