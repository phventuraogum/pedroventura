const techs = [
  "PYTHON",
  "TYPESCRIPT",
  "FASTAPI",
  "POSTGRESQL",
  "REDIS",
  "AWS",
  "DOCKER",
  "LLMs",
];

export function TechStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6">
      {techs.map((t, i) => (
        <span key={t} className="flex items-center gap-4">
          <span className="font-mono-jb text-[11px] tracking-[0.12em] text-foreground-secondary">
            {t}
          </span>
          {i < techs.length - 1 && (
            <span className="text-foreground-muted/50" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
