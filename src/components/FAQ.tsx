
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
      question: "A RecebeAqui é segura? Possui certificações?",
      answer:
        "Sim, a RecebeAqui é extremamente segura. Possuímos certificação internacional PCI DSS, somos verificados pelo ReclameAqui e temos parceria oficial com a B3. Estes são os mais altos padrões de segurança para sistemas de pagamento.",
    },
    {
      question: "Como funciona a proteção contra fraudes e chargebacks?",
      answer:
        "Nossa plataforma utiliza um sistema avançado de análise de risco que verifica cada transação em tempo real. Para chargebacks, oferecemos garantias em casos aprovados pelo nosso sistema antifraude, protegendo seu negócio de contestações injustas.",
    },
    {
      question: "Quanto tempo demora para eu receber o dinheiro das vendas?",
      answer:
        "Para pagamentos via PIX, o recebimento é instantâneo. Para cartões de crédito, o prazo padrão é de apenas 1 dia útil, um dos mais rápidos do mercado. Para boletos, após a compensação, o valor é liberado em 1 dia útil.",
    },
    {
      question: "Quais são as taxas por transação?",
      answer:
        "Nossas taxas começam em 0,99% por transação, dependendo do seu volume de vendas e do plano escolhido. Utilize nosso simulador de taxas nesta página para calcular exatamente quanto pagará em cada transação.",
    },
    {
      question: "Existe alguma mensalidade ou custo fixo?",
      answer:
        "Não! Você só paga pelas vendas realizadas. Não cobramos mensalidade, taxa de adesão, ou qualquer outro custo fixo. Somente a taxa por transação quando você efetivamente vende.",
    },
    {
      question: "Posso parcelar em quantas vezes?",
      answer:
        "Oferecemos parcelamento em até 21 vezes, um dos maiores do mercado. Isso ajuda a aumentar seu ticket médio e converter mais vendas.",
    },
    {
      question: "Como funciona o split de pagamento entre parceiros?",
      answer:
        "O split permite divisão automática dos valores recebidos entre diferentes contas. É ideal para marketplaces, comissões ou negócios com sócios, eliminando a necessidade de transferências manuais.",
    },
    {
      question: "Preciso ter CNPJ para usar a RecebeAqui?",
      answer:
        "Não! Aceitamos tanto CNPJ quanto CPF. Profissionais autônomos podem utilizar normalmente nossa plataforma apenas com seu CPF.",
    },
    {
      question: "Como faço para gerar um link de pagamento?",
      answer:
        "É muito simples: basta criar sua conta, configurar o valor e as opções de pagamento desejadas, e o link estará pronto para compartilhar com seus clientes via WhatsApp, e-mail, redes sociais ou qualquer outro canal.",
    },
    {
      question: "Posso fazer cobranças recorrentes (mensais)?",
      answer:
        "Sim! Nossa plataforma oferece sistema completo de assinaturas e cobranças recorrentes, ideal para mensalidades, planos e serviços por assinatura. Tudo automatizado e com controle total.",
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
