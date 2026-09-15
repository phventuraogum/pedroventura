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
