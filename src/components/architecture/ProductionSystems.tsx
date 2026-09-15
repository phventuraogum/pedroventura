import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { selectedSystems } from "@/data/systems";

export function ProductionSystems() {
  const systems = selectedSystems.filter((s) => s.caseSlug).slice(0, 4);

  return (
    <section id="in-production" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="06"
          label="In Production"
          title="Veja esses princípios em sistemas reais."
        >
          <p className="section-subtitle">
            Case studies que aplicam esses padrões em produção. Do padrão ao
            sistema real, ao case completo.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {systems.map((s, i) => (
            <Reveal key={s.index} delay={(i % 2) * 0.06}>
              <Link
                to={`/systems/${s.caseSlug}`}
                className="group flex h-full flex-col bg-background p-6 transition-colors hover:bg-surface-02 md:p-7"
              >
                <div className="flex items-center gap-3 mono-label">
                  <span className="text-accent">{s.index}</span>
                  <span>{s.kind}</span>
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-1.5 mono-label text-secondary">{s.org}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.roles.map((r) => (
                    <span key={r} className="chip">{r}</span>
                  ))}
                </div>
                <span className="link-arrow mt-auto pt-6">
                  Ver sistema
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 font-mono-jb text-[11px] uppercase tracking-wide text-foreground-muted">
            Ideias ganham crédito quando estão em produção.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
