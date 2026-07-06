import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Terminal } from "@/components/Terminal";

const techTags = ["TypeScript", "Node.js", "PostgreSQL", "Supabase", "Python", "n8n", "Docker"];

export function Hero() {
  return (
    <section className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:gap-14 md:py-24">
      <div className="animate-in-up">
        <span className="badge-available">Disponível para projetos</span>

        <p className="mt-6 font-mono-jb text-sm text-muted">
          Pedro Ventura
        </p>
        <h1 className="mt-3 text-[2.1rem] font-semibold leading-[1.1] tracking-tight md:text-[2.9rem]">
          Construo produtos que vão pra produção,{" "}
          <span className="text-muted">um sistema de cada vez.</span>
        </h1>

        <p className="section-subtitle mt-5">
          Engenheiro de software e arquiteto de sistemas. Integração, dados e
          IA que aguentam produção: 18 projetos entregues, de ERPs legados a
          plataformas multi-tenant.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {techTags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/trabalhos" className="btn-primary">
            Ver trabalhos <ArrowRight size={16} />
          </Link>
          <a href="#sobre" className="btn-ghost">
            Sobre mim
          </a>
        </div>
      </div>

      <div className="animate-in-up" style={{ animationDelay: "0.1s" }}>
        <Terminal />
      </div>
    </section>
  );
}
