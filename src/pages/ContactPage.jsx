export default function ContactPage() {
  return (
    <section className="inner-page section-spacing-lg">
      <div className="container-xl">
        <div className="inner-hero reveal">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Book Consultation & Reach Us</h1>
          <p className="section-subtitle">
            For appointments, cataract evaluation, LASIK eligibility, and emergency support, connect with our care team.
          </p>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-md-6 reveal stagger-1">
            <div className="impact-card h-100">
              <h3>Hospital Address</h3>
              <p>JOTHI EYE CARE CENTRE, 152 & 154, Calve Subraya Chetty Street, Puducherry - 605 001.</p>
              <h3 className="mt-3">Working Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <h3 className="mt-3">Emergency Support</h3>
              <p>Urgent post-operative and critical care support through direct call assistance.</p>
            </div>
          </div>
          <div className="col-md-6 reveal stagger-2">
            <div className="impact-card h-100">
              <h3>Quick Contact</h3>
              <p>Phone: +91-413-2224534, +91-413-2337659</p>
              <p>Email: jothieyecare@gmail.com</p>
              <div className="impact-tags mt-3">
                <span>Cataract</span>
                <span>LASIK</span>
                <span>Retina</span>
                <span>Emergency Care</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block reveal mt-4">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <h2 className="about-title">Appointment Preparation</h2>
              <ul className="about-list">
                <li>Bring previous eye records, prescriptions, and current medication list.</li>
                <li>For diabetic and glaucoma reviews, carry recent blood sugar / pressure details.</li>
                <li>If surgery is advised, bring one attendee for counselling and discharge instructions.</li>
                <li>For pediatric cases, bring school vision records if available.</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="about-highlight-card">
                <h3>Fast Access</h3>
                <p className="about-text mb-2">Call before arrival for quicker registration and consultant allocation.</p>
                <a href="tel:+914132224534" className="btn btn-calc w-100 text-decoration-none">
                  <span className="material-symbols-outlined">phone_in_talk</span>
                  Call Reception
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}