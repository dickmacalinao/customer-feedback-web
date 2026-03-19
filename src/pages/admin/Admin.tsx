import { useState } from "react";

import AdminLayout from "../../components/layout/AdminLayout";

import { CategoryProvider } from "../../context/CategoryContext";
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import Categories from "./Categories";
import Settings from "./Settings";

export default function Admin() {
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
      {selectedMenu === "dashboard" && <Dashboard />}
      {selectedMenu === "reports" && <Reports />}
      {selectedMenu === "categories" && (
        <CategoryProvider>
          <Categories />
        </CategoryProvider>
      )}
      {selectedMenu === "settings" && <Settings />}
    </AdminLayout>
  );
}
