import { useEffect, useRef, useState } from "react";
import { Bed, Bath, Square, Maximize2 } from "lucide-react";

const LastWords = () => {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Conheça as Plantas
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            <span className="text-primary">Square Carapicuíba{" "}</span><br />
            Onde o melhor da vida acontece
          </h2>
          <p className="text-lg text-muted-foreground">
            Seja para construir sua história ou investir com inteligência, <br />
            este é o lugar certo para você e sua família.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LastWords;
