import { type FeedbackType } from "../types/CommonTypes";

type PostFeedbackParam = {
  customerSlug: string;
  payload: FeedbackType[];
};

export const postFeedback = async (param: PostFeedbackParam) => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/api/feedback", {
    method: "POST",
    headers: {
      "customer-slug": param.customerSlug,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param.payload),
  });
  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
};
