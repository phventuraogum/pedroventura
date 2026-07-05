import { stackCategories } from "@/data/stack";

export function Skills() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-16 md:py-24">
        <span className="section-label">// tecnologias</span>
        <h2 className="section-title mt-4">Com o que eu trabalho</h2>
        <p className="section-subtitle mt-4">
          O que aparece aqui é o que eu uso toda semana. Lista completa, com o
          porquê de cada escolha, na página de stack.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-sm font-semibold">{cat.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{cat.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
