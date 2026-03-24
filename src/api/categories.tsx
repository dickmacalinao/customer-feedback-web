export const fetchCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  if (!res.ok) throw new Error("Error fetching users");
  return res.json();
};
