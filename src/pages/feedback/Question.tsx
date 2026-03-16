import { type QuestionType } from "../../types/CommonTypes";

import Switch from "../../components/common/Switch";
import TextField from "../../components/common/TextField";
import TextArea from "../../components/common/TextArea";
import SlideRating from "../../components/common/SlideRating";
import SmileyRating from "../../components/common/SmileyRating";

import {
  useFeedback,
  useFeedbackDispatch,
} from "../../context/FeedbackContext";

type QuestionTypeProps = {
  question: QuestionType;
};

export default function Question({ question }: QuestionTypeProps) {
  const feedback = useFeedback();
  const dispatch = useFeedbackDispatch();

  const feedbackAnswer = feedback?.find((f) => f.qId === question.id);

  return (
    <>
      {question.type === "text" && (
        <TextField
          name={question.question}
          label={question.question}
          description="Enter your answer"
          value={feedbackAnswer?.value}
          errors={feedbackAnswer?.errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
              validations: question.validations,
            });
          }}
        />
      )}

      {question.type === "textarea" && (
        <TextArea
          name={question.question}
          label={question.question}
          description="Enter your answer"
          value={feedbackAnswer?.value}
          errors={feedbackAnswer?.errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
              validations: question.validations,
            });
          }}
        />
      )}
      {question.type === "yesNo" && (
        <Switch
          name={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          errors={feedbackAnswer?.errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
              validations: question.validations,
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
          errors={feedbackAnswer?.errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
              validations: question.validations,
            });
          }}
        />
      )}

      {question.type === "smileyRate" && (
        <SmileyRating
          name={question.question}
          label={question.question}
          value={feedbackAnswer?.value}
          errors={feedbackAnswer?.errors}
          onChange={(value) => {
            dispatch({
              type: "add-feedback",
              id: question.id,
              value,
              validations: question.validations,
            });
          }}
        />
      )}
    </>
  );
}
