import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroStatus } from "@/components/hero/HeroStatus";
import { HeroArchitecture } from "@/components/hero/HeroArchitecture";
import { TechStrip } from "@/components/hero/TechStrip";
import { StatusDot } from "@/components/ui/StatusDot";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.2, 0.8, 0.2, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      {/* Grid técnico de fundo */}
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <HeroArchitecture />

      <div className="container-wide relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-16 md:py-20">
        {/* Meta row */}
        <motion.div className="flex items-start justify-between gap-4" {...fade(0)}>
          <div className="eyebrow flex-col items-start gap-1 before:hidden">
            <span>Arquiteto de Sistemas de IA</span>
          </div>
          <span className="badge-available">
            <StatusDot />
            Brasil
          </span>
        </motion.div>

        {/* Main grid — eyebrow perto da headline (mt menor) */}
        <div className="mt-7 grid min-w-0 grid-cols-1 gap-10 md:mt-9 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
          <div className="flex min-w-0 flex-col">
            <HeroHeadline />

            <motion.p
              className="type-body-lg mt-7 max-w-[560px] text-foreground-secondary"
              {...fade(0.4)}
            >
              Desenho e coloco no ar sistemas de IA nativos, entre software,
              dados e infraestrutura, das restrições do negócio até a produção.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" {...fade(0.48)}>
              <a href="#systems" className="btn-primary group">
                Ver sistemas
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="https://github.com/phventuraogum"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group"
              >
                <Github size={15} /> GitHub
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/phventura/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group"
              >
                <Linkedin size={15} /> LinkedIn
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div className="lg:pt-2" {...fade(0.3)}>
            <HeroStatus />
          </motion.div>
        </div>

        {/* Tech strip */}
        <motion.div className="mt-12 md:mt-14" {...fade(0.56)}>
          <TechStrip />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="mt-8 flex items-center gap-2 text-foreground-muted" {...fade(0.64)}>
          <span className="label">Rolar</span>
          <ArrowDown size={13} />
        </motion.div>
      </div>
    </section>
  );
}
