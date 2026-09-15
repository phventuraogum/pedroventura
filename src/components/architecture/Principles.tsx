import { Puzzle, Database, Zap, ShieldAlert, BarChart3, UserCog, Circle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { architecturePrinciples } from "@/data/architecture";

const ICONS: Record<string, typeof Circle> = {
  Puzzle, Database, Zap, ShieldAlert, BarChart3, UserCog,
};

export function Principles() {
  return (
    <section id="principles" className="section-divide">
      <div className="container-wide py-16 md:py-20">
        <SectionHeader
          index="02"
          label="Princípios"
          title="Regras que uso ao desenhar sistemas."
        >
          <p className="section-subtitle">
            Princípios que sigo ao projetar software, principalmente quando IA
            faz parte da solução.
          </p>
        </SectionHeader>

        {/* Formato editorial: número | título | corpo, separados por hairline */}
        <div className="mt-10 flex flex-col divide-y divide-border border-t border-border">
          {architecturePrinciples.map((p, i) => {
            const Icon = ICONS[p.icon] ?? Circle;
            return (
              <Reveal key={p.index} delay={(i % 3) * 0.05}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 py-6 md:grid-cols-[80px_minmax(0,340px)_1fr] md:gap-x-10">
                  <span className="mono-label text-accent">{p.index}</span>
                  <h3 className="flex items-start gap-2.5 text-[16px] font-medium leading-snug text-foreground">
                    <Icon size={16} className="mt-0.5 shrink-0 text-foreground-muted" />
                    {p.title}
                  </h3>
                  <p className="col-start-2 text-[13px] leading-relaxed text-secondary md:col-start-3">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-mono-jb text-[11px] uppercase tracking-wide text-foreground-muted">
            Boa arquitetura torna a complexidade gerenciável.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
