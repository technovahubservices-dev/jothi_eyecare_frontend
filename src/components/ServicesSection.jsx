const services = [
  { icon: "medical_services", title: "Cataract", text: "Micro-incision surgery", className: "service-one reveal stagger-1" },
  { icon: "visibility", title: "LASIK", text: "Freedom from glasses", className: "service-two reveal stagger-2" },
  { icon: "biotech", title: "Retina", text: "Advanced diagnostics", className: "service-three reveal stagger-3" },
  { icon: "eyeglasses", title: "Optical", text: "Premium eyewear", className: "service-four reveal stagger-4" }
];

export default function ServicesSection() {
  return (
    <section className="container-xl section-spacing-lg">
      <div className="d-flex justify-content-between align-items-end mb-5 reveal">
        <h2 className="specialty-title">Our<br />Specialties</h2>
        <div className="specialty-line" />
      </div>
      <div className="row g-3 g-md-4">
        {services.map((service) => (
          <div className="col-6 col-md-3" key={service.title}>
            <div className={`service-card ${service.className}`}>
              <span className="material-symbols-outlined service-icon">{service.icon}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}