
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeIn from "./FadeIn";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <ChevronDown
          size={20}
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-0 ${
          isOpen ? "max-h-96" : ""
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para receber meu dinheiro?",
      answer:
        "Para pagamentos via PIX, o recebimento é instantâneo. Para cartões de crédito, o prazo padrão é de até 2 dias úteis. Para boletos, após a compensação (até 3 dias úteis), o valor é liberado em 1 dia útil.",
    },
    {
      question: "Quais são as taxas cobradas?",
      answer:
        "As taxas variam de acordo com o seu plano e volume de vendas. Oferecemos planos a partir de 0,99% por transação, sem mensalidades ou taxas ocultas. Entre em contato com nossa equipe de vendas para uma proposta personalizada.",
    },
    {
      question: "Preciso ter CNPJ para utilizar o RecebeAqui?",
      answer:
        "Não! Aceitamos tanto CNPJ quanto CPF. Profissionais autônomos e MEIs podem utilizar normalmente nossa plataforma com seu CPF.",
    },
    {
      question: "Como funciona a integração com meu site ou e-commerce?",
      answer:
        "Oferecemos diferentes formas de integração: plugins para as principais plataformas de e-commerce, botões de pagamento para copiar e colar em seu site, links e QR codes para compartilhar com seus clientes, além de uma API completa para integrações personalizadas.",
    },
    {
      question: "Existe um valor mínimo para recebimento?",
      answer:
        "Não há valor mínimo para transações ou recebimentos. Você pode receber qualquer valor, desde centavos até milhares de reais.",
    },
    {
      question: "Como funciona a proteção contra fraudes?",
      answer:
        "Nossa plataforma conta com um sistema avançado de análise antifraude que verifica cada transação em tempo real. Também oferecemos ferramentas adicionais de segurança como 3D Secure e monitoramento constante para proteger seu negócio.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o RecebeAqui
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
