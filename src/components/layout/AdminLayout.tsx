import Sidebar from "./Sidebar";
import BreadCrumbHeader from "./BreadCrumbHeader";
import Footer from "./Footer";

type LayoutProps = {
  header?: string;
  selectedMenu?: string;
  onSideBarSelect?: (seleccted: string) => void;
  children: React.ReactNode;
};

export default function Layout({
  header,
  selectedMenu,
  onSideBarSelect,
  children,
}: LayoutProps) {
  return (
    <div className="app-container">
      <Sidebar selectedMenu={selectedMenu} onSelect={onSideBarSelect} />
      <div className="main-section">
        <BreadCrumbHeader header={header} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
