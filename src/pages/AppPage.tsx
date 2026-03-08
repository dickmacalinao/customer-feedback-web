import { FeedbackProvider } from "../context/FeedbackContext";
import FeedbackList from "./FeedbackList.tsx";

export default function AppPage() {
  return (
    <>
      <FeedbackProvider>
        <FeedbackList />
      </FeedbackProvider>
    </>
  );
}
