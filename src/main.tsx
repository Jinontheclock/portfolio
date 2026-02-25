
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare global {
  interface Window {
    __portfolioWindowsScaleSync?: boolean;
  }
}

if (
  typeof window !== "undefined" &&
  typeof document !== "undefined" &&
  typeof navigator !== "undefined" &&
  /Windows/i.test(navigator.userAgent)
) {
  const root = document.documentElement;
  root.classList.add("platform-windows");

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

  const getBaseWidth = () => {
    const baseWidthToken = getComputedStyle(root).getPropertyValue("--layout-base-width").trim();
    const baseWidth = Number.parseFloat(baseWidthToken);
    return Number.isFinite(baseWidth) && baseWidth > 0 ? baseWidth : 1440;
  };

  const updateWindowsLayoutScale = () => {
    const viewportWidth = root.clientWidth || window.innerWidth;
    const scale = clamp(viewportWidth / getBaseWidth(), 0.15, 3);
    root.style.setProperty("--windows-layout-scale", scale.toString());
  };

  updateWindowsLayoutScale();
  window.requestAnimationFrame(updateWindowsLayoutScale);

  if (!window.__portfolioWindowsScaleSync) {
    window.addEventListener("resize", updateWindowsLayoutScale, { passive: true });
    window.__portfolioWindowsScaleSync = true;
  }
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>,
);
