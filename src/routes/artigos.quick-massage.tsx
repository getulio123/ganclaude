import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import capaAsset from "@/assets/pessoas-trabalhando-relaxadas-no-escritorio.png";
import tecnicaAsset from "@/assets/massagem-em-cadeira-no-escritorio.png";

export const Route = createFileRoute("/artigos/quick-massage")({
  head: () => ({
    meta: [
      { title: "Quick Massage no Escritório — GAN Massagem Corporativa" },
      {
        name: "description",
        content:
          "Entenda como a Quick Massage reduz o estresse e aumenta a produtividade dos colaboradores em apenas 15 minutos, sem interromper o expediente.",
      },
      { property: "og:title", content: "Quick Massage no Escritório — GAN Massagem Corporativa" },
      {
        property: "og:description",
        content:
          "Como a Quick Massage transforma o ambiente corporativo: menos absenteísmo, mais foco e equipes mais engajadas.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: capaAsset },
    ],
  }),
  component: ArtigoQuickMassage,
});

function ArtigoQuickMassage() {
  return (
    <>
      <Header />
      <main className="bg-cream pb-24 pt-28">
        <article className="mx-auto max-w-3xl px-6">
          <header>
            <span className="inline-block rounded-full bg-sand px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy-light">
              Bem-estar corporativo
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Quick Massage: produtividade e bem-estar em 15 minutos
            </h1>
            <p className="mt-4 text-base text-navy/60">
              Por GAN Massagem Corporativa · Leitura de 5 minutos
            </p>
          </header>

          <figure className="relative mt-10 overflow-hidden rounded-lg shadow-md">
            <img
              src={capaAsset}
              alt="Colaboradores em ambiente de escritório corporativo moderno"
              className="h-auto w-full"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </figure>

          <div className="prose prose-lg mt-12 max-w-none text-navy/80">
            <p className="text-lg leading-relaxed">
              A rotina dos escritórios modernos impõe longas horas em frente à
              tela, reuniões consecutivas e tensão acumulada nos ombros e na
              região cervical. A <strong>Quick Massage</strong> surge como uma
              resposta prática e eficiente: uma sessão rápida, realizada em
              cadeira ergonômica, capaz de devolver foco e disposição em poucos
              minutos.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Por que a Quick Massage é a solução ideal?
            </h2>

            <figure className="my-8 overflow-hidden rounded-lg shadow-md">
              <img
                src={tecnicaAsset}
                alt="Terapeuta aplicando Quick Massage em colaborador sentado em cadeira ergonômica"
                className="h-auto w-full"
                loading="lazy"
              />
              <figcaption className="mt-4 mb-4 text-sm text-gray-500 italic text-center">
                Sessão de Quick Massage realizada no próprio ambiente corporativo.
              </figcaption>
            </figure>

            <p className="mt-6 leading-relaxed">
              Em apenas 15 minutos, a técnica alivia pontos de tensão muscular,
              melhora a circulação e reduz os níveis de cortisol — o hormônio
              do estresse. O colaborador retorna à sua estação de trabalho mais
              relaxado, atento e produtivo, sem qualquer impacto significativo
              na rotina operacional.
            </p>

            <h3 className="mt-10 text-xl font-bold tracking-tight text-navy">
              Benefícios mensuráveis para o RH
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed">
              <li>Redução do absenteísmo e do turnover.</li>
              <li>Melhora no engajamento e na satisfação dos times.</li>
              <li>Fortalecimento da marca empregadora.</li>
              <li>Diminuição de afastamentos por LER/DORT.</li>
            </ul>

            <h3 className="mt-10 text-xl font-bold tracking-tight text-navy">
              Como implementar na sua empresa
            </h3>
            <p className="mt-4 leading-relaxed">
              A GAN cuida de toda a operação: profissionais certificados,
              cadeiras ergonômicas, agendamento por colaborador e relatórios
              periódicos para o RH. Você só precisa indicar o espaço — nós
              transformamos em um momento de cuidado real para o seu time.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-sand-dark bg-white p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-navy">
              Pronto para levar a Quick Massage ao seu escritório?
            </h3>
            <p className="mt-3 text-navy/70">
              Solicite um orçamento personalizado e descubra como cuidar da sua
              equipe.
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
            <span aria-hidden="true" className="hidden sm:block" />
            <Link
              to="/artigos/retencao-talentos"
              className="group inline-flex items-center justify-end gap-2 font-inter text-sm font-medium text-slate-500 transition-all hover:text-slate-900 sm:text-right"
            >
              <span className="flex flex-col sm:items-end">
                <span className="text-xs uppercase tracking-widest text-slate-400">Próximo</span>
                <span>Massagem Corporativa como ativo na retenção de talentos</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}