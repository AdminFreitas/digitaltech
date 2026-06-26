import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type MouseEvent } from "react";
import logo from "@/assets/logo-robot.png";
import planet from "@/assets/planet.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIGITALTECH — Tecnologia em um Minuto" },
      {
        name: "description",
        content:
          "Portal brasileiro de tecnologia. IA, programação, banco de dados, cibersegurança e as notícias que realmente importam.",
      },
      { property: "og:title", content: "DIGITALTECH — Tecnologia em um Minuto" },
      {
        property: "og:description",
        content:
          "IA, programação, banco de dados, cibersegurança e ferramentas — conteúdo em primeiro lugar.",
      },
    ],
  }),
  component: Home,
});

type Article = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  cover: string; // CSS background
};

const featured: Article[] = [
  {
    category: "Inteligência Artificial",
    title: "Como modelos de linguagem mudaram o desenvolvimento em 2026",
    excerpt:
      "Um balanço prático sobre produtividade, riscos e o que ficou para trás depois da virada generativa.",
    readTime: "8 min",
    date: "24 jun 2026",
    cover:
      "radial-gradient(120% 80% at 20% 10%, #1e3a8a 0%, #0a0a0f 60%), linear-gradient(135deg, #0a0a0f, #0f1733)",
  },
  {
    category: "Engenharia",
    title: "Padrões assíncronos que todo back-end Python deveria usar",
    excerpt:
      "Do asyncio cru ao TaskGroup — o que finalmente virou idiomático em 2026.",
    readTime: "6 min",
    date: "22 jun 2026",
    cover:
      "radial-gradient(120% 80% at 80% 20%, #3b82f6 0%, #0a0a0f 55%), linear-gradient(135deg, #0a0a0f, #0a1733)",
  },
  {
    category: "Segurança",
    title: "OWASP Top 10: o que mudou no front-end em 2026",
    excerpt:
      "Os ataques do ano, com exemplos reais e mitigação aplicada — sem fórmulas mágicas.",
    readTime: "9 min",
    date: "20 jun 2026",
    cover:
      "radial-gradient(120% 80% at 50% 100%, #1d4ed8 0%, #0a0a0f 60%), linear-gradient(180deg, #0a0a0f, #0e152e)",
  },
];

const recent: Article[] = [
  {
    category: "Banco de Dados",
    title: "PostgreSQL 17: o que vale apertar o botão de upgrade",
    excerpt: "Recursos novos que importam na operação e os que não importam.",
    readTime: "4 min",
    date: "20 jun 2026",
    cover: "linear-gradient(135deg, #0f1733 0%, #0a0a0f 100%)",
  },
  {
    category: "Carreira",
    title: "Saindo do júnior: as habilidades que ninguém te ensina",
    excerpt: "Comunicação, escopo, leitura de código alheio e dizer não.",
    readTime: "6 min",
    date: "18 jun 2026",
    cover: "linear-gradient(135deg, #0a1733 0%, #0a0a0f 100%)",
  },
  {
    category: "Cloud",
    title: "Workers, Edge e o fim do back-end em uma única região",
    excerpt: "Latência, custo e arquitetura — o que muda na prática.",
    readTime: "5 min",
    date: "15 jun 2026",
    cover: "linear-gradient(135deg, #0e152e 0%, #0a0a0f 100%)",
  },
  {
    category: "Inteligência Artificial",
    title: "RAG na prática: arquitetura, custos e armadilhas",
    excerpt: "Quando vale, quando não vale, e o que ninguém conta no slide.",
    readTime: "7 min",
    date: "12 jun 2026",
    cover: "linear-gradient(135deg, #102046 0%, #0a0a0f 100%)",
  },
  {
    category: "Web",
    title: "View Transitions API: animação de página sem framework",
    excerpt: "Como entregar transições suaves com 30 linhas de código.",
    readTime: "3 min",
    date: "10 jun 2026",
    cover: "linear-gradient(135deg, #0f1733 0%, #0a0a0f 100%)",
  },
  {
    category: "Notícias",
    title: "O que muda no mercado de TI com a nova Lei de IA",
    excerpt: "Resumo objetivo do que afeta empresas, devs e contratos.",
    readTime: "5 min",
    date: "08 jun 2026",
    cover: "linear-gradient(135deg, #0a1733 0%, #0a0a0f 100%)",
  },
];

