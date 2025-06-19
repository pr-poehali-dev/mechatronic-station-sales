import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechSpecs from "@/components/TechSpecs";
import EquipmentCatalog from "@/components/EquipmentCatalog";
import VideoPlayer from "@/components/VideoPlayer";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <TechSpecs />
      <EquipmentCatalog />
      <VideoPlayer />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
