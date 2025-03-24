
import { CreditCard, ShieldCheck, Clock, Globe, CalendarClock, DollarSign } from "lucide-react";
import FadeIn from "./FadeIn";

const PaymentMethods = () => {
  const methods = [
    {
      icon: CreditCard,
      title: "Maquininha Virtual",
      description: "Transforme seu celular em uma máquina de cartão com nossa solução de pagamento digital.",
    },
    {
      icon: ShieldCheck,
      title: "Garantia Chargeback",
      description: "Proteção completa contra contestações de pagamento, garantindo sua segurança financeira.",
    },
    {
      icon: Clock,
      title: "Recebimento em 1 Dia",
      description: "Dinheiro na sua conta em apenas 1 dia útil após a venda ser confirmada.",
    },
    {
      icon: Globe,
      title: "Cartões Internacionais",
      description: "Aceite pagamentos de clientes de qualquer lugar do mundo sem complicações.",
    },
    {
      icon: CalendarClock,
      title: "Parcelamento em 21x",
      description: "Ofereça até 21 parcelas para seus clientes, aumentando suas chances de venda.",
    },
    {
      icon: DollarSign,
      title: "Links de Pagamento",
      description: "O link de pagamento mais seguro do mercado para vender online sem complicações.",
    },
  ];

  return (
    <section id="meios-pagamento" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Sua Maquininha na Palma da Mão
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            O link de pagamento mais seguro do mercado com todas as vantagens que você precisa
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
