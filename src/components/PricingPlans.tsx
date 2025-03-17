
import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import CTAButton from "./CTAButton";

const PricingPlans = () => {
  const plans = [
    {
      name: "Iniciante",
      price: "1,99%",
      description: "Ideal para quem está começando",
      features: [
        "Taxa de 1,99% por transação",
        "Pagamentos via PIX e cartão",
        "Recebimento em 2 dias úteis",
        "Suporte via email",
        "Link de pagamento simples",
      ],
      popular: false,
      cta: "Começar Grátis",
    },
    {
      name: "Profissional",
      price: "1,49%",
      description: "Perfeito para negócios em crescimento",
      features: [
        "Taxa de 1,49% por transação",
        "Pagamentos via PIX, cartão e boleto",
        "Recebimento em 1 dia útil",
        "Suporte via email e chat",
        "Checkout personalizado",
        "Relatórios detalhados",
        "Integração com e-commerce",
      ],
      popular: true,
      cta: "Experimentar 14 dias grátis",
    },
    {
      name: "Empresarial",
      price: "0,99%",
      description: "Para negócios estabelecidos",
      features: [
        "Taxa a partir de 0,99% por transação",
        "Todos os meios de pagamento",
        "Recebimento no mesmo dia (PIX)",
        "Suporte prioritário 24/7",
        "Checkout personalizado",
        "Relatórios avançados",
        "API completa",
        "Gerenciador de assinaturas",
      ],
      popular: false,
      cta: "Falar com consultor",
    },
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Planos para Todos os Tamanhos de Negócio
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a receber pagamentos hoje mesmo
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <FadeIn key={plan.name} delay={plans.indexOf(plan) * 200}>
              <div className={`glass-card rounded-2xl p-8 h-full flex flex-col relative overflow-hidden transition-all hover:shadow-lg ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-500"> por transação</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check size={20} className="text-primary shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton 
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  fullWidth
                >
                  {plan.cta}
                </CTAButton>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
