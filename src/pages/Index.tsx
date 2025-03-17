
import { useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/PaymentMethods";
import CTAButton from "@/components/CTAButton";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "RecebeAqui - Pagamentos Simplificados";
  }, []);

  const benefits = [
    "Taxas competitivas no mercado",
    "Setup rápido em minutos",
    "Suporte técnico especializado",
    "Proteção contra fraudes",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeIn className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1">
                  <span className="text-primary text-sm font-semibold">
                    Simplifique seus recebimentos
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                  Receba pagamentos de forma simples e segura
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Plataforma completa de pagamentos para pequenas empresas e profissionais autônomos.
                </p>
              </FadeIn>

              <FadeIn delay={200} className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg">
                  Começar Gratuitamente <ArrowRight size={20} />
                </CTAButton>
                <CTAButton variant="outline" size="lg">
                  Falar com Consultor
                </CTAButton>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-primary shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" className="lg:pl-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative glass-card rounded-3xl p-8">
                  <img
                    src="/placeholder.svg"
                    alt="RecebeAqui Dashboard"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <PaymentMethods />

      {/* Simple CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn>
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-600 p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Comece a receber pagamentos hoje mesmo
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Cadastre-se gratuitamente e comece a aceitar pagamentos em menos de 5 minutos
                </p>
                <CTAButton 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Criar Conta Grátis <ChevronRight size={20} />
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="text-primary-600 font-display font-bold text-2xl mb-6">
              <span className="text-primary">Recebe</span>
              <span className="text-secondary">Aqui</span>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} RecebeAqui. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
