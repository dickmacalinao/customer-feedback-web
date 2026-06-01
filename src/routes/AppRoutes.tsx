import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Redirect from "../pages/Redirect";
import Feedback from "../pages/feedback/Feedback";
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
      <Route path="/login" element={<Login />} />

      <Route path="/:customerSlug/feedback" element={<Redirect />} />
      <Route path="/feedback" element={<Feedback />} />

      <Route path="/:customerSlug/admin" element={<Redirect />} />

      {/* Routes with the persistent layout */}
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
