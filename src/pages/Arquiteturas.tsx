import { ChevronRight } from "lucide-react";
import { architectures } from "@/data/stack";

const Arquiteturas = () => {
  return (
    <main className="container-page py-16 md:py-20">
      {/* Header */}
      <header className="animate-in-up">
        <span className="section-label">// arquiteturas</span>
        <h1 className="section-title mt-4">Arquiteturas autorais</h1>
        <p className="section-subtitle mt-4">
          Cada padrão aqui nasceu de um problema que doeu em produção. Documento
          o racional pra não resolver o mesmo problema duas vezes.
        </p>
      </header>

      {/* Índice */}
      <nav className="mt-10 border-y border-border py-5">
        <ol className="flex flex-wrap gap-x-6 gap-y-2">
          {architectures.map((arch, i) => (
            <li key={arch.id}>
              <a
                href={`#${arch.id}`}
                className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-foreground"
              >
                <span className="font-mono-jb text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {arch.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Padrões */}
      <div>
        {architectures.map((arch, i) => (
          <section key={arch.id} id={arch.id} className="scroll-mt-20 border-b border-border py-12">
            <div className="flex items-baseline gap-3">
              <span className="font-mono-jb text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">{arch.title}</h2>
                <p className="mt-1 text-sm text-muted">{arch.tagline}</p>
              </div>
            </div>

            {/* Fluxo */}
            <div className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-2">
              {arch.nodes.map((node, j) => (
                <span key={node.id} className="flex items-center gap-1">
                  <span
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono-jb text-xs"
                    title={node.description}
                  >
                    {node.label}
                  </span>
                  {j < arch.nodes.length - 1 && (
                    <ChevronRight size={14} className="text-muted" />
                  )}
                </span>
              ))}
            </div>

            {/* Problema / Abordagem */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                  O problema
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {arch.problem}
                </p>
              </div>
              <div>
                <h3 className="font-mono-jb text-xs uppercase tracking-wider text-brand">
                  A abordagem
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {arch.approach}
                </p>
              </div>
            </div>

            {/* Princípios / Quando usar */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                  Princípios
                </h3>
                <ul className="mt-3 space-y-2">
                  {arch.keyPrinciples.map((p, k) => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                  Quando usar
                </h3>
                <ul className="mt-3 space-y-2">
                  {arch.whenToUse.map((w, k) => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {arch.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        Esses padrões aparecem aplicados nos{" "}
        <a href="/trabalhos" className="text-brand hover:opacity-80">
          projetos entregues
        </a>{" "}
        — de pipelines de eventos a plataformas multi-tenant com RLS.
      </p>
    </main>
  );
};

export default Arquiteturas;
