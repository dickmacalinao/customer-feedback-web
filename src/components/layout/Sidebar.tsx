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
  onSelect?: (seleccted: string) => void;
};

export default function Sidebar({ onSelect }: SideBarProp) {
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
        <li onClick={() => handleSelect("dashboard")}>
          <MdDashboard />
          {!collapsed && " Dashboard"}
        </li>
        <li onClick={() => handleSelect("reports")}>
          <FaChartBar />
          {!collapsed && " Reports"}
        </li>
        <li onClick={() => handleSelect("questions")}>
          <FaQuestionCircle />
          {!collapsed && " Questions"}
        </li>
        <li onClick={() => handleSelect("settings")}>
          <FaCog />
          {!collapsed && " Settings"}
        </li>
      </ul>
    </div>
  );
}
