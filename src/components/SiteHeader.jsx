import jothiLogo from "../assets/images/jothi logo.png";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-xl d-flex justify-content-between align-items-center py-3">
        <a href="#home" className="brand-logo-link" aria-label="Jothi Eye Care home">
          <img src={jothiLogo} alt="Jothi Eye Care logo" className="brand-logo-img" />
        </a>
        <div className="d-flex align-items-center gap-3">
          <nav className="d-none d-md-flex gap-4 me-2">
            <a href="#home" className="nav-link-custom">Home</a>
            <a href="#offers" className="nav-link-custom">Offers</a>
            <a href="#services" className="nav-link-custom">Services</a>
            <a href="#calculator" className="nav-link-custom">Calculator</a>
            <a href="#contact" className="nav-link-custom">Contact</a>
          </nav>
          <a href="tel:+914132224534" className="btn btn-primary-pill text-decoration-none">Call</a>
        </div>
      </div>
    </header>
  );
}
