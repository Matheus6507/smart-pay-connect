
import { CreditCard, QrCode, Receipt, Smartphone, Globe, Cpu } from "lucide-react";
import FadeIn from "./FadeIn";

const PaymentMethods = () => {
  const methods = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito",
      description: "Aceite os principais cartões com taxas competitivas e parcelamento em até 12x",
    },
    {
      icon: QrCode,
      title: "PIX",
      description: "Recebimento instantâneo via PIX com confirmação automática e taxas reduzidas",
    },
    {
      icon: Receipt,
      title: "Boleto",
      description: "Emita boletos com compensação em até 3 dias úteis e notificações automáticas",
    },
    {
      icon: Smartphone,
      title: "Link de Pagamento",
      description: "Envie links personalizados por WhatsApp, SMS ou email para receber à distância",
    },
    {
      icon: Globe,
      title: "Checkout Online",
      description: "Integre facilmente em seu site ou e-commerce com nossa API ou plugins",
    },
    {
      icon: Cpu,
      title: "Assinaturas",
      description: "Crie planos recorrentes e gerencie suas assinaturas de forma automática",
    },
  ];

  return (
    <section id="meios-pagamento" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Aceite Todos os Meios de Pagamento
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofereça mais opções de pagamento para seus clientes e aumente suas vendas em até 30%
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <FadeIn key={method.title} delay={index * 150}>
              <div className="glass-card rounded-2xl p-6 text-center group hover:shadow-lg transition-all h-full flex flex-col">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
