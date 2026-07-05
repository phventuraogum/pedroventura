const setup = [
  { group: "Editor & Terminal", items: ["VS Code", "iTerm2 + zsh", "Claude Code"] },
  { group: "Linguagens & Frameworks", items: ["TypeScript / Node", "Python", "Next.js · React", "Laravel / PHP"] },
  { group: "Dados", items: ["PostgreSQL", "Supabase", "Neon", "Drizzle ORM"] },
  { group: "Infra & Deploy", items: ["Docker + Swarm", "Traefik", "VPS (Hostinger)", "GitHub Actions", "Vercel"] },
  { group: "Automação & IA", items: ["n8n", "LangChain", "Claude / OpenAI API", "Playwright"] },
  { group: "Qualidade", items: ["Vitest", "ESLint", "TypeScript strict"] },
];

export function Setup() {
  return (
    <section className="border-t border-border bg-surface-2/40">
      <div className="container-page py-16 md:py-24">
        <span className="section-label">// setup</span>
        <h2 className="section-title mt-4">Ferramentas do dia a dia</h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {setup.map((s) => (
            <div key={s.group}>
              <h3 className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                {s.group}
              </h3>
              <ul className="mt-3 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
