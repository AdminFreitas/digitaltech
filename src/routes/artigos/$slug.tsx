import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { buscarArtigo, formatarData } from "../../lib/content";

export const Route = createFileRoute("/artigos/$slug")({
  head: ({ params }) => {
    const artigo = buscarArtigo(params.slug);
    return {
      meta: [
        { title: artigo ? `${artigo.title} — DIGITALTECH` : "Artigo não encontrado — DIGITALTECH" },
        { name: "description", content: artigo?.excerpt ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const artigo = buscarArtigo(params.slug);
    if (!artigo) throw notFound();
    return artigo;
  },
  component: ArtigoPage,
  notFoundComponent: ArtigoNaoEncontrado,
});

function ArtigoPage() {
  const artigo = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-2xl px-6 pt-28 pb-24">
      {/* Navegação de volta */}
      <Link
        to="/artigos"
        className="inline-flex items-center gap-1 text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
      >
        ← Todos os artigos
      </Link>

      {/* Cabeçalho do artigo */}
      <header className="mt-8">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--primary-cyan)]">
          {artigo.category}
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold text-[var(--text-primary)] leading-tight md:text-4xl">
          {artigo.title}
        </h1>
        <p className="mt-3 text-[15px] text-[var(--text-secondary)] leading-relaxed">
          {artigo.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-[13px] text-[var(--text-secondary)]">
          <time dateTime={artigo.date}>{formatarData(artigo.date)}</time>
          <span className="h-1 w-1 rounded-full bg-[var(--text-secondary)]/40" />
          <span>{artigo.readTime} de leitura</span>
        </div>
      </header>

      {/* Divisor */}
      <hr className="mt-8 border-[var(--glass-border)]" />

      {/* Conteúdo do artigo em Markdown renderizado */}
      <div
        className="prose-digitaltech mt-8"
        dangerouslySetInnerHTML={{ __html: artigo.html }}
      />

      {/* Rodapé do artigo */}
      <div className="mt-16 border-t border-[var(--glass-border)] pt-8">
        <Link
          to="/artigos"
          className="inline-flex items-center gap-1 text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          ← Ver todos os artigos
        </Link>
      </div>
    </div>
  );
}

function ArtigoNaoEncontrado() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--primary-cyan)]">
          404
        </div>
        <h1 className="mt-2 font-display text-2xl font-bold text-[var(--text-primary)]">
          Artigo não encontrado
        </h1>
        <p className="mt-3 text-[14px] text-[var(--text-secondary)]">
          Este artigo não existe ou foi removido.
        </p>
        <Link
          to="/artigos"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--primary-cyan)] px-4 py-2 text-sm font-medium text-[var(--bg-primary)]"
        >
          Ver todos os artigos
        </Link>
      </div>
    </div>
  );
}
