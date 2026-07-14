import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal } from "@/components/Terminal";

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:gap-14 md:py-24">
      <div>
        <motion.span className="badge-available inline-flex" {...enter(0)}>
          Disponível para projetos
        </motion.span>

        <motion.h1
          className="mt-6 text-[2.1rem] font-semibold leading-[1.1] tracking-tight md:text-[2.9rem]"
          {...enter(0.08)}
        >
          Construo produtos que vão pra produção,{" "}
          <span className="text-muted">um sistema de cada vez.</span>
        </motion.h1>

        <motion.p className="section-subtitle mt-5" {...enter(0.16)}>
          Arquiteto e construo sistemas de integração, dados e IA. 18 projetos
          em produção, de ERPs legados a plataformas multi-tenant.
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap gap-3" {...enter(0.24)}>
          <Link to="/trabalhos" className="btn-primary">
            Ver projetos <ArrowRight size={16} />
          </Link>
          <a href="#sobre" className="btn-ghost">
            Sobre mim
          </a>
        </motion.div>
      </div>

      <motion.div {...enter(0.2)}>
        <Terminal />
      </motion.div>
    </section>
  );
}
