import { QuestionProvider } from "../../context/QuestionContext";
import CategoryDetail from "./CategoryDetail";

export default function Category() {
  return (
    <QuestionProvider>
      <CategoryDetail />
    </QuestionProvider>
  );
}
