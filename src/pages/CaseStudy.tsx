import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Github, Circle,
  ShieldCheck, Activity, Copy, Gauge, RefreshCw, LineChart,
  Chrome, CheckCheck, Paperclip, Ticket, SlidersHorizontal,
  Rocket, Building2, Receipt, Fingerprint, Boxes, History,
  ScrollText, Link2, Layers, Search, UserCheck, Quote, Coins,
} from "lucide-react";
import { getCaseStudy, getCaseSiblings } from "@/data/caseStudies";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { TechStack } from "@/components/TechStack";
import { Reveal } from "@/components/Reveal";

const PROD_ICONS: Record<string, typeof Circle> = {
  ShieldCheck, Activity, Copy, Gauge, RefreshCw, LineChart,
  Chrome, CheckCheck, Paperclip, Ticket, SlidersHorizontal,
  Rocket, Building2, Receipt, Fingerprint, Boxes, History,
  ScrollText, Link2, Layers, Search, UserCheck, Quote, Coins,
};

/** Seção numerada com label à esquerda e conteúdo à direita. */
function Section({
  index,
  label,
  title,
  aside,
  children,
}: {
  index: string;
  label: string;
  title?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="section-divide py-12 md:py-16">
      <Reveal>
        <div className="flex items-center gap-3 mono-label">
          <span className="text-accent">{index}</span>
          <span>{label}</span>
        </div>
      </Reveal>
      <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,360px)_1fr] md:gap-12">
        <Reveal delay={0.05}>
          <div>
            {title && <h2 className="type-h3 max-w-sm">{title}</h2>}
            {aside && <div className="mt-4">{aside}</div>}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="min-w-0">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

