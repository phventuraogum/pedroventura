import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCaseStudy } from "@/data/caseStudies";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { Reveal } from "@/components/Reveal";

function Block({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-divide py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[200px_1fr]">
        <Reveal>
          <div className="flex items-start gap-3 mono-label md:flex-col md:gap-2">
            <span className="text-brand">{index}</span>
            <span>{label}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div>{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return (
      <div className="container-wide py-32">
        <p className="mono-label">Case não encontrado</p>
        <Link to="/" className="link-arrow mt-4">
          <ArrowLeft size={15} /> Voltar pro início
        </Link>
      </div>
    );
  }

  return (
    <article className="container-wide py-16 md:py-24">
      {/* Header */}
      <Reveal>
        <Link to="/#systems" className="link-arrow mb-10">
          <ArrowLeft size={15} /> Sistemas selecionados
        </Link>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="eyebrow">{study.kind}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mono-label mt-4 text-secondary">{study.org}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="section-title mt-3 max-w-3xl text-[2.4rem] md:text-[3.4rem]">
          {study.title}
        </h1>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="section-subtitle mt-6 text-[1.05rem]">{study.summary}</p>
      </Reveal>

      <Block index="01" label="Contexto">
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-secondary">
          {study.context}
        </p>
      </Block>

      <Block index="02" label="Desafio">
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-secondary">
          {study.challenge}
        </p>
      </Block>

      <Block index="03" label="Meu papel">
        <div className="flex flex-wrap gap-2">
          {study.roles.map((r) => (
            <span key={r} className="chip">{r}</span>
          ))}
        </div>
      </Block>

      <Block index="04" label="Arquitetura">
        <div className="max-w-md">
          <ArchitectureFlow layers={study.systemLayers} />
        </div>
        {study.systemNote && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-secondary">
            {study.systemNote}
          </p>
        )}
      </Block>

      <Block index="05" label="Decisões-chave">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {study.keyDecisions.map((d) => (
            <div key={d.decision} className="bg-background p-6">
              <p className="font-medium">{d.decision}</p>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {d.reason}
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block index="06" label="Produção">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {study.production.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
              {p}
            </li>
          ))}
        </ul>
      </Block>

      <Block index="07" label="Impacto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {study.impact.map((m) => (
            <div key={m.label}>
              <p className="text-3xl font-medium tracking-tight md:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block index="08" label="Stack">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {study.stack.map((g) => (
            <div key={g.group}>
              <p className="mono-label mb-3">{g.group}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <div className="section-divide pt-12">
        <Link to="/#systems" className="link-arrow">
          <ArrowLeft size={15} /> Voltar pros sistemas selecionados
        </Link>
      </div>
    </article>
  );
}
