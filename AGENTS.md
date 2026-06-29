# AGENTS.md — Instruções para Agentes de IA

> Este arquivo descreve o projeto para ferramentas de IA de código
> (Cursor, Claude Code, GitHub Copilot Workspace). Leia antes de editar.

## Sobre o projeto

**DIGITALTECH** é um portal brasileiro de tecnologia com foco em IA,
programação, banco de dados, cibersegurança e carreira em TI.

- Site: https://digitaltech.digital
- Repositório: https://github.com/AdminFreitas/digitaltech
- Autor: Michel Freitas

## Stack técnico

| Camada | Tecnologia |
|---|---|
| Framework UI | React 19 + TypeScript |
| Roteamento | TanStack Router v1 (file-based) |
| Framework SSR/SSG | TanStack Start + Nitro |
| Estado assíncrono | TanStack Query v5 |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui (Radix UI) |
| Build | Vite 8 |
| Deploy | GitHub Pages via GitHub Actions |
| DNS / CDN | Cloudflare |
| Domínio | digitaltech.digital |

## Estrutura de pastas

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis (Header, Footer)
│   └── ui/          # Componentes shadcn/ui — não editar manualmente
├── hooks/           # Custom hooks React
├── lib/             # Utilitários internos
├── routes/          # Páginas (file-based routing do TanStack Router)
│   ├── __root.tsx   # Layout raiz — Header, Footer, Error boundary
│   ├── index.tsx    # Página inicial
│   ├── artigos/     # Blog — listagem e artigos individuais
│   ├── categorias/  # Filtro por categoria
│   ├── ferramentas/ # Página de ferramentas
│   └── contato.tsx  # Formulário de contato
├── router.tsx       # Configuração do roteador
├── server.ts        # Entry point do servidor Nitro
└── styles.css       # Estilos globais e tokens de design
```

## Design system — tokens de cor

```css
--primary-cyan:    #00D4FF   /* Ciano — cor principal */
--primary-jade:    #3DDC97   /* Verde jade — secundária */
--accent-amber:    #E8B86D   /* Âmbar — destaque */
--bg-primary:      #0B1020   /* Fundo escuro principal */
--text-primary:    #F1F5F9   /* Texto principal */
--text-secondary:  #94A3B8   /* Texto secundário */
--glass-border:    #1E2D45   /* Borda estilo glass */
```

## Fontes

- **Space Grotesk** — títulos principais (font-display)
- **Inter** — corpo de texto
- **Plus Jakarta Sans** — destaques e subtítulos

## Regras para agentes

1. Nunca edite arquivos em `src/components/ui/` — são gerados pelo shadcn/ui.
2. Use sempre os tokens CSS de cor ao invés de valores hexadecimais diretos.
3. Novas páginas seguem o padrão file-based do TanStack Router em `src/routes/`.
4. TypeScript obrigatório — nenhum arquivo `.js` ou `.jsx` no `src/`.
5. Tailwind CSS v4 — preferir classes utilitárias a `@apply`.
6. Commits em português no padrão: `tipo: descrição curta`.

## Padrão de commit

```
feat: adiciona página de ferramentas
fix: corrige link quebrado no footer
docs: atualiza README com stack correto
refactor: remove dependência do Lovable
chore: remove arquivo não utilizado
```

## Branch principal

`principal` — nome da branch principal (não `main` nem `master`).
