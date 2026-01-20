import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Train, ShoppingBag, Utensils, MapPin, ArrowRight } from "lucide-react";

const locationFeatures = [
  {
    icon: Train,
    title: "Estação de Trem",
    description: "Acesso rápido ao transporte público",
  },
  {
    icon: ShoppingBag,
    title: "Comércio Variado",
    description: "Padarias, mercados e serviços",
  },
  {
    icon: Utensils,
    title: "Restaurantes",
    description: "Opções de lazer e gastronomia",
  },
  {
    icon: MapPin,
    title: "Vias de Acesso",
    description: "Fácil conexão com a região",
  },
];

const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCTA = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div 
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Onde você vai morar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Localização <span className="text-gold">Premium</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Viva na área mais conectada de Carapicuíba,<br /> com tudo a poucos passos de casa:
              {/* estação de trem, comércio variado como padarias, mercados e serviços, 
              restaurantes e opções de lazer, além de fácil acesso às principais vias da região. */}
            </p>
          </div>

          {/* Location Features Grid */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {locationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className={`pt-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-white/80 mb-6">
              Viva na área mais conectada de Carapicuíba, com tudo a poucos passos de casa:
            </p>
            <Button
              onClick={handleCTA}
              size="lg"
              className="gradient-gold text-white hover:opacity-90 transition-all duration-300 h-14 px-8 text-lg font-semibold group"
            >
              Eu quero ter minha casa própria
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
