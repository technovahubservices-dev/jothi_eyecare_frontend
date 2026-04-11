const offers = [
  { title: "Cataract Care Offer", detail: "Free pre-op diagnostics with cataract package", price: "Starts at Rs 25,000" },
  { title: "LASIK Discount", detail: "Flat savings for eligible LASIK candidates", price: "Save up to Rs 10,500" },
  { title: "Retina Combo", detail: "Consultation + scan bundle at promotional pricing", price: "Now at Rs 4,900" },
  { title: "Glaucoma Follow-Up Plan", detail: "Bundled follow-up checkups with lower cost", price: "Save Rs 2,200" }
];

export default function OfferHighlightsSection({ onClaimOffer }) {
  return (
    <section id="offers" className="container-xl section-spacing-lg">
      <div className="d-flex justify-content-between align-items-end mb-4 reveal">
        <h2 className="specialty-title offer-section-title">Top<br />Offer Highlights</h2>
        <div className="specialty-line" />
      </div>
      <div className="row g-3 g-md-4">
        {offers.map((offer, idx) => (
          <div className="col-12 col-md-6 col-lg-3" key={offer.title}>
            <div className={`offer-card reveal stagger-${(idx % 4) + 1}`}>
              <p className="offer-card-tag">Limited Offer</p>
              <h3>{offer.title}</h3>
              <p>{offer.detail}</p>
              <strong>{offer.price}</strong>
              <button
                type="button"
                className="offer-claim-btn mt-3"
                onClick={() => onClaimOffer?.(offer.title)}
              >
                Claim Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
