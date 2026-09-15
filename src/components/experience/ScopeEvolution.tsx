import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { scopeEvolution } from "@/data/experienceData";

export function ScopeEvolution() {
  return (
    <section className="section-divide">
      <div className="container-wide py-16 md:py-24">
        <SectionHeader
          index="03"
          label="Evolução de escopo"
          title="Mudou a responsabilidade, não só a senioridade."
        >
          <p className="section-subtitle">
            Isto não é nível de conhecimento. É onde meu tempo e minha
            responsabilidade estão hoje, comparado ao começo.
          </p>
        </SectionHeader>

        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="mono-label">Antes</span>
            <span className="mono-label text-accent">Hoje</span>
          </div>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {scopeEvolution.map((s, i) => (
              <Reveal key={s.label} delay={(i % 6) * 0.05}>
                <div className="grid grid-cols-[110px_1fr] items-center gap-4 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="font-mono-jb text-[12px] uppercase tracking-wide text-foreground-secondary">
                    {s.label}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {/* antes */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-02">
                      <div className="h-full rounded-full bg-foreground-muted/40" style={{ width: `${s.earlier}%` }} />
                    </div>
                    {/* hoje */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-02">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${s.today}%` }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
