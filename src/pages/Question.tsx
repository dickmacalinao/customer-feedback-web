import { type QuestionType } from "../types/CommonTypes";

import Switch from "../components/common/Switch";
import TextField from "../components/common/TextField";
import SlideRating from "../components/common/SlideRating";

type QuestionTypeProps = {
  question: QuestionType;
};

export default function Question({ question }: QuestionTypeProps) {
  return (
    <>
      {question.type === "yesNo" && (
        <Switch name={question.question} label={question.question} />
      )}

      {question.type === "text" && (
        <TextField
          name={question.question}
          label={question.question}
          description="Enter your answer"
        />
      )}

      {question.type === "rate" && (
        <SlideRating id={question.question} label={question.question} />
      )}
    </>
  );
}
