import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Phone, Mail, User } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Visual only for now
    alert("Obrigado pelo interesse! Em breve entraremos em contato.");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-gold">
              <Home className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Square Carapicuíba</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Bem-vindo ao Seu Novo Estilo de Vida em{" "}
              <span className="text-gold">Carapicuíba</span>
            </h1>
            
            <p className="text-lg md:text-md text-white/90 max-w-xl">
              O lugar perfeito para morar com qualidade, conforto e praticidade. 
              Realize o sonho da casa própria com quem entende do assunto.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-gold font-bold">60-66</span>
                </div>
                <span className="text-sm">m²</span>
              </div>
              <div className="w-px h-8 bg-white/30" />
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-gold font-bold">2-3</span>
                </div>
                <span className="text-sm">Dormitórios</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl opacity-0 animate-fade-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Formulário de Cadastro
              </h2>
              <p className="text-muted-foreground">
                Preencha os dados abaixo no formulário e aguarde o nosso contato.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground">Nome</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="pl-10 h-12 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-foreground">Telefone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="pl-10 h-12 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold gradient-gold hover:opacity-90 transition-all duration-5000 animate-pulse-glow"
              >
                Eu quero ter minha casa própria
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Ao enviar, você concorda com nossa política de privacidade.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
