import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project; index?: number }) {
  const mainImpact = project.impact?.find((m) => m.highlight) ?? project.impact?.[0];

  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="card-base group flex h-full flex-col"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono-jb text-xs uppercase tracking-wider text-muted">
          {project.organization}
        </span>
        {project.roleBadge && <span className="chip">{project.roleBadge}</span>}
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-secondary">
        {project.highlightLine || project.headline}
      </p>

      {mainImpact && (
        <p className="mt-3 text-xs text-muted">
          <span className="font-mono-jb font-medium text-brand">{mainImpact.value}</span>{" "}
          {mainImpact.label}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <span className="link-arrow mt-auto pt-5">
        Ver projeto
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
