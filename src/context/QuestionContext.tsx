/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from "react";

import { type ChildrenProps } from "../types/PropTypes";
import { type QuestionFormType } from "../types/CommonTypes";

const initialValue: QuestionFormType = {
  loading: false,
  submitting: false,
  questions: [],
};

const QuestionContext = createContext(initialValue);
const QuestionDispatchContext = createContext(null);

export function QuestionProvider({ children }: ChildrenProps) {
  const [questionForm, dispatch] = useReducer(questionReducer, initialValue);

  return (
    <QuestionContext value={questionForm}>
      <QuestionDispatchContext value={dispatch}>
        {children}
      </QuestionDispatchContext>
    </QuestionContext>
  );
}

export function useQuestionForm() {
  return useContext(QuestionContext);
}

export function useQuestionDispatch() {
  return useContext(QuestionDispatchContext);
}

type ActionProps = {
  type: string;
  value: string | boolean;
};

function questionReducer(questionForm: QuestionFormType, action: ActionProps) {
  switch (action.type) {
    case "update-loading": {
      return {
        loading: action.value,
        submitting: questionForm.submitting,
        questions: questionForm.questions,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
