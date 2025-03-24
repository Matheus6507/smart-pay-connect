
import {
  Award,
  Clock,
  CreditCard,
  DollarSign,
  Link,
  QrCode,
  RefreshCcw,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import FadeIn from "./FadeIn";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Links de pagamento personalizados",
      description: "Crie links para aceitar cartão, boleto e PIX na hora.",
    },
    {
      icon: RefreshCcw,
      title: "Cobranças recorrentes automáticas",
      description: "Ideal para assinaturas e mensalidades, sem precisar cobrar manualmente.",
    },
    {
      icon: ShieldCheck,
      title: "Antifraude e garantia contra chargebacks",
      description: "Proteção avançada contra fraudes e contestações.",
    },
    {
      icon: Clock,
      title: "Antecipação com pagamento em 1 dia útil",
      description: "Receba o valor das suas vendas em apenas 1 dia útil.",
    },
    {
      icon: Smartphone,
      title: "Cartões nacionais e internacionais",
      description: "Parcelamento em até 21x e aceitação de cartões de todo o mundo.",
    },
    {
      icon: DollarSign,
      title: "Split de pagamento automático",
      description: "Divida pagamentos entre parceiros e comissionados automaticamente.",
    },
    {
      icon: QrCode,
      title: "Boletos e QR Code PIX nativos",
      description: "Gere boletos e QR Codes PIX sem complicação.",
    },
    {
      icon: Link,
      title: "Funciona via link, sem precisar de site",
      description: "Compartilhe links de pagamento sem precisar ter um site ou loja online.",
    },
    {
      icon: Award,
      title: "Certificações e parcerias de peso",
      description: "PCI DSS, Parceria com a B3 e verificação no ReclameAqui."
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Recursos Exclusivos da RecebeAqui
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sua maquininha virtual completa com tudo que você precisa para vender online
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 100}>
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
