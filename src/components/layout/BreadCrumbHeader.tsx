import { useLocation } from "react-router-dom";

export default function BreadCrumbHeader() {
  const location = useLocation();

  const header =
    location.pathname === "/dashboard"
      ? "Dashboard"
      : location.pathname === "/reports"
      ? "Reports"
      : location.pathname === "/categories"
      ? "Categories"
      : location.pathname === "/settings"
      ? "Settings"
      : "Header";

  return (
    <div className="header">
      <h2>{header}</h2>
    </div>
  );
}
