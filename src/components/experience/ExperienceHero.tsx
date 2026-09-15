import { motion, useReducedMotion } from "framer-motion";
import { responsibilityTrack } from "@/data/experienceData";

export function ExperienceHero() {
  const reduce = useReducedMotion();
  const enter = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: [0.2, 0.8, 0.2, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-wide relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_240px] lg:gap-16">
        <div className="flex flex-col justify-center">
          <motion.div className="flex items-center gap-3 mono-label" {...enter(0)}>
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-border" />
            <span>Experience</span>
          </motion.div>

          <motion.h1 className="type-display mt-7 uppercase" style={{ maxWidth: "16ch" }} {...enter(0.06)}>
            De construir software a desenhar sistemas.
          </motion.h1>

          <motion.p className="type-body-lg mt-7 max-w-[460px] text-foreground-secondary" {...enter(0.14)}>
            A evolução de execução técnica para arquitetura, produto, IA e
            liderança. Escopo e responsabilidade crescendo, mão no código
            continuando.
          </motion.p>

          <motion.div className="mt-8 flex items-center gap-3 mono-label" {...enter(0.2)}>
            <span>Engenharia</span><span className="text-foreground-muted/50">/</span>
            <span>Arquitetura</span><span className="text-foreground-muted/50">/</span>
            <span>IA</span><span className="text-foreground-muted/50">/</span>
            <span>Produto</span>
          </motion.div>
        </div>

        {/* Trilha de responsabilidade */}
        <motion.aside className="lg:pt-2" {...enter(0.28)}>
          <p className="mono-label mb-4">Trajetória</p>
          <div className="flex flex-col">
            {responsibilityTrack.map((r, i) => (
              <div key={r} className="flex flex-col">
                <span
                  className={`font-mono-jb text-[13px] ${
                    i === responsibilityTrack.length - 1 ? "text-accent" : "text-foreground-secondary"
                  }`}
                >
                  {r}
                </span>
                {i < responsibilityTrack.length - 1 && (
                  <span className="my-1 text-[11px] leading-none text-foreground-muted/50" aria-hidden="true">↓</span>
                )}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
