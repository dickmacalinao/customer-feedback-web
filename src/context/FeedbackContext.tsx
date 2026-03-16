import { createContext, useReducer, useContext } from "react";

import { type ChildrenProps } from "../types/PropTypes";
import { type FeedbackType } from "../types/CommonTypes";

const FeedbackContext = createContext([]);
const FeedbackDispatchContext = createContext(null);

export function FeedbackProvider({ children }: ChildrenProps) {
  const [feedback, dispatch] = useReducer(feedbackReducer, []);

  return (
    <FeedbackContext value={feedback}>
      <FeedbackDispatchContext value={dispatch}>
        {children}
      </FeedbackDispatchContext>
    </FeedbackContext>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}

export function useFeedbackDispatch() {
  return useContext(FeedbackDispatchContext);
}

type ActionProps = {
  type: string;
  id: number;
  value: string;
  validations: [];
};

function feedbackReducer(feedback: FeedbackType[] = [], action: ActionProps) {
  // console.log(action);
  switch (action.type) {
    case "add-feedback": {
      if (!feedback.find((f) => f.qId === action.id)) {
        return [
          ...feedback,
          {
            qId: action.id,
            value: action.value,
            validations: action.validations,
            validated: false,
          },
        ];
      } else {
        return feedback.map((f) => {
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
        });
      }
    }
    case "validate": {
      return feedback.map((f) => {
        if (f.validations && f.validations.length > 0) {
          const errors: string[] = [];
          f.validations.forEach((v) => {
            // Mandatory valiadtion
            if (v === "required" && (!f || !f.value)) {
              errors.push("This is a required field.");
            }
          });
          f.errors = errors;
          f.validated = true;
          return f;
        } else {
          f.validated = true;
          return f;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
