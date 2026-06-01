import { useLocation, useParams, Link } from "react-router-dom";

// import { FaArrowRight } from "react-icons/fa"; // From Font Awesome

type BreadcrumbItem = {
  label: string | number;
  path?: string;
};

export default function BreadCrumbHeader() {
  const location = useLocation();
  const { customerSlug } = useParams();
  const { id } = useParams();

  const regExp = /^\/[a-zA-Z0-9-]*\/categories\/[0-9]*$/;
  let breadCrumb: BreadcrumbItem[] = [];

  if (location.pathname.endsWith("/dashboard")) {
    breadCrumb = [{ label: "Dashboard" }];
  } else if (location.pathname.endsWith("/reports")) {
    breadCrumb = [{ label: "Reports" }];
  } else if (location.pathname.endsWith("/categories")) {
    breadCrumb = [{ label: "Categories" }];
  } else if (regExp.test(location.pathname)) {
    breadCrumb = [
      { label: "Categories", path: "/" + customerSlug + "/categories" },
      { label: id ?? "" },
    ];
  } else if (location.pathname.endsWith("/settings")) {
    breadCrumb = [{ label: "Settings" }];
  } else {
    breadCrumb = [
      {
        label: "Header",
      },
    ];
  }

  return (
    <nav className="breadcrumb">
      {breadCrumb.map((item, index) => (
        <span key={index} className="previous">
          {item.path ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            <span className="current">{item.label}</span>
          )}

          {index < breadCrumb.length - 1 && <>&nbsp;/&nbsp;</>}
        </span>
      ))}
    </nav>
  );
}
