/**
 * Base de conhecimento do agente "Pergunte ao Pedro".
 * Texto curado, em primeira pessoa. Fonte do contexto do RAG simples
 * (corpus pequeno cabe no contexto do modelo, sem vector DB, por decisão de arquitetura).
 * Manter alinhado com /src/data ao adicionar projetos.
 */
export const KNOWLEDGE = `
# Quem é Pedro Ventura
Sou o Pedro. Trabalho com software há mais de cinco anos. Hoje meu foco é engenharia de IA (agentes, LLMs, RAG, pipelines que colocam modelo pra trabalhar de verdade), apoiado numa base forte de engenharia de software: backend, dados e integração. Sou CTO numa operação de IA e continuo programando todo dia. Posicionamento: Arquiteto de Sistemas de IA.

Minha tese central: IA não é o sistema, é uma camada do sistema. Solução de verdade precisa de arquitetura, dados, infraestrutura, observabilidade e pessoas.

# Como eu penso arquitetura (System Model)
Restrição de negócio → modelo de domínio → camadas (Experience, Application, Intelligence, Data, Platform) → produção. Segurança, observabilidade, governança e confiabilidade atravessam todas as camadas, não são uma camada separada.

## Princípios
1. IA é um componente, não a arquitetura. Modelos são substituíveis; o limite do sistema não depende de um provider.
2. O estado vive fora do modelo. Estado de negócio precisa ser determinístico, persistente e auditável.
3. Regra de negócio antes da geração. Decisão crítica não depende só de raciocínio probabilístico.
4. Tudo que é externo pode falhar. APIs, modelos, bancos e integrações exigem retries, timeouts e fallbacks.
5. Observabilidade faz parte do produto. Logs, métricas, traces e auditabilidade são requisitos de produção.
6. Handoff humano é um estado do sistema, modelado de propósito, não exceção.

## Padrões que uso
- AI Agent: canal → ingress → orquestrador (LangGraph) → modelo, tools, memória → CRM/agenda/APIs → dados.
- Secure RAG: documentos → ingestão → chunking → embeddings → vector + full text → filtro ACL (antes do ranking) → ranking → LLM.
- Enterprise App: client → API gateway → domain services → database → eventos e workers.

## Decisões de arquitetura (ADRs)
- Postgres antes de banco vetorial: com pgvector, dado estruturado, permissões e embeddings dividem o mesmo modelo transacional. Menos performance vetorial especializada, muito menos complexidade operacional.
- Motor de regras antes do LLM: decisão crítica em regra determinística, testável e explicável.
- Redis para estado efêmero, Postgres para durável.
- Limites do sistema orientados a API, não acesso direto ao banco.

## Trade-offs
Não existe posição padrão; o contexto move a arquitetura. Async quando resiliência e throughput importam mais que consistência imediata. Monolito modular no começo, microserviço quando escala/organização exigem. Regra determinística pra decisão crítica, IA pra ambiguidade.

# Sistemas que construí
## Homologação de negócio automatizada (MRV, construção, em produção, 2026)
QA de negócio feito por agentes de IA direto nas telas. Agentes entram nos sistemas, executam o cenário como o usuário faria, conferem contra o critério de aceite e abrem card com evidência no Azure DevOps quando falha. Piloto em 2 squads (Sales e Pricing). Automação de tela (Playwright) porque a homologação valida o que o usuário vê, atravessando sistemas sem API. Papel: arquitetura, IA, automação de browser.

## ERP completo para retífica (Favarini / Retífica Formiguense, em produção, 2026)
Operação inteira num sistema só: PCP, compras, estoque, financeiro, fiscal, comissões, ponto facial, IA embarcada. Quatro CNPJs na mesma base. Construído do zero (não pacote adaptado), entregue por módulo. Stack: Next.js, React, TypeScript, Supabase, PostgreSQL, Docker. Papel: arquitetura, full stack, liderança técnica.

## Integração e dados sobre VTEX (grupo de saúde, Fleury/Hermes Pardini, em produção, 2025)
Camada de integração que faz cada evento contar exatamente uma vez, com auditoria completa. Idempotência, dedupe, reprocesso seguro, reconciliação, views analíticas. Resultado: 0% de duplicidade em reentregas, 100% dos eventos com trilha de auditoria. Papel: arquitetura, backend, dados.

## Base de dados e IA para gestora (gestora de investimentos regulada, arquitetura entregue, 2025)
Arquitetura back-end primeiro: fonte única normalizada alimentando os apps existentes, RAG citado (fonte obrigatória), zonas de dado por sensibilidade, governança pra ambiente regulado. Agentes de escopo estreito com aprovação humana. Cliente confidencial.

## Enterprise AI SDR / Pinn Agent Sales (Pinn, em produção)
SDR de IA federado que qualifica leads no WhatsApp, prospecta e faz handoff pro humano. Cérebro + sub-agentes especialistas, estado do lead fora do LLM, gates de cadência, cada interação vira evento. Stack: Python, LangChain, PostgreSQL, Redis, Evolution API, LLMs.

# Experiência (evolução de escopo)
- 2026, agora: CTO / Arquiteto de Sistemas de IA na Pinn. Arquitetura, produtos de IA, estratégia técnica, engenharia de produto, infraestrutura.
- 2024-2025: transição de execução a arquitetura (Ventura Solutions autônomo, Viu! Tecnologia integração de sistemas). Backend, APIs, automação, dados.
- 2021-2023: origem técnica de campo (Deode, eficiência energética). Disciplina técnica, diagnóstico, documentação.
Meu escopo mudou de código puro para arquitetura, IA e estratégia, mas continuo mão no código todo dia.

# Como eu opero
Entender o negócio → modelar o domínio → desenhar o sistema → construir o caminho crítico → habilitar o time → operar em produção.

# Lab (explorando agora)
Infra de IA local (Apple Silicon, modelos locais), orquestração de agentes de longa duração, IA financeira (RAG sobre dado estruturado), arquitetura de software AI-native.

# Stack
Backend: Python, TypeScript, Node.js, FastAPI, APIs REST, webhooks. Dados: PostgreSQL, Supabase, Redis, pgvector, SQL. IA: LLMs (OpenAI, Anthropic), LangChain, agentes, RAG, evals. Infra: AWS, Docker, Nginx, CI/CD, Grafana, Prometheus. Frontend: React, Next.js, Tailwind.

# Contato
GitHub github.com/phventuraogum, LinkedIn linkedin.com/in/phventura, email passisventura@gmail.com.
`.trim();
