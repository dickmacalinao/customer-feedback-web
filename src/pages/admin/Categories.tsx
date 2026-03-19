import { useState, useEffect, useEffectEvent } from "react";

import DataTable from "../../components/common/DataTable";
import { staticQuestonCategories } from "../../mocks/questions";
import { type QuestionCategoryType } from "../../types/CommonTypes";

export default function Categories() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
  >([]);

  const columns = [
    { key: "order", label: "Order" },
    { key: "category", label: "Category" },
  ] as const;

  const getQuestions = useEffectEvent(() => {
    //TODO: This should be fetch from API
    setTimeout(() => {
      setQuestionCategories(staticQuestonCategories);
    }, 500);
  });

  useEffect(() => {
    console.log("Start synchronization");
    getQuestions();
    return () => {
      console.log("Stop synchronization");
    };
  }, []);

  return (
    <DataTable
      data={questionCategories}
      columns={columns}
      allowAction={false}
      onView={(row) => alert(`View ${row.category}`)}
      onEdit={(row) => alert(`Edit ${row.category}`)}
      onDelete={(row) => alert(`Delete ${row.category}`)}
    />
  );
}
