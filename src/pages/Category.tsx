import { useEffect } from "react";

import { type QuestionCategoryType } from "../types/CommonTypes";
import Question from "./Question";

type QuestionCategoryTypeProps = {
  category: QuestionCategoryType;
};

export default function Category({ category }: QuestionCategoryTypeProps) {
  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <>
      <h2>{category.category}</h2>
      {category.questions.map((question) => (
        <Question question={question} />
      ))}
    </>
  );
}
