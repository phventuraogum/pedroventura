import { motion, useReducedMotion } from "framer-motion";
import { MonitorSmartphone, Boxes, BrainCircuit, Database, Server } from "lucide-react";

const layers = [
  { name: "EXPERIENCE", icon: MonitorSmartphone, desc: "Interfaces, canais e fluxos" },
  { name: "APPLICATION", icon: Boxes, desc: "APIs, serviços e regras de negócio" },
  { name: "INTELLIGENCE", icon: BrainCircuit, desc: "Agentes, LLMs e decisão", hl: true },
  { name: "DATA", icon: Database, desc: "Bancos, vetores e eventos" },
  { name: "PLATFORM", icon: Server, desc: "Cloud, containers e infraestrutura" },
];

export function ArchitectureHero() {
  const reduce = useReducedMotion();
  const enter = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: [0.2, 0.8, 0.2, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-wide relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Esquerda: título */}
        <div className="flex flex-col justify-center">
          <motion.div className="flex items-center gap-3 mono-label" {...enter(0)}>
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-border" />
            <span>Architecture</span>
          </motion.div>

          <motion.h1
            className="type-display mt-7 uppercase"
            style={{ maxWidth: "12ch" }}
            {...enter(0.06)}
          >
            Da restrição de negócio ao sistema em produção.
          </motion.h1>

          <motion.p className="type-body-lg mt-7 max-w-[440px] text-foreground-secondary" {...enter(0.14)}>
            Desenho sistemas escaláveis, seguros e inteligentes que ligam o
            problema de negócio à execução no mundo real.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" {...enter(0.2)}>
            <a href="#patterns" className="btn-primary">Ver padrões</a>
            <a href="#principles" className="link-arrow">Ler os princípios</a>
          </motion.div>

          <motion.div className="mt-10 flex items-center gap-3 mono-label" {...enter(0.26)}>
            <span>Arquitetura</span><span className="text-foreground-muted/50">/</span>
            <span>Sistemas</span><span className="text-foreground-muted/50">/</span>
            <span>Impacto real</span>
          </motion.div>
        </div>

        {/* Direita: diagrama de camadas + mensagem */}
        <div className="flex flex-col justify-center gap-10">
          <div className="relative">
            <span className="mono-label absolute -top-1 left-0">Problema de negócio</span>
            <div className="mt-8 flex flex-col gap-2.5">
              {layers.map((l, i) => (
                <motion.div
                  key={l.name}
                  className={`flex items-center justify-between gap-4 border px-5 py-4 ${
                    l.hl
                      ? "border-accent/50 bg-accent/[0.06]"
                      : "border-border bg-surface-01/60"
                  }`}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <span className="flex items-center gap-3">
                    <l.icon size={17} className={l.hl ? "text-accent" : "text-foreground-secondary"} />
                    <span className={`font-mono-jb text-[13px] tracking-wide ${l.hl ? "text-accent" : "text-foreground"}`}>
                      {l.name}
                    </span>
                  </span>
                  <span className="hidden text-[12px] text-foreground-muted sm:block">{l.desc}</span>
                </motion.div>
              ))}
            </div>
            <span className="mono-label absolute -bottom-6 left-0">Produção</span>
          </div>

          <motion.div className="mt-4 max-w-sm" {...enter(0.5)}>
            <p className="type-h3 leading-tight">
              IA não é o sistema.<br />
              <span className="text-accent">É uma camada do sistema.</span>
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-foreground-muted">
              Solução de verdade precisa de mais que um modelo: arquitetura,
              dados, infraestrutura, observabilidade e pessoas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
