/**
 * Case studies — estrutura rica (Overview → Context → Challenge → Architecture →
 * Key Decisions → Production → Impact → Stack → Next). Conteúdo separado da apresentação.
 * Adicionar um novo case = adicionar um objeto aqui, sem tocar na UI.
 */

export interface DiagramNode {
  label: string;
  sub?: string;
  icon?: string; // simple-icons slug (opcional)
}
export interface ArchColumn {
  title: string;
  nodes: DiagramNode[];
}
export interface KeyDecision {
  q: string; // "Por que LangGraph?"
  a: string;
}
export interface ProductionFeature {
  icon: string; // lucide icon name
  title: string;
  sub: string;
}
export interface TechItem {
  name: string;
  slug: string; // simple-icons slug
  color?: string;
}

export interface CaseStudy {
  slug: string;
  kind: string;
  title: string;
  tagline: string; // subtítulo curto sob o título
  org: string;
  summary: string;

  // meta lateral
  year: string;
  status: string;
  roles: string[];
  client: string;
  industry: string;
  liveUrl?: string;
  githubUrl?: string;

  // diagrama do overview (topo)
  overviewFlow: (string | string[])[];

  context: string;
  contextFlow?: string[]; // mini-fluxo lateral

  challenge: string;
  challengeKeywords?: string[];

  // arquitetura detalhada (04)
  architecture: {
    columns: ArchColumn[];
    dataLayer: DiagramNode[];
    note?: string;
  };

  keyDecisions: KeyDecision[];
  production: ProductionFeature[];
  impact: { value: string; label: string }[];
  stack: TechItem[];
}

