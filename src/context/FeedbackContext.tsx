/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { type ChildrenProps } from "../types/PropTypes";
import { type FeedbackFormType } from "../types/CommonTypes";
import { validate, getMessage } from "../validators/Validator";
import { postFeedback } from "../api/feedback";

const initialValue: FeedbackFormType = {
  loading: false,
  submitting: false,
  feedback: [],
};

const FeedbackContext = createContext(initialValue);
const FeedbackDispatchContext = createContext(null);

export function FeedbackProvider({ children }: ChildrenProps) {
  const [feedbackForm, dispatch] = useReducer(feedbackReducer, initialValue);

  return (
    <FeedbackContext value={feedbackForm}>
      <FeedbackDispatchContext value={dispatch}>
        {children}
      </FeedbackDispatchContext>
    </FeedbackContext>
  );
}

export function useFeedbackForm() {
  return useContext(FeedbackContext);
}

export function useFeedbackDispatch() {
  return useContext(FeedbackDispatchContext);
}

type ActionProps = {
  type: string;
  id: number;
  value: string | boolean;
  validations: [];
};

function feedbackReducer(feedbackForm: FeedbackFormType, action: ActionProps) {
  switch (action.type) {
    case "add-feedback": {
      if (!feedbackForm.feedback.find((f) => f.qId === action.id)) {
        return {
          loading: feedbackForm.loading,
          submitting: feedbackForm.submitting,
          feedback: [
            ...feedbackForm.feedback,
            {
              qId: action.id,
              value: action.value,
              validations: action.validations,
              validated: false,
            },
          ],
        };
      } else {
        return {
          loading: feedbackForm.loading,
          submitting: feedbackForm.submitting,
          feedback: feedbackForm.feedback.map((f) => {
            if (f.qId === action.id) {
              return {
                qId: action.id,
                value: action.value,
                validations: action.validations,
                validated: false,
              };
            } else {
              return f;
            }
          }),
        };
      }
    }
    case "validate": {
      return {
        loading: feedbackForm.loading,
        submitting: feedbackForm.submitting,
        feedback: feedbackForm.feedback.map((f) => {
          if (f.validations && f.validations.length > 0) {
            const errors: string[] = [];
            f.validations.forEach((v) => {
              if (!validate(v, f.value)) {
                errors.push(getMessage());
              }
            });
            f.errors = errors;
            f.validated = true;
            return f;
          } else {
            f.validated = true;
            return f;
          }
        }),
      };
    }
    case "update-loading": {
      return {
        loading: action.value,
        submitting: feedbackForm.submitting,
        feedback: feedbackForm.feedback,
      };
    }
    case "update-submit": {
      console.log(feedbackForm);

      /*
      const { data, isLoading, error } = useQuery({
        queryKey: ["categories"],
        queryFn: () => postFeedback(customerSlug),
      });
      */

      return {
        loading: feedbackForm.loading,
        submitting: action.value,
        feedback: feedbackForm.feedback,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
