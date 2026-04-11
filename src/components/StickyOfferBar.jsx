export default function StickyOfferBar() {
  return (
    <div className="sticky-offer-bar">
      <div className="container-xl d-flex align-items-center justify-content-between gap-2">
        <p className="sticky-offer-text mb-0">
          Today Offer: LASIK 15% Off + Free Pre-Op Diagnostics
        </p>
        <div className="d-flex align-items-center gap-2">
          <a href="#offer-lead-form" className="sticky-offer-btn">
            Claim Offer
          </a>
          <a href="tel:+914132224534" className="sticky-offer-btn primary">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
