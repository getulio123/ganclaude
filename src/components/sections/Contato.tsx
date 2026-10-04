import { useState } from "react";
import { Globe, Phone, Mail, Send, Loader2, AlertCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const FORM_INICIAL = {
  nome: "",
  email: "",
  empresa: "",
  telefone: "",
  colaboradores: "",
  mensagem: "",
};

export function Contato() {
  const [form, setForm] = useState(FORM_INICIAL);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enviando) return;

    setEnviando(true);
    setErro(null);

    try {
      const res = await fetch(`${API_URL}/api/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(
          data?.erros?.join(" ") ||
            "Não foi possível enviar sua mensagem. Tente novamente.",
        );
      }

      setForm(FORM_INICIAL);
      setEnviado(true);
      setTimeout(() => setEnviado(false), 6000);
    } catch (err) {
      setErro(
        err instanceof TypeError
          ? "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente."
          : (err as Error).message,
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contato" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Coluna da Esquerda — Dados Institucionais */}
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#1A365D" }}
            >
              Contato
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl"
              style={{ color: "#1A365D" }}
            >
              Vamos conversar sobre o bem-estar da sua equipe
            </h2>
            <p className="mt-6 leading-relaxed text-navy/70">
              Preencha o formulário ao lado e nossa equipe comercial entrará em
              contato em até 24 horas úteis com uma proposta personalizada para
              sua empresa.
            </p>

            <div className="mt-10 space-y-6">
              {/* Atendimento Nacional */}
              <div className="flex items-start gap-4">
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(26,54,93,0.1)", color: "#1A365D" }}
                >
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium" style={{ color: "#1A365D" }}>
                    Atendimento Nacional
                  </p>
                  <p className="mt-1 text-sm text-navy/60">
                    Levamos toda a estrutura de bem-estar diretamente para a sede
                    da sua empresa.
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(26,54,93,0.1)", color: "#1A365D" }}
                >
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium" style={{ color: "#1A365D" }}>
                    Telefone
                  </p>
                  <p className="mt-1 text-sm text-navy/60">
                    (11) 98110-2443
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(26,54,93,0.1)", color: "#1A365D" }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium" style={{ color: "#1A365D" }}>
                    E-mail
                  </p>
                  <p className="mt-1 text-sm text-navy/60">
                    contato@ganmassagemcorporativa.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita — Formulário */}
          <div className="rounded-2xl border border-sand-dark bg-cream p-8 sm:p-10">
            {enviado ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(26,54,93,0.1)", color: "#1A365D" }}
                >
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl" style={{ color: "#1A365D" }}>
                  Mensagem enviada!
                </h3>
                <p className="mt-2 text-navy/60">
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="mb-6 text-xl font-medium sm:text-2xl"
                  style={{ color: "#1A365D" }}
                >
                  Solicite uma Proposta Personalizada
                </h3>

                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "#1A365D" }}
                  >
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                    style={{ color: "#1A365D" }}
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                      style={{ color: "#1A365D" }}
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                      style={{ color: "#1A365D" }}
                      placeholder="seu@emailcorporativo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-medium"
                      style={{ color: "#1A365D" }}
                    >
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                      style={{ color: "#1A365D" }}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "#1A365D" }}
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={form.empresa}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                    style={{ color: "#1A365D" }}
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="colaboradores"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "#1A365D" }}
                  >
                    Quantidade de Colaboradores
                  </label>
                  <select
                    id="colaboradores"
                    name="colaboradores"
                    required
                    value={form.colaboradores}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                    style={{ color: "#1A365D" }}
                  >
                    <option value="" disabled>
                      Selecione uma faixa
                    </option>
                    <option value="10-50">10 a 50 colaboradores</option>
                    <option value="51-200">51 a 200 colaboradores</option>
                    <option value="200+">Acima de 200 colaboradores</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "#1A365D" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-sand-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20"
                    style={{ color: "#1A365D" }}
                    placeholder="Conte-nos sobre as necessidades da sua empresa..."
                  />
                </div>

                {erro && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{erro}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enviando}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold text-cream transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none"
                  style={{ backgroundColor: "#1A365D" }}
                >
                  {enviando ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
