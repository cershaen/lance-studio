import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./app/App.tsx";
import SpoolPage from "./app/pages/SpoolPage.tsx";
import SpoolTagPage from "./app/pages/SpoolTagPage.tsx";
import { initAnalytics, trackPageView } from "./analytics";
import "./styles/index.css";

initAnalytics();

function PageViews() {
  const location = useLocation();
  useEffect(() => {
    // SpoolTag landings carry a spool ID in the path; report them as one route.
    const path = location.pathname.startsWith("/t/") ? "/t/:spoolId" : location.pathname;
    trackPageView(path);
  }, [location.pathname]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PageViews />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/spool" element={<SpoolPage />} />
      <Route path="/t/:spoolId" element={<SpoolTagPage />} />
    </Routes>
  </BrowserRouter>
);
