import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import PartnersSection from "./components/sections/PartnersSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      
      <Header />
      <HeroSection />
      <PartnersSection/>
      <ServicesSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}