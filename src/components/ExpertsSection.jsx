export default function ExpertsSection() {
  return (
    <section className="experts-section">
      <div className="container-xl">
        <div className="text-center mb-5 reveal">
          <h2 className="section-title">Vision, Mission & Foundation</h2>
          <p className="section-subtitle">Inspired by Jothi Eye Care’s community-focused service model.</p>
        </div>
        <div className="row g-4 g-lg-5">
          <div className="col-md-4">
            <div className="impact-card reveal stagger-1 h-100">
              <span className="material-symbols-outlined impact-icon">visibility</span>
              <h3>Our Vision</h3>
              <p>
                To provide comprehensive compassionate care with the most updated facilities to all sections of people, rich and poor.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="impact-card reveal stagger-2 h-100">
              <span className="material-symbols-outlined impact-icon">track_changes</span>
              <h3>Our Mission</h3>
              <p>
                Marching towards perfection in eye care with both paying and free community outreach services.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="impact-card reveal stagger-3 h-100">
              <span className="material-symbols-outlined impact-icon">volunteer_activism</span>
              <h3>Foundation Programs</h3>
              <p>
                Eye Camps, Eye Donation awareness, and regular community vision initiatives designed to improve access to care.
              </p>
              <div className="impact-tags">
                <span>Since 1998</span>
                <span>Eye Camps</span>
                <span>Eye Donation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
