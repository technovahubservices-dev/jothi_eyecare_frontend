export default function MobileBottomNav() {
  return (
    <nav className="mobile-nav d-md-none">
      <a href="#home" className="active">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <small>Home</small>
      </a>
      <a href="#offers">
        <span className="material-symbols-outlined">local_offer</span>
        <small>Offers</small>
      </a>
      <a href="#services">
        <span className="material-symbols-outlined">medical_services</span>
        <small>Services</small>
      </a>
      <a href="#contact">
        <span className="material-symbols-outlined">call</span>
        <small>Contact</small>
      </a>
    </nav>
  );
}
