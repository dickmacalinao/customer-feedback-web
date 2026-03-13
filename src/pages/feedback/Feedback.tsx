import { FeedbackProvider } from "../../context/FeedbackContext.tsx";
import { ValidationProvider } from "../../context/FormValidationContext.tsx";
import FeedbackList from "./FeedbackList.tsx";
import Footer from "../../components/layout/Footer.tsx";

export default function AppPage() {
  return (
    <>
      <FeedbackProvider>
        <ValidationProvider>
          <FeedbackList />
        </ValidationProvider>
      </FeedbackProvider>
      <Footer />
    </>
  );
}
