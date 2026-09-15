/**
 * Sistemas Selecionados — os projetos mais complexos, apresentados como cases de arquitetura.
 * Conteúdo separado da apresentação (este arquivo é a fonte).
 *
 * flow: cada item é uma camada do diagrama vertical.
 *   - string  → um nó único, centralizado
 *   - string[] → uma linha de nós paralelos (fan-out), ex.: ["IA", "REGRAS", "TOOLS"]
 */
export interface SelectedSystem {
  index: string;                 // "01"
  kind: string;                  // "SISTEMA DE IA"
  title: string;                 // "SDR de IA para operação B2B"
  org: string;                   // cliente / contexto
  summary: string;               // descrição curta
  roles: string[];               // ["Arquitetura", "IA", "Backend"]
  flow: (string | string[])[];   // diagrama de arquitetura
  status: string;                // "Sistema em produção"
  year: string;                  // "2026"
  caseSlug: string | null;
}

export const selectedSystems: SelectedSystem[] = [
  {
    index: "01",
    kind: "Homologação com IA",
    title: "Homologação de negócio automatizada",
    org: "MRV",
    summary:
      "Agentes de IA entram nos sistemas, executam o cenário como o usuário faria, conferem o resultado contra o critério de aceite e abrem card com evidência quando algo falha. O QA de negócio deixa de travar a esteira.",
    roles: ["Arquitetura", "IA", "Automação de browser"],
    flow: [
      "CENÁRIO + CRITÉRIO",
      "ORQUESTRADOR",
      ["AGENTE", "EXECUÇÃO", "VERIFICAÇÃO"],
      "RELATÓRIO + CARD",
    ],
    status: "Em produção",
    year: "2026",
    caseSlug: "homologacao-mrv",
  },
  {
    index: "02",
    kind: "ERP em produção",
    title: "ERP completo para retífica",
    org: "Favarini · Retífica Formiguense",
    summary:
      "O miolo da operação num sistema só: PCP, compras, estoque, financeiro, fiscal, comissões e ponto, com IA embarcada. Rodando em produção, com quatro CNPJs na mesma base.",
    roles: ["Arquitetura", "Full Stack", "Liderança técnica"],
    flow: [
      "OPERAÇÃO",
      ["PCP", "ESTOQUE", "COMPRAS"],
      "NÚCLEO ERP",
      ["FINANCEIRO", "FISCAL", "COMISSÕES"],
      "BASE MULTI-CNPJ",
    ],
    status: "Em produção",
    year: "2026",
    caseSlug: "erp-retifica",
  },
  {
    index: "03",
    kind: "Integração em saúde",
    title: "Integração e dados sobre VTEX",
    org: "Grupo de saúde (Fleury · Hermes Pardini)",
    summary:
      "Camada de integração que faz cada evento contar exatamente uma vez, com trilha de auditoria completa. Idempotência, reprocesso seguro e uma base analítica estável pra operação digital.",
    roles: ["Arquitetura", "Backend", "Dados"],
    flow: [
      "VTEX (APIs + WEBHOOKS)",
      "INTEGRAÇÃO (IDEMPOTÊNCIA)",
      ["PERSISTÊNCIA", "AUDITORIA", "RECONCILIAÇÃO"],
      "VIEWS ANALÍTICAS",
    ],
    status: "Em produção",
    year: "2025",
    caseSlug: "integracao-saude-vtex",
  },
  {
    index: "04",
    kind: "Arquitetura de dados e IA",
    title: "Base de dados e IA para gestora",
    org: "Gestora de investimentos regulada",
    summary:
      "Arquitetura back-end primeiro: uma fonte única normalizada alimentando os apps existentes, com RAG citado, zonas de dado por sensibilidade e governança pensada pra ambiente regulado.",
    roles: ["Arquitetura", "IA", "Dados"],
    flow: [
      "EXPERIÊNCIAS (CHAT · CRM · BI)",
      "ORQUESTRAÇÃO + APROVAÇÃO",
      ["RAG CITADO", "MEMÓRIA", "TOOLS"],
      "FONTE ÚNICA (DADOS)",
      "GOVERNANÇA + ZONAS",
    ],
    status: "Arquitetura entregue",
    year: "2025",
    caseSlug: "dados-ia-gestora",
  },
];
