import { TrendingDown, TrendingUp, Users, Sparkles } from "lucide-react";

const beneficios = [
  {
    icon: TrendingDown,
    titulo: "Redução do Absenteísmo",
    descricao:
      "Diminua o número de faltas, licenças médicas e afastamentos causados por estresse acumulado e dores musculares crônicas na equipe.",
  },
  {
    icon: TrendingUp,
    titulo: "Estímulo à Produtividade",
    descricao:
      "Colaboradores relaxados e sem dores apresentam maior nível de foco, criatividade, clareza mental e assertividade em suas funções diárias.",
  },
  {
    icon: Users,
    titulo: "Fortalecimento do Employer Branding",
    descricao:
      "Torne a sua empresa um local muito mais desejado para se trabalhar, melhorando o clima organizacional e retendo os melhores talentos.",
  },
  {
    icon: Sparkles,
    titulo: "Combate a LER/DORT",
    descricao:
      "Atue diretamente na prevenção de Lesões por Esforço Repetitivo e Distúrbios Osteomusculares Relacionados ao Trabalho dentro do próprio escritório.",
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-navy-light">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
            Por que investir em massagem corporativa?
          </h2>
          <p className="mt-4 text-navy/60">
            Dados comprovam: bem-estar no trabalho é investimento, não custo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="flex gap-6 rounded-2xl border border-sand-dark bg-cream p-8 transition-all hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="shrink-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <b.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">{b.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {b.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
