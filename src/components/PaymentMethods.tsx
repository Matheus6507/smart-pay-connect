
import { CreditCard, QrCode, Receipt } from "lucide-react";
import FadeIn from "./FadeIn";

const PaymentMethods = () => {
  const methods = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito",
      description: "Aceite os principais cartões com taxas competitivas",
    },
    {
      icon: QrCode,
      title: "PIX",
      description: "Recebimento instantâneo via PIX",
    },
    {
      icon: Receipt,
      title: "Boleto",
      description: "Emita boletos com compensação em até 3 dias úteis",
    },
  ];

  return (
    <section id="meios-pagamento" className="py-20 bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Aceite Todos os Meios de Pagamento
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofereça mais opções de pagamento para seus clientes e aumente suas vendas
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <FadeIn key={method.title} delay={index * 200}>
              <div className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform">
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
