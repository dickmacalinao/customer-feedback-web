import Sidebar from "./Sidebar";
import BreadCrumbHeader from "./BreadCrumbHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <BreadCrumbHeader />
        <div className="content">
          <Outlet /> {/* 👈 Page content renders here */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
