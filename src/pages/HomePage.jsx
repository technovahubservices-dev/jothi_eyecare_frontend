import { useState } from "react";
import HeroSection from "../components/HeroSection";
import OfferHighlightsSection from "../components/OfferHighlightsSection";
import StickyOfferBar from "../components/StickyOfferBar";
import WhyChooseSection from "../components/WhyChooseSection";
import CalculatorSection from "../components/CalculatorSection";
import ServicesSection from "../components/ServicesSection";
import ExpertsSection from "../components/ExpertsSection";
import GallerySection from "../components/GallerySection";
import FaqSection from "../components/FaqSection";
import TestimonialSection from "../components/TestimonialSection";
import AppointmentSection from "../components/AppointmentSection";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("Cataract Care Offer");

  const handleClaimOffer = (service) => {
    setSelectedService(service);
    const formEl = document.getElementById("offer-lead-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <StickyOfferBar />
      <section id="home">
        <HeroSection selectedService={selectedService} onServiceChange={setSelectedService} />
      </section>
      <OfferHighlightsSection onClaimOffer={handleClaimOffer} />
      <WhyChooseSection />
      <section id="calculator">
        <CalculatorSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <ExpertsSection />
      <GallerySection />
      <FaqSection />
      <TestimonialSection />
      <section id="contact">
        <AppointmentSection />
      </section>
    </>
  );
}
