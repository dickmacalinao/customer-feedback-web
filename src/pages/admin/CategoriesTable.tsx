import { useState, useEffect, useEffectEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import DataTable from "../../components/common/DataTable";
import {
  useCategoryForm,
  useCategoryDispatch,
} from "../../context/CategoryContext";
import { fetchCategories } from "../../api/categories";
import { type QuestionCategoryType } from "../../types/CommonTypes";

export type ModifiedQuestionCategoryType = {
  id: number;
  order_seq: number;
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

  const { customerSlug } = useParams();

  const columns = [
    { key: "order_seq", label: "Order" },
    { key: "category", label: "Category" },
  ] as const;

  // Fetch data from api
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(customerSlug),
  });

  const getModifiedCategories = useEffectEvent(() => {
    if (data) {
      let moodifiedData: ModifiedQuestionCategoryType[] = [];
      data.data.map(
        (i: QuestionCategoryType) =>
          (moodifiedData = [
            ...moodifiedData,
            {
              id: i.id,
              order_seq: i.order_seq,
              category: i.category,
              path: "/" + customerSlug + "/categories/" + i.id,
              pathCol: "category",
            },
          ])
      );

      setQuestionCategories(moodifiedData);
    }
  });

  useEffect(() => {
    dispatch({
      type: "update-loading",
      value: isLoading,
    });
    if (!isLoading && !error) {
      getModifiedCategories();
    }

    return () => {
      // console.log("Stop synchronization");
    };
  }, [dispatch, isLoading, error]);

  return (
    <>
      {error && <p className="description error">{error.message}</p>}
      {!error && (
        <DataTable
          data={questionCategories}
          columns={columns}
          allowAction={false}
          loading={categoryForm.loading}
          onView={(row) => alert(`View ${row.category}`)}
          onEdit={(row) => alert(`Edit ${row.category}`)}
          onDelete={(row) => alert(`Delete ${row.category}`)}
        />
      )}
    </>
  );
}
