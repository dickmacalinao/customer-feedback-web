export const fetchCategories = async (customerSlug: string) => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/api/categories", {
    method: "GET",
    headers: {
      "customer-slug": customerSlug,
    },
  });
  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
};

export const fetchCategoryById = async (customerSlug: string, id: number) => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + "/api/categories/" + id,
    {
      method: "GET",
      headers: {
        "customer-slug": customerSlug,
      },
    }
  );
  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
};
