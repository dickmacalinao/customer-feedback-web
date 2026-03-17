import { useState, useEffect, useEffectEvent } from "react";

import SubmitButton from "../../components/common/SubmitButton";
import { type QuestionCategoryType } from "../../types/CommonTypes";
import { staticQuestonCategories } from "../../mocks/questions";
import {
  useFeedbackForm,
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
  const [currentPage, setCurrentPage] = useState(0);
  const [completed, setCompleted] = useState(false);

  const feedbackForm = useFeedbackForm();
  const dispatch = useFeedbackDispatch();

  const loading = feedbackForm?.loading;

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
    dispatch({
      type: "update-loading",
      value: true,
    });
    setTimeout(() => {
      setQuestionCategories(staticQuestonCategories);
      if (staticQuestonCategories && staticQuestonCategories[currentPage]) {
        initiateCurrentFeedback(staticQuestonCategories[currentPage]);
      }
      dispatch({
        type: "update-loading",
        value: false,
      });
    }, 2000);
  });

  useEffect(() => {
    console.log("Start synchronization");
    getQuestions();
    return () => {
      console.log("Stop synchronization");
    };
  }, []);

  function submitFeedback() {
    dispatch({
      type: "update-submit",
      value: true,
    });
    setTimeout(() => {
      setCompleted(true);
      dispatch({
        type: "update-submit",
        value: false,
      });
    }, 10000);
  }

  const updateCurrentPage = useEffectEvent(() => {
    if (feedbackForm.feedback && feedbackForm.feedback.length > 0) {
      if (currentPage + 1 === questionCategories.length) {
        submitFeedback();
      } else {
        setCurrentPage(currentPage + 1);
        initiateCurrentFeedback(questionCategories[currentPage + 1]);
      }
    }
  });

  useEffect(() => {
    const unValidatedCount = feedbackForm.feedback
      ? feedbackForm.feedback.filter((f) => !f.validated).length
      : 0;
    const errorCount = feedbackForm.feedback
      ? feedbackForm.feedback.filter((f) => f.errors && f.errors.length > 0)
          .length
      : 0;
    if (unValidatedCount === 0 && errorCount === 0) {
      updateCurrentPage();
    }
  }, [feedbackForm.feedback]);

  function submitHandler() {
    dispatch({
      type: "validate",
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

        {!loading && !completed && questionCategories.length > 0 && (
          <form>
            {questionCategories && questionCategories[currentPage] && (
              <Category
                category={questionCategories[currentPage]}
                key={questionCategories[currentPage]?.id}
              />
            )}

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
              disabled={feedbackForm.loading || feedbackForm.submitting}
              loading={feedbackForm.loading || feedbackForm.submitting}
              onSubmit={submitHandler}
            />
          </form>
        )}

        {!loading && completed && (
          <p className="description completed">Thank you for your feedback!</p>
        )}
        {JSON.stringify(feedbackForm)}
      </div>
    </>
  );
}
