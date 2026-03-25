import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
  QuestionProvider,
  useQuestionDispatch,
} from "../../context/QuestionContext";
import { fetchCategoryById } from "../../api/categories";
import QuestionsTable from "./QuestionsTable";

export default function CategoryDetail() {
  const { id } = useParams();
  const dispatch = useQuestionDispatch();

  // console.log(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetchCategoryById(parseInt(id)),
    enabled: !!id, // 👈 prevents call if id is undefined
  });

  // console.log(data, isLoading, error);

  dispatch({
    type: "update-loading",
    value: isLoading,
  });

  return (
    <QuestionProvider>
      <h3>{data?.data?.category}</h3>
      <QuestionsTable questions={data?.data?.questions} />
    </QuestionProvider>
  );
}
