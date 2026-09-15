import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { architecturePatterns } from "@/data/architecture";

export function Patterns() {
  return (
    <section id="patterns" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="03"
          label="Architecture Patterns"
          title="Padrões testados, implementações reais."
        >
          <p className="section-subtitle">
            Padrões que uso em sistemas de IA, aplicações corporativas e fluxos
            de automação. Mesmos princípios, contextos diferentes.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {architecturePatterns.map((p, i) => (
            <Reveal key={p.index} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-border bg-surface-01/40 p-6">
                <div className="flex items-center gap-3 mono-label">
                  <span className="text-accent">{p.index}</span>
                  <span>{p.label}</span>
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">
                  {p.desc}
                </p>

                <div className="mt-6 flex-1">
                  <ArchitectureFlow layers={p.flow} compact />
                </div>

                {p.caseSlug && (
                  <Link to={`/systems/${p.caseSlug}`} className="link-arrow group mt-6">
                    Ver exemplo
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 font-mono-jb text-[11px] uppercase tracking-wide text-foreground-muted">
            Mesmos princípios · contextos diferentes · sistemas reais.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
