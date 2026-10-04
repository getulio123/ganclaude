import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const PORT = Number(process.env.PORT) || 3001;

// Origens liberadas para chamar a API (separadas por vírgula)
const CORS_ORIGIN = (process.env.CORS_ORIGIN || "http://localhost:3000,http://localhost:5173,http://localhost:8080")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtppro.zoho.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (process.env.SMTP_SECURE ?? "true") === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: "20kb" }));

const CAMPOS = {
  nome: { label: "Nome", obrigatorio: true, max: 120 },
  email: { label: "E-mail", obrigatorio: true, max: 160 },
  telefone: { label: "Telefone", obrigatorio: false, max: 40 },
  empresa: { label: "Empresa", obrigatorio: true, max: 160 },
  colaboradores: { label: "Colaboradores", obrigatorio: false, max: 40 },
  mensagem: { label: "Mensagem", obrigatorio: false, max: 5000 },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(body) {
  const dados = {};
  const erros = [];

  for (const [campo, regra] of Object.entries(CAMPOS)) {
    const valor = typeof body?.[campo] === "string" ? body[campo].trim() : "";
    if (regra.obrigatorio && !valor) erros.push(`${regra.label} é obrigatório.`);
    if (valor.length > regra.max) erros.push(`${regra.label} excede ${regra.max} caracteres.`);
    dados[campo] = valor;
  }

  if (dados.email && !EMAIL_RE.test(dados.email)) erros.push("E-mail inválido.");

  return { dados, erros };
}

function escapeHtml(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function enviarEmail(dados) {
  const linhas = Object.entries(CAMPOS).map(([campo, { label }]) => ({
    label,
    valor: dados[campo] || "-",
  }));

  const html = `
    <h2>Novo contato pelo site</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${linhas
        .map(
          ({ label, valor }) =>
            `<tr><td style="vertical-align:top"><strong>${label}</strong></td><td style="white-space:pre-wrap">${escapeHtml(valor)}</td></tr>`
        )
        .join("")}
    </table>`;

  const text = linhas.map(({ label, valor }) => `${label}: ${valor}`).join("\n");

  await transporter.sendMail({
    from: `"Site GAN Massagem" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: `"${dados.nome.replace(/"/g, "")}" <${dados.email}>`,
    subject: `Novo contato pelo site - ${dados.empresa}`,
    text,
    html,
  });
}

/**
 * Ponto de extensão para integrações futuras (webhook, Zoho CRM etc.).
 * Chamada após o envio do e-mail; falhas aqui são apenas registradas
 * e não impedem a resposta de sucesso ao usuário.
 *
 * Exemplo de webhook:
 *   await fetch(process.env.WEBHOOK_URL, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(dados),
 *   });
 *
 * Exemplo Zoho CRM (requer token OAuth — https://www.zoho.com/crm/developer/docs/api/v8/insert-records.html):
 *   await fetch("https://www.zohoapis.com/crm/v8/Leads", {
 *     method: "POST",
 *     headers: {
 *       Authorization: `Zoho-oauthtoken ${accessToken}`,
 *       "Content-Type": "application/json",
 *     },
 *     body: JSON.stringify({
 *       data: [{
 *         Last_Name: dados.nome,
 *         Email: dados.email,
 *         Phone: dados.telefone,
 *         Company: dados.empresa,
 *         Description: dados.mensagem,
 *         Lead_Source: "Site",
 *       }],
 *     }),
 *   });
 */
async function integrarExterno(dados) {
  // Nenhuma integração ativa por enquanto.
}

app.post("/api/contato", async (req, res) => {
  const { dados, erros } = validar(req.body);
  if (erros.length) {
    return res.status(400).json({ ok: false, erros });
  }

  try {
    await enviarEmail(dados);
  } catch (err) {
    console.error("Falha ao enviar e-mail:", err);
    return res.status(500).json({ ok: false, erros: ["Não foi possível enviar sua mensagem. Tente novamente."] });
  }

  try {
    await integrarExterno(dados);
  } catch (err) {
    console.error("Falha na integração externa:", err);
  }

  res.json({ ok: true });
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_TO) {
    console.warn("Atenção: SMTP_USER, SMTP_PASS e/ou EMAIL_TO não definidos no .env");
  }
});
