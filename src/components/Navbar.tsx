
import logo from '@/assets/logo.png';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "py-3 bg-white/90 backdrop-blur-lg shadow-sm"
        : "py-5 bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="" className='w-44' />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#recursos">Recursos</NavLink>
          <NavLink href="#como-funciona">Como Funciona</NavLink>
          <NavLink href="#precos">Preços</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <CTAButton variant="outline" size="sm">
            Login
          </CTAButton>
          <CTAButton size="sm">
            Começar Agora
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 top-[57px] bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="container-custom py-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#recursos" mobile>Recursos</NavLink>
            <NavLink href="#como-funciona" mobile>Como Funciona</NavLink>
            <NavLink href="#precos" mobile>Preços</NavLink>
            <NavLink href="#contato" mobile>Contato</NavLink>
          </nav>
          <div className="flex flex-col space-y-3">
            <CTAButton variant="outline" fullWidth>
              Login
            </CTAButton>
            <CTAButton fullWidth>
              Começar Agora
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = ({ href, children, mobile }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "relative font-medium transition-colors hover:text-primary",
        mobile ? "text-gray-600 text-lg block py-2" : "text-gray-600",
        "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;
