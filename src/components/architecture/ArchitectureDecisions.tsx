import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { architectureDecisions } from "@/data/architecture";

export function ArchitectureDecisions() {
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="decisions" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="05"
          label="Architecture Decisions"
          title="ADRs selecionados."
        >
          <p className="section-subtitle">
            Algumas das decisões de arquitetura que tomei, com contexto,
            trade-off e resultado.
          </p>
        </SectionHeader>

        <div className="mt-12 flex flex-col divide-y divide-border border-y border-border">
          {architectureDecisions.map((adr) => {
            const isOpen = open === adr.id;
            return (
              <div key={adr.id}>
                <button
                  onClick={() => setOpen(isOpen ? null : adr.id)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="mono-label text-accent">ADR / {adr.id}</span>
                  <span className="min-w-0 flex-1 text-[15px] font-medium text-foreground">
                    {adr.title}
                  </span>
                  <span className="hidden items-center gap-2 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="mono-label">{adr.status}</span>
                  </span>
                  <Plus
                    size={16}
                    className={`shrink-0 text-foreground-muted transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                          { k: "Contexto", v: adr.context },
                          { k: "Decisão", v: adr.decision },
                          { k: "Por quê", v: adr.why },
                          { k: "Trade-off", v: adr.tradeoff },
                        ].map((f) => (
                          <div key={f.k}>
                            <p className="mono-label mb-2">{f.k}</p>
                            <p className="text-[13px] leading-relaxed text-secondary">{f.v}</p>
                          </div>
                        ))}
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
            Decisões documentadas geram sistemas melhores.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
