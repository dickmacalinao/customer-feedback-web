import { createContext, useReducer, useContext } from "react";

import { type ChildrenProps } from "../types/PropTypes";
import { type FeedbackType } from "../types/CommonTypes";

const FeedbackContext = createContext(null);
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
          },
        ];
      } else {
        return feedback.map((f) => {
          if (f.qId === action.id) {
            return { qId: action.id, value: action.value };
          } else {
            return f;
          }
        });
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
