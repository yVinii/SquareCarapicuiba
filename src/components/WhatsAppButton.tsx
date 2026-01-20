import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with actual WhatsApp number
    const phone = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Square Carapicuíba.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5C] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-white" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </button>
  );
};

export default WhatsAppButton;
