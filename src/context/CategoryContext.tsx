/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from "react";

import { type ChildrenProps } from "../types/PropTypes";
import { type CategoryFormType } from "../types/CommonTypes";

const initialValue: CategoryFormType = {
  loading: false,
  submitting: false,
  categories: [],
};

const CategoryContext = createContext(initialValue);
const CategoryDispatchContext = createContext(null);

export function CategoryProvider({ children }: ChildrenProps) {
  const [categoryForm, dispatch] = useReducer(categoryReducer, initialValue);

  return (
    <CategoryContext value={categoryForm}>
      <CategoryDispatchContext value={dispatch}>
        {children}
      </CategoryDispatchContext>
    </CategoryContext>
  );
}

export function useCategoryForm() {
  return useContext(CategoryContext);
}

export function useCategoryDispatch() {
  return useContext(CategoryDispatchContext);
}

type ActionProps = {
  type: string;
  value: string | boolean;
};

function categoryReducer(categoryForm: CategoryFormType, action: ActionProps) {
  switch (action.type) {
    case "update-loading": {
      return {
        loading: action.value,
        submitting: categoryForm.submitting,
        categories: categoryForm.categories,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
