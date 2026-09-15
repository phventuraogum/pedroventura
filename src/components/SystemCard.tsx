import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { SelectedSystem } from "@/data/systems";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";

function CardInner({ system }: { system: SelectedSystem }) {
  const hasCase = Boolean(system.caseSlug);
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_320px] md:gap-16">
      {/* Left: narrativa */}
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-3 mono-label">
          <span className="text-accent">{system.index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{system.kind}</span>
        </div>

        <p className="mt-6 mono-label text-secondary">{system.org}</p>
        <h3 className="mt-2 type-h3 max-w-xl">{system.title}</h3>
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-secondary">
          {system.summary}
        </p>

        <div className="mt-6">
          <p className="mono-label mb-2.5">Papel</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-foreground">
            {system.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                {r}
                {i < system.roles.length - 1 && (
                  <span className="text-foreground-muted/50" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé: status · ano · explorar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <span className="mono-label">
            {system.status} <span className="text-foreground-muted/50">·</span> {system.year}
          </span>
          {hasCase && (
            <span className="link-arrow">
              Explorar
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>

      {/* Right: diagrama de arquitetura */}
      <div className="md:pl-10 md:border-l md:border-border">
        <p className="mono-label mb-4">Arquitetura</p>
        <ArchitectureFlow layers={system.flow} compact />
      </div>
    </div>
  );
}

export function SystemCard({ system }: { system: SelectedSystem }): ReactNode {
  if (system.caseSlug) {
    return (
      <Link
        to={`/systems/${system.caseSlug}`}
        className="group block border-t border-border py-12 transition-colors md:py-16"
      >
        <CardInner system={system} />
      </Link>
    );
  }
  return (
    <div className="border-t border-border py-12 md:py-16">
      <CardInner system={system} />
    </div>
  );
}
