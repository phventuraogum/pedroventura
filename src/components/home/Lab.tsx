import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { labProjects } from "@/data/labData";

export function Lab() {
  return (
    <section id="lab" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="06"
          label="Lab"
          title="O que estou explorando agora."
        >
          <p className="section-subtitle">
            Pesquisa e experimentação em aberto. Onde eu testo ideias antes de
            elas virarem sistema.
          </p>
        </SectionHeader>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {labProjects.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 0.06}>
              <div className="flex h-full flex-col bg-background p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 mono-label">
                    <span className="text-accent">{p.index}</span>
                    <span>{p.area}</span>
                  </div>
                  <span className="flex items-center gap-2 mono-label">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-secondary">{p.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
