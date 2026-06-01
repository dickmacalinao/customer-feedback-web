import { Routes, Route } from "react-router-dom";
import Feedback from "../pages/feedback/Feedback";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Reports from "../pages/admin/Reports";
import Categories from "../pages/admin/Categories";
import Category from "../pages/admin/Category";
import Settings from "../pages/admin/Settings";
import NotFound from "../pages/NotFound";

import AdminLayout from "../components/layout/AdminLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Without layout */}
      <Route path="/:customerSlug/feedback" element={<Feedback />} />

      {/* Login page */}
      <Route path="/:customerSlug/login" element={<Login />} />

      {/* Routes with the persistent layout */}
      <Route element={<AdminLayout />}>
        <Route path="/:customerSlug/dashboard" element={<Dashboard />} />
        <Route path="/:customerSlug/reports" element={<Reports />} />
        <Route path="/:customerSlug/categories" element={<Categories />} />
        <Route path="/:customerSlug/categories/:id" element={<Category />} />
        <Route path="/:customerSlug/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
