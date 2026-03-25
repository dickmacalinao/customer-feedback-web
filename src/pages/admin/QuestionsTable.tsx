// import React, { useState, useEffect, useEffectEvent } from "react";
// import { useQuery } from "@tanstack/react-query";

import DataTable from "../../components/common/DataTable";
import { useQuestionForm } from "../../context/QuestionContext";
// import { fetchCategories } from "../../api/categories";
import { type QuestionType } from "../../types/CommonTypes";
import QuestionTypeBadge from "../../components/common/badge/QuestionTypeBadge";

export type ModifiedQuestionType = {
  id: number;
  type: string;
  question: string;
  typeBadge: object;
  required: boolean | undefined;
  default?: string | number;
};

type QuestionProps = {
  questions?: QuestionType[];
};

export default function QuestionsTable({ questions }: QuestionProps) {
  const categoryForm = useQuestionForm();

  const columns = [
    { key: "id", label: "Id" },
    { key: "question", label: "Question" },
    { key: "typeBadge", label: "Type" },
    { key: "required", label: "Required" },
    { key: "default", label: "Default Value" },
  ] as const;

  let modifiedQuestionsData: ModifiedQuestionType[] = [];
  if (questions) {
    questions.forEach((q) => {
      modifiedQuestionsData = [
        ...modifiedQuestionsData,
        {
          id: q.id,
          type: q.type,
          question: q.question,
          typeBadge: <QuestionTypeBadge type={q.type} />,
          required: q.validations?.includes("required") ?? false,
          default: q.default ?? "",
        },
      ];
    });
  }

  console.log(modifiedQuestionsData);
  return (
    <DataTable
      data={modifiedQuestionsData}
      columns={columns}
      pageSize={10}
      allowAction={false}
      loading={categoryForm.loading}
    />
  );
}

// export default QuestionsTable:
