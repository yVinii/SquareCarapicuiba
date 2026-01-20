import { useEffect, useRef, useState } from "react";
import { Home, Maximize, Sofa, Sun, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Apartamentos amplos de 2 e 3 dormitórios com suíte",
  },
  {
    icon: Maximize,
    title: "Opções de plantas de 60 a 66 m²",
  },
  {
    icon: Sofa,
    title: "Ambientes planejados para conforto e bem-estar",
  },
  {
    icon: Sun,
    title: "Varanda integrada e pronta para receber momentos especiais",
  },
];

const FeaturesSection = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                alt="Interior moderno de apartamento"
                className="
                  w-full object-cover
                  h-64
                  sm:h-72
                  md:h-80
                  lg:h-[500px]
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="
                absolute
                bottom-4 right-4
                md:-bottom-6 md:-right-6
                bg-primary text-white
                px-5 py-4
                rounded-2xl shadow-xl
              "
            >
              <p className="text-2xl md:text-3xl font-bold">60–66</p>
              <p className="text-xs md:text-sm opacity-90">metros²</p>
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Diferenciais
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Mais que um endereço,{" "}<br />
                <span className="text-primary">um estilo de vida completo</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                No Square Carapicuíba, você encontra:
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-xl shadow-sm
                    transition-opacity transition-transform
                    duration-300 ease-out
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100 + 400}ms` : "0ms",
                  }}
                >
                  {/* CARD INTERNO (hover aqui) */}
                  <div
                    className="
                      flex items-center gap-4 p-4
                      rounded-xl
                      transition-transform transition-shadow
                      duration-300 ease-out
                      group-hover:shadow-lg
                    "
                  >
                    {/* Ícone principal */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Texto + check */}
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="font-medium text-foreground leading-tight">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
