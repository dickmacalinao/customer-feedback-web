import { CategoryProvider } from "../../context/CategoryContext";

import CategoriesTable from "./CategoriesTable";

export default function Categories() {
  return (
    <CategoryProvider>
      <CategoriesTable />
    </CategoryProvider>
  );
}
