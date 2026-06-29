# DigitalTech — Tecnologia em um Minuto

Portal brasileiro de tecnologia com foco em IA, programação,
banco de dados, cibersegurança e carreira em TI.

🌐 **[digitaltech.digital](https://digitaltech.digital)**

## Stack

| Camada | Tecnologia |
|---|---|
| Framework UI | React 19 + TypeScript |
| Roteamento | TanStack Router v1 |
| Framework | TanStack Start + Nitro |
| Estado assíncrono | TanStack Query v5 |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui (Radix UI) |
| Build | Vite 8 |
| Deploy | GitHub Pages + GitHub Actions |
| DNS / CDN | Cloudflare |

## Design system

| Token | Valor | Uso |
|---|---|---|
| `--primary-cyan` | `#00D4FF` | Cor principal |
| `--primary-jade` | `#3DDC97` | Cor secundária |
| `--accent-amber` | `#E8B86D` | Destaque |
| `--bg-primary` | `#0B1020` | Fundo |
| `--text-primary` | `#F1F5F9` | Texto principal |
| `--text-secondary` | `#94A3B8` | Texto secundário |

**Fontes:** Space Grotesk · Inter · Plus Jakarta Sans

## Estrutura

```
src/
├── components/      # Header, Footer e componentes shadcn/ui
├── lib/             # Utilitários internos
├── routes/          # Páginas (file-based routing)
│   ├── __root.tsx   # Layout raiz
│   ├── index.tsx    # Página inicial
│   ├── artigos/     # Blog — listagem e artigos individuais
│   ├── categorias/  # Filtro por categoria
│   ├── ferramentas/ # Ferramentas recomendadas
│   └── contato.tsx  # Contato
├── router.tsx       # Configuração do roteador
└── styles.css       # Estilos globais e tokens
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Build para produção

```bash
npm run build
npm run preview
```

## Deploy

Deploy automático via GitHub Actions na branch `principal`.
Cada push aciona `.github/workflows/static.yml`,
que executa o build e publica no GitHub Pages.

## Autor

**Michel Freitas** — Estudante de Análise e Desenvolvimento de Sistemas

- GitHub: [github.com/AdminFreitas](https://github.com/AdminFreitas)
- LinkedIn: [linkedin.com/in/michelfreitas-ads](https://www.linkedin.com/in/michelfreitas-ads)
