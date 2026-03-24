import { useState, useEffect, useEffectEvent } from "react";
import { useQuery } from "@tanstack/react-query";

import DataTable from "../../components/common/DataTable";
import {
  useCategoryForm,
  useCategoryDispatch,
} from "../../context/CategoryContext";
import { fetchCategories } from "../../api/categories";

export type ModifiedQuestionCategoryType = {
  id: number;
  order: number;
  category: string;
  path: string;
  pathCol: string;
};

export default function CategoriesTable() {
  const [questionCategories, setQuestionCategories] = useState<
    ModifiedQuestionCategoryType[]
  >([]);

  const categoryForm = useCategoryForm();
  const dispatch = useCategoryDispatch();

  const columns = [
    { key: "order", label: "Order" },
    { key: "category", label: "Category" },
  ] as const;

  // Fetch data from api
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchCategories,
  });

  const getModifiedCategories = useEffectEvent(() => {
    if (data) {
      let moodifiedData: ModifiedQuestionCategoryType[] = [];
      data.data.map(
        (i) =>
          (moodifiedData = [
            ...moodifiedData,
            {
              id: i.id,
              order: i.order,
              category: i.category,
              path: "/categories/" + i.id,
              pathCol: "category",
            },
          ])
      );

      setQuestionCategories(moodifiedData);
    }
  });

  useEffect(() => {
    console.log("Start synchronization");
    dispatch({
      type: "update-loading",
      value: isLoading,
    });
    if (!isLoading && !error) {
      getModifiedCategories();
    }

    return () => {
      console.log("Stop synchronization");
    };
  }, [dispatch, isLoading, error]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <DataTable
        data={questionCategories}
        columns={columns}
        allowAction={false}
        loading={categoryForm.loading}
        onView={(row) => alert(`View ${row.category}`)}
        onEdit={(row) => alert(`Edit ${row.category}`)}
        onDelete={(row) => alert(`Delete ${row.category}`)}
      />
    </>
  );
}
