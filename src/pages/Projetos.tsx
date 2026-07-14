import { useState, useMemo, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, focusFilters } from "@/data/projects";

const Projetos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [activeFocus, setActiveFocus] = useState<string | null>(searchParams.get("focus") || null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (activeFocus) params.set("focus", activeFocus);
    setSearchParams(params, { replace: true });
  }, [search, activeFocus, setSearchParams]);

  const activeFilter = focusFilters.find((f) => f.id === activeFocus);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(searchLower) ||
        project.organization.toLowerCase().includes(searchLower) ||
        project.headline.toLowerCase().includes(searchLower) ||
        project.tags.some((t) => t.toLowerCase().includes(searchLower));

      const matchesFocus =
        !activeFilter || activeFilter.tags.some((t) => project.tags.includes(t));

      return matchesSearch && matchesFocus;
    });
  }, [search, activeFilter]);

  return (
    <main className="container-page py-16 md:py-20">
      {/* Header */}
      <header className="animate-in-up">
        <h1 className="section-title mt-4">Projetos entregues</h1>
        <p className="section-subtitle mt-4">
          {projects.length} sistemas que rodaram ou rodam em produção. Nomes de
          clientes ficam de fora por contrato; as decisões técnicas, não.
        </p>
      </header>

      {/* Filtros + busca */}
      <div className="mt-10 flex flex-col gap-4 border-y border-border py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {focusFilters.map((f) => {
            const active = activeFocus === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFocus(active ? null : f.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface-2 text-secondary hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
          {activeFocus && (
            <button
              onClick={() => setActiveFocus(null)}
              className="inline-flex items-center gap-1 px-2 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            >
              <X size={12} /> limpar
            </button>
          )}
        </div>

        <div className="relative w-full md:w-72">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Buscar projeto ou tecnologia…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-md border border-border bg-surface-1 pl-9 pr-8 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-lg font-medium">Nenhum projeto encontrado</p>
          <p className="mt-2 text-sm text-muted">Tente outros filtros ou limpe a busca.</p>
        </div>
      )}
    </main>
  );
};

export default Projetos;
