import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import BenefitsSection from "../components/home/BenefitsSection";
import GallerySection from "../components/home/GallerySection";
import ContactSection from "../components/home/ContactSection";
import CertificatesSection from "../components/home/CertificatesSection";
import TestimonialsSection  from "../components/TestimonialsSection";
import Footer from "../components/home/Footer";
import WhatsAppFloat from "../components/home/WhatsAppFloat";







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
      <CertificatesSection/>
      <TestimonialsSection/>
      <WhatsAppFloat/>
      <Footer/>
    </>
  );
}

