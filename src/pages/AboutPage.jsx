export default function AboutPage() {
  return (
    <section className="inner-page section-spacing-lg">
      <div className="container-xl">
        <div className="inner-hero reveal">
          <p className="eyebrow">About Jothi Eye Care</p>
          <h1 className="section-title">Comprehensive Eye Care With Compassion</h1>
          <p className="section-subtitle">
            Jothi Eye Care Centre in Puducherry is built on a simple promise: provide ethical, accessible,
            and high-quality ophthalmology services with human warmth and long-term patient trust.
          </p>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-md-4 reveal stagger-1">
            <div className="impact-card h-100">
              <span className="material-symbols-outlined impact-icon">visibility</span>
              <h3>Vision</h3>
              <p>Deliver comprehensive and compassionate eye care to all sections of people.</p>
            </div>
          </div>
          <div className="col-md-4 reveal stagger-2">
            <div className="impact-card h-100">
              <span className="material-symbols-outlined impact-icon">track_changes</span>
              <h3>Mission</h3>
              <p>March towards perfection in eye care through advanced treatment and community outreach.</p>
            </div>
          </div>
          <div className="col-md-4 reveal stagger-3">
            <div className="impact-card h-100">
              <span className="material-symbols-outlined impact-icon">volunteer_activism</span>
              <h3>Values</h3>
              <p>Patient-first service, transparent treatment plans, and continuous quality improvement.</p>
            </div>
          </div>
        </div>

        <div className="about-block reveal mt-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <h2 className="about-title">Founder’s Note</h2>
              <p className="about-text">
                The centre’s journey reflects a sustained commitment to quality ophthalmology, compassionate
                consultations, and affordability. The focus has always been on helping families receive
                timely diagnosis, safe treatment, and dependable follow-up care.
              </p>
              <p className="about-text">
                From routine eye checks to advanced surgical care, every service is designed to be
                patient-centric and outcome-driven.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="about-highlight-card">
                <h3>Core Strengths</h3>
                <ul className="about-list">
                  <li>Comprehensive diagnostics and treatment planning</li>
                  <li>Advanced cataract, LASIK, glaucoma, retina and cornea services</li>
                  <li>Structured pre-op and post-op counseling support</li>
                  <li>Community eye care through outreach initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block reveal mt-4">
          <h2 className="about-title mb-3">Community & Foundation Work</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="impact-card h-100">
                <span className="material-symbols-outlined impact-icon">health_and_safety</span>
                <h3>Eye Camps</h3>
                <p>
                  Periodic eye screening camps that support early detection of cataract, refractive errors,
                  and glaucoma risk.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="impact-card h-100">
                <span className="material-symbols-outlined impact-icon">school</span>
                <h3>School Screening</h3>
                <p>
                  Vision awareness and screening initiatives for children to ensure early intervention and
                  healthy visual development.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="impact-card h-100">
                <span className="material-symbols-outlined impact-icon">favorite</span>
                <h3>Eye Donation Awareness</h3>
                <p>
                  Awareness programs encouraging corneal donation and building social responsibility around
                  avoidable blindness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block reveal mt-4">
          <h2 className="about-title mb-3">Milestones</h2>
          <div className="about-timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h4>Established in Puducherry</h4>
                <p>Started as a focused eye-care centre with patient-first approach and transparent care.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h4>Expanded Clinical Specialities</h4>
                <p>Added advanced service lines in cataract, retina, refractive care, and glaucoma management.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h4>Stronger Community Outreach</h4>
                <p>Scaled eye camps, school screening, and awareness initiatives through foundation-led efforts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
