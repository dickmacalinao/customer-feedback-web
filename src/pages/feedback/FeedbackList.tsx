import { useState, useEffect, useEffectEvent } from "react";

// import Choices from "../components/common/Choices";
// import MultipleChoices from "../components/common/MultipleChoices";
// import Dropdown from "../components/common/Dropdown";
import SubmitButton from "../../components/common/SubmitButton";
import { type QuestionCategoryType } from "../../types/CommonTypes";
import { staticQuestonCategories } from "../../mocks/questions";
import { useFeedback } from "../../context/FeedbackContext";
import {
  useValidation,
  useValidationDispatch,
} from "../../context/FormValidationContext";

import Category from "./Category";

export default function FeedbackList() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
  >([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [completed, setCompleted] = useState(false);

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

  const updateCurrentPage = useEffectEvent(() => {
    if (feedback && feedback.length > 0) {
      if (currentPage + 1 === questionCategories.length) {
        setCompleted(true);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }
  });

  useEffect(() => {
    if (validations && validations.length === 0) {
      updateCurrentPage();
    }
  }, [validations]);

  function submitHandler() {
    // e.preventDefault();
    validationDispatch({
      type: "validate-feedback",
      questionCategory: questionCategories[currentPage],
      feedback,
    });
  }

  return (
    <>
      <div className="container">
        <h1>Customer Feedback</h1>
        {!completed && (
          <p className="description">
            We value your feedback. Please answer the following questions to
            help us improve our services.
          </p>
        )}
        {completed && (
          <p className="description completed">Thank you for your feedback!</p>
        )}

        {!completed && (
          <form>
            {questionCategories && questionCategories[currentPage] && (
              <Category
                category={questionCategories[currentPage]}
                key={questionCategories[currentPage]?.id}
              />
            )}

            {/*
            {JSON.stringify(feedback)}
            
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
            {questionCategories.length > 1 && (
              <label className="category-pages">
                {currentPage + 1} of {questionCategories.length}
              </label>
            )}
            <SubmitButton
              label={
                currentPage + 1 === questionCategories.length
                  ? "Submit Feedback"
                  : "Continue"
              }
              onSubmit={submitHandler}
            />
          </form>
        )}
      </div>
    </>
  );
}
