# Redesign do Portfólio — Pedro Ventura

> Ledger de decisões + plano de execução. Fonte da verdade da repaginação.
> Iniciado em 2026-07.

---

## 1. Norte / Posicionamento

**Founder-builder híbrido.** Narrativa única: *"Construo sistemas que vão pra produção — não protótipos."*

- A **Pinn Product Builder** e os cases entram como **prova**, não como pitch de venda.
- Serve simultaneamente: clientes potenciais da Pinn, autoridade pessoal e credibilidade técnica.
- **Clientes anonimizados** ("Grande Grupo de Saúde" etc.) — compensados por **métricas concretas + profundidade técnica**.

## 2. Decisões travadas

| Tema | Decisão |
|------|---------|
| Abordagem | **Scaffold 100% novo**, reaproveitando a stack e migrando os dados de `src/data/` |
| Stack (site) | Mantém Vite + React + TS + Tailwind + shadcn/ui + framer-motion (= STACK.md) |
| Posicionamento | Founder-builder híbrido |
| Prova social | Clientes anonimizados + métricas |
| Escopo da stack exibida | **Curada** p/ founder-builder (foco integração/dados/IA); resto como "também trabalho com" |
| Certificações | 15 certs, todas reais → podem ser exibidas como conquistas formais |
| Deploy | A decidir (Lovable atual vs Vercel) |
| **Direção visual** | **Estilo "Sidnei Pacheco" adaptado** — light minimalista, sans-serif, muito respiro, faixa de stats, taxonomia de skills, cards de projeto |
| **Modo de cor** | **Light (padrão) + Dark com toggle** |
| **Feature-assinatura** | **Terminal interativo funcional** — comandos (`whoami`, `ls projetos`, `cat sobre`, `help`), autocomplete (Tab), histórico (↑↓) |

### Referência visual
- Inspiração: https://www.sidneipacheco.com/ (portfólio de CTO, hacker-minimalismo light)
- Ingredientes: light mode + whitespace generoso · sans-serif · hero com posicionamento founder · stat row · terminal navegável · skills por categoria · página "Uses/Setup" · cards de projeto/blog
- Acento: verde técnico (`#12a150`/`#12d67e`) sobre neutros quentes (`#fbfaf7` bg, `#15150f` texto). Ajustável.

## 3. Arquitetura de Informação (nova)

Single-page com narrativa contínua + rotas de detalhe. Substitui as 6 páginas paralelas atuais.

1. **Hero** — frase de posicionamento + status disponível + CTAs
2. **Prova em números** — métricas agregadas dos cases
3. **Como eu penso** — 3-4 princípios de engenharia (idempotência, camadas raw→curated→analytics, observabilidade, RLS)
4. **Trabalhos selecionados** — 3-4 cases em destaque (problema → arquitetura → impacto)
5. **Stack & Arquiteturas** — condensado, visual
6. **Trajetória** — timeline (Pinn → Ventura Solutions → anteriores)
7. **Contato** — CTA forte

Rotas de detalhe: `/projetos`, `/projetos/:slug`.

## 4. Plano em sprints (cada um compila)

| Sprint | Entrega | Aprovação |
|--------|---------|-----------|
| S0 | Higiene + rodar local + baseline SEO/tooling | screenshot estado atual |
| S1 | **2 direções visuais** (mockup) | você escolhe |
| S2 | Design system (tokens + componentes-base) | preview |
| S3 | Home nova (narrativa completa) | preview |
| S4 | /projetos + detalhe reconstruídos | preview |
| S5 | Conteúdo/copy + i18n (PT→EN) | revisão de texto |
| S6 | Qualidade (SEO/a11y/testes/analytics) + deploy | go-live |

## 5. Inventário migrável (fonte: STACK.md + src/data)

- **Projetos:** 8 cases em `src/data/projects.ts` (Hermes, Support Hub, BI Hub, OKRs, etc.)
- **Certificações:** 15 em `src/data/certifications.ts` (n8n Enterprise, AWS, Docker, GitHub Actions, Google IT x2, TS, Python, Java, C#, CSS/Tailwind, SQL, PostgreSQL, Supabase, VPS)
- **Stack:** 6 categorias em `src/data/stack.ts` + STACK.md ampliado (PHP/Laravel, Pascal, MySQL, LangChain/RAG, Traefik/Nginx, MUI, Drizzle) — usar recorte curado
- **Arquiteturas autorais:** 6 em `src/data/stack.ts` (eventos/dedup, webhooks/auditoria, camadas de dados, funil/CRM, multi-tenant RLS, outbox)
- **Experiência:** 5 roles em `src/data/experience.ts`

## 6. Pendências técnicas herdadas (atacar até S6)

- Zero SEO/meta/OG → react-helmet + sitemap + schema.org Person
- Estilos inline misturados com Tailwind → tokens
- Páginas gigantes (ProjetoDetalhe 458 linhas) → componentizar
- Sem testes (só placeholder) → vitest nos componentes-núcleo
- Ícones via CDN externo (Simple Icons) → avaliar self-host
- Sem analytics, sem error boundary
