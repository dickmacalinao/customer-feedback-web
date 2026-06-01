export const fetchCategories = async (customerSlug: string) => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + "/api/" + customerSlug + "/categories"
  );
  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
};

export const fetchCategoryById = async (id: number) => {
  const res = await fetch(
    import.meta.env.VITE_API_URL + "/api/categories/" + id
  );
  if (!res.ok) throw new Error("Error fetching categories");
  return res.json();
};
