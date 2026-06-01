import { FeedbackProvider } from "../../context/FeedbackContext.tsx";
import FeedbackList from "./FeedbackList.tsx";
import Footer from "../../components/layout/Footer.tsx";

export default function AppPage() {
  return (
    <>
      <FeedbackProvider>
        <FeedbackList />
      </FeedbackProvider>
      <Footer />
    </>
  );
}
