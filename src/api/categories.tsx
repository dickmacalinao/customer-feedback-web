// const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCategories = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL + "/api/categories");
  if (!res.ok) throw new Error("Error fetching users");
  return res.json();
};
