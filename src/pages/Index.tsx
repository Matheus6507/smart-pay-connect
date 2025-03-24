import { useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import CTAButton from "@/components/CTAButton";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TaxSimulator from "@/components/TaxSimulator";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, CreditCard } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "RecebeAqui - Pagamentos Simplificados para Seu Negócio";
  }, []);

  const proofPoints = [
    {
      text: "Mais de 4.000 empresas e profissionais autônomos ativos",
      icon: CheckCircle2,
    },
    {
      text: "R$ 2.5 milhões processados por mês",
      icon: CheckCircle2,
    },
    {
      text: "Certificação PCI DSS",
      icon: CheckCircle2,
    },
    {
      text: "Empresa verificada pelo ReclameAqui",
      icon: CheckCircle2,
    },
    {
      text: "Parceria oficial com a B3",
      icon: CheckCircle2,
    },
  ];

  const problems = [
    "Cansado de tomar prejuízo com chargebacks que parecem mágica?",
    "Já perdeu dinheiro com golpes em vendas online?",
    "Seu cliente quer parcelar em 10x e sua maquininha só aceita até 3?",
    "Precisa do dinheiro, mas o pagamento só cai depois de 30 dias?",
    "Está preso a taxas absurdas e mensalidades escondidas?",
    "Seu sistema de pagamento atual parece um quebra-cabeça mal montado?",
  ];

  const solutions = [
    "Recebimento em 1 dia útil, pra manter seu fluxo de caixa saudável",
    "Links de pagamento blindados, com antifraude e proteção contra chargebacks",
    "Certificação internacional PCI DSS, garantindo segurança máxima",
    "Parceria com a B3 — estamos juntos das maiores empresas do Brasil",
    "Empresa verificada no ReclameAqui, com reputação comprovada",
    "Aceite cartões nacionais e internacionais, além de PIX e boletos",
    "Parcelamento em até 21x, para aumentar seu ticket médio",
    "Cobranças recorrentes com facilidade (ótimo pra planos e assinaturas)",
    "Split de pagamentos automático, ideal para comissões, parceiros ou marketplaces",
    "E o melhor: sem mensalidade ou taxas fixas. Você só paga pelo que vende.",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Cabeçalho/Hero Section */}
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
                  Receba pagamentos online com a segurança das grandes empresas
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Links de pagamento com certificação PCI DSS, empresa verificada no ReclameAqui e parceria oficial com a B3.
                </p>
              </FadeIn>

              <FadeIn delay={200} className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg">
                  Criar minha conta grátis agora <ArrowRight size={20} />
                </CTAButton>
                <p className="text-sm text-gray-600 mt-2">
                  Sem mensalidade. Proteção contra fraudes. Pagamento em 1 dia útil.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-4">Milhares de empresas já confiam no RecebeAqui</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {proofPoints.slice(0, 4).map((point) => (
                      <div key={point.text} className="flex items-center gap-2">
                        <point.icon size={20} className="text-primary shrink-0" />
                        <span className="text-gray-600 text-sm">{point.text}</span>
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
                      <CreditCard size={24} />
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
                      <div className="flex items-center gap-2 mt-2">
                        <img src="https://via.placeholder.com/40x20?text=PCI" alt="PCI DSS" className="h-5" />
                        <img src="https://via.placeholder.com/40x20?text=Reclame" alt="ReclameAqui" className="h-5" />
                        <img src="https://via.placeholder.com/40x20?text=B3" alt="B3" className="h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Prova Social */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex items-center justify-center gap-2 p-3">
                  <point.icon size={24} className="text-primary shrink-0" />
                  <span className="text-gray-700 font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* 3. Os Problemas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
              Problemas que a RecebeAqui resolve para você
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-6 rounded-xl bg-gray-50 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{problem}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. As Soluções */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
              A RecebeAqui resolve tudo isso
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Nossa solução completa oferece tudo o que você precisa para vender com segurança
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-primary shrink-0 mt-1" />
                  <p className="text-gray-700">{solution}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section - Modificado para "Como funciona" */}
      <Features />
      
      {/* Tax Simulator Section - Mantendo o simulador */}
      <TaxSimulator />
      
      {/* How It Works Section - mantida, mas agora representa parte da seção 5 */}
      <HowItWorks />
            
      {/* Testimonials Section - Modificada para usar os novos depoimentos */}
      <Testimonials />
      
      {/* FAQ Section - Atualizada com as novas perguntas */}
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
                    Vendas seguras, rápidas e sem complicação
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Crie sua conta grátis e comece a vender com segurança total — sem mensalidade.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <CTAButton 
                      variant="secondary"
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Criar minha conta grátis agora <ArrowRight size={20} />
                    </CTAButton>
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <img src="https://via.placeholder.com/60x30?text=PCI" alt="PCI DSS" className="h-8" />
                    <img src="https://via.placeholder.com/60x30?text=Reclame" alt="ReclameAqui" className="h-8" />
                    <img src="https://via.placeholder.com/60x30?text=B3" alt="B3" className="h-8" />
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
