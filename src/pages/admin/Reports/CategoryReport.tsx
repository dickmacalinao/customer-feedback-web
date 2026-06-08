import React from "react";
import { type QuestionCategoryType } from "../../../types/CommonTypes";
import QuestionReport from "./QuestionReport";

type Props = {
  category: QuestionCategoryType;
};

const CategoryReport: React.FC<Props> = ({ category }) => {
  const questions = category.questions.map((question) => (
    <QuestionReport question={question} />
  ));

  return <>{questions}</>;
};

export default CategoryReport;
