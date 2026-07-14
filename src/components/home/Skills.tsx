import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stackCategories } from "@/data/stack";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-16 md:py-24">
        <Reveal>
          <h2 className="section-title">Com o que eu trabalho</h2>
          <p className="section-subtitle mt-4">
            O que aparece aqui é o que eu uso toda semana.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 0.06}>
              <h3 className="text-sm font-semibold">{cat.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{cat.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link to="/stack" className="link-arrow">
            O porquê de cada escolha, na página de stack
            <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
