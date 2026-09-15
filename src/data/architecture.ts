/**
 * Architecture page — fonte de conteúdo (separada da apresentação).
 * Milestone 1: layers do System Model + cross-cutting concerns + focus do hero.
 */

export interface LayerGroup {
  title: string;      // "Interfaces"
  items: string[];    // ["Web", "Mobile"]
}
export interface ArchLayer {
  index: string;      // "01"
  key: string;        // "experience"
  name: string;       // "Experience"
  short: string;      // "Interfaces · Channels · Workflows"
  icon: string;       // lucide name
  groups: LayerGroup[];
  note?: string;      // mensagem destacada (ex.: IA é componente)
}

export const architectureLayers: ArchLayer[] = [
  {
    index: "01",
    key: "experience",
    name: "Experience",
    short: "Interfaces · Canais · Fluxos",
    icon: "MonitorSmartphone",
    groups: [
      { title: "Interfaces", items: ["Web", "Mobile"] },
      { title: "Canais", items: ["WhatsApp", "LinkedIn", "APIs"] },
      { title: "Fluxos", items: ["Formulários", "Filas", "Aprovações", "Operação humana"] },
    ],
  },
  {
    index: "02",
    key: "application",
    name: "Application",
    short: "APIs · Serviços · Regras de negócio",
    icon: "Boxes",
    groups: [
      { title: "APIs", items: ["REST", "Webhooks"] },
      { title: "Serviços", items: ["Domain services", "Workers"] },
      { title: "Regras", items: ["Validação", "Policy engines", "Lógica de negócio"] },
    ],
  },
  {
    index: "03",
    key: "intelligence",
    name: "Intelligence",
    short: "Agentes · LLMs · RAG · Decisão",
    icon: "BrainCircuit",
    groups: [
      { title: "Modelos", items: ["LLMs"] },
      { title: "Agentes", items: ["Orquestração", "Tools", "Memória"] },
      { title: "Conhecimento", items: ["RAG", "Recuperação"] },
      { title: "Controle", items: ["Guardrails", "Evals", "Handoff humano"] },
    ],
    note: "IA não é o sistema. É um componente probabilístico dentro do sistema.",
  },
  {
    index: "04",
    key: "data",
    name: "Data",
    short: "Postgres · Redis · Vector · Eventos",
    icon: "Database",
    groups: [
      { title: "Operacional", items: ["PostgreSQL"] },
      { title: "Estado", items: ["Redis"] },
      { title: "Conhecimento", items: ["pgvector"] },
      { title: "Eventos", items: ["Filas"] },
      { title: "Analytics", items: ["Métricas", "Warehouse"] },
    ],
  },
  {
    index: "05",
    key: "platform",
    name: "Platform",
    short: "Cloud · Containers · Filas · CI/CD",
    icon: "Server",
    groups: [
      { title: "Runtime", items: ["Docker"] },
      { title: "Cloud", items: ["AWS"] },
      { title: "Rede", items: ["Nginx"] },
      { title: "Entrega", items: ["CI/CD"] },
      { title: "Confiabilidade", items: ["Retries", "Filas", "Idempotência"] },
      { title: "Monitoramento", items: ["Grafana", "Prometheus", "Loki"] },
    ],
  },
];

/** Preocupações que atravessam todas as camadas (não são uma camada). */
export const crossCuttingConcerns: string[] = [
  "Security",
  "Observability",
  "Governance",
  "Reliability",
];

/** Foco lateral do hero. */
export const architectureFocus: string[] = [
  "AI Systems",
  "Distributed Systems",
  "Data",
  "Infrastructure",
  "Reliability",
];

/** 02 / Principles — regras ao desenhar sistemas. */
export interface Principle {
  index: string;
  icon: string; // lucide name
  title: string;
  body: string;
}

export const architecturePrinciples: Principle[] = [
  {
    index: "01",
    icon: "Puzzle",
    title: "IA é um componente, não a arquitetura",
    body: "Modelos são substituíveis. O limite do sistema não deve depender de um único provedor.",
  },
  {
    index: "02",
    icon: "Database",
    title: "O estado vive fora do modelo",
    body: "O estado do negócio precisa ser determinístico, persistente e auditável.",
  },
  {
    index: "03",
    icon: "Zap",
    title: "Regra de negócio antes da geração",
    body: "Decisão crítica não pode depender exclusivamente de raciocínio probabilístico.",
  },
  {
    index: "04",
    icon: "ShieldAlert",
    title: "Tudo que é externo pode falhar",
    body: "APIs, modelos, bancos e integrações exigem retries, timeouts e fallbacks.",
  },
  {
    index: "05",
    icon: "BarChart3",
    title: "Observabilidade faz parte do produto",
    body: "Logs, métricas, traces e auditabilidade são requisitos de produção.",
  },
  {
    index: "06",
    icon: "UserCog",
    title: "Handoff humano é um estado do sistema",
    body: "A intervenção humana deve ser modelada de propósito, não tratada como exceção.",
  },
];

/** 03 / Patterns — padrões de arquitetura com diagrama. */
export interface Pattern {
  index: string;
  label: string;   // "AI / Operations"
  title: string;   // "AI Agent Architecture"
  desc: string;
  flow: (string | string[])[];
  caseSlug?: string; // link "Ver exemplo"
}

