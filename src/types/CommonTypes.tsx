export type QuestionCategoryType = {
  id: number;
  category: string;
  questions: QuestionType[];
};

export type QuestionType = {
  id: number;
  type: string;
  question: string;
  default: string | number;
  validations?: string[];
};

export type FeedbackType = {
  qId: number;
  value: number | string;
  validations?: string[];
  errors?: string[];
  validated?: boolean;
};

export type ValidationErrorType = {
  qId: number;
  errorMessage: string;
};
