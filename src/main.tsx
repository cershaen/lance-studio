import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import SpoolPage from "./app/pages/SpoolPage.tsx";
import SpoolTagPage from "./app/pages/SpoolTagPage.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/spool" element={<SpoolPage />} />
      <Route path="/t/:spoolId" element={<SpoolTagPage />} />
    </Routes>
  </BrowserRouter>
);
