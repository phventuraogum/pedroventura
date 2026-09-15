import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { operatingModel } from "@/data/experienceData";

export function HowIOperate() {
  return (
    <section className="section-divide">
      <div className="container-wide py-16 md:py-24">
        <SectionHeader
          index="04"
          label="How I Operate"
          title="Do problema de negócio à operação em produção."
        />

        <div className="mt-12 flex flex-col divide-y divide-border border-t border-border">
          {operatingModel.map((step, i) => (
            <Reveal key={step.index} delay={(i % 6) * 0.05}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 py-6 md:grid-cols-[80px_minmax(0,320px)_1fr] md:gap-x-10">
                <span className="mono-label text-accent">{step.index}</span>
                <h3 className="text-[16px] font-medium leading-snug text-foreground">{step.title}</h3>
                <p className="col-start-2 text-[13px] leading-relaxed text-secondary md:col-start-3">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
