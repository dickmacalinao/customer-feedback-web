import TextField from "./common/TextField";
import Switch from "./common/Switch";
import Choices from "./common/Choices";
import MultipleChoices from "./common/MultipleChoices";
import TextArea from "./common/TextArea";
import Dropdown from "./common/Dropdown";
import SubmitButton from "./common/SubmitButton";

export default function FeedbackList() {
  return (
    <>
      <div className="container">
        <h1>Customer Feedback</h1>
        <p className="description">
          We value your feedback. Please answer the following questions to help
          us improve our services.
        </p>

        <form>
          <TextField
            name="fullName"
            label="Full Name"
            description="Enter your full name"
          />
          <TextField
            name="email"
            label="Email"
            description="Enter your email"
          />

          <Choices
            name="satisfaction"
            label="How satisfied are you with our service?"
            choices={[
              "Very Satisfied",
              "Satisfied",
              "Neutral",
              "Unsatisfied",
              "Very Unsatisfied",
            ]}
          />
          <Switch
            name="recommend"
            label="Would you recommend our company to others?"
          />
          <MultipleChoices
            name="satisfaction"
            label="Which of our services have you used?"
            choices={[
              "Customer Support",
              "Online Ordering",
              "Delivery Service",
              "Technical Assistance",
            ]}
          />
          <TextArea
            name="improve"
            label="What can we improve?"
            placeholder="Share your suggestions..."
          />

          <Dropdown
            name="rating"
            label="Overall Rating"
            options={[
              { id: 5, value: "5 - Excellent" },
              { id: 4, value: "4 - Good" },
              { id: 3, value: "3 - Average" },
              { id: 2, value: "2 - Poor" },
              { id: 1, value: "1 - Very Poor" },
            ]}
          />
          <SubmitButton label="Submit Feedback" />
        </form>
      </div>
    </>
  );
}
