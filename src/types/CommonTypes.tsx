export type QuestionCategoryType = {
  id: number;
  order_seq: number;
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
  value: number | string | null | undefined;
  validations?: string[];
  errors?: string[];
  validated?: boolean;
};

export type FeedbackFormType = {
  loading: boolean;
  submitting: boolean;
  feedback: FeedbackType[];
};

export type CategoryFormType = {
  loading: boolean;
  submitting: boolean;
  categories: QuestionCategoryType[];
};

export type QuestionFormType = {
  loading: boolean;
  submitting: boolean;
  questions: QuestionType[];
};

export type ValidationErrorType = {
  qId: number;
  errorMessage: string;
};
