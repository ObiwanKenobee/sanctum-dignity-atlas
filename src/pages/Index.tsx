import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ModulePreview from "@/components/ModulePreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ModulePreview />
      <Footer />
    </div>
  );
};

export default Index;
