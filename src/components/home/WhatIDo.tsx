import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const areas = [
  {
    label: "Sistemas de IA",
    line: "Agentes prontos pra produção",
    detail: "LLMs, RAG, orquestração e avaliação. IA como infraestrutura, não como feature.",
  },
  {
    label: "Arquitetura",
    line: "API-first / Multi-tenant",
    detail: "Event-driven, isolamento com RLS, idempotência e modelo de domínio limpo.",
  },
  {
    label: "Automação",
    line: "Fluxos críticos do negócio",
    detail: "Integração com CRMs e ERPs legados que chega em produção e se sustenta.",
  },
  {
    label: "Infraestrutura",
    line: "Cloud / Observabilidade / Dados",
    detail: "Docker, CI/CD, log e métrica pra manter o sistema diagnosticável.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="02"
          label="O que eu faço"
          title="Trabalho entre o problema de negócio e o sistema em produção."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal key={a.label} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col bg-background p-6 md:p-7">
                <p className="mono-label">{a.label}</p>
                <p className="mt-4 text-lg font-medium tracking-tight">{a.line}</p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
