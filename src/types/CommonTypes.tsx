export type QuestionCategoryType = {
  id: number;
  category: string;
  questions: QuestionType[];
};

export type QuestionType = {
  id: number;
  type: string;
  question: string;
  validations?: [];
};

export type FeedbackType = {
  qId: number;
  value: number | string;
};

export type ValidationErrorType = {
  qId: number;
  errorMessage: string;
};
