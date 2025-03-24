
import ios from '@/assets/badge-app-store.png';
import android from '@/assets/badge-google-play.png';
import b3 from '@/assets/Logo-B3.png';
import logo from '@/assets/logo.png';
import pci from '@/assets/PCI DSS.png';
import { Briefcase, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ReclameAqui from './reclame-aqui';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <img src={logo} alt="" className='w-44' />
              </a>
              <p className="text-gray-400 mb-4">
                Soluções de pagamento simples e seguras para pequenas empresas e profissionais autônomos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary shrink-0 mr-2 mt-1" />
                <p className="text-gray-400">Av. do Contorno, 6664 - Belo Horizonte, MG</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-primary shrink-0 mr-2" />
                <p className="text-gray-400">(31) 99265-5005</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary shrink-0 mr-2" />
                <p className="text-gray-400">contato@recebeaqui.com.br</p>
              </div>
              <div className="flex items-center">
                <Briefcase size={20} className="text-primary shrink-0 mr-2" />
                <p className="text-gray-400">CNPJ: 25.369.743/0001-64</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="text-gray-400 hover:text-white transition-colors">
                  Cadastre-se
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-gray-400 hover:text-white transition-colors">
                  Dúvidas
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
                  Antecipação de recebíveis
                </Link>
              </li>
              <li>
                <Link to="/assinaturas" className="text-gray-400 hover:text-white transition-colors">
                  Pagamentos recorrentes
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gray-400 hover:text-white transition-colors">
                  Fraude Zero
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
            </ul>
          </div>
          
          {/* Mobile apps */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Baixe o app</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-white transition-colors">
                  <img src={android} alt='' className='w-36' />
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  <img src={ios} alt='' className='w-36' />
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  <ReclameAqui />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Secure payments */}
          <div>
            <h3 className="text-lg font-semibold">Pagamento seguro!</h3>
            <ul className="flex items-center space-x-3">
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-white transition-colors">
                  <img src={pci} alt='' className='w-28 rounded-sm' />
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  <img src={b3} alt='' className='w-24' />
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
