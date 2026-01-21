import { useEffect, useRef, useState } from "react";
import { Bed, Bath, Square, Maximize2 } from "lucide-react";
import imov1 from "@/assets/images/imov-1.jpeg";
import imov2 from "@/assets/images/imov-2.jpeg";
import imov3 from "@/assets/images/imov-3.jpeg";

import g1 from "@/assets/images/gallery/1.jpg";
import g2 from "@/assets/images/gallery/2.jpg";
import g3 from "@/assets/images/gallery/3.jpg";
import g4 from "@/assets/images/gallery/4.jpg";
import g5 from "@/assets/images/gallery/5.jpg";
import g6 from "@/assets/images/gallery/6.jpg";
import g7 from "@/assets/images/gallery/7.jpg";
import g8 from "@/assets/images/gallery/8.jpg";
import g9 from "@/assets/images/gallery/9.jpg";
import g10 from "@/assets/images/gallery/10.jpg";
import g11 from "@/assets/images/gallery/11.jpg";
import g12 from "@/assets/images/gallery/12.jpg";
import g13 from "@/assets/images/gallery/13.jpg";
import g14 from "@/assets/images/gallery/14.jpg";
import g15 from "@/assets/images/gallery/15.jpg";
import g16 from "@/assets/images/gallery/16.jpg";
import g17 from "@/assets/images/gallery/17.jpg";
import g18 from "@/assets/images/gallery/18.jpg";
import g19 from "@/assets/images/gallery/19.jpg";
import g20 from "@/assets/images/gallery/20.jpg";
import g21 from "@/assets/images/gallery/21.jpg";
import g22 from "@/assets/images/gallery/22.jpg";
import g23 from "@/assets/images/gallery/23.jpg";

const galleryImages = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, 
  g10, g11, g12, g13, g14, g15, g16, 
  g17, g18, g19, g20, g21, g22, g23
];


const floorPlans = [
  {
    id: 1,
    size: "66 m²",
    rooms: "3 dormitórios",
    description: "3 dormitórios, 2 suítes",
    features: ["3 Quartos", "2 Suíte", "2 Banheiros", "Final 1-4-5-8"],
    image: imov2,
    highlight: true,
  },
  {
    id: 2,
    size: "60 m²",
    rooms: "2 dormitórios",
    description: "2 dormitórios, suíte e varanda",
    features: ["2 Quartos", "1 Suíte", "2 Banheiros", "Final 2-3-6-7"],
    image: imov1,
    highlight: false,
  },
  {
    id: 3,
    size: "66 m²",
    rooms: "3 dormitórios",
    description: "3 dormitórios, 2 suítes e sala ampliada",
    features: ["2 Quartos", "1 Suíte", "2 Banheiros", "Final 1-4-5-8"],
    image: imov3,
    highlight: false,
  },
];

const FloorPlansSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openImage, setOpenImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 240 + 24; // largura + gap
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
                    Em Destaque
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

        {/* Gallery Section */}
        <div className="mt-24">
          <div
            className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Conheça melhor o nosso espaço
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Confira cada detalhe<br />
              <span className="text-primary">do nosso espaço</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ambientes pensados para oferecer conforto, <br />funcionalidade e qualidade de vida em cada detalhe.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Botão esquerdo */}
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10
                        w-12 h-12 rounded-full bg-white shadow-lg
                        flex items-center justify-center
                        hover:bg-primary hover:text-white transition"
            >
              ‹
            </button>

            {/* Carousel */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-hidden px-4"
            >
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setOpenImage(img)}
                  className="flex-shrink-0 w-[240px] h-[150px]
                            rounded-xl overflow-hidden shadow-lg
                            cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`Galeria ${idx + 1}`}
                    className="w-full h-full object-cover
                              group-hover:scale-110
                              transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Botão direito */}
            <button
              onClick={() => scrollCarousel("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10
                        w-12 h-12 rounded-full bg-white shadow-lg
                        flex items-center justify-center
                        hover:bg-primary hover:text-white transition"
            >
              ›
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FloorPlansSection;
