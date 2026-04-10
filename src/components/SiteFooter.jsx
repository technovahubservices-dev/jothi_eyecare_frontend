export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-xl">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="brand-title mb-2">Jothi Eye Care</h3>
            <p>Providing world-class ophthalmic care with a human touch since 1998.</p>
          </div>
          <div className="col-md-4">
            <h4>Location</h4>
            <p>JOTHI EYE CARE CENTRE</p>
            <p>152 &amp; 154, Calve Subraya Chetty Street, Puducherry - 605 001.</p>
            <p>+91-413-2224534, +91-413-2337659</p>
            <p className="text-primary fw-bold">jothieyecare@gmail.com</p>
          </div>
          <div className="col-md-4 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end mb-3">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
            <div className="d-flex gap-2 justify-content-md-end">
              <a className="social-dot" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.3v8h3.2Z" />
                </svg>
              </a>
              <a className="social-dot" href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M18.9 3h2.8l-6.2 7.1 7.3 10H17l-4.5-5.9-5.2 5.9H4.5l6.7-7.6L4.2 3h5.9l4.1 5.4L18.9 3Zm-1 15.4h1.5L9.2 4.6H7.6l10.3 13.8Z" />
                </svg>
              </a>
              <a className="social-dot" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm8.8 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">© 2024 Jothi Eye Care Centre. Precision Ophthalmology meeting compassionate care.</p>
      </div>
    </footer>
  );
}
