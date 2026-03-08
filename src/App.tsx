// import { useState } from "react";
import "./App.css";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import AppPage from "./pages/AppPage.tsx";

export default function App() {
  return (
    <>
      <Header />
      <AppPage />
      <Footer />
    </>
  );
}
