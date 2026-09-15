import type { ArchColumn, DiagramNode } from "@/data/caseStudies";

function Node({ node }: { node: DiagramNode }) {
  return (
    <div className="rounded border border-border bg-background/60 px-3 py-2.5">
      <p className="text-[13px] font-medium leading-tight text-foreground">{node.label}</p>
      {node.sub && (
        <p className="mt-0.5 font-mono-jb text-[10px] leading-tight text-foreground-muted">
          {node.sub}
        </p>
      )}
    </div>
  );
}

/**
 * ArchitectureDiagram — colunas de sistema (canais / IA / externos) sobre uma
 * camada de dados que atravessa a largura. Layout do mockup do case study.
 */
export function ArchitectureDiagram({
  columns,
  dataLayer,
}: {
  columns: ArchColumn[];
  dataLayer: DiagramNode[];
}) {
  return (
    <div className="rounded-lg border border-border bg-surface-01/40 p-5 md:p-7">
      {/* Colunas */}
      <div className="grid gap-5 md:gap-6" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0,1fr))` }}>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col">
            <p className="mono-label mb-3">{col.title}</p>
            <div className="flex flex-col gap-2">
              {col.nodes.map((n, i) => (
                <Node key={n.label + i} node={n} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Conector para a camada de dados */}
      <div className="my-4 flex justify-center" aria-hidden="true">
        <span className="leading-none text-accent">↓</span>
      </div>

      {/* Camada de dados (largura total) */}
      <div className="rounded border border-border bg-background/40 p-4">
        <p className="mono-label mb-3">Camada de dados</p>
        <div className="grid gap-2 sm:gap-3" style={{ gridTemplateColumns: `repeat(${dataLayer.length}, minmax(0,1fr))` }}>
          {dataLayer.map((n, i) => (
            <Node key={n.label + i} node={n} />
          ))}
        </div>
      </div>
    </div>
  );
}
