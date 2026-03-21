import { useState, useEffect, useEffectEvent } from "react";
import { useNavigate } from "react-router-dom";

import DataTable from "../../components/common/DataTable";
import { staticQuestonCategories } from "../../mocks/questions";
import { type QuestionCategoryType } from "../../types/CommonTypes";
import {
  useCategoryForm,
  useCategoryDispatch,
} from "../../context/CategoryContext";

export default function Categories() {
  const navigate = useNavigate();
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
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
      const moodifiedData: QuestionCategoryType[] = [
        ...staticQuestonCategories,
      ];
      moodifiedData.map((category) => console.log(category));
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
      <h2
        onClick={() => {
          navigate("/feedback");
        }}
      >
        Test
      </h2>
    </>
  );
}
