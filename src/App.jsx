import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader";
import MobileBottomNav from "./components/MobileBottomNav";
import SiteFooter from "./components/SiteFooter";
import FixedCtaButton from "./components/FixedCtaButton";
import HomePage from "./pages/HomePage";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    fetch(`${apiBase}/health`, { signal: controller.signal }).catch(() => {
      // Warm-up request: failure should never block UI.
    }).finally(() => clearTimeout(timeoutId));

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="main-content">
        <HomePage />
      </main>
      <FixedCtaButton />
      <MobileBottomNav />
      <SiteFooter />
    </div>
  );
}
