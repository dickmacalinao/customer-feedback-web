import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Feedback from "../pages/feedback/Feedback";
import Dashboard from "../pages/admin/Dashboard";
import Reports from "../pages/admin/Reports";
import Categories from "../pages/admin/Categories";
import Settings from "../pages/admin/Settings";
import NotFound from "../pages/NotFound";

import AdminLayout from "../components/layout/AdminLayout";

import { CategoryProvider } from "../context/CategoryContext";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Without layout */}
      <Route path="/login" element={<Login />} />

      <Route path="/feedback" element={<Feedback />} />

      {/* Routes WITH the persistent layout */}
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route
          path="/categories"
          element={
            <CategoryProvider>
              <Categories />
            </CategoryProvider>
          }
        />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* 
      <Route path="/admin" element={<Admin />} />
      */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
