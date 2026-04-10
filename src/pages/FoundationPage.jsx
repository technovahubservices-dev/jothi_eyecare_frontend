const programs = [
  {
    title: "Eye Camps",
    icon: "health_and_safety",
    desc: "Regular community screening camps to identify refractive errors, cataract risk, and glaucoma cases early."
  },
  {
    title: "School Vision Screening",
    icon: "school",
    desc: "Focused pediatric eye-check initiatives to detect vision issues in children and refer timely treatment."
  },
  {
    title: "Eye Donation Awareness",
    icon: "favorite",
    desc: "Public awareness drives for corneal donation and counseling support for donor families."
  },
  {
    title: "Free Follow-up Support",
    icon: "support_agent",
    desc: "Guided post-procedure follow-up for outreach beneficiaries through scheduled review clinics."
  }
];

const foundationGoals = [
  "Reduce avoidable blindness through screening and timely intervention",
  "Create awareness on eye health, diabetes eye disease, and glaucoma",
  "Promote corneal donation and social responsibility",
  "Improve access for underserved communities with referral pathways"
];

export default function FoundationPage() {
  return (
    <section className="inner-page section-spacing-lg">
      <div className="container-xl">
        <div className="inner-hero reveal">
          <p className="eyebrow">Community Foundation</p>
          <h1 className="section-title">Outreach & Public Vision Programs</h1>
          <p className="section-subtitle">
            Inspired by Jothi Eye Care Foundation activities, these initiatives focus on preventive eye care,
            awareness, and access for underserved communities.
          </p>
        </div>

        <div className="about-block reveal">
          <div className="row g-4 mt-1">
            {programs.map((item, idx) => (
              <div className="col-md-6" key={item.title}>
                <div className={`impact-card h-100 reveal stagger-${(idx % 4) + 1}`}>
                  <span className="material-symbols-outlined impact-icon">{item.icon}</span>
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
              <h2 className="about-title">Program Objectives</h2>
              <p className="about-text">
                The foundation model combines awareness, screening, and referral continuity to ensure communities
                receive actionable eye care support beyond one-time camps.
              </p>
              <ul className="about-list">
                {foundationGoals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="about-highlight-card">
                <h3>Impact Focus Areas</h3>
                <div className="impact-tags">
                  <span>Rural screening</span>
                  <span>Women & senior care</span>
                  <span>School outreach</span>
                  <span>Donation awareness</span>
                  <span>Early referral</span>
                </div>
                <p className="about-text mt-3 mb-0">
                  Each initiative is aligned to early detection and sustained follow-up so patients can access
                  treatment without delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}