import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { experiencePhases } from "@/data/experienceData";

export function ExperienceTimeline() {
  return (
    <section className="section-divide">
      <div className="container-wide py-16 md:py-24">
        <SectionHeader index="02" label="Linha do tempo" title="Escopo, não cargo." />

        <div className="mt-12 flex flex-col divide-y divide-border border-t border-border">
          {experiencePhases.map((p, i) => (
            <Reveal key={p.time} delay={i * 0.06}>
              <div className="grid gap-6 py-10 md:grid-cols-[180px_1fr] md:gap-12">
                {/* Coluna tempo */}
                <div>
                  <div className="flex items-center gap-2">
                    {p.current && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    <span className="mono-label">{p.time}</span>
                  </div>
                </div>

                {/* Coluna conteúdo */}
                <div className="min-w-0">
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">{p.role}</h3>
                  <p className="mt-1.5 mono-label text-secondary">{p.org}</p>
                  <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-secondary">
                    {p.summary}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-[200px_1fr]">
                    <div>
                      <p className="mono-label mb-3">Escopo</p>
                      <ul className="flex flex-col gap-1.5">
                        {p.scope.map((s) => (
                          <li key={s} className="text-[13px] text-foreground-secondary">{s}</li>
                        ))}
                      </ul>
                    </div>

                    {p.work && (
                      <div>
                        <p className="mono-label mb-3">Trabalhos</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.work.map((w) => (
                            <span key={w} className="chip">{w}</span>
                          ))}
                        </div>
                        <Link to="/#systems" className="link-arrow group mt-5">
                          Ver sistemas
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
