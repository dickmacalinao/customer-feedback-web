import { type QuestionType } from "../types/CommonTypes";

import Switch from "../components/common/Switch";
import TextField from "../components/common/TextField";
import SlideRating from "../components/common/SlideRating";
import SmileyRating from "../components/common/SmileyRating";

import { useFeedback, useFeedbackDispatch } from "../context/FeedbackContext";
import { useValidation } from "../context/FormValidationContext";

type QuestionTypeProps = {
  question: QuestionType;
};

export default function Question({ question }: QuestionTypeProps) {
  const feedback = useFeedback();
  const dispatch = useFeedbackDispatch();

  const validations = useValidation();

  const feedbackAnswer = feedback.find((f) => f.qId === question.id);
  const errors = validations
    .filter((v) => v.qId === question.id)
    .map((v) => {
      return v.errorMessage;
    });
  // console.log(question, feedbackAnswer, errors);

  return (
    <>
      {question.type === "text" && (
        <TextField
          name={question.question}
          label={question.question}
          description="Enter your answer"
          value={feedbackAnswer?.value}
          errors={errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
            });
          }}
        />
      )}
      {question.type === "yesNo" && (
        <Switch
          name={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          errors={errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
            });
          }}
        />
      )}
      {question.type === "slidingRate" && (
        <SlideRating
          id={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          defaultValue={question.default}
          errors={errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
            });
          }}
        />
      )}

      {question.type === "smileyRate" && (
        <SmileyRating
          name={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          errors={errors}
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
