
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (typeof document !== "undefined" && typeof navigator !== "undefined" && /Windows/i.test(navigator.userAgent)) {
  document.documentElement.classList.add("platform-windows");
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>,
);
