import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ferramentas/")({
  head: () => ({
    meta: [
      { title: "Ferramentas — DIGITALTECH" },
      {
        name: "description",
        content:
          "Ferramentas gratuitas para desenvolvedores: compressor de imagens, formatador JSON, gerador de UUID e muito mais.",
      },
    ],
  }),
  component: FerramentasPage,
});

const ferramentas = [
  {
    slug: "compressor-imagens",
    name: "Compressor de Imagens",
    desc: "Reduza JPG, PNG e WebP no navegador.",
    status: "em-breve",
  },
  {
    slug: "markdown-html",
    name: "Conversor Markdown → HTML",
    desc: "Cole o texto e copie o HTML pronto.",
    status: "em-breve",
  },
  {
    slug: "uuid-hash",
    name: "Gerador de UUID / Hash",
    desc: "UUID v4, MD5, SHA-256 instantâneos.",
    status: "em-breve",
  },
  {
    slug: "formatador-json",
    name: "Formatador JSON",
    desc: "Indentação, minificação e validação.",
    status: "em-breve",
  },
  {
    slug: "testador-regex",
    name: "Testador de Regex",
    desc: "Padrões PCRE com explicação visual.",
    status: "em-breve",
  },
  {
    slug: "checador-senha",
    name: "Checador de Senha",
    desc: "Entropia, força e vazamentos conhecidos.",
    status: "em-breve",
  },
];

function FerramentasPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-secondary)]">
        Utilitários
      </div>
      <h1 className="mt-2 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        Ferramentas
      </h1>
      <p className="mt-3 text-[15px] text-[var(--text-secondary)]">
        Pequenos utilitários gratuitos para o dia a dia do desenvolvedor.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ferramentas.map((f) => (
          <div
            key={f.slug}
            className="card-border rounded-2xl bg-[rgba(22,31,48,0.55)] p-5 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">
                {f.name}
              </h2>
              <span className="rounded-full border border-[color:var(--accent-amber)]/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[color:var(--accent-amber)]">
                Em breve
              </span>
            </div>
            <p className="mt-2 text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
