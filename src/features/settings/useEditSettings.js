import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSettings as editSettingsApi } from "../../services/apiSettings";

export function useEditSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSettings } = useMutation({
    mutationFn: editSettingsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editSettings };
}
