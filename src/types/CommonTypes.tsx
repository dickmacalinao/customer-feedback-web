export type QuestionCategoryType = {
  id: number;
  category: string;
  questions: QuestionType[];
};

export type QuestionType = {
  id: number;
  type: string;
  question: string;
  required?: boolean;
};

export type FeedbackType = {
  qId: number;
  value: number | string;
};
