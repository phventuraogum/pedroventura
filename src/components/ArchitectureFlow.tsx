import { Fragment } from "react";

/**
 * ArchitectureFlow — diagrama vertical de camadas.
 * Cada item de `layers`:
 *   - string   → nó único
 *   - string[] → linha de nós paralelos (fan-out), renderizada como caixa dividida
 * compact=true reduz para uso dentro de card.
 */
export function ArchitectureFlow({
  layers,
  compact = false,
}: {
  layers: (string | string[])[];
  compact?: boolean;
}) {
  const nodeCls = compact
    ? "px-3 py-2 text-center font-mono-jb text-[0.7rem] tracking-wide text-secondary"
    : "px-4 py-3 text-center font-mono-jb text-[0.8rem] tracking-wide text-foreground";
  const boxCls = "rounded border border-border bg-background/50";

  return (
    <div className="flex flex-col items-stretch">
      {layers.map((layer, i) => (
        <Fragment key={i}>
          {Array.isArray(layer) ? (
            <div className={`grid ${boxCls}`} style={{ gridTemplateColumns: `repeat(${layer.length}, minmax(0, 1fr))` }}>
              {layer.map((node, j) => (
                <div
                  key={node + j}
                  className={`${nodeCls} ${j > 0 ? "border-l border-border" : ""}`}
                >
                  {node}
                </div>
              ))}
            </div>
          ) : (
            <div className={`${boxCls} ${nodeCls}`}>{layer}</div>
          )}

          {i < layers.length - 1 && (
            <div className="flex justify-center" aria-hidden="true">
              <span className={compact ? "py-0.5 text-xs leading-none text-accent/70" : "py-1 leading-none text-accent"}>
                ↓
              </span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