function ProdIcon({ name }: { name: string }) {
  const Cmp = PROD_ICONS[name] ?? Circle;
  return <Cmp size={18} className="text-accent" />;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;
  const siblings = slug ? getCaseSiblings(slug) : null;

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
    <article className="container-wide py-12 md:py-16">
      <Reveal>
        <Link to="/#systems" className="link-arrow mb-10">
          <ArrowLeft size={15} /> Voltar pros sistemas
        </Link>
      </Reveal>

      {/* 01 / OVERVIEW */}
      <section className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
        <div className="min-w-0">
          <Reveal>
            <div className="flex items-center gap-3 mono-label">
              <span className="text-accent">01</span>
              <span className="h-px w-8 bg-border" />
              <span>Case</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="type-h1 mt-6 uppercase">{study.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle mt-5 text-[1.05rem]">{study.tagline}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-secondary">
              {study.summary}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              {study.liveUrl && (
                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  Sistema ao vivo
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {study.githubUrl && (
                <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Github size={15} /> Ver no GitHub
                </a>
              )}
            </div>
          </Reveal>

          {/* diagrama overview */}
          <Reveal delay={0.22}>
            <div className="mt-10 max-w-md">
              <ArchitectureFlow layers={study.overviewFlow} compact />
            </div>
          </Reveal>
        </div>

        {/* meta lateral */}
        <Reveal delay={0.12}>
          <aside className="flex flex-col gap-6 lg:pt-2">
            {[
              { label: "Ano", value: study.year },
              { label: "Status", value: study.status, dot: true },
              { label: "Papel", value: study.roles.join("\n") },
              { label: "Cliente", value: study.client },
              { label: "Setor", value: study.industry },
            ].map((m) => (
              <div key={m.label}>
                <p className="mono-label mb-2">{m.label}</p>
                <div className="mb-2 h-px w-full bg-border" />
                <p className="flex items-start gap-2 whitespace-pre-line text-[14px] leading-relaxed text-foreground">
                  {m.dot && <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
                  {m.value}
                </p>
              </div>
            ))}
          </aside>
        </Reveal>
      </section>

      {/* 02 / CONTEXT */}
      <Section
        index="02"
        label="Contexto"
        title="Do problema de negócio à automação."
        aside={
          study.contextFlow && (
            <div className="flex flex-col gap-1.5">
              {study.contextFlow.map((s, i) => (
                <span key={s} className="font-mono-jb text-[11px] text-foreground-muted">
                  {s}
                  {i < study.contextFlow!.length - 1 && <span className="ml-2 text-accent">↓</span>}
                </span>
              ))}
            </div>
          )
        }
      >
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-secondary">{study.context}</p>
      </Section>

      {/* 03 / CHALLENGE */}
      <Section
        index="03"
        label="Desafio"
        title="Mais que um chatbot. Um sistema de produção."
        aside={
          study.challengeKeywords && (
            <div className="flex flex-col gap-1.5">
              {study.challengeKeywords.map((k) => (
                <span key={k} className="font-mono-jb text-[11px] uppercase tracking-wide text-foreground-muted">
                  {k}
                </span>
              ))}
            </div>
          )
        }
      >
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-secondary">{study.challenge}</p>
      </Section>

      {/* 04 / SYSTEM ARCHITECTURE */}
      <Section index="04" label="Arquitetura do sistema" title="Uma arquitetura modular e orientada a eventos.">
        <ArchitectureDiagram columns={study.architecture.columns} dataLayer={study.architecture.dataLayer} />
        {study.architecture.note && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-secondary">{study.architecture.note}</p>
        )}
      </Section>

      {/* 05 / KEY DECISIONS */}
      <Section index="05" label="Decisões-chave" title="Escolhas pragmáticas pra escala real.">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {study.keyDecisions.map((d) => (
            <div key={d.q} className="bg-background p-5">
              <p className="text-[14px] font-medium text-foreground">{d.q}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-secondary">{d.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 06 / PRODUCTION */}
      <Section index="06" label="Produção" title="Feito pra rodar. Não pra demo.">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {study.production.map((p) => (
            <div key={p.title} className="flex items-start gap-3 bg-background p-5">
              <ProdIcon name={p.icon} />
              <div>
                <p className="text-[14px] font-medium text-foreground">{p.title}</p>
                <p className="mt-0.5 text-[12px] text-foreground-muted">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 07 / IMPACT */}
      <Section index="07" label="Impacto" title="Resultados reais. Crescimento medível.">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {study.impact.map((m) => (
            <div key={m.label}>
              <p className="text-3xl font-medium tracking-tight text-accent md:text-4xl">{m.value}</p>
              <p className="mt-2 text-sm text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 08 / STACK */}
      <Section index="08" label="Stack" title="Moderna, integrada e sustentável.">
        <TechStack items={study.stack} />
      </Section>

      {/* 09 / NEXT */}
      {siblings && (
        <section className="section-divide py-12 md:py-16">
          <Reveal>
            <div className="flex items-center gap-3 mono-label">
              <span className="text-accent">09</span>
              <span>Explorar mais sistemas</span>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link to={`/systems/${siblings.prev.slug}`} className="group card-base flex flex-col">
              <span className="mono-label mb-3">← Anterior</span>
              <span className="text-[15px] font-medium text-foreground">{siblings.prev.title}</span>
              <span className="mt-1 text-[13px] text-secondary">{siblings.prev.org}</span>
            </Link>
            <Link to={`/systems/${siblings.next.slug}`} className="group card-base flex flex-col sm:items-end sm:text-right">
              <span className="mono-label mb-3">Próximo →</span>
              <span className="text-[15px] font-medium text-foreground">{siblings.next.title}</span>
              <span className="mt-1 text-[13px] text-secondary">{siblings.next.org}</span>
            </Link>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="section-divide py-14 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 border-l-2 border-accent pl-6 md:flex-row md:items-center">
          <div>
            <p className="mono-label mb-3">Vamos construir</p>
            <h2 className="type-h2">Vamos construir algo difícil.</h2>
          </div>
          <Link to="/contato" className="btn-primary group shrink-0">
            Falar comigo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
