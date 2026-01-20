import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Key, Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary" />
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
              Não perca essa oportunidade
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Realize seu <span className="text-primary">sonho</span> agora
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não perca a chance de morar no coração de Carapicuíba <br />com todas as 
              facilidades que você sempre quis!
            </p>
          </div>

          {/* CTA text */}
          <div 
            className={`py-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-foreground flex items-center justify-center gap-2">
              {/* <span className="text-2xl">👉</span> */}
              <span>Clique abaixo para falar com um consultor e garantir a sua unidade!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white h-16 px-10 text-lg font-semibold group rounded-xl"
            >
              <Key className="mr-3 w-6 h-6" />
              Alugar
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={handleCTA}
              size="lg"
              className="gradient-gold text-white h-16 px-10 text-lg font-semibold group rounded-xl animate-pulse-glow"
            >
              <Home className="mr-3 w-6 h-6" />
              Comprar
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