function useSpotlight() {
  return (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
}

function Header() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      data-scrolled="false"
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500 data-[scrolled=true]:bg-[rgba(10,10,15,0.72)] data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:border-b data-[scrolled=true]:border-[var(--glass-border)]"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logo} alt="" width={28} height={28} className="opacity-90" />
          <span className="font-display text-sm font-bold tracking-[0.18em] text-[var(--ink)]">
            DIGITALTECH
          </span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[13px] text-[var(--ink-dim)]">
            {["Artigos", "IA", "Engenharia", "Segurança", "Sobre"].map((l) => (
              <li key={l}>
                <a
                  href="#articles"
                  className="transition-colors duration-300 hover:text-[var(--ink)]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#articles"
          className="hidden md:inline-flex items-center rounded-full border border-[var(--glass-border)] px-4 py-1.5 text-[12px] text-[var(--ink-dim)] transition-colors duration-300 hover:border-[color:var(--blue)] hover:text-[var(--ink)]"
        >
          Newsletter
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--ink-dim)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)] shadow-[0_0_12px_var(--blue)]" />
            Edição de junho · 2026
          </div>
          <h1 className="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-bold leading-[1.15] text-[var(--ink)]">
            Sinal sobre tecnologia,
            <br />
            <span className="text-[color:var(--blue-soft)]">não ruído.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--ink-dim)]">
            Análises, tutoriais e bastidores de IA, engenharia, dados e segurança —
            escritos por quem usa, para quem constrói.
          </p>
          <div className="mt-7 flex items-center gap-5 text-[13px] text-[var(--ink-dim)]">
            <a
              href="#articles"
              className="story-link text-[var(--ink)]"
            >
              Ler edição atual →
            </a>
            <span className="h-px w-10 bg-[var(--glass-border)]" />
            <span>22 artigos · atualizado hoje</span>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(59,130,246,0.25), transparent 70%)",
            }}
          />
          <img
            src={planet}
            alt=""
            width={420}
            height={420}
            className="relative mx-auto float-slow opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ a, large = false }: { a: Article; large?: boolean }) {
  const onMove = useSpotlight();
  return (
    <article
      onMouseMove={onMove}
      className={`hover-spot card-border group rounded-2xl bg-[var(--bg-soft)]/60 backdrop-blur-md transition-transform duration-500 hover:-translate-y-0.5 ${large ? "" : ""}`}
    >
      <a href="#" className="block overflow-hidden rounded-2xl">
        <div
          className={`relative w-full overflow-hidden rounded-t-2xl ${large ? "aspect-[16/10]" : "aspect-[16/9]"}`}
          style={{ background: a.cover }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(0,0,0,0.5),transparent_60%)]" />
          <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            {a.category}
          </div>
        </div>
        <div className="p-5 md:p-6">
          <h3
            className={`font-display font-semibold text-[var(--ink)] transition-colors duration-300 group-hover:text-[color:var(--blue-soft)] ${large ? "text-xl md:text-2xl leading-snug" : "text-[17px] leading-snug"}`}
          >
            {a.title}
          </h3>
          {large && (
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--ink-dim)]">
              {a.excerpt}
            </p>
          )}
          <div className="mt-4 flex items-center gap-3 text-[12px] text-[var(--ink-dim)]">
            <time>{a.date}</time>
            <span className="h-1 w-1 rounded-full bg-[var(--ink-dim)]/40" />
            <span>{a.readTime} de leitura</span>
          </div>
        </div>
      </a>
    </article>
  );
}

function Articles() {
  return (
    <section id="articles" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
            Em destaque
          </div>
          <h2 className="mt-2 font-display text-xl font-semibold text-[var(--ink)] md:text-2xl">
            O que ler primeiro nesta semana
          </h2>
        </div>
        <a
          href="#"
          className="hidden text-[13px] text-[var(--ink-dim)] transition-colors hover:text-[var(--ink)] md:inline story-link"
        >
          Ver todos →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((a) => (
          <ArticleCard key={a.title} a={a} large />
        ))}
      </div>

      <div className="mt-20 mb-10 flex items-end justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
            Recentes
          </div>
          <h2 className="mt-2 font-display text-xl font-semibold text-[var(--ink)] md:text-2xl">
            Atualizações da semana
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recent.map((a) => (
          <ArticleCard key={a.title} a={a} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-[13px] text-[var(--ink-dim)] md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" width={22} height={22} className="opacity-80" />
          <span className="font-display tracking-[0.18em] text-[var(--ink)]">
            DIGITALTECH
          </span>
        </div>
        <p>© 2026 Michel Freitas. Conteúdo independente.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="transition-colors hover:text-[var(--ink)]">
            RSS
          </a>
          <a href="#" className="transition-colors hover:text-[var(--ink)]">
            Newsletter
          </a>
          <a href="#" className="transition-colors hover:text-[var(--ink)]">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
