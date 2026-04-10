import { useEffect, useMemo, useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Priya Dharshini",
      text: "I want to extend my heartfelt gratitude to the hospital team for the successful completion of my eye surgery. Their attentiveness and the smooth procedure truly impressed me. The doctors conducting the tests were not only kind and friendly but also very professional. The intense care taken throughout my journey was truly commendable. Thank you for your exceptional service and dedication to patient care."
    },
    {
      name: "RAJARAMAN M K",
      text: "Entry to Exit Everything Excellent. I experienced on my Cataract surgery for both of my eyes I was 100 percent satisfaction. Reception, response, proper guidance by all staffs and Doctors are very kind and we very much appreciable. Thanks to my servant guided me to reach out you. No negative comments from anyone I enquire about your service. Thanks to all. GOD BLESS ALL."
    },
    {
      name: "Manjula Perumal",
      text: "I extend my heartfelt thanks to jothi eye care centre doctors and team for the successful cataract surgery. I'm now able to read the newspaper and do day to day works with clear beat vision. Thank u jothi eyecare centre for the great work.God bless you all."
    },
    {
      name: "Gayathri S",
      text: "The opthamology clinic is top-notch, boasting a remarkably patient and skilled team. When I took my 6-year-old daughter there, she received exceptional care and warmth. The diagnosis was accurate and thoroughly explained. From the receptionist to the ophthalmologist, the staff were incredibly friendly and focused on customer service. Dr. Vanaja's talent and expertise are exceptional. I highly recommend this clinic for any eye-related concerns."
    },
    {
      name: "Mugilan",
      text: "I'm really satisfied 😊 to take my grandma for her treatment in this eye care also to say some words about the staffs take care of patients in time. And well facility are maintained like self room with a 📺 to watch live surgery. THANKS TO ALL."
    }
  ];

  const slides = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      const pair = testimonials.slice(i, i + 2);
      if (pair.length === 1 && testimonials.length > 1) {
        pair.push(testimonials[0]);
      }
      grouped.push(pair);
    }
    return grouped;
  }, [testimonials]);

  const [activeSlide, setActiveSlide] = useState(0);

  const goPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="text-center mb-4 reveal">
          <span className="eyebrow">Patient Stories</span>
          <h2 className="section-title mt-2">Trusted Vision</h2>
        </div>

        <div className="testimonial-slider reveal stagger-1">
          <button type="button" className="testimonial-nav" onClick={goPrev} aria-label="Previous testimonials">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="testimonial-viewport">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div className="testimonial-slide" key={`slide-${slideIndex}`}>
                  <div className="row g-4">
                    {slide.map((item) => (
                      <div className="col-12 col-md-6" key={item.name}>
                        <div className="testimonial-card h-100 d-flex flex-column">
                          <span className="material-symbols-outlined quote-icon">format_quote</span>
                          <div className="testimonial-body">
                            <p>{item.text}</p>
                          </div>
                          <div className="testimonial-meta d-flex align-items-center gap-3">
                            <div className="avatar">
                              {item.name
                                .split(" ")
                                .filter(Boolean)
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <h5>{item.name}</h5>
                              <small>Verified Cataract Patient</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="testimonial-nav" onClick={goNext} aria-label="Next testimonials">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
