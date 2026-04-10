import { NavLink } from "react-router-dom";

export default function MobileBottomNav() {
  return (
    <nav className="mobile-nav d-md-none">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <small>Home</small>
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
        <span className="material-symbols-outlined">medical_services</span>
        <small>Services</small>
      </NavLink>
      <NavLink to="/foundation" className={({ isActive }) => (isActive ? "active" : "")}>
        <span className="material-symbols-outlined">diversity_3</span>
        <small>Foundation</small>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        <span className="material-symbols-outlined">call</span>
        <small>Contact</small>
      </NavLink>
    </nav>
  );
}