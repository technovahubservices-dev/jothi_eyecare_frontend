import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import MobileBottomNav from "./components/MobileBottomNav";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FoundationPage from "./pages/FoundationPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const location = useLocation();

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
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <MobileBottomNav />
      <SiteFooter />
    </div>
  );
}