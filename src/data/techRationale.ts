/**
 * Explicação de cada linguagem/tecnologia e o PORQUÊ da escolha.
 * Usado nas páginas de detalhe de projeto ("Por que essa stack") e na página de Stack.
 * As chaves são casadas por inclusão (case-insensitive) contra os itens de stack de cada projeto.
 */

export interface TechRationale {
  /** rótulo canônico exibido */
  name: string;
  /** categoria de alto nível */
  kind: "linguagem" | "runtime" | "banco" | "frontend" | "infra" | "ia" | "automação" | "integração";
  /** papel que exerce */
  role: string;
  /** por que foi escolhida */
  why: string;
}

export const techRationale: TechRationale[] = [
  // ── Linguagens ──
  {
    name: "TypeScript",
    kind: "linguagem",
    role: "Linguagem principal, do front ao back",
    why: "Tipagem estática pega erro de contrato em tempo de compilação. Um só idioma da UI ao servidor reduz atrito e bugs de integração.",
  },
  {
    name: "Node.js",
    kind: "runtime",
    role: "Runtime do back-end e das automações",
    why: "Event-loop assíncrono é ideal para o I/O de integrações (APIs, webhooks, filas), e roda o mesmo TypeScript do front. Ecossistema npm enorme.",
  },
  {
    name: "Python",
    kind: "linguagem",
    role: "Dados, automação e IA",
    why: "Onde a biblioteca certa é Python, uso Python — manipulação de dados, PDFs e visão computacional (PyMuPDF) têm o melhor ferramental aqui.",
  },
  {
    name: "Object Pascal",
    kind: "linguagem",
    role: "Bridge nativa dentro de um ERP legado",
    why: "Era a linguagem do runtime proprietário do ERP. Escrever nela fez a integração herdar serial, validações e regras fiscais do sistema — sem tocar o banco diretamente.",
  },
  {
    name: "SQL",
    kind: "linguagem",
    role: "Modelagem relacional e consultas",
    why: "Camadas raw/curated/analytics, views para dashboards e otimização de queries pedem SQL de verdade, não abstração escondida.",
  },
  {
    name: "PHP",
    kind: "linguagem",
    role: "Back-end web (Laravel)",
    why: "Quando o contexto do cliente já é PHP/Laravel, entrego no mesmo terreno — MVC, Eloquent e filas maduras.",
  },

  // ── Bancos / dados ──
  {
    name: "PostgreSQL",
    kind: "banco",
    role: "Banco relacional principal",
    why: "Confiável, com Row Level Security nativo para multi-tenant, views para camadas analíticas e SQL avançado quando preciso.",
  },
  {
    name: "Supabase",
    kind: "banco",
    role: "Postgres gerenciado + Auth + Edge Functions",
    why: "Entrega Postgres com RLS, autenticação e funções serverless prontos — acelera o back-end sem abrir mão de SQL puro.",
  },
  {
    name: "Neon",
    kind: "banco",
    role: "Postgres serverless",
    why: "Postgres com branching e escala sob demanda para ambientes e pipelines de dados.",
  },
  {
    name: "Drizzle",
    kind: "banco",
    role: "ORM tipado",
    why: "ORM fino e type-safe que gera SQL previsível — tipagem ponta a ponta sem esconder o banco.",
  },
  {
    name: "dbt",
    kind: "banco",
    role: "Transformação de dados",
    why: "Versiona e testa as transformações que constroem a camada analítica.",
  },

  // ── Frontend ──
  {
    name: "React",
    kind: "frontend",
    role: "Camada de interface",
    why: "Componentização madura e ecossistema — base para design systems reutilizáveis entre projetos.",
  },
  {
    name: "Next.js",
    kind: "frontend",
    role: "Framework de aplicação React",
    why: "SSR/RSC, roteamento e DX para apps que precisam de performance e SEO desde o primeiro deploy.",
  },
  {
    name: "Tailwind",
    kind: "frontend",
    role: "Estilização",
    why: "Utilitários que mantêm consistência visual e velocidade, sem CSS solto acumulando dívida.",
  },
  {
    name: "shadcn/ui",
    kind: "frontend",
    role: "Componentes de UI",
    why: "Primitivos acessíveis (Radix) que eu controlo no código — não uma lib fechada.",
  },

  // ── Automação / IA ──
  {
    name: "n8n",
    kind: "automação",
    role: "Orquestração de automações",
    why: "Fluxos visuais versionáveis para integrar sistemas rápido, com retry e estado — sem espalhar glue-code descartável.",
  },
  {
    name: "LLM",
    kind: "ia",
    role: "Extração e geração assistida por IA",
    why: "Lê documentos heterogêneos (texto e imagem) e gera conteúdo — sempre atrás de validação determinística e aprovação humana.",
  },
  {
    name: "LangChain",
    kind: "ia",
    role: "Orquestração de agentes de IA",
    why: "Estrutura a federação de agentes (orquestrador + especialistas) e o RAG de forma composável.",
  },
  {
    name: "PyMuPDF",
    kind: "ia",
    role: "Leitura e render de PDF",
    why: "Extrai texto e renderiza páginas em alta resolução para a IA de visão ler tabelas e layouts densos.",
  },

  // ── Integração ──
  {
    name: "REST",
    kind: "integração",
    role: "Contrato de integração",
    why: "Contratos REST/JSON bem definidos, versionados e validados — a base previsível das integrações.",
  },
  {
    name: "Webhooks",
    kind: "integração",
    role: "Eventos assíncronos",
    why: "Recebo mudanças de estado em tempo real com idempotência e trilha de auditoria contra reentregas.",
  },
  {
    name: "RSA",
    kind: "integração",
    role: "Autenticação com chave diária",
    why: "O marketplace exigia uma chave assinada por dia; gerar e cachear server-side mantém o acesso válido sem expor o segredo.",
  },

  // ── Infra ──
  {
    name: "Docker",
    kind: "infra",
    role: "Empacotamento e deploy",
    why: "Ambiente reproduzível do dev à VPS — sobe igual em qualquer lugar, sem 'na minha máquina funciona'.",
  },
  {
    name: "Traefik",
    kind: "infra",
    role: "Proxy reverso e roteamento",
    why: "Roteia serviços em Docker Swarm com TLS automático.",
  },
  {
    name: "GitHub Actions",
    kind: "infra",
    role: "CI/CD",
    why: "Pipeline de build, teste e deploy automatizado a cada push.",
  },
  {
    name: "Vercel",
    kind: "infra",
    role: "Deploy de front-end",
    why: "Deploy contínuo e edge para apps React/Next com zero configuração de servidor.",
  },
  {
    name: "VPS",
    kind: "infra",
    role: "Servidor de aplicação",
    why: "Controle total do ambiente (Docker + Traefik) com custo baixo para serviços que rodam full-time.",
  },
  {
    name: "Playwright",
    kind: "automação",
    role: "Automação de browser e render headless",
    why: "Renderiza PDFs de forma determinística e automatiza portais que não têm API.",
  },
  {
    name: "Edge Functions",
    kind: "infra",
    role: "Lógica serverless perto do dado",
    why: "Executa regras próximas ao banco (Supabase), sem manter servidor dedicado.",
  },
];

/** Acha a explicação para um item de stack — casa por inclusão e prefere o nome mais específico (mais longo), ex.: "PostgreSQL" ganha de "SQL". */
export function explainTech(item: string): TechRationale | undefined {
  const norm = item.toLowerCase();
  const matches = techRationale.filter((t) => norm.includes(t.name.toLowerCase()));
  if (matches.length === 0) return undefined;
  return matches.sort((a, b) => b.name.length - a.name.length)[0];
}

/** Explicações únicas para todos os itens de stack de um projeto, na ordem em que aparecem. */
export function explainProjectStack(
  stack: { category: string; items: string[] }[]
): TechRationale[] {
  const seen = new Set<string>();
  const out: TechRationale[] = [];
  for (const cat of stack) {
    for (const item of cat.items) {
      const t = explainTech(item);
      if (t && !seen.has(t.name)) {
        seen.add(t.name);
        out.push(t);
      }
    }
  }
  return out;
}
