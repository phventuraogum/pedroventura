import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { architectureTradeoffs } from "@/data/architecture";

export function Tradeoffs() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="tradeoffs" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="04"
          label="Trade-offs"
          title="Arquitetura é gerir trade-offs sob restrição."
        >
          <p className="section-subtitle">
            Não existe solução perfeita. Boa arquitetura é escolher o trade-off
            certo pro contexto. A posição dos pontos não é resposta universal, o
            contexto decide a arquitetura.
          </p>
        </SectionHeader>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 border-l-2 border-accent pl-4">
            <span className="font-mono-jb text-[11px] uppercase tracking-wide text-foreground">
              No default position.
            </span>
            <span className="font-mono-jb text-[11px] uppercase tracking-wide text-foreground-muted">
              O contexto move a arquitetura.
            </span>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col divide-y divide-border border-y border-border">
          {architectureTradeoffs.map((t, i) => {
            const isOpen = open === i;
            return (
              <div key={t.left}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[100px_1fr_120px] items-center gap-3 py-4 text-left sm:grid-cols-[140px_1fr_160px] sm:gap-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono-jb text-[11px] uppercase tracking-wide text-foreground-secondary">
                    {t.left}
                  </span>
                  <span className="relative h-px w-full bg-border">
                    <span
                      className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent transition-all duration-500"
                      style={{ left: `calc(${t.position}% - 4px)` }}
                    />
                  </span>
                  <span className="text-right font-mono-jb text-[11px] uppercase tracking-wide text-foreground-secondary">
                    {t.right}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-2xl pb-5">
                        <p className="mono-label mb-1.5">Cenário</p>
                        <p className="text-[13px] leading-relaxed text-foreground">{t.scenario}</p>
                        <p className="mono-label mb-1.5 mt-4">Por quê</p>
                        <p className="text-[13px] leading-relaxed text-secondary">{t.why}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-mono-jb text-[11px] uppercase tracking-wide text-foreground-muted">
            O contexto determina a arquitetura.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
