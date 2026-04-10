import { NavLink } from "react-router-dom";
import jothiLogo from "../assets/images/jothi logo.png";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-xl d-flex justify-content-between align-items-center py-3">
        <NavLink to="/" className="brand-logo-link" aria-label="Jothi Eye Care home">
          <img src={jothiLogo} alt="Jothi Eye Care logo" className="brand-logo-img" />
        </NavLink>
        <div className="d-flex align-items-center gap-3">
          <nav className="d-none d-md-flex gap-4 me-2">
            <NavLink to="/" className="nav-link-custom">Home</NavLink>
            <NavLink to="/about" className="nav-link-custom">About</NavLink>
            <NavLink to="/services" className="nav-link-custom">Services</NavLink>
            <NavLink to="/foundation" className="nav-link-custom">Foundation</NavLink>
            <NavLink to="/contact" className="nav-link-custom">Contact</NavLink>
          </nav>
          <a href="tel:+914132224534" className="btn btn-primary-pill text-decoration-none">Call</a>
        </div>
      </div>
    </header>
  );
}
