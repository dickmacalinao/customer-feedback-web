import { useState } from "react";
import { NavLink } from "react-router-dom";

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

      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard">
              <MdDashboard />
              {!collapsed && " Dashboard"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports">
              <FaChartBar />
              {!collapsed && " Reports"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">
              <FaQuestionCircle />
              {!collapsed && " Categories"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <FaCog />
              {!collapsed && " Settings"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
