const services = [
  {
    icon: "medical_services",
    title: "Cataract",
    text: "Micro-incision surgery with modern IOL options",
    offer: "Free pre-op diagnostics",
    oldPrice: "Rs 30,000",
    newPrice: "Rs 25,000",
    save: "Save Rs 5,000",
    className: "service-one"
  },
  {
    icon: "visibility",
    title: "LASIK",
    text: "Freedom from glasses with eligibility screening",
    offer: "Flat 15% package discount",
    oldPrice: "Rs 70,000",
    newPrice: "Rs 59,500",
    save: "Save Rs 10,500",
    className: "service-two"
  },
  {
    icon: "biotech",
    title: "Retina",
    text: "Advanced retina scans and specialist review",
    offer: "Consultation + scan combo",
    oldPrice: "Rs 6,500",
    newPrice: "Rs 4,900",
    save: "Save Rs 1,600",
    className: "service-three"
  },
  {
    icon: "remove_red_eye",
    title: "Glaucoma",
    text: "Pressure tracking and long-term management plan",
    offer: "Follow-up bundle offer",
    oldPrice: "Rs 12,000",
    newPrice: "Rs 9,800",
    save: "Save Rs 2,200",
    className: "service-four"
  },
  {
    icon: "lens_blur",
    title: "Cornea",
    text: "Cornea diagnostics and treatment planning",
    offer: "Complimentary corneal mapping",
    oldPrice: "Rs 8,500",
    newPrice: "Rs 6,900",
    save: "Save Rs 1,600",
    className: "service-one"
  },
  {
    icon: "child_care",
    title: "Pediatric Eye Care",
    text: "Complete pediatric vision assessment packages",
    offer: "Family visit savings",
    oldPrice: "Rs 4,500",
    newPrice: "Rs 3,400",
    save: "Save Rs 1,100",
    className: "service-three"
  },
  {
    icon: "search",
    title: "Comprehensive Eye Check",
    text: "Full vision profile and specialist opinion",
    offer: "Weekend special price",
    oldPrice: "Rs 3,500",
    newPrice: "Rs 2,500",
    save: "Save Rs 1,000",
    className: "service-four"
  },
  {
    icon: "eyeglasses",
    title: "Optical",
    text: "Premium frames and prescription lens packages",
    offer: "Buy lens, get frame discount",
    oldPrice: "Rs 5,000",
    newPrice: "Rs 3,900",
    save: "Save Rs 1,100",
    className: "service-two"
  }
];

export default function ServicesSection() {
  return (
    <section className="container-xl section-spacing-lg">
      <div className="d-flex justify-content-between align-items-end mb-5 reveal">
        <h2 className="specialty-title">Service<br />Offers</h2>
        <div className="specialty-line" />
      </div>
      <div className="row g-3 g-md-4">
        {services.map((service, idx) => (
          <div className="col-12 col-sm-6 col-lg-3" key={service.title}>
            <div className={`service-card reveal stagger-${(idx % 4) + 1} ${service.className}`}>
              <span className="service-offer-badge">{service.offer}</span>
              <span className="material-symbols-outlined service-icon">{service.icon}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-price-row">
                  <span className="service-old-price">{service.oldPrice}</span>
                  <strong className="service-new-price">{service.newPrice}</strong>
                </div>
                <span className="service-save-text">{service.save}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
