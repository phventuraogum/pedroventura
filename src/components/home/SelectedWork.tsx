import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border">
      <div className="container-page py-16 md:py-24">
        <Reveal>
          <h2 className="section-title">Sistemas em produção</h2>
          <p className="section-subtitle mt-4">
            Seis projetos que resumem como eu trabalho. Cada um documenta o
            contexto, as decisões técnicas e o que mudou na operação. Os 18
            estão na página de projetos.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              className="h-full"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
