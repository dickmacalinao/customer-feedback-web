import { useState, useEffect, useEffectEvent } from "react";

// import Choices from "../components/common/Choices";
// import MultipleChoices from "../components/common/MultipleChoices";
// import Dropdown from "../components/common/Dropdown";
import SubmitButton from "../../components/common/SubmitButton";
import { type QuestionCategoryType } from "../../types/CommonTypes";
import { staticQuestonCategories } from "../../mocks/questions";
import {
  useFeedback,
  useFeedbackDispatch,
} from "../../context/FeedbackContext";
import Skeleton from "../../components/skeleton/Skeleton";
import TextAreaSkeleton from "../../components/skeleton/TextAreaSkeleton";
import SwitchSkeleton from "../../components/skeleton/SwitchSkeleton";
import SlideRatingSkeleton from "../../components/skeleton/SlideRatingSkeleton";
import SmileyRatingSkeleton from "../../components/skeleton/SmileyRatingSkeleton";

import Category from "./Category";

export default function FeedbackList() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [completed, setCompleted] = useState(false);

  const feedback = useFeedback();
  const dispatch = useFeedbackDispatch();

  function initiateCurrentFeedback(category: QuestionCategoryType) {
    // console.log("currentPage", currentPage, category);
    category.questions.forEach((q) => {
      dispatch({
        type: "add-feedback",
        id: q.id,
        value: q.default,
        validations: q.validations,
      });
    });
  }

  const getQuestions = useEffectEvent(() => {
    //TODO: This should be fetch from API
    setLoading(true);
    setTimeout(() => {
      setQuestionCategories(staticQuestonCategories);
      if (staticQuestonCategories && staticQuestonCategories[currentPage]) {
        initiateCurrentFeedback(staticQuestonCategories[currentPage]);
      }
      setLoading(false);
    }, 5000);
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
        initiateCurrentFeedback(questionCategories[currentPage + 1]);
      }
    }
  });

  useEffect(() => {
    const unValidatedCount = feedback
      ? feedback.filter((f) => !f.validated).length
      : 0;
    const errorCount = feedback
      ? feedback.filter((f) => f.errors && f.errors.length > 0).length
      : 0;
    // console.log("unValidatedCount,errorCount", unValidatedCount, errorCount);

    if (unValidatedCount === 0 && errorCount === 0) {
      updateCurrentPage();
    }
  }, [feedback]);

  function submitHandler() {
    // e.preventDefault();
    dispatch({
      type: "validate",
    });
    // console.log(feedback.filter((f) => f.errors && f.errors.length > 0).length);
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

        {loading && (
          <>
            <div style={{ marginBottom: 20 }}>
              <Skeleton width="60%" height="25px" />
            </div>

            <SlideRatingSkeleton />
            <SwitchSkeleton />
            <SmileyRatingSkeleton />
            <TextAreaSkeleton />
          </>
        )}

        {!loading && !completed && (
          <form>
            {questionCategories && questionCategories[currentPage] && (
              <Category
                category={questionCategories[currentPage]}
                key={questionCategories[currentPage]?.id}
              />
            )}

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

        {!loading && completed && (
          <p className="description completed">Thank you for your feedback!</p>
        )}
        {JSON.stringify(feedback)}
      </div>
    </>
  );
}
