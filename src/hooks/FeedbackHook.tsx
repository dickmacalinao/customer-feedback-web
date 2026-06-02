import { useMutation } from "@tanstack/react-query";
import { postFeedback } from "../api/feedback";

export function usePostFeedback() {
  return useMutation({
    mutationFn: postFeedback,
  });
}
