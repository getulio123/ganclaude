import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoGan from "@/assets/logo-gan.svg";

const navLinks = [
  { label: "Início", hash: "inicio" },
  { label: "Serviços", hash: "servicos" },
  { label: "Quem Somos", hash: "quem-somos" },
  { label: "Benefícios", hash: "beneficios" },
  { label: "Clientes", hash: "clientes" },
  { label: "Contato", hash: "contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" hash="inicio" className="flex items-center">
          <img
            src={logoGan}
            alt="GAN Massagem Corporativa"
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to="/"
              hash={link.hash}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contato"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-navy-light"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-sand-dark bg-cream px-6 pb-6 md:hidden">
          <nav className="mt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                className="text-base font-medium text-navy/80 transition-colors hover:text-navy"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contato"
              className="mt-2 rounded-md bg-navy px-5 py-2.5 text-center text-sm font-medium text-cream transition-colors hover:bg-navy-light"
              onClick={() => setIsMobileOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
