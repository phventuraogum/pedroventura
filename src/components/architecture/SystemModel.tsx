import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ArchitectureLayer } from "@/components/architecture/ArchitectureLayer";
import { architectureLayers, crossCuttingConcerns } from "@/data/architecture";

function FlowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 py-1">
      <span className="mono-label">{children}</span>
    </div>
  );
}

export function SystemModel() {
  const [openKey, setOpenKey] = useState<string | null>("intelligence");

  return (
    <section id="system-model" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="01"
          label="System Model"
          title="Um sistema é mais do que o seu modelo."
        >
          <p className="section-subtitle">
            IA é uma camada, não a arquitetura inteira. O modelo abaixo mostra
            como restrição de negócio vira sistema em produção, camada por
            camada, com segurança, observabilidade, governança e confiabilidade
            atravessando todas elas.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_180px] lg:gap-10">
          {/* Coluna principal: fluxo + camadas */}
          <div>
            <FlowLabel>Restrições de negócio</FlowLabel>
            <div className="flex justify-center py-1" aria-hidden="true">
              <ArrowDown size={15} className="text-accent" />
            </div>
            <FlowLabel>Modelo de domínio</FlowLabel>
            <div className="flex justify-center py-1" aria-hidden="true">
              <ArrowDown size={15} className="text-accent" />
            </div>

            <div className="flex flex-col gap-2">
              {architectureLayers.map((layer, i) => (
                <Reveal key={layer.key} delay={i * 0.05}>
                  <ArchitectureLayer
                    layer={layer}
                    open={openKey === layer.key}
                    onToggle={() => setOpenKey(openKey === layer.key ? null : layer.key)}
                    highlight={layer.key === "intelligence"}
                  />
                </Reveal>
              ))}
            </div>

            <div className="flex justify-center py-1" aria-hidden="true">
              <ArrowDown size={15} className="text-accent" />
            </div>
            <FlowLabel>Produção</FlowLabel>
          </div>

          {/* Coluna lateral: cross-cutting concerns */}
          <Reveal delay={0.2}>
            <aside className="lg:sticky lg:top-24">
              <p className="mono-label mb-4">Atravessa tudo</p>
              <div className="flex flex-col gap-px overflow-hidden rounded border border-border bg-border">
                {crossCuttingConcerns.map((c) => (
                  <div
                    key={c}
                    className="bg-background px-4 py-3 font-mono-jb text-[12px] uppercase tracking-wide text-foreground-secondary"
                  >
                    {c}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-foreground-muted">
                Não são uma camada. São exigências que valem em toda a pilha.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
