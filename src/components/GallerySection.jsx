import { facilityReception, facilityTheatre } from "../assets/images";

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="container-xl mb-4 reveal">
        <h2 className="section-title mb-0">State-of-the-art Facility</h2>
      </div>
      <div className="container-xl">
        <div className="row g-4">
          <div className="col-md-6 reveal stagger-1">
            <div className="gallery-item">
              <img src={facilityReception} alt="Clinic reception" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>
          <div className="col-md-6 reveal stagger-2">
            <div className="gallery-item offset">
              <img src={facilityTheatre} alt="Operating theater" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
