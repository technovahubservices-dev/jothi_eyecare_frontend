const cards = [
  { icon: "history", title: "25+ Years Experience", text: "Two decades of delivering excellence in eye care and surgical procedures.", variant: "primary", stagger: "stagger-1" },
  { icon: "biotech", title: "Advanced Diagnostics", text: "State-of-the-art scanning and measurement tools for ultimate precision.", variant: "secondary", stagger: "stagger-2" },
  { icon: "volunteer_activism", title: "Personalized Care", text: "Every patient receives a tailored treatment plan based on their unique lifestyle.", variant: "primary", stagger: "stagger-3" },
  { icon: "support_agent", title: "24/7 Support", text: "Round-the-clock emergency assistance for all post-operative concerns.", variant: "secondary", stagger: "stagger-4" }
];

export default function WhyChooseSection() {
  return (
    <section className="container-xl section-spacing-lg">
      <div className="row g-4">
        {cards.map((card) => (
          <div className={`col-sm-6 col-lg-3 reveal ${card.stagger}`} key={card.title}>
            <div className="feature-card h-100">
              <div className={`feature-icon ${card.variant}`}>
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}