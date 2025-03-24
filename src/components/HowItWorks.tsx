
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Crie sua conta",
      description: "Cadastre-se gratuitamente em menos de 5 minutos e verifique seus dados.",
    },
    {
      number: "02",
      title: "Configure seu link de pagamento",
      description: "Personalize as opções de pagamento, incluindo parcelamento em até 21x e cartões internacionais.",
    },
    {
      number: "03",
      title: "Compartilhe com seus clientes",
      description: "Envie o link de pagamento por WhatsApp, email, redes sociais ou onde preferir.",
    },
    {
      number: "04",
      title: "Receba em 1 dia útil",
      description: "O dinheiro cai na sua conta em apenas 1 dia útil, com total proteção contra chargebacks.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sua maquininha virtual na palma da mão em 4 passos simples
          </p>
        </FadeIn>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 200}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white font-bold text-xl mb-6 relative z-10">
                    {step.number}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] transform -translate-y-1/2">
                      <ArrowRight size={24} className="text-gray-300" />
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
