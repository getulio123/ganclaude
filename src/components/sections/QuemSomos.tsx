import quemSomosAsset from "@/assets/quem-somos.png";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-1 lg:order-none">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <img
                src={quemSomosAsset}
                alt="Profissional da GAN Massagem Corporativa em ambiente corporativo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-2 lg:order-none">
            <span className="text-sm font-semibold uppercase tracking-widest text-navy-light">
              Quem Somos
            </span>
            <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
              Há mais de 10 anos transformando o bem-estar corporativo
            </h2>
            <p className="mt-6 leading-relaxed text-navy/70">
              A GAN Massagem Corporativa nasceu com a missão de levar saúde e
              qualidade de vida ao ambiente de trabalho. Atuamos com
              profissionais certificados, rigorosamente selecionados e
              constantemente capacitados para oferecer o melhor atendimento.
            </p>
            <p className="mt-4 leading-relaxed text-navy/70">
              Atendemos empresas de todos os portes — desde startups até
              grandes corporações — sempre com a mesma dedicação e excelência.
              Nosso foco é criar programas de bem-estar que geram resultados
              mensuráveis em produtividade, engajamento e retenção de talentos.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <span className="font-display text-4xl text-navy">10+</span>
                <p className="mt-1 text-sm text-navy/60">Anos de Experiência</p>
              </div>
              <div>
                <span className="font-display text-4xl text-navy">500+</span>
                <p className="mt-1 text-sm text-navy/60">Empresas Atendidas</p>
              </div>
              <div>
                <span className="font-display text-4xl text-navy">50k+</span>
                <p className="mt-1 text-sm text-navy/60">Atendimentos Realizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
