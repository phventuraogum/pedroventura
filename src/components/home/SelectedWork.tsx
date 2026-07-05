import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="border-t border-border">
      <div className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="section-label">// trabalhos</span>
            <h2 className="section-title mt-4">Sistemas em produção</h2>
            <p className="section-subtitle mt-4">
              Seis projetos que resumem como eu trabalho. Cada um documenta o
              contexto, as decisões técnicas e o que mudou na operação.
            </p>
          </div>
          <Link to="/trabalhos" className="link-arrow shrink-0">
            ver os 18 <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
