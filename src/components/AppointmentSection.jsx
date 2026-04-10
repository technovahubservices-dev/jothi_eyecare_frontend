export default function AppointmentSection() {
  return (
    <section className="container-xl appointment-section">
      <div className="appointment-wrap reveal">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="appointment-title">Schedule Your Appointment</h2>
            <p className="appointment-subtitle">
              Take the first step towards perfect vision. Book a consultation with our world-class specialists today. We offer flexible scheduling and immediate assistance for urgent cases.
            </p>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="icon-dot"><span className="material-symbols-outlined">phone_in_talk</span></div>
              <p className="mb-0 fw-bold">+91-413-2224534, +91-413-2337659</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="icon-dot"><span className="material-symbols-outlined">schedule</span></div>
              <p className="mb-0 fw-bold">Mon - Sat: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-shell">
              <form>
                <label className="tiny-label">Full Name</label>
                <input className="form-control custom-input mb-3" placeholder="Enter your name" type="text" />
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label className="tiny-label">Phone Number</label>
                    <input className="form-control custom-input" placeholder="+91" type="tel" />
                  </div>
                  <div className="col-sm-6">
                    <label className="tiny-label">Email</label>
                    <input className="form-control custom-input" placeholder="example@mail.com" type="email" />
                  </div>
                </div>
                <label className="tiny-label">Preferred Service</label>
                <select className="form-select custom-input mb-3">
                  <option>Cataract Consultation</option>
                  <option>LASIK Evaluation</option>
                  <option>Comprehensive Eye Exam</option>
                  <option>Pediatric Ophthalmology</option>
                </select>
                <button type="submit" className="btn btn-calc w-100">Book Your Free Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
