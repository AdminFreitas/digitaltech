import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/artigos/")({
  head: () => ({
    meta: [
      { title: "Artigos — DIGITALTECH" },
      {
        name: "description",
        content:
          "Todos os artigos do DIGITALTECH sobre IA, programação, banco de dados e cibersegurança.",
      },
    ],
  }),
  component: ArtigosPage,
});

const artigos = [
  {
    slug: "modelos-de-linguagem-2026",
    category: "Inteligência Artificial",
    title: "Como modelos de linguagem mudaram o desenvolvimento em 2026",
    excerpt:
      "Um balanço prático sobre produtividade, riscos e o que ficou para trás depois da virada generativa.",
    readTime: "8 min",
    date: "24 jun 2026",
  },
  {
    slug: "padroes-assincronos-python",
    category: "Engenharia de Software",
    title: "Padrões assíncronos que todo back-end Python deveria usar",
    excerpt: "Do asyncio cru ao TaskGroup — o que finalmente virou idiomático em 2026.",
    readTime: "6 min",
    date: "22 jun 2026",
  },
  {
    slug: "owasp-top10-frontend-2026",
    category: "Cibersegurança",
    title: "OWASP Top 10: o que mudou no front-end em 2026",
    excerpt: "Os ataques do ano, com exemplos reais e mitigação aplicada.",
    readTime: "9 min",
    date: "20 jun 2026",
  },
  {
    slug: "postgresql-17-upgrade",
    category: "Dados",
    title: "PostgreSQL 17: o que vale apertar o botão de upgrade",
    excerpt: "Recursos novos que importam na operação e os que não importam.",
    readTime: "4 min",
    date: "20 jun 2026",
  },
  {
    slug: "saindo-do-junior",
    category: "Carreira",
    title: "Saindo do júnior: as habilidades que ninguém te ensina",
    excerpt: "Comunicação, escopo, leitura de código alheio e dizer não.",
    readTime: "6 min",
    date: "18 jun 2026",
  },
  {
    slug: "workers-edge-backend",
    category: "Cloud & DevOps",
    title: "Workers, Edge e o fim do back-end em uma única região",
    excerpt: "Latência, custo e arquitetura — o que muda na prática.",
    readTime: "5 min",
    date: "15 jun 2026",
  },
];

function ArtigosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-secondary)]">
        Conteúdo
      </div>
      <h1 className="mt-2 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        Todos os artigos
      </h1>
      <p className="mt-3 text-[15px] text-[var(--text-secondary)]">
        {artigos.length} artigos publicados
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artigos.map((a) => (
          <Link
            key={a.slug}
            to={`/artigos/${a.slug}`}
            className="card-border group rounded-2xl bg-[rgba(22,31,48,0.55)] p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 block"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--primary-cyan)]">
              {a.category}
            </div>
            <h2 className="mt-2 font-display text-[16px] font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[color:var(--primary-cyan)] transition-colors">
              {a.title}
            </h2>
            <p className="mt-2 text-[13px] text-[var(--text-secondary)] leading-relaxed">
              {a.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 text-[12px] text-[var(--text-secondary)]">
              <time>{a.date}</time>
              <span className="h-1 w-1 rounded-full bg-[var(--text-secondary)]/40" />
              <span>{a.readTime} de leitura</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
