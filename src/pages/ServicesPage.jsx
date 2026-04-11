import ServicesSection from "../components/ServicesSection";
import CalculatorSection from "../components/CalculatorSection";
import InnerPageBanner from "../components/InnerPageBanner";
import servicesBanner from "../assets/images/facility-theatre.jpg";

const serviceHighlights = [
  {
    title: "Cataract & Premium IOL",
    desc: "Detailed lens counselling, modern phaco techniques, and protocol-based post-operative follow-up."
  },
  {
    title: "Retina & Diabetic Eye Care",
    desc: "Timely retinal scans and specialist intervention plans for diabetic retinopathy and macular conditions."
  },
  {
    title: "Glaucoma Care",
    desc: "Pressure monitoring, optic nerve evaluation, medication guidance, and long-term disease tracking."
  },
  {
    title: "Cornea & Ocular Surface",
    desc: "Corneal diagnostics, medical management plans, and referral-ready surgical pathways when needed."
  }
];

const carePath = [
  "Comprehensive eye examination and history review",
  "Speciality diagnostic tests based on condition",
  "Consultant-led treatment planning and counselling",
  "Procedure/surgery scheduling with clear cost transparency",
  "Structured follow-up and outcome monitoring"
];

export default function ServicesPage() {
  return (
    <section className="inner-page section-spacing-lg">
      <div className="container-xl">
        <InnerPageBanner title="SERVICES" current="Services" image={servicesBanner} />

        <div className="inner-hero reveal mt-4">
          <p className="eyebrow">Clinical Services</p>
          <h2 className="section-title">Advanced Ophthalmology Specialities</h2>
          <p className="section-subtitle">
            Cataract, LASIK, Retina, Cornea, Glaucoma, Pediatric Ophthalmology, and comprehensive diagnostics
            under one roof with patient-first treatment planning.
          </p>
        </div>

        <div className="about-block reveal">
          <h2 className="about-title mb-3">Service Highlights</h2>
          <div className="row g-3">
            {serviceHighlights.map((item, idx) => (
              <div className="col-md-6" key={item.title}>
                <div className={`impact-card h-100 reveal stagger-${(idx % 4) + 1}`}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-block reveal mt-4">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <h2 className="about-title">How Care Is Delivered</h2>
              <p className="about-text">
                Every patient pathway is designed for early diagnosis, clear communication, and measurable outcomes.
                Clinical decisions are supported by diagnostics and consultant review at each step.
              </p>
              <div className="impact-tags">
                <span>Evidence-led care</span>
                <span>Transparent pricing</span>
                <span>Follow-up protocol</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-highlight-card">
                <h3>Patient Care Path</h3>
                <ol className="about-ordered-list">
                  {carePath.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesSection />
      <CalculatorSection />
    </section>
  );
}
