/**
 * Case studies — estrutura reutilizável (Contexto → Desafio → Papel → Arquitetura →
 * Decisões → Produção → Impacto → Stack). Conteúdo separado da apresentação.
 * Adicionar um novo case = adicionar um objeto aqui, sem tocar na UI.
 */
export interface CaseStudy {
  slug: string;
  kind: string;
  title: string;
  org: string;
  year: string;
  status: string;
  summary: string;
  context: string;
  challenge: string;
  roles: string[];
  systemLayers: string[];
  systemNote?: string;
  keyDecisions: { decision: string; reason: string }[];
  production: string[];
  impact: { value: string; label: string }[];
  stack: { group: string; items: string[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "homologacao-mrv",
    kind: "Homologação com IA",
    title: "Homologação de negócio automatizada",
    org: "MRV",
    year: "2026",
    status: "Em produção",
    summary:
      "Agentes de IA entram nos sistemas, executam o cenário como o usuário faria, conferem o resultado contra o critério de aceite e abrem card com evidência quando algo falha.",
    context:
      "A área de produto acelerou muito a entrega usando IA no desenvolvimento. O código já sai coberto por teste, então o gargalo desceu na esteira e parou na última etapa antes de subir pra produção: a homologação de negócio. Uma pessoa por squad simula o usuário real de ponta a ponta, atravessa vários sistemas e confere se a regra saiu certa. Isso virou o funil, a ponto de ter que escolher qual demanda entregar porque não dava pra homologar tudo.",
    challenge:
      "Não é teste de código, é QA de negócio. O agente precisa entrar em sistemas diferentes (um deles atrás de login de comunidade), executar um cenário real na tela, e verificar valores calculados e cláusulas que dependem do caso. Os critérios de aceite não estão tabulados e mudam por cenário, então a solução tem que aprender o critério, não assumir um fixo. E erro aqui é caro: aprovar o que está errado, ou reprovar o que está certo, mina a confiança na esteira.",
    roles: ["Arquitetura", "IA", "Automação de browser", "Liderança técnica"],
    systemLayers: [
      "Cenário + critério de aceite",
      "Orquestrador de agentes",
      "Execução em tela (browser)",
      "Verificação do resultado",
      "Relatório passou / não passou",
      "Card com evidência (Azure DevOps)",
    ],
    systemNote:
      "Os agentes executam o cenário no navegador como o usuário faria, atravessando os sistemas do piloto (Sales e Pricing). O resultado é conferido contra o critério de aceite e, no que falha, o próprio fluxo abre card com evidência e acompanha o reteste, fechando o ciclo de ponta a ponta.",
    keyDecisions: [
      {
        decision: "Automação de tela, não integração por API",
        reason:
          "A homologação precisa validar o que o usuário de negócio vê, atravessando sistemas que nem sempre expõem API. Executar na tela reproduz o cenário real.",
      },
      {
        decision: "Critério de aceite descrito antes de automatizar",
        reason:
          "As regras variam por cenário e não estavam tabuladas. Descrever o critério é a primeira etapa, e é o que deixa a verificação confiável em vez de chute.",
      },
      {
        decision: "Piloto recortado em dois squads",
        reason:
          "Sales e Pricing são os dois pontos mais engargalados. Provar o valor neles antes de ampliar reduz risco e dá número real pra decidir o resto.",
      },
      {
        decision: "Falha abre card com evidência, não só log",
        reason:
          "Fecha o ciclo dentro do fluxo que o time já usa. O que reprovou volta pro board com prova, e o reteste é acompanhado.",
      },
    ],
    production: [
      "Execução em navegador padrão da casa (Chrome)",
      "Verificação contra critério de aceite por cenário",
      "Evidência anexada em cada reprovação",
      "Abertura e acompanhamento de card no Azure DevOps",
      "Reteste dentro do mesmo ciclo",
      "Recorte por squad pra medir antes de ampliar",
    ],
    impact: [
      { value: "2 squads", label: "no piloto (Sales e Pricing)" },
      { value: "fim a fim", label: "do cenário ao card com evidência" },
      { value: "QA de negócio", label: "deixa de ser o gargalo da esteira" },
    ],
    stack: [
      { group: "IA", items: ["Agentes de IA", "Orquestração", "LLMs"] },
      { group: "Execução", items: ["Playwright", "Automação de browser"] },
      { group: "Integração", items: ["Azure DevOps", "Salesforce", "Sistemas internos"] },
    ],
  },

  {
    slug: "erp-retifica",
    kind: "ERP em produção",
    title: "ERP completo para retífica",
    org: "Favarini · Retífica Formiguense",
    year: "2026",
    status: "Em produção",
    summary:
      "O miolo da operação num sistema só: PCP, compras, estoque, financeiro, fiscal, comissões e ponto, com IA embarcada. Rodando em produção, com quatro CNPJs.",
    context:
      "A operação vivia espalhada entre planilhas e sistemas soltos. O objetivo era colocar o negócio inteiro num ERP próprio, do chão de fábrica ao financeiro, feito sob medida pra realidade de uma retífica, não um pacote genérico adaptado na marra.",
    challenge:
      "ERP é um dos softwares mais difíceis de acertar porque cada módulo tem regra própria e todos precisam conversar sem gerar inconsistência. Fiscal, financeiro e estoque não podem divergir. Some a isso quatro CNPJs na mesma base e a exigência de rodar em produção com gente usando todo dia desde cedo.",
    roles: ["Arquitetura", "Full Stack", "Liderança técnica"],
    systemLayers: [
      "PCP / Compras / Estoque",
      "Financeiro / Fiscal / Contábil",
      "Comissões / Ponto (facial)",
      "IA embarcada",
      "Base multi-CNPJ (produção)",
    ],
    systemNote:
      "Cada módulo cobre uma parte do negócio e compartilha a mesma base, então estoque, financeiro e fiscal ficam coerentes. A operação já roda em produção, com múltiplos CNPJs na mesma plataforma e um histórico grande de entregas.",
    keyDecisions: [
      {
        decision: "Construção do zero, não pacote adaptado",
        reason:
          "As regras de uma retífica não cabem num ERP genérico sem gambiarra. Modelar o domínio de verdade sai mais barato de manter do que forçar um pacote.",
      },
      {
        decision: "Base única para múltiplos CNPJs",
        reason:
          "Quatro empresas operando na mesma plataforma sem duplicar sistema, com separação onde o fiscal exige.",
      },
      {
        decision: "IA embarcada onde ela poupa trabalho repetitivo",
        reason:
          "A IA entra em tarefas concretas do dia a dia, não como enfeite. Serve pra reduzir digitação e erro manual.",
      },
      {
        decision: "Entrega por módulo, em produção",
        reason:
          "Liberar operacional e financeiro primeiro, com o time usando de verdade, dá retorno cedo e valida cada parte antes da próxima.",
      },
    ],
    production: [
      "Rodando em produção em domínio próprio",
      "Quatro CNPJs na mesma base",
      "Módulos operacional e financeiro liberados e em uso",
      "Fiscal e contábil integrados ao fluxo",
      "Ponto facial integrado à folha e comissões",
      "Centenas de entregas no histórico do projeto",
    ],
    impact: [
      { value: "1 sistema", label: "no lugar de planilhas e sistemas soltos" },
      { value: "4 CNPJs", label: "na mesma plataforma" },
      { value: "produção", label: "operação usando todo dia" },
    ],
    stack: [
      { group: "Aplicação", items: ["Next.js", "React", "TypeScript"] },
      { group: "Backend", items: ["Supabase", "PostgreSQL", "Edge Functions"] },
      { group: "Infra", items: ["Docker", "VPS", "Deploy próprio"] },
    ],
  },

  {
    slug: "integracao-saude-vtex",
    kind: "Integração em saúde",
    title: "Integração e dados sobre VTEX",
    org: "Grupo de saúde (Fleury · Hermes Pardini)",
    year: "2025",
    status: "Em produção",
    summary:
      "Camada de integração que faz cada evento contar exatamente uma vez, com trilha de auditoria completa. Idempotência, reprocesso seguro e base analítica estável.",
    context:
      "A operação digital dependia de eventos vindos da plataforma de e-commerce e de serviços internos. Eles chegavam duplicados, fora de ordem e às vezes sem aviso, o que sujava métrica e dificultava suporte. A prioridade era ter uma base confiável, previsível mesmo sob falha.",
    challenge:
      "Fluxo distribuído é traiçoeiro: webhook reentrega, evento repete, estado da origem diverge do destino com o tempo. Num grupo de saúde, dado inconsistente não é só ruído, atrapalha operação. O sistema tinha que garantir que cada evento contasse uma vez só e que qualquer divergência fosse rastreável e corrigível.",
    roles: ["Arquitetura", "Backend", "Dados"],
    systemLayers: [
      "VTEX (APIs + webhooks)",
      "Integração (contratos + idempotência)",
      "Persistência + trilha de auditoria",
      "Reprocesso e reconciliação",
      "Views analíticas",
      "Dashboard / consumo",
    ],
    systemNote:
      "Eventos externos entram como dado operacional, com dedupe e auditoria. A base separa captura e normalização do consumo analítico, então dá pra evoluir métrica e painel sem afetar a ingestão, e reprocessar com segurança quando preciso.",
    keyDecisions: [
      {
        decision: "Idempotência como regra, não exceção",
        reason:
          "Reentrega de webhook é normal. Tratar isso desde o desenho evita duplicidade em vez de remendar depois.",
      },
      {
        decision: "Separar ingestão de consumo analítico",
        reason:
          "A integração muda por um motivo, o dashboard por outro. Desacoplar reduz regressão dos dois lados.",
      },
      {
        decision: "Trilha de auditoria em cada evento",
        reason:
          "Registrar origem, sequência e reprocesso deixa o estado explicável e o suporte rápido.",
      },
      {
        decision: "Reconciliação para divergência ao longo do tempo",
        reason:
          "Origem e destino divergem com o tempo. Rotina de reconciliação mantém a consistência sem intervenção manual.",
      },
    ],
    production: [
      "Idempotência e dedupe para reentregas",
      "Trilha de auditoria com origem e sequência",
      "Reprocesso controlado e reconciliação",
      "Log estruturado com correlação por evento",
      "Camada analítica separada da ingestão",
      "Falha localizável em minutos por correlação",
    ],
    impact: [
      { value: "0%", label: "duplicidade em reentregas" },
      { value: "100%", label: "eventos com trilha de auditoria" },
      { value: "1", label: "base analítica estável para a operação" },
    ],
    stack: [
      { group: "Integração", items: ["APIs REST", "Webhooks", "Contratos de payload"] },
      { group: "Dados", items: ["PostgreSQL", "SQL (views)", "Auditoria de eventos"] },
      { group: "Operação", items: ["Log estruturado", "Correlação", "Reprocesso"] },
    ],
  },

  {
    slug: "dados-ia-gestora",
    kind: "Arquitetura de dados e IA",
    title: "Base de dados e IA para gestora",
    org: "Gestora de investimentos regulada",
    year: "2025",
    status: "Arquitetura entregue",
    summary:
      "Arquitetura back-end primeiro: uma fonte única normalizada alimentando os apps existentes, com RAG citado, zonas de dado por sensibilidade e governança para ambiente regulado.",
    context:
      "Uma gestora regulada usava IA acima da média no dia a dia, mas a base de dados e a governança não acompanhavam. O time queria escalar o uso de IA sem abrir mão de segurança e conformidade, num setor onde vazar informação sensível é inaceitável.",
    challenge:
      "Em ambiente regulado, a arquitetura precisa proteger dado sensível por desenho. Nem tudo pode passar por modelo público, e informação privilegiada tem que ficar isolada. O desafio foi desenhar uma base única confiável que os apps atuais consomem, com IA por cima, sem reescrever o que já funciona e sem criar risco de conformidade.",
    roles: ["Arquitetura", "IA", "Dados"],
    systemLayers: [
      "Experiências (chat / CRM / dashboards)",
      "Orquestração + aprovação humana",
      "Conhecimento, memória e tools",
      "Dados, identidade e segurança",
      "Observabilidade e governança",
    ],
    systemNote:
      "A tese central foi back-end primeiro: estruturar uma fonte única normalizada e deixar os apps atuais como consumidores dela, com RAG citado sobre o acervo e zonas de dado por sensibilidade. Os agentes entram depois, com escopo estreito e decisão humana no comando.",
    keyDecisions: [
      {
        decision: "Back-end primeiro, apps atuais preservados",
        reason:
          "Estruturar a base única antes dos agentes. O que já funciona vira consumidor da base, sem reescrita.",
      },
      {
        decision: "Zonas de dado por sensibilidade",
        reason:
          "Dado público, interno e sensível têm tratamento diferente. O mais sensível nunca passa por modelo público.",
      },
      {
        decision: "RAG com citação de fonte obrigatória",
        reason:
          "Resposta sem fonte não serve pra decisão em ambiente regulado. A citação torna a saída verificável.",
      },
      {
        decision: "Agentes de escopo estreito com aprovação humana",
        reason:
          "Em contexto fiduciário, a decisão fica com a pessoa. O agente apoia, não decide sozinho.",
      },
    ],
    production: [
      "Zonas de dado (pública, interna, sensível)",
      "Dado sensível fora de modelo público",
      "RAG com citação de fonte obrigatória",
      "Aprovação humana nos fluxos de decisão",
      "Trilha de auditoria e permissões",
      "Controle de custo por tarefa e avaliação mínima",
    ],
    impact: [
      { value: "1", label: "fonte única normalizada" },
      { value: "3 zonas", label: "de dado por sensibilidade" },
      { value: "citado", label: "todo RAG com fonte verificável" },
    ],
    stack: [
      { group: "Dados", items: ["PostgreSQL", "ETL", "Fonte única normalizada"] },
      { group: "IA", items: ["RAG citado", "LLMs", "Agentes de escopo estreito"] },
      { group: "Governança", items: ["Zonas de dado", "Auditoria", "Custo + eval"] },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/** Próximo case na ordem (circular), para a seção "Próximo sistema". */
export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return undefined;
  return caseStudies[(i + 1) % caseStudies.length];
}
