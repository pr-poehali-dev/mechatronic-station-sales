import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechSpecs from "@/components/TechSpecs";
import EquipmentCatalog from "@/components/EquipmentCatalog";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechSpecs />
      <EquipmentCatalog />
      <VideoPlayer />
      <Footer />
    </div>
  );
};

export default Index;
