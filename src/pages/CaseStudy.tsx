import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCaseStudy, getNextCaseStudy } from "@/data/caseStudies";
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
          <div className="flex items-center gap-3 mono-label md:flex-col md:items-start md:gap-2">
            <span className="text-accent">{index}</span>
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
  const next = slug ? getNextCaseStudy(slug) : undefined;

  if (!study) {
    return (
      <div className="container-wide py-32">
        <p className="mono-label">Case não encontrado</p>
        <Link to="/#systems" className="link-arrow mt-4">
          <ArrowLeft size={15} /> Voltar pros sistemas
        </Link>
      </div>
    );
  }

  return (
    <article className="container-wide py-14 md:py-20">
      <Reveal>
        <Link to="/#systems" className="link-arrow mb-12">
          <ArrowLeft size={15} /> Sistemas selecionados
        </Link>
      </Reveal>

      {/* 01 / OVERVIEW */}
      <section>
        <Reveal>
          <div className="flex items-center gap-3 mono-label">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-border" />
            <span>Overview</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mono-label mt-6 text-secondary">{study.org}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="type-h2 mt-2 max-w-3xl">{study.title}</h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="section-subtitle mt-5 text-[1.05rem]">{study.summary}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-border pt-7 sm:grid-cols-3">
            <div>
              <dt className="mono-label mb-2">Ano</dt>
              <dd className="text-[15px] text-foreground">{study.year}</dd>
            </div>
            <div>
              <dt className="mono-label mb-2">Papel</dt>
              <dd className="text-[15px] leading-relaxed text-foreground">
                {study.roles.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="mono-label mb-2">Status</dt>
              <dd className="text-[15px] text-foreground">{study.status}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* 02 / CONTEXT */}
      <Block index="02" label="Contexto">
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-secondary">
          {study.context}
        </p>
      </Block>

      {/* 03 / CHALLENGE */}
      <Block index="03" label="Desafio">
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-secondary">
          {study.challenge}
        </p>
      </Block>

      {/* 04 / SYSTEM ARCHITECTURE */}
      <Block index="04" label="Arquitetura">
        <div className="max-w-lg">
          <ArchitectureFlow layers={study.systemLayers} />
        </div>
        {study.systemNote && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-secondary">
            {study.systemNote}
          </p>
        )}
      </Block>

      {/* 05 / KEY DECISIONS */}
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

      {/* 06 / PRODUCTION */}
      <Block index="06" label="Produção">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {study.production.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </Block>

      {/* 07 / IMPACT */}
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

      {/* 08 / STACK */}
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

      {/* 09 / NEXT SYSTEM */}
      {next && (
        <section className="section-divide py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[200px_1fr]">
            <div className="flex items-center gap-3 mono-label md:flex-col md:items-start md:gap-2">
              <span className="text-accent">09</span>
              <span>Próximo sistema</span>
            </div>
            <Link to={`/systems/${next.slug}`} className="group block">
              <p className="mono-label text-secondary">{next.org}</p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <h2 className="type-h3">{next.title}</h2>
                <ArrowRight
                  size={22}
                  className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
                />
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary">
                {next.summary}
              </p>
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}
