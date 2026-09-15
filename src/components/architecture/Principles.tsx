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
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="02"
          label="Principles"
          title="Regras que uso ao desenhar sistemas."
        >
          <p className="section-subtitle">
            Um conjunto de princípios que sigo ao projetar e construir software,
            principalmente quando IA faz parte da solução.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {architecturePrinciples.map((p, i) => {
            const Icon = ICONS[p.icon] ?? Circle;
            return (
              <Reveal key={p.index} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col bg-background p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-accent" />
                    <span className="mono-label">{p.index}</span>
                  </div>
                  <h3 className="mt-4 text-[15px] font-medium leading-snug text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-secondary">
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
