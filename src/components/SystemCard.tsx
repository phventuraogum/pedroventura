import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { SelectedSystem } from "@/data/systems";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";

const cardClass =
  "group grid gap-8 border-t border-border py-10 md:grid-cols-[1fr_300px] md:py-12";

function CardInner({ system }: { system: SelectedSystem }) {
  const hasCase = Boolean(system.caseSlug);
  return (
    <>
      {/* Left: narrative */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mono-label">
          <span className="text-brand">{system.index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{system.kind}</span>
        </div>

        <p className="mt-5 mono-label text-secondary">{system.org}</p>
        <h3 className="mt-1.5 text-2xl font-medium tracking-tight md:text-3xl">
          {system.title}
        </h3>
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-secondary">
          {system.summary}
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-10">
          <div>
            <p className="mono-label mb-2">Papel</p>
            <div className="flex flex-wrap gap-1.5">
              {system.roles.map((r) => (
                <span key={r} className="chip">{r}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="mono-label mb-2">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {system.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {hasCase ? (
          <span className="link-arrow mt-8">
            Ver case completo
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : (
          <span className="mono-label mt-8">Case em breve</span>
        )}
      </div>

      {/* Right: architecture flow */}
      <div className="md:pl-8 md:border-l md:border-border">
        <p className="mono-label mb-3">Arquitetura</p>
        <ArchitectureFlow layers={system.flow} compact />
      </div>
    </>
  );
}

export function SystemCard({ system }: { system: SelectedSystem }): ReactNode {
  if (system.caseSlug) {
    return (
      <Link to={`/systems/${system.caseSlug}`} className={cardClass}>
        <CardInner system={system} />
      </Link>
    );
  }
  return (
    <div className={cardClass}>
      <CardInner system={system} />
    </div>
  );
}
