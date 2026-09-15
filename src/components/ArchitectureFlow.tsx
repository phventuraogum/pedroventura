import { Fragment } from "react";

/**
 * ArchitectureFlow — diagrama vertical de camadas (LLM ↓ Orchestrator ↓ ...).
 * Usado nos SystemCards e nas páginas de case study.
 * compact=true reduz para uso dentro de card.
 */
export function ArchitectureFlow({
  layers,
  compact = false,
}: {
  layers: string[];
  compact?: boolean;
}) {
  return (
    <div className="flex flex-col items-stretch">
      {layers.map((layer, i) => (
        <Fragment key={layer + i}>
          <div
            className={
              compact
                ? "rounded border border-border bg-background/60 px-3 py-2 text-center font-mono-jb text-[0.72rem] text-secondary"
                : "rounded-md border border-border-strong bg-surface-1 px-4 py-3 text-center font-mono-jb text-sm text-foreground"
            }
          >
            {layer}
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center" aria-hidden="true">
              <span
                className={
                  compact
                    ? "text-brand/70 leading-none py-0.5 text-xs"
                    : "text-brand leading-none py-1"
                }
              >
                ↓
              </span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
