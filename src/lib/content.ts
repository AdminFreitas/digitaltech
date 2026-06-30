/**
 * content.ts — Carregador de artigos em Markdown
 *
 * Usa import.meta.glob do Vite para importar todos os arquivos .md
 * da pasta content/artigos/ em tempo de build [construção].
 * Resultado: zero requisições em runtime, site 100% estático.
 */

import { marked } from "marked";

// Configura o marked para gerar HTML seguro e com IDs nos headings
marked.setOptions({ gfm: true });

export type ArtigoMetadata = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  published: boolean;
};

export type Artigo = ArtigoMetadata & {
  html: string;
};

// Importa todos os .md como texto cru em tempo de build
const rawFiles = import.meta.glob("/content/artigos/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/**
 * Parseia o frontmatter YAML simples do início do arquivo.
 * Suporta strings (com ou sem aspas), booleanos e datas.
 */
function parseFrontmatter(raw: string): {
  data: Record<string, string | boolean>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string | boolean> = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value: string | boolean = line.slice(colonIdx + 1).trim();
    // Remove aspas duplas
    if (typeof value === "string" && value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (value === "true") value = true;
    if (value === "false") value = false;
    data[key] = value;
  }

  return { data, content: match[2].trim() };
}

// Processa todos os arquivos e monta a lista de artigos
const todosArtigos: Artigo[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slugFromPath = path.split("/").pop()!.replace(".md", "");
    return {
      slug: (data.slug as string) || slugFromPath,
      title: (data.title as string) || "",
      category: (data.category as string) || "",
      excerpt: (data.excerpt as string) || "",
      date: (data.date as string) || "",
      readTime: (data.readTime as string) || "",
      published: data.published !== false,
      html: marked(content) as string,
    };
  })
  .filter((a) => a.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/** Retorna metadados de todos os artigos publicados (sem o HTML). */
export function listarArtigos(): ArtigoMetadata[] {
  return todosArtigos.map(({ html: _, ...meta }) => meta);
}

/** Retorna um artigo completo pelo slug, ou undefined se não existir. */
export function buscarArtigo(slug: string): Artigo | undefined {
  return todosArtigos.find((a) => a.slug === slug);
}

/** Formata a data do artigo em português. */
export function formatarData(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
