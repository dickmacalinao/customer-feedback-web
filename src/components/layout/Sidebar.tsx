import { useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaQuestionCircle,
  FaCog,
  FaChartBar,
} from "react-icons/fa"; // From Font Awesome
import { MdDashboard } from "react-icons/md";

type SideBarProp = {
  selectedMenu?: string;
  onSelect?: (seleccted: string) => void;
};

export default function Sidebar({ selectedMenu, onSelect }: SideBarProp) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSelect = (selected: string) => {
    if (onSelect) {
      onSelect(selected);
    }
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="arrow">
        {collapsed && <FaArrowRight onClick={toggleSidebar} />}
        {!collapsed && <FaArrowLeft onClick={toggleSidebar} />}
      </div>

      <ul className="menu">
        <li
          onClick={() => handleSelect("dashboard")}
          className={selectedMenu === "dashboard" ? "active" : ""}
        >
          <MdDashboard />
          {!collapsed && " Dashboard"}
        </li>
        <li
          onClick={() => handleSelect("reports")}
          className={selectedMenu === "reports" ? "active" : ""}
        >
          <FaChartBar />
          {!collapsed && " Reports"}
        </li>
        <li
          onClick={() => handleSelect("categories")}
          className={selectedMenu === "categories" ? "active" : ""}
        >
          <FaQuestionCircle />
          {!collapsed && " Categories"}
        </li>
        <li
          onClick={() => handleSelect("settings")}
          className={selectedMenu === "settings" ? "active" : ""}
        >
          <FaCog />
          {!collapsed && " Settings"}
        </li>
      </ul>
    </div>
  );
}
