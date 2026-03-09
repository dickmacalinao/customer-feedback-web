import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Feedback from "../pages/feedback/Feedback";
import Dashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
