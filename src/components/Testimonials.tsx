
import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Proprietária de Loja de Roupas",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "O RecebeAqui transformou meu negócio. Aumentei minhas vendas em 30% ao oferecer diferentes opções de pagamento para meus clientes.",
      stars: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Advogado Autônomo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Fácil de configurar e com taxas muito competitivas. O atendimento ao cliente é sensacional e estou sempre recebendo meu dinheiro no prazo.",
      stars: 5,
    },
    {
      name: "Julia Campos",
      role: "Consultora de Marketing",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Antes eu perdia clientes por não aceitar cartão. Com o RecebeAqui, posso receber pagamentos de qualquer lugar, até mesmo durante reuniões online.",
      stars: 4,
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
            Milhares de empreendedores já transformaram seus negócios com o RecebeAqui
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
      </div>
    </section>
  );
};

export default Testimonials;
