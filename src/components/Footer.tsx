
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="font-display font-bold text-2xl mb-4">
                <span className="text-primary">Recebe</span>
                <span className="text-secondary">Aqui</span>
              </div>
              <p className="text-gray-400 mb-4">
                Soluções de pagamento simples e seguras para pequenas empresas e profissionais autônomos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary shrink-0 mr-2 mt-1" />
                <p className="text-gray-400">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-primary shrink-0 mr-2" />
                <p className="text-gray-400">(11) 4002-8922</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary shrink-0 mr-2" />
                <p className="text-gray-400">contato@recebeaqui.com.br</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="text-gray-400 hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-gray-400 hover:text-white transition-colors">
                  Programa de Parceiros
                </Link>
              </li>
              <li>
                <Link to="/imprensa" className="text-gray-400 hover:text-white transition-colors">
                  Imprensa
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pagamentos" className="text-gray-400 hover:text-white transition-colors">
                  Gateway de Pagamentos
                </Link>
              </li>
              <li>
                <Link to="/assinaturas" className="text-gray-400 hover:text-white transition-colors">
                  Assinaturas Recorrentes
                </Link>
              </li>
              <li>
                <Link to="/links" className="text-gray-400 hover:text-white transition-colors">
                  Links de Pagamento
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gray-400 hover:text-white transition-colors">
                  Checkout Online
                </Link>
              </li>
              <li>
                <Link to="/integracao" className="text-gray-400 hover:text-white transition-colors">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/seguranca" className="text-gray-400 hover:text-white transition-colors">
                  Segurança
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} RecebeAqui. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
