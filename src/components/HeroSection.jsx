import { hero, doc } from "../assets/images";

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ "--hero-bg-image": `url(${hero})` }}
    >
      <div className="hero-bg-image" aria-hidden="true" />
      <div className="container-xl">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 animate-hero-text">
            <h1 className="hero-title">Welcome to Jothi Eye Care Centre</h1>
            <p className="hero-subtitle">
              Precision ophthalmology meeting compassionate care for your visionary health. Our experts use state-of-the-art technology for your optical needs.
            </p>
            <button className="btn btn-hero">Book Now</button>
          </div>
          <div className="col-lg-6 animate-hero-img">
            <div className="hero-image-wrap">
              <img src={doc} alt="Modern ophthalmology clinic" className="w-100 h-100 object-fit-cover" />
              <div className="hero-image-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
