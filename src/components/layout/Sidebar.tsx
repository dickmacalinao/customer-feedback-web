import { useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaQuestionCircle,
  FaCog,
  FaChartBar,
} from "react-icons/fa"; // From Font Awesome
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="arrow">
        {collapsed && <FaArrowRight onClick={toggleSidebar} />}
        {!collapsed && <FaArrowLeft onClick={toggleSidebar} />}
      </div>

      <ul className="menu">
        <li>
          <MdDashboard />
          {!collapsed && " Dashboard"}
        </li>
        <li>
          <FaChartBar />
          {!collapsed && " Reports"}
        </li>
        <li>
          <FaQuestionCircle />
          {!collapsed && " Questions"}
        </li>
        <li>
          <FaCog />
          {!collapsed && " Settings"}
        </li>
      </ul>
    </div>
  );
}
