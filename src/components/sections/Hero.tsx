import heroAsset from "@/assets/hero.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden bg-[center_bottom_35%] pt-[4.5rem] pb-[clamp(0.75rem,2svh,1.5rem)] md:bg-center"
      style={{
        backgroundImage: `url(${heroAsset})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl rounded-xl bg-white/90 p-4 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:backdrop-blur-none lg:max-w-[50%] lg:pr-12">
          <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-navy-light">
            Bem-estar corporativo
          </span>

          <h1 className="my-[clamp(0.5rem,1.8svh,1rem)] text-[clamp(1.5rem,min(7vw,5.2svh),3rem)] font-bold leading-[1.15] tracking-tight text-navy">
            Uma forma simples, eficiente e prática de aumentar a produtividade da sua equipe
          </h1>

          <p className="mb-[clamp(0.75rem,2.4svh,1.5rem)] text-[clamp(0.8125rem,2.1svh,1rem)] leading-snug text-navy/80 sm:leading-relaxed">
            Solução completa de bem-estar corporativo pensada para o RH: leve
            massagem profissional ao seu escritório e reduza o estresse, o
            absenteísmo e o turnover, fortalecendo o engajamento e a saúde dos
            seus colaboradores.
          </p>

          <div className="flex flex-wrap gap-[clamp(0.625rem,1.6svh,1rem)]">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-[clamp(0.625rem,1.6svh,0.875rem)] text-sm font-semibold text-cream sm:px-8 shadow-lg shadow-navy/20 transition-all hover:bg-navy-light hover:shadow-xl"
            >
              Solicitar Orçamento Corporativo
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-md border border-navy/30 bg-cream/60 px-6 py-[clamp(0.625rem,1.6svh,0.875rem)] text-sm font-semibold text-navy sm:px-8 backdrop-blur-sm transition-all hover:bg-cream/80"
            >
              Conheça os Serviços
            </a>
          </div>

          <div className="mt-[clamp(0.625rem,2svh,1.25rem)] flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-slate-600 sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-navy-light sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>+500 empresas atendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-navy-light sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Profissionais certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
