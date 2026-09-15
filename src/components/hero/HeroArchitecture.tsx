/**
 * HeroArchitecture — elemento de arquitetura extremamente sutil no fundo.
 * Fica atrás do painel direito, opacity baixa, não compete com a headline.
 */
const layers = ["BUSINESS", "SYSTEM", "AI · DATA · INFRA"];

export function HeroArchitecture() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none flex-col items-end gap-2 lg:flex"
      aria-hidden="true"
      style={{ opacity: 0.09 }}
    >
      {layers.map((layer, i) => (
        <div key={layer} className="flex flex-col items-end gap-2">
          <span className="font-mono-jb text-xs tracking-widest text-foreground">
            {layer}
          </span>
          {i < layers.length - 1 && (
            <span className="font-mono-jb text-xs text-foreground">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}
