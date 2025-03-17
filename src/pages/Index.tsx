
import { useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/PaymentMethods";
import CTAButton from "@/components/CTAButton";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Wallet } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "RecebeAqui - Pagamentos Simplificados para Seu Negócio";
  }, []);

  const benefits = [
    "Taxas a partir de 0,99% por transação",
    "Setup rápido em menos de 5 minutos",
    "Suporte técnico especializado 24/7",
    "Proteção contra fraudes avançada",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gray-50 z-0" />
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeIn className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1">
                  <span className="text-primary text-sm font-semibold">
                    Simplifique seus recebimentos
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Receba pagamentos de forma simples e segura
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Plataforma completa de pagamentos para pequenas empresas e profissionais autônomos, com as menores taxas do mercado.
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
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-4">Milhares de empresas já confiam no RecebeAqui</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-primary shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" className="lg:pl-12 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative glass-card rounded-3xl p-8 shadow-xl">
                  <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-3">
                    <div className="bg-green-500 text-white rounded-full p-2">
                      <ShieldCheck size={24} className="animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-3">
                    <div className="bg-secondary text-white rounded-full p-2">
                      <Wallet size={24} />
                    </div>
                  </div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="RecebeAqui Dashboard"
                    className="w-full rounded-lg shadow-lg"
                  />
                  
                  <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
                    <h4 className="font-semibold text-lg mb-2">Visão Geral</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Vendas do mês</span>
                        <span className="font-semibold">R$ 12.456,78</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Transações</span>
                        <span className="font-semibold">143</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Taxa média</span>
                        <span className="font-semibold text-primary">1.23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partners logos */}
      <Partners />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Payment Methods Section */}
      <PaymentMethods />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Pricing Plans Section */}
      <PricingPlans />
      
      {/* FAQ Section */}
      <FAQ />

      {/* Simple CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-600 p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-white/5 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Comece a receber pagamentos hoje mesmo
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Cadastre-se gratuitamente e comece a aceitar pagamentos em menos de 5 minutos, sem complicações.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <CTAButton 
                      variant="secondary"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Criar Conta Grátis <ChevronRight size={20} />
                    </CTAButton>
                    <CTAButton 
                      size="lg"
                      className="bg-primary-600 text-white border-white border"
                    >
                      Ver Demonstração
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
