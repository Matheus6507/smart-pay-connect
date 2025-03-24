
import FadeIn from "./FadeIn";
import { CreditCard, Shield, DollarSign, Globe, Calendar, Clock } from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Maquininha Virtual",
      description: "Aceite pagamentos na palma da mão sem precisar de equipamentos físicos"
    },
    {
      icon: Shield,
      title: "Proteção Chargeback",
      description: "Garantia contra contestações de pagamentos em suas vendas"
    },
    {
      icon: Clock,
      title: "Recebimento em 1 dia",
      description: "Dinheiro na sua conta em apenas 1 dia útil após a venda"
    },
    {
      icon: Globe,
      title: "Cartões Internacionais",
      description: "Aceite pagamentos de clientes de qualquer lugar do mundo"
    },
    {
      icon: Calendar,
      title: "Parcelamento em 21x",
      description: "Ofereça condições exclusivas de pagamento para seus clientes"
    },
    {
      icon: DollarSign,
      title: "Link Seguro",
      description: "O link de pagamento mais seguro do mercado para suas vendas"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-10">
            A maquininha virtual na palma da sua mão
          </h3>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg">{benefit.title}</h4>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
