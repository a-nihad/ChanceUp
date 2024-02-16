import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSettings as editSettingsApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export function useEditSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSettings } = useMutation({
    mutationFn: editSettingsApi,
    onSuccess: () => {
      toast.success("Settings successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {editSettings};
}
