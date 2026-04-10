const faqs = [
  {
    q: "What is the recovery time for LASIK?",
    a: "Most patients experience improved vision within 24 hours. Full stabilization typically occurs within 3 to 6 months. We recommend resting your eyes for the first day and avoiding strenuous activity or swimming for 1-2 weeks."
  },
  {
    q: "Does insurance cover cataract surgery?",
    a: "Cataract surgery is generally considered medically necessary and is covered by most major health insurance plans. Coverage may vary for specialized premium lenses (multifocal or toric lenses)."
  },
  {
    q: "Is cataract surgery painful?",
    a: "The procedure is typically painless. We use numbing eye drops or local anesthesia. Some patients may feel a slight pressure during the 15-minute procedure, but discomfort is minimal."
  },
  {
    q: "How often should I have an eye exam?",
    a: "For healthy adults, we recommend a comprehensive exam every 1-2 years. If you have pre-existing conditions like diabetes or high blood pressure, annual exams are crucial."
  }
];

export default function FaqSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="text-center mb-5 reveal">
          <h2 className="section-title">Common Eye Questions</h2>
          <p className="section-subtitle">Everything you need to know about your vision procedures.</p>
        </div>
        <div className="faq-wrap">
          {faqs.map((faq, idx) => (
            <details key={faq.q} className={`faq-item reveal stagger-${idx + 1}`}>
              <summary>
                <span>{faq.q}</span>
                <span className="material-symbols-outlined">expand_more</span>
              </summary>
              <div>{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}