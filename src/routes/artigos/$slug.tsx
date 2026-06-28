import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/artigos/$slug")({
  component: ArtigoPage,
});

function ArtigoPage() {
  const { slug } = Route.useParams();
  return (
    <div className="mx-auto max-w-2xl px-6 pt-28 pb-24">
      <Link
        to="/artigos"
        className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      >
        ← Todos os artigos
      </Link>
      <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[color:var(--primary-cyan)]">
        Artigo
      </div>
      <h1 className="mt-2 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        {slug}
      </h1>
      <p className="mt-6 text-[15px] text-[var(--text-secondary)] leading-relaxed">
        Conteúdo do artigo em construção. Em breve este artigo estará disponível completo.
      </p>
    </div>
  );
}
