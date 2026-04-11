import InnerPageBanner from "../components/InnerPageBanner";
import contactBanner from "../assets/images/hero-clinic.jpg";

export default function ContactPage() {
  return (
    <section className="inner-page section-spacing-lg contact-page">
      <div className="container-xl">
        <InnerPageBanner title="CONTACT US" current="Contact" image={contactBanner} />

        <div className="contact-top reveal mt-4">
          <p className="contact-top-eyebrow">GET IN TOUCH</p>
          <p className="contact-top-copy">
            Connect with us at jothieyecare@gmail.com / +91-413-2224534 and visit us at Calve Subraya Chetty Street,
            Puducherry - 605001. We are here to support your eye care journey.
          </p>
        </div>

        <div className="row g-4 align-items-start mt-2">
          <div className="col-lg-5 reveal stagger-1">
            <div className="contact-form-card">
              <h2>Get in Touch</h2>
              <p>We are here to answer your questions and assist you with trusted eye care guidance.</p>

              <form className="contact-form-grid" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="contact-input" placeholder="Your Name" />
                <input type="email" className="contact-input" placeholder="Your Email" />
                <input type="tel" className="contact-input" placeholder="Your Phone" />
                <input type="text" className="contact-input" placeholder="Your Concern" />
                <input type="text" className="contact-input contact-input-full" placeholder="Subject" />
                <textarea className="contact-input contact-input-full" rows="5" placeholder="Message" />
                <button type="submit" className="contact-send-btn contact-input-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-2 reveal stagger-2">
            <div className="contact-details-stack">
              <div className="contact-social-row">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              </div>

              <div className="contact-detail-block">
                <div className="contact-detail-icon">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h3>Address</h3>
                <p>152 & 154, Calve Subraya Chetty Street, Puducherry - 605001</p>
              </div>

              <div className="contact-detail-block">
                <div className="contact-detail-icon">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h3>Mobile</h3>
                <p>+91-413-2224534</p>
                <p>+91-413-2337659</p>
              </div>

              <div className="contact-detail-block">
                <div className="contact-detail-icon">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h3>Email</h3>
                <p>jothieyecare@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 reveal stagger-3">
            <div className="contact-map-panel">
              <div className="contact-map-frame contact-map-frame-large">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.521905868609!2d79.8266869!3d11.9383238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53617dd418e30f%3A0xff599bc13978eabb!2sJothi%20Eye%20Care%20Centre!5e0!3m2!1sen!2sin!4v1775898272747!5m2!1sen!2sin"
                  width="800"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jothi Eye Care Centre Location"
                />
              </div>
              <p className="contact-map-caption mb-0">Working Hours: Monday - Saturday, 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
