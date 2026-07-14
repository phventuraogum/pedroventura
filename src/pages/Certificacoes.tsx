import { useState } from "react";
import { X } from "lucide-react";
import { certifications, certsByCategory, type CertCategory } from "@/data/certifications";

const levelLabel: Record<string, string> = {
  foundational: "Foundational",
  associate: "Associate",
  professional: "Professional",
  specialist: "Specialist",
  advanced: "Advanced",
};

const categoryKeys = Object.keys(certsByCategory) as CertCategory[];

export default function Certificacoes() {
  const [activeCategory, setActiveCategory] = useState<CertCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <main className="container-page py-16 md:py-20">
      {/* Header */}
      <header className="animate-in-up">
        <h1 className="section-title mt-4">Certificações</h1>
        <p className="section-subtitle mt-4">
          Nenhuma destas parou no papel. Cada uma apareceu em pelo menos um
          projeto entregue.
        </p>
      </header>

      {/* Filtros */}
      <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-border py-5">
        {[{ id: "all" as const, label: "Todas" },
          ...categoryKeys.map((k) => ({ id: k, label: certsByCategory[k] })),
        ].map(({ id, label }) => {
          const active = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-2 text-secondary hover:text-foreground"
              }`}
            >
              {label}
            </button>
          );
        })}
        {activeCategory !== "all" && (
          <button
            onClick={() => setActiveCategory("all")}
            className="inline-flex items-center gap-1 px-2 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            <X size={12} /> limpar
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert) => (
          <article key={cert.id} className="card-base flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2">
                <span className="font-mono-jb text-[10px] font-bold text-secondary">
                  {cert.logoBadge}
                </span>
              </div>
              <span className="chip">{levelLabel[cert.level]}</span>
            </div>

            <h3 className="mt-4 text-sm font-semibold leading-snug">{cert.name}</h3>
            <p className="mt-0.5 font-mono-jb text-xs text-muted">{cert.issuer}</p>

            <p className="mt-3 flex-1 text-xs leading-relaxed text-secondary">
              {cert.description}
            </p>

            {cert.skills && cert.skills.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {cert.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Nota */}
      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted">
        Quer ver onde cada uma foi usada? O rastro está nos{" "}
        <a href="/trabalhos" className="text-brand hover:opacity-80">
          projetos entregues
        </a>
        .
      </p>
    </main>
  );
}
