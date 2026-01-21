import { Home, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoSquare from "@/assets/images/logo_square.png";
import logoBuilt from "@/assets/images/logo_builtimoveis.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-16">
              <img
                src={logoSquare}
                alt="Square Carapicuíba"
                className="h-24 w-auto"
              />
              <img
                src={logoBuilt}
                alt="Built"
                className="h-24 w-auto"
              />
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Onde o melhor da vida acontece. Seja para construir sua história 
              ou investir com inteligência, este é o lugar certo para você e sua família.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </a>
              <a 
                href="mailto:contato@squarecarapicuiba.com.br" 
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@squarecarapicuiba.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Centro de Carapicuíba, SP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-gold transition-colors">
                O Empreendimento
              </a>
              <a href="#" className="block text-white/80 hover:text-gold transition-colors">
                Plantas
              </a>
              <a href="#" className="block text-white/80 hover:text-gold transition-colors">
                Localização
              </a>
              <a href="#" className="block text-white/80 hover:text-gold transition-colors">
                Contato
              </a>
            </div>
          </div> */}

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Redes Sociais</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Siga-nos para novidades e atualizações sobre o empreendimento.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-center justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © 2025 Square Carapicuíba. Todos os direitos reservados.
            </p>
            {/* <p>
              Square Carapicuíba – Onde o melhor da vida acontece
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