export const caseStudies: CaseStudy[] = [
  // ─── FLAGSHIP: Pinn Agent Sales (exemplo do template) ───────────────────
  {
    slug: "pinn-agent-sales",
    kind: "Sistema de vendas com IA",
    title: "PINN AGENT SALES",
    tagline: "Infraestrutura de vendas com IA para operações de alta performance.",
    org: "Pinn",
    summary:
      "Sistema de IA de conversa combinando WhatsApp, CRM, qualificação, agendamento e handoff automático, desenhado pra escalar receita com o mínimo de esforço humano.",
    year: "2026",
    status: "Em produção",
    roles: ["Arquitetura", "Engenharia de IA", "Backend", "Liderança técnica"],
    client: "Pinn",
    industry: "B2B / Serviços",
    githubUrl: "https://github.com/phventuraogum",
    overviewFlow: ["NEGÓCIO", "AGENTES DE IA", ["WHATSAPP", "CRM"], "AGENDA", "CAMADA DE DADOS"],
    context:
      "A Pinn precisava escalar a operação de vendas sem aumentar o time. Muito tempo ia embora no primeiro contato, na qualificação e no agendamento, o que travava o crescimento do funil e mantinha o custo operacional alto.",
    contextFlow: ["PROBLEMA DE NEGÓCIO", "AUTOMAÇÃO", "RECEITA"],
    challenge:
      "Não era só responder mensagem. O sistema precisava entender contexto, qualificar leads, integrar com vários sistemas externos, seguir regras de negócio, tratar casos de borda e operar de forma confiável em escala, com observabilidade, segurança e rastreabilidade total.",
    challengeKeywords: ["Escala", "Confiabilidade", "Integrações", "Regras de negócio", "Observabilidade"],
    architecture: {
      columns: [
        {
          title: "Canais",
          nodes: [
            { label: "WhatsApp", sub: "Evolution API" },
            { label: "LinkedIn", sub: "Prospecção" },
            { label: "Web", sub: "Formulários" },
            { label: "API", sub: "Webhooks" },
          ],
        },
        {
          title: "Camada de IA",
          nodes: [
            { label: "LLM", sub: "GPT-4o" },
            { label: "Agent Orchestrator", sub: "LangGraph" },
            { label: "Tools & Business Rules", sub: "" },
          ],
        },
        {
          title: "Sistemas externos",
          nodes: [
            { label: "Kommo", sub: "CRM" },
            { label: "Google", sub: "Agenda" },
            { label: "n8n", sub: "Automações" },
            { label: "Dados", sub: "Warehouse" },
          ],
        },
      ],
      dataLayer: [
        { label: "PostgreSQL", sub: "Estado" },
        { label: "Redis", sub: "Fila / Lock" },
        { label: "Observabilidade", sub: "Grafana + Loki" },
      ],
      note: "Arquitetura modular e orientada a eventos: os canais alimentam a camada de IA, que decide e aciona os sistemas externos. Tudo persiste e é observável na camada de dados.",
    },
    keyDecisions: [
      { q: "Por que LangGraph?", a: "Controle melhor sobre fluxo de agentes, tools e tarefas de longa duração." },
      { q: "Por que Redis?", a: "Locks distribuídos, rate limiting e gestão de fila." },
      { q: "Por que Kommo?", a: "Flexibilidade, boa API e alinhamento com a operação de vendas." },
      { q: "Por que Supabase?", a: "Desenvolvimento rápido, RLS e integração fácil com outros serviços." },
      { q: "Por que não fine-tuning?", a: "Menor custo e mais flexibilidade. Arquitetura de prompt + tools resolveu." },
      { q: "Por que event-driven?", a: "Confiabilidade, escalabilidade e controle de tarefas assíncronas." },
    ],
    production: [
      { icon: "ShieldCheck", title: "Segurança", sub: "RLS, chaves de API" },
      { icon: "Activity", title: "Observabilidade", sub: "Métricas, logs, alertas" },
      { icon: "Copy", title: "Idempotência", sub: "Deduplicação" },
      { icon: "Gauge", title: "Rate limiting", sub: "Por canal" },
      { icon: "RefreshCw", title: "Tratamento de erro", sub: "Retries + dead letter" },
      { icon: "LineChart", title: "Monitoramento", sub: "Grafana + Prometheus" },
    ],
    impact: [
      { value: "5x", label: "mais conversas" },
      { value: "+300%", label: "leads qualificados" },
      { value: "75%", label: "redução de trabalho manual" },
      { value: "-60%", label: "custo por reunião" },
      { value: "+45%", label: "conversão de reunião" },
      { value: "24/7", label: "operação" },
    ],
    stack: [
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "LangGraph", slug: "langchain" },
      { name: "OpenAI", slug: "openai" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "n8n", slug: "n8n" },
      { name: "Supabase", slug: "supabase" },
      { name: "Grafana", slug: "grafana" },
    ],
  },

  // ─── MRV ─────────────────────────────────────────────────────────────────
  {
    slug: "homologacao-mrv",
    kind: "Homologação com IA",
    title: "Homologação de negócio automatizada",
    tagline: "QA de negócio feito por agentes de IA, direto nas telas dos sistemas.",
    org: "MRV",
    summary:
      "Agentes de IA executam o cenário como o usuário faria, conferem o resultado contra o critério de aceite e abrem card com evidência quando algo falha. O QA de negócio deixa de travar a esteira.",
    year: "2026",
    status: "Em produção",
    roles: ["Arquitetura", "IA", "Automação de browser"],
    client: "MRV",
    industry: "Construção",
    overviewFlow: ["CENÁRIO + CRITÉRIO", "ORQUESTRADOR", ["AGENTE", "EXECUÇÃO", "VERIFICAÇÃO"], "RELATÓRIO + CARD"],
    context:
      "A área de produto acelerou muito a entrega usando IA no desenvolvimento. O código já sai coberto por teste, então o gargalo desceu na esteira e parou na última etapa antes de subir pra produção: a homologação de negócio. Uma pessoa por squad simula o usuário real de ponta a ponta e confere se a regra saiu certa. Isso virou o funil.",
    contextFlow: ["ENTREGA RÁPIDA", "GARGALO NO QA", "HOMOLOGAÇÃO AUTOMÁTICA"],
    challenge:
      "Não é teste de código, é QA de negócio. O agente precisa entrar em sistemas diferentes (um deles atrás de login de comunidade), executar um cenário real na tela e verificar valores calculados e cláusulas que dependem do caso. Os critérios de aceite não estão tabulados e mudam por cenário, então a solução tem que aprender o critério, não assumir um fixo.",
    challengeKeywords: ["Multi-sistema", "Critério variável", "Execução em tela", "Confiabilidade"],
    architecture: {
      columns: [
        {
          title: "Entrada",
          nodes: [
            { label: "Cenário", sub: "Planilha" },
            { label: "Critério de aceite", sub: "Por caso" },
          ],
        },
        {
          title: "Orquestração",
          nodes: [
            { label: "Orquestrador", sub: "Agentes" },
            { label: "Execução em tela", sub: "Playwright" },
            { label: "Verificação", sub: "Resultado x aceite" },
          ],
        },
        {
          title: "Sistemas do piloto",
          nodes: [
            { label: "Salesforce", sub: "Sales" },
            { label: "MRV Preços", sub: "Pricing" },
            { label: "Microserviços", sub: "Proposta / contrato" },
          ],
        },
      ],
      dataLayer: [
        { label: "Relatório", sub: "Passou / não passou" },
        { label: "Azure DevOps", sub: "Card + evidência" },
        { label: "Reteste", sub: "Mesmo ciclo" },
      ],
      note: "Os agentes executam o cenário no navegador, atravessando os sistemas do piloto. O resultado é conferido contra o critério e, no que falha, o fluxo abre card com evidência e acompanha o reteste.",
    },
    keyDecisions: [
      { q: "Por que automação de tela?", a: "A homologação valida o que o usuário de negócio vê, atravessando sistemas que nem sempre têm API." },
      { q: "Por que descrever o critério antes?", a: "As regras variam por cenário e não estavam tabuladas. Descrever é o que deixa a verificação confiável." },
      { q: "Por que piloto em 2 squads?", a: "Sales e Pricing são os mais engargalados. Provar valor neles antes de ampliar reduz risco." },
      { q: "Por que card com evidência?", a: "Fecha o ciclo dentro do board que o time já usa, com prova, e acompanha o reteste." },
    ],
    production: [
      { icon: "Chrome", title: "Execução em tela", sub: "Navegador padrão da casa" },
      { icon: "CheckCheck", title: "Verificação", sub: "Contra critério por cenário" },
      { icon: "Paperclip", title: "Evidência", sub: "Anexada em cada falha" },
      { icon: "Ticket", title: "Integração", sub: "Card no Azure DevOps" },
      { icon: "RefreshCw", title: "Reteste", sub: "Dentro do mesmo ciclo" },
      { icon: "SlidersHorizontal", title: "Recorte", sub: "Por squad, pra medir" },
    ],
    impact: [
      { value: "2 squads", label: "no piloto (Sales e Pricing)" },
      { value: "fim a fim", label: "do cenário ao card com evidência" },
      { value: "QA de negócio", label: "deixa de ser o gargalo" },
    ],
    stack: [
      { name: "Agentes de IA", slug: "openai" },
      { name: "Playwright", slug: "playwright" },
      { name: "Python", slug: "python" },
      { name: "Azure DevOps", slug: "azuredevops" },
    ],
  },

  // ─── Favarini / Retífica ───────────────────────────────────────────────
  {
    slug: "erp-retifica",
    kind: "ERP em produção",
    title: "ERP completo para retífica",
    tagline: "O miolo da operação num sistema só, do chão de fábrica ao financeiro.",
    org: "Favarini · Retífica Formiguense",
    summary:
      "PCP, compras, estoque, financeiro, fiscal, comissões e ponto, com IA embarcada. Rodando em produção, com quatro CNPJs na mesma base.",
    year: "2026",
    status: "Em produção",
    roles: ["Arquitetura", "Full Stack", "Liderança técnica"],
    client: "Favarini Motores",
    industry: "Automotivo / Retífica",
    overviewFlow: ["OPERAÇÃO", ["PCP", "ESTOQUE", "COMPRAS"], "NÚCLEO ERP", ["FINANCEIRO", "FISCAL", "COMISSÕES"], "BASE MULTI-CNPJ"],
    context:
      "A operação vivia espalhada entre planilhas e sistemas soltos. O objetivo era colocar o negócio inteiro num ERP próprio, do chão de fábrica ao financeiro, feito sob medida pra realidade de uma retífica.",
    contextFlow: ["PLANILHAS SOLTAS", "ERP SOB MEDIDA", "OPERAÇÃO UNIFICADA"],
    challenge:
      "ERP é um dos softwares mais difíceis de acertar porque cada módulo tem regra própria e todos precisam conversar sem gerar inconsistência. Fiscal, financeiro e estoque não podem divergir. Some quatro CNPJs na mesma base e a exigência de rodar em produção com gente usando todo dia.",
    challengeKeywords: ["Multi-módulo", "Multi-CNPJ", "Consistência fiscal", "Produção desde cedo"],
    architecture: {
      columns: [
        {
          title: "Operação",
          nodes: [
            { label: "PCP", sub: "Produção" },
            { label: "Estoque", sub: "" },
            { label: "Compras", sub: "" },
          ],
        },
        {
          title: "Núcleo",
          nodes: [
            { label: "Financeiro", sub: "" },
            { label: "Fiscal", sub: "" },
            { label: "Contábil", sub: "" },
          ],
        },
        {
          title: "Pessoas",
          nodes: [
            { label: "Comissões", sub: "" },
            { label: "Ponto facial", sub: "Stel" },
            { label: "IA embarcada", sub: "" },
          ],
        },
      ],
      dataLayer: [
        { label: "PostgreSQL", sub: "Base única" },
        { label: "Multi-CNPJ", sub: "4 empresas" },
        { label: "Produção", sub: "erp.favarinimotores" },
      ],
      note: "Cada módulo cobre uma parte do negócio e compartilha a mesma base, então estoque, financeiro e fiscal ficam coerentes. Múltiplos CNPJs na mesma plataforma.",
    },
    keyDecisions: [
      { q: "Por que construir do zero?", a: "As regras de uma retífica não cabem num ERP genérico sem gambiarra. Modelar o domínio sai mais barato de manter." },
      { q: "Por que base única?", a: "Quatro empresas na mesma plataforma sem duplicar sistema, com separação onde o fiscal exige." },
      { q: "Por que IA embarcada?", a: "Entra em tarefas concretas do dia a dia, pra reduzir digitação e erro manual." },
      { q: "Por que entregar por módulo?", a: "Liberar operacional e financeiro primeiro dá retorno cedo e valida cada parte antes da próxima." },
    ],
    production: [
      { icon: "Rocket", title: "Em produção", sub: "Domínio próprio" },
      { icon: "Building2", title: "Multi-CNPJ", sub: "4 empresas na base" },
      { icon: "Receipt", title: "Fiscal", sub: "Integrado ao fluxo" },
      { icon: "Fingerprint", title: "Ponto facial", sub: "Folha e comissões" },
      { icon: "Boxes", title: "Estoque", sub: "Coerente com financeiro" },
      { icon: "History", title: "Histórico", sub: "Centenas de entregas" },
    ],
    impact: [
      { value: "1 sistema", label: "no lugar de planilhas soltas" },
      { value: "4 CNPJs", label: "na mesma plataforma" },
      { value: "produção", label: "operação usando todo dia" },
    ],
    stack: [
      { name: "Next.js", slug: "nextdotjs" },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Supabase", slug: "supabase" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Docker", slug: "docker" },
    ],
  },

  // ─── Grupo de saúde ─────────────────────────────────────────────────────
  {
    slug: "integracao-saude-vtex",
    kind: "Integração em saúde",
    title: "Integração e dados sobre VTEX",
    tagline: "Cada evento contando exatamente uma vez, com auditoria completa.",
    org: "Grupo de saúde (Fleury · Hermes Pardini)",
    summary:
      "Camada de integração com idempotência, reprocesso seguro e uma base analítica estável pra operação digital, sobre a plataforma VTEX e serviços internos.",
    year: "2025",
    status: "Em produção",
    roles: ["Arquitetura", "Backend", "Dados"],
    client: "Grupo de saúde",
    industry: "Saúde",
    overviewFlow: ["VTEX (APIs + WEBHOOKS)", "INTEGRAÇÃO", ["PERSISTÊNCIA", "AUDITORIA", "RECONCILIAÇÃO"], "VIEWS ANALÍTICAS"],
    context:
      "A operação digital dependia de eventos vindos da plataforma de e-commerce e de serviços internos. Eles chegavam duplicados, fora de ordem e às vezes sem aviso, o que sujava métrica e dificultava suporte. A prioridade era uma base confiável, previsível mesmo sob falha.",
    contextFlow: ["EVENTOS CAÓTICOS", "CAMADA DE INTEGRAÇÃO", "BASE CONFIÁVEL"],
    challenge:
      "Fluxo distribuído é traiçoeiro: webhook reentrega, evento repete, estado da origem diverge do destino com o tempo. Num grupo de saúde, dado inconsistente atrapalha operação. O sistema tinha que garantir que cada evento contasse uma vez só e que qualquer divergência fosse rastreável e corrigível.",
    challengeKeywords: ["Idempotência", "Reentrega", "Reconciliação", "Rastreabilidade"],
    architecture: {
      columns: [
        {
          title: "Origem",
          nodes: [
            { label: "VTEX", sub: "APIs" },
            { label: "Webhooks", sub: "Eventos" },
            { label: "Serviços internos", sub: "" },
          ],
        },
        {
          title: "Integração",
          nodes: [
            { label: "Contratos", sub: "Validação" },
            { label: "Idempotência", sub: "Dedupe" },
            { label: "Reprocesso", sub: "Seguro" },
          ],
        },
        {
          title: "Consistência",
          nodes: [
            { label: "Auditoria", sub: "Origem + sequência" },
            { label: "Reconciliação", sub: "Origem x destino" },
            { label: "Correlação", sub: "Por evento" },
          ],
        },
      ],
      dataLayer: [
        { label: "PostgreSQL", sub: "Persistência" },
        { label: "Views", sub: "Camada analítica" },
        { label: "Dashboards", sub: "Consumo" },
      ],
      note: "Eventos externos entram como dado operacional, com dedupe e auditoria. A base separa captura e normalização do consumo analítico, permitindo evoluir e reprocessar com segurança.",
    },
    keyDecisions: [
      { q: "Por que idempotência como regra?", a: "Reentrega de webhook é normal. Tratar desde o desenho evita duplicidade em vez de remendar depois." },
      { q: "Por que separar ingestão de consumo?", a: "A integração muda por um motivo, o dashboard por outro. Desacoplar reduz regressão dos dois lados." },
      { q: "Por que trilha de auditoria?", a: "Registrar origem, sequência e reprocesso deixa o estado explicável e o suporte rápido." },
      { q: "Por que reconciliação?", a: "Origem e destino divergem com o tempo. A rotina mantém consistência sem intervenção manual." },
    ],
    production: [
      { icon: "Copy", title: "Idempotência", sub: "Dedupe em reentregas" },
      { icon: "ScrollText", title: "Auditoria", sub: "Origem e sequência" },
      { icon: "RefreshCw", title: "Reprocesso", sub: "Controlado" },
      { icon: "Link2", title: "Correlação", sub: "Log por evento" },
      { icon: "Layers", title: "Camadas", sub: "Raw x analítico" },
      { icon: "Search", title: "Diagnóstico", sub: "Falha em minutos" },
    ],
    impact: [
      { value: "0%", label: "duplicidade em reentregas" },
      { value: "100%", label: "eventos com trilha de auditoria" },
      { value: "1", label: "base analítica estável" },
    ],
    stack: [
      { name: "TypeScript", slug: "typescript" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "VTEX", slug: "vtex" },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },

  // ─── Gestora ────────────────────────────────────────────────────────────
  {
    slug: "dados-ia-gestora",
    kind: "Arquitetura de dados e IA",
    title: "Base de dados e IA para gestora",
    tagline: "Back-end primeiro: fonte única, RAG citado e governança regulada.",
    org: "Gestora de investimentos regulada",
    summary:
      "Uma fonte única normalizada alimentando os apps existentes, com RAG citado, zonas de dado por sensibilidade e governança pensada pra ambiente regulado.",
    year: "2025",
    status: "Arquitetura entregue",
    roles: ["Arquitetura", "IA", "Dados"],
    client: "Confidencial",
    industry: "Investimentos (regulado)",
    overviewFlow: ["EXPERIÊNCIAS (CHAT · CRM · BI)", "ORQUESTRAÇÃO", ["RAG CITADO", "MEMÓRIA", "TOOLS"], "FONTE ÚNICA", "GOVERNANÇA"],
    context:
      "Uma gestora regulada usava IA acima da média no dia a dia, mas a base de dados e a governança não acompanhavam. O time queria escalar o uso de IA sem abrir mão de segurança e conformidade, num setor onde vazar informação sensível é inaceitável.",
    contextFlow: ["IA SEM BASE", "ARQUITETURA BACK-END", "IA GOVERNADA"],
    challenge:
      "Em ambiente regulado, a arquitetura precisa proteger dado sensível por desenho. Nem tudo pode passar por modelo público, e informação privilegiada tem que ficar isolada. O desafio foi desenhar uma base única confiável que os apps atuais consomem, com IA por cima, sem reescrever o que já funciona.",
    challengeKeywords: ["Dado sensível", "Conformidade", "RAG citado", "Fonte única"],
    architecture: {
      columns: [
        {
          title: "Experiências",
          nodes: [
            { label: "Chat", sub: "Interface" },
            { label: "CRM", sub: "Existente" },
            { label: "Dashboards", sub: "BI" },
          ],
        },
        {
          title: "Orquestração",
          nodes: [
            { label: "Agentes", sub: "Escopo estreito" },
            { label: "Aprovação", sub: "Humana" },
            { label: "RAG citado", sub: "Fonte obrigatória" },
          ],
        },
        {
          title: "Governança",
          nodes: [
            { label: "Zonas de dado", sub: "Sensibilidade" },
            { label: "Auditoria", sub: "Permissões" },
            { label: "Custo + eval", sub: "Por tarefa" },
          ],
        },
      ],
      dataLayer: [
        { label: "Fonte única", sub: "Normalizada" },
        { label: "ETL", sub: "Ingestão" },
        { label: "Apps atuais", sub: "Consumidores" },
      ],
      note: "A tese foi back-end primeiro: estruturar a fonte única e deixar os apps atuais como consumidores. Os agentes entram depois, com escopo estreito e decisão humana no comando.",
    },
    keyDecisions: [
      { q: "Por que back-end primeiro?", a: "Estruturar a base única antes dos agentes. O que já funciona vira consumidor da base, sem reescrita." },
      { q: "Por que zonas de dado?", a: "Público, interno e sensível têm tratamento diferente. O mais sensível nunca passa por modelo público." },
      { q: "Por que RAG citado?", a: "Resposta sem fonte não serve pra decisão em ambiente regulado. A citação torna a saída verificável." },
      { q: "Por que aprovação humana?", a: "Em contexto fiduciário, a decisão fica com a pessoa. O agente apoia, não decide sozinho." },
    ],
    production: [
      { icon: "Layers", title: "Zonas de dado", sub: "Pública / interna / sensível" },
      { icon: "ShieldCheck", title: "Isolamento", sub: "Sensível fora de LLM pública" },
      { icon: "Quote", title: "RAG citado", sub: "Fonte obrigatória" },
      { icon: "UserCheck", title: "Aprovação humana", sub: "Nos fluxos de decisão" },
      { icon: "ScrollText", title: "Auditoria", sub: "Trilha e permissões" },
      { icon: "Coins", title: "Custo", sub: "Por tarefa + eval" },
    ],
    impact: [
      { value: "1", label: "fonte única normalizada" },
      { value: "3 zonas", label: "de dado por sensibilidade" },
      { value: "citado", label: "todo RAG com fonte verificável" },
    ],
    stack: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Python", slug: "python" },
      { name: "OpenAI", slug: "openai" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/** Anterior e próximo (circular), para a navegação entre cases. */
export function getCaseSiblings(slug: string): { prev: CaseStudy; next: CaseStudy } | null {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return null;
  const n = caseStudies.length;
  return {
    prev: caseStudies[(i - 1 + n) % n],
    next: caseStudies[(i + 1) % n],
  };
}
