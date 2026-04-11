import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader";
import MobileBottomNav from "./components/MobileBottomNav";
import SiteFooter from "./components/SiteFooter";
import FixedCtaButton from "./components/FixedCtaButton";
import HomePage from "./pages/HomePage";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
