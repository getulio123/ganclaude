import logo01 from "@/assets/01.png";
import logo02 from "@/assets/02.png";
import logo03 from "@/assets/03.png";
import logo04 from "@/assets/04.png";
import logo05 from "@/assets/05.png";
import logo06 from "@/assets/06.png";

const clientes = [
  { nome: "Amitá Laser", url: logo01 },
  { nome: "Conceito K", url: logo02 },
  { nome: "FAR Live Marketing", url: logo03 },
  { nome: "Grupo MM", url: logo04 },
  { nome: "Modell Eventos", url: logo05 },
  { nome: "Pitney Bowes", url: logo06 },
];

export function Clientes() {
  return (
    <section id="clientes" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-navy-light">
            Nossos Clientes
          </span>
          <h2 className="mt-4 text-3xl text-navy sm:text-4xl">
            Empresas que confiam na GAN
          </h2>
          <p className="mt-4 text-navy/60">
            Atendemos empresas de diversos setores e portes em todo o Brasil.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {clientes.map((c) => (
            <img
              key={c.nome}
              src={c.url}
              alt={c.nome}
              loading="lazy"
              className="mx-auto h-20 w-auto object-contain grayscale opacity-50 contrast-125 brightness-100 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
