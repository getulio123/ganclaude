import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import capaAsset from "@/assets/reuniao-equipe-corporativa.png";
import tecnicaAsset from "@/assets/massagem-ombros-escritorio.png";

export const Route = createFileRoute("/artigos/retencao-talentos")({
  head: () => ({
    meta: [
      { title: "Massagem Corporativa: retenção de talentos e redução do absenteísmo — GAN" },
      {
        name: "description",
        content:
          "Descubra como a massagem corporativa se torna um ativo estratégico para reter talentos, reduzir o absenteísmo e fortalecer o employer branding da sua empresa.",
      },
      { property: "og:title", content: "Massagem Corporativa: retenção de talentos e redução do absenteísmo — GAN" },
      {
        property: "og:description",
        content:
          "ROI do bem-estar corporativo: menos absenteísmo, mais produtividade e equipes engajadas com a GAN Massagem Corporativa.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: capaAsset },
    ],
  }),
  component: ArtigoRetencaoTalentos,
});

function ArtigoRetencaoTalentos() {
  return (
    <>
      <Header />
      <main className="bg-cream pb-24 pt-28">
        <article className="mx-auto max-w-3xl px-6">
          <header>
            <span className="inline-block rounded-full bg-sand px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy-light">
              Gestão de pessoas
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Massagem Corporativa como ativo na retenção de talentos&nbsp;
            </h1>
            <p className="mt-4 text-base text-navy/60">
              Por GAN Massagem Corporativa · Leitura de 6 minutos
            </p>
          </header>

          <figure className="relative mt-10 overflow-hidden rounded-lg shadow-md">
            <img
              src={capaAsset}
              alt="Equipe corporativa diversa em reunião estratégica em escritório moderno"
              className="h-auto w-full"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </figure>

          <div className="prose prose-lg mt-12 max-w-none text-navy/80">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Introdução: a dor do gestor
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              O mercado de trabalho atual exige mais do que salários
              competitivos; exige um ecossistema que priorize a saúde integral
              do colaborador. O absenteísmo e a síndrome de burnout não são
              apenas problemas de saúde pública, são gargalos operacionais que
              impactam diretamente a produtividade e o orçamento anual da sua
              empresa. Mas como combater o estresse no escritório sem
              interromper o fluxo de trabalho? A resposta está na
              implementação estratégica da <strong>massagem corporativa</strong>.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              O ROI do bem-estar: dados que o RH não pode ignorar
            </h2>
            <p className="mt-4 leading-relaxed">
              Implementar um programa de Corporate Wellness não é gasto, é
              investimento com retorno mensurável. Ao oferecer sessões
              regulares de massagem in company, a sua empresa atua em três
              frentes:
            </p>
            <ul className="mt-4 space-y-2 leading-relaxed">
              <li>
                <strong>Redução do Absenteísmo:</strong> a mitigação de dores
                ocupacionais (como LER/DORT) reduz drasticamente as faltas
                médicas e o uso do plano de saúde.
              </li>
              <li>
                <strong>Aumento da Produtividade:</strong> um colaborador sem
                dor e com a mente renovada mantém o foco e a qualidade das
                entregas por muito mais tempo.
              </li>
              <li>
                <strong>Employer Branding:</strong> empresas que cuidam dos
                seus times tornam-se polos de atração e retenção dos melhores
                talentos do mercado.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Modalidades sob medida para a sua operação
            </h2>

            <figure className="my-8 overflow-hidden rounded-lg shadow-md">
              <img
                src={tecnicaAsset}
                alt="Terapeuta aplicando massagem nos ombros de colaboradora em ambiente corporativo"
                className="h-auto w-full"
                loading="lazy"
              />
              <figcaption className="mt-4 mb-4 text-sm text-gray-500 italic text-center">
                Atendimento personalizado realizado no próprio escritório, respeitando a rotina da equipe.
              </figcaption>
            </figure>

            <p className="mt-4 leading-relaxed">
              A massagem corporativa não é um "serviço único". Entendemos que
              cada operação possui uma dinâmica própria:
            </p>
            <ul className="mt-4 space-y-2 leading-relaxed">
              <li>
                <strong>Quick Massage (Otimização):</strong> perfeita para
                ambientes de alta pressão, com sessões de 15 minutos que
                entregam alívio imediato sem tirar o colaborador do seu posto
                por longos períodos.
              </li>
              <li>
                <strong>Massagem Relaxante e Reflexologia:</strong> ideais para
                programas de descompressão semanais ou eventos de foco em
                saúde mental.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Por que escolher a GAN Massagem Corporativa?
            </h2>
            <p className="mt-4 leading-relaxed">
              Mais do que terapeutas, somos especialistas em integrar bem-estar
              à rotina corporativa. Nós não apenas aplicamos a técnica; nós
              desenhamos um cronograma de atendimento que respeita os SLAs da
              sua empresa, garantindo que o programa seja invisível na
              operação, mas visível nos resultados de clima organizacional.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-sand-dark bg-white p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-navy">
              Pronto para transformar o bem-estar em resultado?
            </h3>
            <p className="mt-3 text-navy/70">
              Solicite um diagnóstico personalizado e descubra o programa
              ideal para a sua equipe.
            </p>
            <Link
              to="/"
              hash="contato"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-navy px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-navy/20 transition-all hover:bg-navy-light"
            >
              Solicitar Orçamento
            </Link>
          </div>

          <nav className="mt-12 flex flex-col items-stretch justify-between gap-6 border-t border-slate-200 py-12 sm:flex-row sm:items-center">
            <Link
              to="/artigos/quick-massage"
              className="group inline-flex items-center gap-2 font-inter text-sm font-medium text-slate-500 transition-all hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-slate-400">Anterior</span>
                <span>Quick Massage: produtividade e bem-estar em 15 minutos</span>
              </span>
            </Link>
            <span aria-hidden="true" className="hidden sm:block" />
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}