import { useState, useEffect, useEffectEvent } from "react";

// import TextField from "../components/common/TextField";
// import Switch from "../components/common/Switch";
// import Choices from "../components/common/Choices";
// import MultipleChoices from "../components/common/MultipleChoices";
// import TextArea from "../components/common/TextArea";
// import Dropdown from "../components/common/Dropdown";
import SubmitButton from "../components/common/SubmitButton";
import { type QuestionCategoryType } from "../types/CommonTypes";
import { staticQuestonCategories } from "../mocks/questions";
import { useFeedback } from "../context/FeedbackContext";

import Category from "./Category";

export default function FeedbackList() {
  const [quetionCategories, setQuestionCategories] = useState<
    QuestionCategoryType[]
  >([]);
  const feedback = useFeedback();

  const getQuestions = useEffectEvent(() => {
    //TODO: This should be fetch from API
    setQuestionCategories(staticQuestonCategories);
  });

  useEffect(() => {
    console.log("Start synchronization");
    getQuestions();
    return () => {
      console.log("Stop synchronization");
    };
  }, []);

  function submitHandler() {
    // e.preventDefault();
    console.log("Submit", feedback);
  }

  return (
    <>
      <div className="container">
        <h1>Customer Feedback</h1>
        <p className="description">
          We value your feedback. Please answer the following questions to help
          us improve our services.
        </p>

        <form>
          {quetionCategories.map((category) => (
            <Category category={category} key={category.id} />
          ))}

          {/*
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
          />*/}
          <SubmitButton label="Submit Feedback" onSubmit={submitHandler} />
        </form>
      </div>
    </>
  );
}
