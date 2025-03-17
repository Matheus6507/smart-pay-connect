
import { BarChart3, Clock, CreditCard, Lock, Percent, Smartphone } from "lucide-react";
import FadeIn from "./FadeIn";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Checkout Simplificado",
      description: "Interface intuitiva que aumenta a conversão de vendas e reduz abandonos de carrinho.",
    },
    {
      icon: Lock,
      title: "Segurança Avançada",
      description: "Proteção antifraude e criptografia de dados que garantem a segurança de suas transações.",
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Seus clientes podem pagar de qualquer dispositivo, seja celular, tablet ou computador.",
    },
    {
      icon: Clock,
      title: "Recebimento Rápido",
      description: "Receba valores de suas vendas em até 1 dia útil diretamente na sua conta bancária.",
    },
    {
      icon: Percent,
      title: "Taxas Competitivas",
      description: "Tenha acesso às melhores taxas do mercado sem surpresas ou custos ocultos.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Acompanhe suas vendas em tempo real com dashboards e relatórios completos.",
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Recursos Para Alavancar Seu Negócio
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tudo o que você precisa para começar a receber pagamentos online de forma segura e eficiente
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 150}>
              <div className="p-6 rounded-xl hover:shadow-md transition-all border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
