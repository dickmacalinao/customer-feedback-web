import { useState } from "react";

import AdminLayout from "../../components/layout/AdminLayout";
import DashboardWidgets from "./DashboardWidgets";
import Reports from "./Reports";
import Categories from "./Categories";
import Settings from "./Settings";

export default function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const getHedar =
    selectedMenu === "dashboard"
      ? "Dashboard"
      : selectedMenu === "reports"
      ? "Reports"
      : selectedMenu === "categories"
      ? "Categories"
      : selectedMenu === "settings"
      ? "Settings"
      : "";

  const handleSideBarSelect = (selected: string) => {
    console.log(selected);
    setSelectedMenu(selected);
  };

  return (
    <AdminLayout
      header={getHedar}
      selectedMenu={selectedMenu}
      onSideBarSelect={handleSideBarSelect}
    >
      {selectedMenu === "dashboard" && <DashboardWidgets />}
      {selectedMenu === "reports" && <Reports />}
      {selectedMenu === "categories" && <Categories />}
      {selectedMenu === "settings" && <Settings />}
    </AdminLayout>
  );
}
