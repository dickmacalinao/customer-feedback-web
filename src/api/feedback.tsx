export const postFeedback = async (customerSlug: string) => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/api/feedback", {
    method: "POST",
    headers: {
      "customer-slug": customerSlug,
    },
  });
  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
};
