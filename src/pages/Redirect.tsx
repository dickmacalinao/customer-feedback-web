import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const [cookies, setCookie] = useCookies(["customer_token"]);
  const location = useLocation();
  const navigate = useNavigate();
  const { customerSlug } = useParams();

  useEffect(() => {
    //TODO: Validate if customerSlug is valid fromm api

    // Set customerSlug to customer_token cookie
    setCookie("customer_token", customerSlug, {
      path: location.pathname,
      maxAge: 86400, // 1 day
      secure: true, // Only sent over HTTPS
      sameSite: "strict",
    });

    // Redirect to the next path
    // e.g. /feedback or  dashboard - for admin
    if (location.pathname.endsWith("/feedback")) {
      navigate("/feedback");
    } else if (location.pathname.endsWith("/admin")) {
      navigate("/dashboard");
    }
  });

  return (
    <>
      <h2>Invalid path: {location.pathname}</h2>
    </>
  );
}
