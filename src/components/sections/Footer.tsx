import logoGan from "@/assets/logo-gan.svg";

export function Footer() {
  return (
    <footer className="bg-navy py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* GAN */}
          <div>
            <img
              src={logoGan}
              alt="GAN Massagem Corporativa"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 font-['Inter'] text-sm leading-relaxed text-cream/60">
              Massagem corporativa profissional para empresas. Cuidamos da sua
              equipe para que ela cuide do seu negócio.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-['Poppins'] text-xs font-semibold uppercase tracking-widest text-cream">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Benefícios", href: "#beneficios" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-['Inter'] text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-['Poppins'] text-xs font-semibold uppercase tracking-widest text-cream">
              Serviços
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                "Quick Massage",
                "Massagem Relaxante",
                "Reflexologia Podal",
              ].map((item) => (
                <li key={item}>
                  <span className="font-['Inter'] text-sm text-cream/60 transition-colors hover:text-cream">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-['Poppins'] text-xs font-semibold uppercase tracking-widest text-cream">
              Contato
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="font-['Inter'] text-sm text-cream/60">
                Telefone/WhatsApp: (11) 98110-2443
              </li>
              <li className="font-['Inter'] text-sm text-cream/60">
                E-mail: contato@ganmassagemcorporativa.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="font-['Inter'] text-xs text-cream/40">
            © 2026 GAN Massagem Corporativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
