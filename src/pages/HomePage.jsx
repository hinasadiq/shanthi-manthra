import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import BenefitsSection from "../components/home/BenefitsSection";
import GallerySection from "../components/home/GallerySection";
import ContactSection from "../components/home/ContactSection";





export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection/>
      <BenefitsSection/>
      <GallerySection/>
      <ContactSection/>
    </>
  );
}

