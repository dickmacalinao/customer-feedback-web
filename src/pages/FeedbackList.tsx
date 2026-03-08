import { useState, useEffect, useEffectEvent } from "react";

// import Choices from "../components/common/Choices";
// import MultipleChoices from "../components/common/MultipleChoices";
// import Dropdown from "../components/common/Dropdown";
import SubmitButton from "../components/common/SubmitButton";
import { type QuestionCategoryType } from "../types/CommonTypes";
import { staticQuestonCategories } from "../mocks/questions";
import { useFeedback } from "../context/FeedbackContext";
import {
  useValidation,
  useValidationDispatch,
} from "../context/FormValidationContext";

import Category from "./Category";

export default function FeedbackList() {
  const [quetionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
  >([]);
  const feedback = useFeedback();

  const validations = useValidation();
  const validationDispatch = useValidationDispatch();

  const getQuestions = useEffectEvent(() => {
    //TODO: This should be fetch from API
    setQuestionCategories(staticQuestonCategories);
  });

  useEffect(() => {
    console.log("Start synchronization");
    getQuestions();
    return () => {
      console.log("Stop synchronization");
    };
  }, []);

  function submitHandler() {
    // e.preventDefault();
    validationDispatch({
      type: "validate-feedback",
      quetionCategories,
      feedback,
    });
  }

  return (
    <>
      <div className="container">
        <h1>Customer Feedback</h1>
        <p className="description">
          We value your feedback. Please answer the following questions to help
          us improve our services.
        </p>

        <form>
          {quetionCategories.map((category) => (
            <Category category={category} key={category.id} />
          ))}

          {JSON.stringify(validations)}

          {/*
          <Choices
            name="satisfaction"
            label="How satisfied are you with our service?"
            choices={[
              "Very Satisfied",
              "Satisfied",
              "Neutral",
              "Unsatisfied",
              "Very Unsatisfied",
            ]}
          />
          <MultipleChoices
            name="satisfaction"
            label="Which of our services have you used?"
            choices={[
              "Customer Support",
              "Online Ordering",
              "Delivery Service",
              "Technical Assistance",
            ]}
          />
          <Dropdown
            name="rating"
            label="Overall Rating"
            options={[
              { id: 5, value: "5 - Excellent" },
              { id: 4, value: "4 - Good" },
              { id: 3, value: "3 - Average" },
              { id: 2, value: "2 - Poor" },
              { id: 1, value: "1 - Very Poor" },
            ]}
          />
          */}
          <SubmitButton label="Submit Feedback" onSubmit={submitHandler} />
        </form>
      </div>
    </>
  );
}
