
import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empresário",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Antes eu tomava prejuízo com chargebacks. Desde que migrei pra RecebeAqui, não tive mais nenhum caso.",
      stars: 5,
    },
    {
      name: "Mariana Silva",
      role: "Lojista Online",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Com a RecebeAqui, recebo em 1 dia útil e posso manter meu fluxo de caixa saudável.",
      stars: 5,
    },
    {
      name: "Julia Campos",
      role: "Consultora",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Passei de 3 para mais de 40 vendas por mês, graças à confiança dos meus clientes nos links da RecebeAqui.",
      stars: 5,
    },
    {
      name: "Pedro Oliveira",
      role: "Marketplace",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "A função de split salvou minha operação com parceiros. Tudo automático e sem erro.",
      stars: 5,
    },
    {
      name: "Roberto Almeida",
      role: "E-commerce",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Já vendi mais de R$ 150 mil com a RecebeAqui, e nunca tive problema com pagamento ou fraude. E sei que estou com uma empresa certificada e reconhecida pelo mercado.",
      stars: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Histórias reais de empreendedores que transformaram seus negócios com o RecebeAqui
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 200}>
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={(index + 3) * 200}>
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
