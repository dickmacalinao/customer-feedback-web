import { useState, useEffect, useEffectEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { usePostFeedback } from "../../hooks/FeedbackHook";

import SubmitButton from "../../components/common/SubmitButton";
import { type QuestionCategoryType } from "../../types/CommonTypes";
import {
  useFeedbackForm,
  useFeedbackDispatch,
} from "../../context/FeedbackContext";
import FeedbackListSkeleton from "./FeedbackListSkeleton";
import { fetchCategories } from "../../api/categories";

import Category from "./Category";

export default function FeedbackList() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
  >([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [completed, setCompleted] = useState(false);

  const feedbackForm = useFeedbackForm();
  const dispatch = useFeedbackDispatch();
  const postFeedbackMutation = usePostFeedback();

  const loading = feedbackForm.loading;

  const { customerSlug } = useParams();

  function initiateCurrentFeedback(category: QuestionCategoryType) {
    category.questions.forEach((q) => {
      dispatch({
        type: "add-feedback",
        id: q.id,
        value: q.default_value,
        validations: q.validations,
      });
    });
  }

  const submitFeedback = async () => {
    dispatch({
      type: "update-submit",
      value: true,
    });

    try {
      const result = await postFeedbackMutation.mutateAsync({
        customerSlug,
        payload: feedbackForm.feedback,
      });
      console.log("result", result);
      setCompleted(true);
    } finally {
      dispatch({
        type: "update-submit",
        value: false,
      });
    }
  };

  function submitHandler() {
    dispatch({
      type: "validate",
    });
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

  // Fetch data from api
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(customerSlug),
  });

  const setQuestions = useEffectEvent(() => {
    if (data && data.data && data.data[currentPage]) {
      setQuestionCategories(data.data);
      initiateCurrentFeedback(data.data[currentPage]);
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

  useEffect(() => {
    console.log("Start synchronization");

    dispatch({
      type: "update-loading",
      value: isLoading,
    });
    if (!isLoading && !error) {
      setQuestions();
    }

    return () => {
      console.log("Stop synchronization");
    };
  }, [dispatch, isLoading, error]);

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

        {loading && <FeedbackListSkeleton />}

        {!loading && !completed && questionCategories.length > 0 && (
          <form>
            {questionCategories && questionCategories[currentPage] && (
              <Category
                category={questionCategories[currentPage]}
                key={questionCategories[currentPage]?.id}
              />
            )}

            {/* Page navigation */}
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

        {error && <p className="description error">{error.message}</p>}

        {/*JSON.stringify(feedbackForm)*/}
      </div>
    </>
  );
}
