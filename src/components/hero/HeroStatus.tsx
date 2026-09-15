import { StatusDot } from "@/components/ui/StatusDot";

const blocks = [
  { label: "Atual", lines: ["Construindo @ Pinn"] },
  { label: "Foco", lines: ["Sistemas de IA", "Arquitetura", "Engenharia de produto"] },
  { label: "Local", lines: ["Brasil"] },
];

export function HeroStatus() {
  return (
    <aside className="w-full">
      <div className="mb-7 flex items-center gap-2">
        <StatusDot />
        <span className="label text-accent">Ativo</span>
      </div>
      <div className="flex flex-col gap-7">
        {blocks.map((b) => (
          <div key={b.label}>
            <p className="label mb-3">{b.label}</p>
            <div className="mb-3 h-px w-full bg-border" />
            {b.lines.map((line) => (
              <p key={line} className="text-[15px] leading-relaxed text-foreground">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
