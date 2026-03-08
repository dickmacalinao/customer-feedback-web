import { FeedbackProvider } from "../context/FeedbackContext";
import { ValidationProvider } from "../context/FormValidationContext";
import FeedbackList from "./FeedbackList.tsx";

export default function AppPage() {
  return (
    <>
      <FeedbackProvider>
        <ValidationProvider>
          <FeedbackList />
        </ValidationProvider>
      </FeedbackProvider>
    </>
  );
}
