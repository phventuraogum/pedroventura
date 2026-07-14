import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { explainProjectStack } from "@/data/techRationale";
import type { ReactNode } from "react";

function Section({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-10">
      {label && <span className="font-mono-jb text-xs uppercase tracking-wider text-muted">{label}</span>}
      <h2 className="mt-3 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-secondary">
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const ProjetoDetalhe = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <main className="container-page py-24 text-center">
        <h1 className="text-2xl font-semibold">Projeto não encontrado</h1>
        <Link to="/trabalhos" className="btn-ghost mt-6 inline-flex">
          Voltar aos projetos
        </Link>
      </main>
    );
  }

  const nextProject = projects[(index + 1) % projects.length];
  const techWhy = explainProjectStack(project.stack);

  return (
    <main className="container-page max-w-3xl py-12 md:py-16">
      <Link
        to="/trabalhos"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={15} /> Voltar aos projetos
      </Link>

      {/* Header */}
      <header className="mt-8">
        <span className="font-mono-jb text-xs uppercase tracking-widest text-brand">
          {project.organization}
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="section-subtitle mt-4 text-lg">{project.headline}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Impacto */}
      {project.impact && project.impact.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {project.impact.map((metric, i) => (
            <div key={i} className="bg-surface-1 p-5">
              <p className="text-2xl font-semibold tracking-tight text-brand">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      <Section label="// contexto" title="Contexto">
        <p className="leading-relaxed text-secondary">{project.context}</p>
      </Section>

      <Section label="// entrega" title="O que eu construí">
        <Bullets items={project.whatIBuilt} />
      </Section>

      {/* Arquitetura */}
      <Section label="// arquitetura" title="Arquitetura">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
          {project.architectureNodes.map((node, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono-jb text-xs">
                {node}
              </span>
              {i < project.architectureNodes.length - 1 && (
                <ChevronRight size={14} className="text-muted" />
              )}
            </span>
          ))}
        </div>
        {project.architectureDescription && (
          <p className="mt-5 leading-relaxed text-secondary">
            {project.architectureDescription}
          </p>
        )}
      </Section>

      {/* Stack */}
      <Section label="// stack" title="Stack">
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {project.stack.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                {cat.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Por que essa stack, explicação de cada tecnologia */}
      {techWhy.length > 0 && (
        <Section label="// decisões" title="Por que essa stack">
          <p className="mb-6 text-sm text-muted">
            Cada tecnologia foi escolhida por um motivo, não por moda.
          </p>
          <div className="divide-y divide-border border-y border-border">
            {techWhy.map((t) => (
              <div key={t.name} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <div>
                  <p className="font-mono-jb text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-secondary">{t.why}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.features && project.features.length > 0 && (
        <Section label="// features" title="Funcionalidades principais">
          <Bullets items={project.features} />
        </Section>
      )}

      {project.integrations && project.integrations.length > 0 && (
        <Section label="// integrações" title="Integrações">
          <Bullets items={project.integrations} />
        </Section>
      )}

      <Section label="// papel" title="Minhas responsabilidades">
        <Bullets items={project.responsibilities} />
      </Section>

      {/* Desafios */}
      <Section label="// desafios" title="Desafios e como resolvi">
        <div className="space-y-4">
          {project.challenges.map((item, i) => (
            <div key={i} className="card-base">
              <p className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                Desafio
              </p>
              <p className="mt-1.5 text-secondary">{item.challenge}</p>
              <p className="mt-4 font-mono-jb text-xs uppercase tracking-wider text-brand">
                Solução
              </p>
              <p className="mt-1.5 text-secondary">{item.solution}</p>
            </div>
          ))}
        </div>
      </Section>

      {project.decisions && project.decisions.length > 0 && (
        <Section label="// trade-offs" title="Decisões e trade-offs">
          <div className="space-y-3">
            {project.decisions.map((item, i) => (
              <div key={i} className="card-base">
                <p className="text-sm font-medium">Decisão: {item.decision}</p>
                <p className="mt-1 text-sm text-muted">Motivo: {item.reason}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {project.reliability && project.reliability.length > 0 && (
        <Section label="// confiabilidade" title="Confiabilidade e governança">
          <Bullets items={project.reliability} />
        </Section>
      )}

      {project.observability && project.observability.length > 0 && (
        <Section label="// observabilidade" title="Observabilidade">
          <Bullets items={project.observability} />
        </Section>
      )}

      {project.engineeringPractices && project.engineeringPractices.length > 0 && (
        <Section label="// engenharia" title="Práticas de engenharia aplicadas">
          <Bullets items={project.engineeringPractices} />
        </Section>
      )}

      {/* Confidencialidade */}
      <div className="border-t border-border py-8">
        <p className="text-sm text-muted">
          Alguns detalhes foram generalizados por confidencialidade, mantendo
          arquitetura e decisões técnicas.
        </p>
      </div>

      {/* Próximo projeto */}
      <Link
        to={`/projetos/${nextProject.slug}`}
        className="card-base group flex items-center justify-between gap-4"
      >
        <div>
          <p className="font-mono-jb text-xs uppercase tracking-wider text-muted">
            Próximo projeto
          </p>
          <h3 className="mt-1 font-semibold">{nextProject.title}</h3>
        </div>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </Link>
    </main>
  );
};

export default ProjetoDetalhe;
