import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import LocationSection from "@/components/sections/LocationSection";
import FloorPlansSection from "@/components/sections/FloorPlansSection";
import CTASection from "@/components/sections/CTASection";
import LastWords from "@/components/sections/LastWords";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Seção #01 - Hero + Formulário */}
      <HeroSection />
      
      {/* Seção #02 - Diferenciais */}
      <FeaturesSection />
      
      {/* Seção #03 - Localização Premium */}
      <LocationSection />
      
      {/* Seção #04 - Plantas */}
      <FloorPlansSection />
      
      {/* Seção #05 - CTA Final */}
      <CTASection />
      
      {/* Seção #06 - Last Words */}
      <LastWords />

      {/* Rodapé */}
      <Footer />
      
      {/* WhatsApp Flutuante */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;
