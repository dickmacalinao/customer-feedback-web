import { createContext, useReducer, useContext } from "react";

import { type ChildrenProps } from "../types/PropTypes";
import {
  type ValidationErrorType,
  type QuestionCategoryType,
  type FeedbackType,
} from "../types/CommonTypes";

const ValidationContext = createContext(null);
const ValidationDispatchContext = createContext(null);

export function ValidationProvider({ children }: ChildrenProps) {
  const [validations, dispatch] = useReducer(validationReducer, []);

  return (
    <ValidationContext value={validations}>
      <ValidationDispatchContext value={dispatch}>
        {children}
      </ValidationDispatchContext>
    </ValidationContext>
  );
}

export function useValidation() {
  return useContext(ValidationContext);
}

export function useValidationDispatch() {
  return useContext(ValidationDispatchContext);
}

type ActionProps = {
  type: string;
  questionCategory: QuestionCategoryType;
  feedback: FeedbackType[];
};

function validationReducer(
  validations: ValidationErrorType[] = [],
  action: ActionProps
) {
  // console.log(action);
  switch (action.type) {
    case "validate-feedback": {
      const validationList = [];
      action.questionCategory.questions.forEach((q) => {
        q.validations?.forEach((v) => {
          validationList.push({ qId: q.id, validation: v });
        });
      });

      const newValidationList = [];
      validationList?.forEach((v) => {
        const feedback = action.feedback.find((f) => f.qId === v.qId);

        // Mandatory valiadtion
        if (v.validation === "required" && (!feedback || !feedback.value)) {
          newValidationList.push({
            qId: v.qId,
            errorMessage: "This is a required field.",
          });
        }
      });

      // console.log("validationList", validationList, newValidationList);

      return [...newValidationList];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
