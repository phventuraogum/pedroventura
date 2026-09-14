import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="ember-glow">
      <div className="container-wide grid items-center gap-12 pb-14 pt-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:pb-20 md:pt-24">
        <div>
          <motion.span className="badge-available" {...enter(0)}>
            Disponível para novos projetos
          </motion.span>

          <motion.h1
            className="mt-7 text-[2.4rem] leading-[1.02] md:text-[3.6rem]"
            style={{ letterSpacing: "-0.04em", fontWeight: 400 }}
            {...enter(0.08)}
          >
            Engenharia de IA
            <br />
            <span className="text-clay">que chega em produção.</span>
          </motion.h1>

          <motion.p
            className="section-subtitle mt-6 text-[1.05rem]"
            {...enter(0.16)}
          >
            Construo agentes, LLMs e pipelines de IA que saem do protótipo e
            passam a rodar de verdade, com latência, custo e confiabilidade sob
            controle. Sobre uma base sólida de engenharia de software.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...enter(0.24)}>
            <Link to="/trabalhos" className="btn-brand">
              Ver projetos <ArrowRight size={16} />
            </Link>
            <Link to="/contato" className="btn-ghost">
              Falar comigo
            </Link>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto w-full max-w-[380px]" {...enter(0.2)}>
          <div
            className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 70% 20%, hsl(var(--brand) / 0.28), transparent 70%)",
            }}
          />
          <img
            src="/pedro.jpg"
            alt="Pedro Ventura"
            width={760}
            height={900}
            className="w-full rounded-2xl border border-border-strong object-cover"
            style={{ aspectRatio: "4 / 5" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
