import quickMassageAsset from "@/assets/quick-masssage.png";
import massagemRelaxanteAsset from "@/assets/massagem-relaxante.png";
import reflexologiaAsset from "@/assets/reflexologia.png";
import ginasticaLaboralAsset from "@/assets/ginastica-laboral.png";
import { Activity } from "lucide-react";

const servicos = [
  {
    imagem: quickMassageAsset,
    titulo: "Quick Massage",
    descricao:
      "Uma técnica de massagem rápida de 15 minutos, realizada em cadeiras ergonomicamente projetadas para o ambiente corporativo. Alivia de forma imediata a tensão do pescoço, ombros e região lombar, sem interromper a dinâmica do dia de trabalho.",
  },
  {
    imagem: massagemRelaxanteAsset,
    titulo: "Massagem Relaxante",
    descricao:
      "Realizada em maca por terapeutas qualificados em um espaço de descompressão na própria empresa. Indicada para programas de qualidade de vida regulares ou para o 'Dia do Bem-Estar', proporcionando alívio profundo do estresse acumulado.",
  },
  {
    imagem: reflexologiaAsset,
    titulo: "Reflexologia Podal",
    descricao:
      "Técnica integrativa realizada através da estimulação de pontos reflexos nos pés. Auxilia na redução da ansiedade, melhora a circulação sanguínea dos colaboradores que passam longos períodos sentados e renova a energia da equipe.",
  },
  {
    imagem: ginasticaLaboralAsset,
    titulo: "Ginástica Laboral",
    descricao:
      "Protocolos de exercícios rápidos para correção postural e ativação muscular, ideais para reduzir o sedentarismo e aumentar a disposição da sua equipe.",
    icon: Activity,
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-navy-light">
            Nossos Serviços
          </span>
          <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
            Soluções de bem-estar sob medida para sua empresa
          </h2>
          <p className="mt-4 text-navy/60">
            Oferecemos diferentes modalidades para atender às necessidades
            específicas do seu time e da sua operação.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={s.imagem}
                  alt={s.titulo}
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-navy">{s.titulo}</h3>
                {s.icon && (
                  <s.icon className="mt-2 h-5 w-5 text-navy-light" strokeWidth={2} />
                )}
                <p className="mt-3 text-sm font-medium leading-relaxed text-navy/60">
                  {s.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
