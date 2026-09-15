/**
 * Lab — o que estou explorando agora (pesquisa, experimentação).
 */
export interface LabProject {
  index: string;
  title: string;
  area: string;      // "Infra de IA local"
  body: string;
  tags: string[];
  status: string;    // "Explorando" / "Em construção"
}

export const labProjects: LabProject[] = [
  {
    index: "01",
    title: "Infraestrutura de IA local",
    area: "Inference",
    body: "Inferência multi-node em Apple Silicon e modelos locais, pra rodar IA sensível sem depender de nuvem pública.",
    tags: ["Apple Silicon", "Modelos locais", "Multi-node"],
    status: "Explorando",
  },
  {
    index: "02",
    title: "Orquestração de agentes",
    area: "Agents",
    body: "Fluxos autônomos de longa duração: agentes que trabalham por horas, com memória, checkpoints e retomada.",
    tags: ["Agentes", "Long-running", "Memória"],
    status: "Em construção",
  },
  {
    index: "03",
    title: "IA financeira",
    area: "RAG",
    body: "RAG sobre dado financeiro estruturado, com citação obrigatória e zonas de sensibilidade, pra apoiar decisão sem alucinar.",
    tags: ["RAG", "Dado estruturado", "Citação"],
    status: "Explorando",
  },
  {
    index: "04",
    title: "Arquitetura de software AI-native",
    area: "Architecture",
    body: "Sistemas onde IA é infraestrutura, não feature. Como desenhar produto assumindo o modelo como componente de primeira classe.",
    tags: ["AI-native", "Arquitetura", "Produto"],
    status: "Pesquisando",
  },
];

/**
 * Ask Pedro — perguntas sugeridas para o agente do portfólio.
 * Interface preparada pra receber endpoint de chat/RAG depois.
 */
export const askPedroSuggestions: string[] = [
  "Que sistemas de IA o Pedro já construiu?",
  "Como o Pedro aborda RAG?",
  "Mostra a experiência dele em backend.",
  "Que tipo de CTO o Pedro é?",
  "Qual projeto mostra arquitetura enterprise?",
];
