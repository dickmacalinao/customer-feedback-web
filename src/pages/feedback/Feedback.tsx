import { FeedbackProvider } from "../../context/FeedbackContext.tsx";
import { ValidationProvider } from "../../context/FormValidationContext.tsx";
import FeedbackList from "./FeedbackList.tsx";
import Header from "../../components/common/Header.tsx";
import Footer from "../../components/common/Footer.tsx";

export default function AppPage() {
  return (
    <>
      <Header />
      <FeedbackProvider>
        <ValidationProvider>
          <FeedbackList />
        </ValidationProvider>
      </FeedbackProvider>
      <Footer />
    </>
  );
}
