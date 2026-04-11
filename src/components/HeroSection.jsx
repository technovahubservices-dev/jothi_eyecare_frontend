import { useState } from "react";
import { hero, doc } from "../assets/images";

export default function HeroSection({ selectedService, onServiceChange }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

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
            <a href="#offer-lead-form" className="btn btn-hero text-decoration-none">Book Now</a>

            <div id="offer-lead-form" className="mini-lead-form mt-4">
              <h3>Get Offer Callback in 10 Minutes</h3>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <select
                  value={selectedService}
                  onChange={(e) => onServiceChange?.(e.target.value)}
                >
                  <option value="Cataract Care Offer">Cataract Care Offer</option>
                  <option value="LASIK Discount">LASIK Discount</option>
                  <option value="Retina Combo">Retina Combo</option>
                  <option value="Glaucoma Follow-Up Plan">Glaucoma Follow-Up Plan</option>
                </select>
                <button type="submit">Get Callback</button>
              </form>
              {submitted ? <p className="mini-form-success mb-0">Thanks! Our team will call you shortly.</p> : null}
            </div>
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
