/**
 * Experience — evolução de escopo (não timeline curricular).
 * Fases da trajetória + scope evolution + how I operate.
 */

export interface ExperiencePhase {
  time: string;          // "2026 — Agora"
  role: string;          // "CTO / AI Systems Architect"
  org: string;           // "Pinn"
  summary: string;
  scope: string[];       // responsabilidades
  work?: string[];       // selected work (opcional)
  current?: boolean;
}

export const experiencePhases: ExperiencePhase[] = [
  {
    time: "2026 — Agora",
    role: "CTO / AI Systems Architect",
    org: "Pinn",
    summary:
      "Construindo produtos AI-native e sistemas de software corporativos. Estratégia técnica e mão no código, todo dia.",
    scope: [
      "Arquitetura",
      "Produtos de IA",
      "Estratégia técnica",
      "Engenharia de produto",
      "Infraestrutura",
    ],
    work: [
      "Agentes de IA",
      "Plataforma de AI Ops",
      "Integrações corporativas",
      "Sistemas RAG",
      "Micro SaaS",
      "Infra de automação",
    ],
    current: true,
  },
  {
    time: "2024 — 2025",
    role: "Software & Product Engineering",
    org: "Ventura Solutions · Viu! Tecnologia",
    summary:
      "Saída do desenvolvimento de features para a posse do sistema e da arquitetura. Da integração de sistemas físicos às integrações via API para operações B2B.",
    scope: ["Backend", "APIs", "Automação", "Dados", "Integração de sistemas"],
  },
  {
    time: "2021 — 2023",
    role: "Origem técnica de campo",
    org: "Deode · Eficiência em Energia",
    summary:
      "Onde nasceu a disciplina técnica: projetos de eficiência energética em campo, atenção a padrões e o hábito de documentar e explicar processos. A base que carrego até hoje na engenharia.",
    scope: ["Execução técnica", "Diagnóstico", "Documentação", "Campo"],
  },
];

/** Escopo de responsabilidade: antes vs hoje (mudança de escopo, não nível de skill). */
export interface ScopeShift {
  label: string;
  earlier: number; // 0-100
  today: number;   // 0-100
}

export const scopeEvolution: ScopeShift[] = [
  { label: "Code", earlier: 92, today: 45 },
  { label: "Product", earlier: 45, today: 78 },
  { label: "Architecture", earlier: 20, today: 95 },
  { label: "AI", earlier: 12, today: 90 },
  { label: "Infra", earlier: 30, today: 72 },
  { label: "Strategy", earlier: 15, today: 85 },
];

/** Como eu opero: da leitura de negócio à operação em produção. */
export const operatingModel: { index: string; title: string; body: string }[] = [
  { index: "01", title: "Entender o negócio", body: "O problema real antes da solução. Restrição, custo e o que move o ponteiro." },
  { index: "02", title: "Modelar o domínio", body: "Traduzir a operação em um modelo claro, com limites e regras explícitas." },
  { index: "03", title: "Desenhar o sistema", body: "Arquitetura antes do código: camadas, integrações, dados e trade-offs." },
  { index: "04", title: "Construir o caminho crítico", body: "Entregar primeiro a espinha que sustenta o resto, em produção, cedo." },
  { index: "05", title: "Habilitar o time", body: "Padrões, code review e decisões documentadas pra escalar sem virar gargalo." },
  { index: "06", title: "Operar em produção", body: "Observabilidade, confiabilidade e evolução contínua com o sistema no ar." },
];

/** Trilha de evolução de responsabilidade. */
export const responsibilityTrack: string[] = [
  "Code",
  "Features",
  "Products",
  "Systems",
  "Architecture",
  "Technical Strategy",
];