export const architecturePatterns: Pattern[] = [
  {
    index: "01",
    label: "IA / Operações",
    title: "AI Agent Architecture",
    desc: "Sistemas de conversa com tools, memória e ações.",
    flow: [
      "Canal (WhatsApp · Web · Voz)",
      "Ingress",
      "Orquestrador (LangGraph)",
      ["Modelo (LLM)", "Tools (APIs)", "Memória (Redis)"],
      "Sistemas externos (CRM · Agenda · APIs)",
      "Dados",
    ],
    caseSlug: "pinn-agent-sales",
  },
  {
    index: "02",
    label: "Conhecimento",
    title: "Secure RAG",
    desc: "Sistemas de conhecimento com dado corporativo.",
    flow: [
      "Documentos (internos · externos)",
      "Ingestão",
      "Chunking",
      "Embeddings",
      "Vector + Full text (pgvector)",
      "Filtro ACL (permissões)",
      "Ranking / Reranking",
      "LLM (com contexto)",
    ],
    caseSlug: "dados-ia-gestora",
  },
  {
    index: "03",
    label: "Enterprise",
    title: "Enterprise Application",
    desc: "Sistemas de negócio escaláveis e multi-tenant.",
    flow: [
      "Client (Web · Mobile)",
      "API Gateway",
      "Domain Services",
      "Database",
      ["Events (filas)", "Workers"],
    ],
    caseSlug: "erp-retifica",
  },
];

/** 04 / Trade-offs — sliders. position 0-100 (0 = polo esquerdo). */
export interface Tradeoff {
  left: string;
  right: string;
  position: number;
  note: string;
}

export const architectureTradeoffs: Tradeoff[] = [
  {
    left: "Simples",
    right: "Flexível",
    position: 62,
    note: "Flexibilidade custa complexidade. Vale quando o domínio muda de verdade, não pra prever um futuro que talvez não venha.",
  },
  {
    left: "Monolito",
    right: "Microserviços",
    position: 32,
    note: "Microserviço resolve problema de organização e escala, não de código. Começar monolito modular quase sempre é mais barato.",
  },
  {
    left: "Síncrono",
    right: "Assíncrono",
    position: 55,
    note: "Escolha assíncrono quando resiliência, desacoplamento e throughput importam mais que consistência imediata e simplicidade.",
  },
  {
    left: "Regras",
    right: "IA",
    position: 38,
    note: "Decisão crítica fica em regra determinística. IA entra onde ambiguidade e linguagem natural pesam mais que exatidão.",
  },
  {
    left: "Gerenciado",
    right: "Self-hosted",
    position: 40,
    note: "Gerenciado compra velocidade e paz. Self-hosted vale quando custo em escala, dado sensível ou controle fino justificam a operação.",
  },
  {
    left: "Centralizado",
    right: "Distribuído",
    position: 45,
    note: "Distribuir adiciona modos de falha. Só quando escala, isolamento ou geografia exigem, não por moda.",
  },
  {
    left: "Menor custo",
    right: "Maior performance",
    position: 52,
    note: "Performance tem preço. A pergunta é sempre quanto o negócio ganha com o próximo milissegundo.",
  },
];

/** 05 / ADRs — Architecture Decision Records. */
export interface ADR {
  id: string;
  title: string;
  status: string;
  context: string;
  decision: string;
  why: string;
  tradeoff: string;
}

export const architectureDecisions: ADR[] = [
  {
    id: "001",
    title: "Postgres antes de banco vetorial",
    status: "Aceita",
    context: "Sistema de RAG sobre dado operacional estruturado.",
    decision: "PostgreSQL + pgvector.",
    why: "Dado estruturado, permissões e embeddings compartilham o mesmo modelo transacional.",
    tradeoff: "Menos performance vetorial especializada. Arquitetura operacional muito mais simples.",
  },
  {
    id: "002",
    title: "Motor de regras antes do LLM",
    status: "Aceita",
    context: "Decisões de negócio com critério objetivo e auditável.",
    decision: "Regras determinísticas primeiro, LLM só onde há ambiguidade.",
    why: "Decisão crítica não pode depender de saída probabilística. Regra é testável e explicável.",
    tradeoff: "Menos flexibilidade automática. Muito mais previsibilidade e confiança.",
  },
  {
    id: "003",
    title: "Redis para estado efêmero",
    status: "Aceita",
    context: "Locks, filas leves e estado de curta duração entre etapas.",
    decision: "Redis para estado efêmero, Postgres para estado durável.",
    why: "Cada estado no lugar certo: o volátil rápido e descartável, o durável auditável.",
    tradeoff: "Mais um componente na stack. Ganho grande em desempenho e clareza de responsabilidade.",
  },
  {
    id: "004",
    title: "Limites do sistema orientados a API",
    status: "Aceita",
    context: "Vários consumidores (apps, agentes, integrações) sobre a mesma base.",
    decision: "Contrato de API como fronteira, não acesso direto ao banco.",
    why: "Desacopla consumidores da implementação. Permite evoluir por dentro sem quebrar quem consome.",
    tradeoff: "Uma camada a mais pra manter. Em troca, evolução segura e limites claros.",
  },
];
