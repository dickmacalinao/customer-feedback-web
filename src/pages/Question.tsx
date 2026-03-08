import { type QuestionType } from "../types/CommonTypes";

import Switch from "../components/common/Switch";
import TextField from "../components/common/TextField";
import SlideRating from "../components/common/SlideRating";
import { useFeedback, useFeedbackDispatch } from "../context/FeedbackContext";

type QuestionTypeProps = {
  question: QuestionType;
};

export default function Question({
  question,
}: QuestionTypeProps) {
  const feedback = useFeedback();
  const dispatch = useFeedbackDispatch();

  const feedbackAnswer = feedback.find((f) => f.qId === question.id);
  // console.log("feedbackAnswer", feedbackAnswer);
  // const feedbackAnswer = { value: "yes" };
  console.log(question, feedbackAnswer);

  return (
    <>
      // Text Field question
      {question.type === "text" && (
        <TextField
          name={question.question}
          label={question.question}
          description="Enter your answer"
          value={feedbackAnswer?.value}
          required={question.required}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
            });
          }}
        />
      )}
      // Yes-No switch question
      {question.type === "yesNo" && (
        <Switch
          name={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
            });
          }}
        />
      )}
      // Sliding Rate question
      {question.type === "slidingRate" && (
        <SlideRating
          id={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
            });
          }}
        />
      )}
    </>
  );
}
