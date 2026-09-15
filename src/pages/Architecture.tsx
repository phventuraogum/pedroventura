import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ArchitectureHero } from "@/components/architecture/ArchitectureHero";
import { SystemModel } from "@/components/architecture/SystemModel";
import { Principles } from "@/components/architecture/Principles";
import { Patterns } from "@/components/architecture/Patterns";
import { Tradeoffs } from "@/components/architecture/Tradeoffs";
import { ArchitectureDecisions } from "@/components/architecture/ArchitectureDecisions";
import { ProductionSystems } from "@/components/architecture/ProductionSystems";

export default function Architecture() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Pedro Ventura — Arquitetura de Sistemas";
    return () => { document.title = prev; };
  }, []);

  return (
    <main>
      <ArchitectureHero />
      <SystemModel />
      <Principles />
      <Patterns />
      <Tradeoffs />
      <ArchitectureDecisions />
      <ProductionSystems />

      {/* CTA final */}
      <section className="section-divide">
        <div className="container-wide py-16 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 border-l-2 border-accent pl-6 md:flex-row md:items-center">
            <div>
              <p className="mono-label mb-3">Vamos construir</p>
              <h2 className="type-h2">Vamos construir algo difícil.</h2>
              <p className="section-subtitle mt-3">
                Problemas complexos merecem sistemas bem arquitetados.
              </p>
            </div>
            <Link to="/contato" className="btn-primary group shrink-0">
              Falar comigo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
