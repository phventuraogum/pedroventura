/**
 * Sistemas Selecionados — os projetos mais complexos, apresentados como cases de arquitetura.
 * Conteúdo separado da apresentação (este arquivo é a fonte).
 * caseSlug aponta para a página de case study quando existir (senão fica null).
 */
export interface SelectedSystem {
  index: string;         // "01"
  kind: string;          // "HOMOLOGAÇÃO COM IA"
  title: string;         // "Homologação de negócio automatizada"
  org: string;           // cliente / contexto
  summary: string;       // 1-2 linhas
  roles: string[];       // ["Arquitetura", "IA", "Backend"]
  flow: string[];        // camadas verticais do diagrama
  stack: string[];       // tecnologias-chave
  caseSlug: string | null;
}

export const selectedSystems: SelectedSystem[] = [
  {
    index: "01",
    kind: "Homologação com IA",
    title: "Homologação de negócio automatizada",
    org: "MRV",
    summary:
      "Agentes de IA entram nos sistemas, executam o cenário como o usuário faria, conferem o resultado contra o critério de aceite e abrem card com evidência quando algo falha. O gargalo de QA de negócio deixa de travar a esteira.",
    roles: ["Arquitetura", "IA", "Automação de browser"],
    flow: [
      "Cenário + critério de aceite",
      "Orquestrador de agentes",
      "Execução em tela (browser)",
      "Verificação do resultado",
      "Relatório + card no Azure DevOps",
    ],
    stack: ["Agentes de IA", "Playwright", "Automação de browser", "Azure DevOps"],
    caseSlug: "homologacao-mrv",
  },
  {
    index: "02",
    kind: "ERP em produção",
    title: "ERP completo para retífica",
    org: "Favarini · Retífica Formiguense",
    summary:
      "O miolo da operação num sistema só: PCP, compras, estoque, financeiro, fiscal, comissões e ponto, com IA embarcada. Rodando em produção, com quatro CNPJs e centenas de entregas no histórico.",
    roles: ["Arquitetura", "Full Stack", "Liderança técnica"],
    flow: [
      "PCP / Compras / Estoque",
      "Financeiro / Fiscal",
      "Comissões / Ponto",
      "IA embarcada",
      "Multi-CNPJ (produção)",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Docker"],
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
      "VTEX (APIs + webhooks)",
      "Integração (contratos + idempotência)",
      "Persistência + auditoria",
      "Reprocesso e reconciliação",
      "Views analíticas",
    ],
    stack: ["APIs REST", "Webhooks", "PostgreSQL", "SQL", "Observabilidade"],
    caseSlug: "integracao-saude-vtex",
  },
  {
    index: "04",
    kind: "Arquitetura de dados e IA",
    title: "Base de dados e IA para gestora",
    org: "Gestora de investimentos regulada",
    summary:
      "Desenho da arquitetura back-end primeiro: uma fonte única normalizada alimentando os apps existentes, com RAG citado, zonas de dado por sensibilidade e governança pensada pra ambiente regulado.",
    roles: ["Arquitetura", "IA", "Dados"],
    flow: [
      "Experiências (chat / CRM / dashboards)",
      "Orquestração + aprovação humana",
      "Conhecimento, memória e tools",
      "Dados, identidade e segurança",
      "Observabilidade e governança",
    ],
    stack: ["PostgreSQL", "RAG", "LLMs", "Zonas de dado", "Governança"],
    caseSlug: "dados-ia-gestora",
  },
];
