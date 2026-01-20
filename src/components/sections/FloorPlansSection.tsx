import { useEffect, useRef, useState } from "react";
import { Bed, Bath, Square, Maximize2 } from "lucide-react";

const floorPlans = [
  {
    id: 1,
    size: "60 m²",
    rooms: "2 dormitórios",
    description: "2 dormitórios com suíte",
    features: ["2 Quartos", "1 Suíte", "1 Banheiro", "Sala integrada"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlight: false,
  },
  {
    id: 2,
    size: "66 m²",
    rooms: "3 dormitórios",
    description: "3 dormitórios com suíte e varanda",
    features: ["3 Quartos", "1 Suíte", "2 Banheiros", "Varanda Gourmet"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
  {
    id: 3,
    size: "62 m²",
    rooms: "2 dormitórios",
    description: "2 dormitórios com suíte e closet",
    features: ["2 Quartos", "1 Suíte", "2 Banheiros", "Closet Exclusivo"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlight: true,
  },
];

const FloorPlansSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openImage, setOpenImage] = useState<string | null>(null);

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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background">
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:opacity-80"
            >
              ✕
            </button>

            <img
              src={openImage}
              alt="Planta ampliada"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-zoomIn"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Conheça as Plantas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Plantas que se adaptam ao{" "}
            <span className="text-primary">seu estilo de vida</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira opções que combinam eficiência e conforto. <br />
            Perfeitas tanto para morar quanto para investir.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {floorPlans.map((plan, index) => {
            const iconColors =
              index % 2 === 0
                ? ["text-primary", "text-gold", "text-gold", "text-primary"]
                : ["text-gold", "text-primary", "text-primary", "text-gold"];

            return (
              <div
                key={plan.id}
                onClick={() => setOpenImage(plan.image)}
                className={`group relative bg-white rounded-2xl overflow-hidden
                  cursor-pointer
                  border border-transparent
                  shadow-lg
                  flex flex-col
                  h-full
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:scale-[1.02] hover:border-gold
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Badge */}
                {plan.highlight && (
                  <div className="absolute top-4 right-4 z-10 bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais vendido
                  </div>
                )}

                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`Planta ${plan.size}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <Maximize2 className="w-5 h-5" />
                      <span className="text-2xl font-bold">{plan.size}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {plan.size} – {plan.rooms}
                    </h3>
                    <p className="text-muted-foreground">
                      🔹 {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        {idx === 0 && <Bed className={`w-4 h-4 ${iconColors[0]}`} />}
                        {idx === 1 && <Bed className={`w-4 h-4 ${iconColors[1]}`} />}
                        {idx === 2 && <Bath className={`w-4 h-4 ${iconColors[2]}`} />}
                        {idx === 3 && <Square className={`w-4 h-4 ${iconColors[3]}`} />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer fixo */}
                  <div className="mt-auto border-t border-border pt-4">
                    <p className="text-sm text-center text-primary font-medium">
                      Ideal para morar ou investir
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
