import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
