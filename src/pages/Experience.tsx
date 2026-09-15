import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ExperienceHero } from "@/components/experience/ExperienceHero";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ScopeEvolution } from "@/components/experience/ScopeEvolution";
import { HowIOperate } from "@/components/experience/HowIOperate";

export default function Experience() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Pedro Ventura — Experiência";
    return () => { document.title = prev; };
  }, []);

  return (
    <main>
      <ExperienceHero />
      <ExperienceTimeline />
      <ScopeEvolution />
      <HowIOperate />

      {/* I still build */}
      <section className="section-divide">
        <div className="container-wide py-16 md:py-24">
          <div className="max-w-2xl border-l-2 border-accent pl-6">
            <p className="mono-label mb-3">05 / Ainda construo</p>
            <h2 className="type-h2">Ainda coloco a mão no código.</h2>
            <p className="section-subtitle mt-4 text-[1.05rem]">
              Arquitetura e liderança não me tiraram do código. Sigo mão na
              massa em backend, APIs, IA, dados e infraestrutura. Meu diferencial
              é justamente juntar as duas pontas: estratégia técnica e execução.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link to="/#systems" className="btn-primary group">
                Ver o que construí
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/architecture" className="link-arrow">Como eu penso arquitetura</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
