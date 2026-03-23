import { useState, useEffect, useEffectEvent } from "react";

import DataTable from "../../components/common/DataTable";
import { staticQuestonCategories } from "../../mocks/questions";
import {
  useCategoryForm,
  useCategoryDispatch,
} from "../../context/CategoryContext";

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

  const getCategories = useEffectEvent(() => {
    //TODO: This should be fetch from API
    dispatch({
      type: "update-loading",
      value: true,
    });
    setTimeout(() => {
      let moodifiedData: ModifiedQuestionCategoryType[] = [];
      staticQuestonCategories.map(
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

      // moodifiedData.map((category) => console.log(category));
      setQuestionCategories(moodifiedData);
      dispatch({
        type: "update-loading",
        value: false,
      });
    }, 2000);
  });

  useEffect(() => {
    console.log("Start synchronization");
    getCategories();
    return () => {
      console.log("Stop synchronization");
    };
  }, []);

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
