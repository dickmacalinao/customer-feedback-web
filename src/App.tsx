// import { useState } from "react";
import "./App.css";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import FeedbackList from "./components/FeedbackList.tsx";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <FeedbackList />
      <Footer />
    </>
  );
}
