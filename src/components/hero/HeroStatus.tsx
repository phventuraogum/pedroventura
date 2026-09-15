import { StatusDot } from "@/components/ui/StatusDot";

const blocks = [
  { label: "Current", lines: ["Building @ Pinn"] },
  { label: "Focus", lines: ["AI Systems", "Architecture", "Product Engineering"] },
  { label: "Location", lines: ["Brazil"] },
];

export function HeroStatus() {
  return (
    <aside className="w-full border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      <div className="mb-6 flex items-center gap-2">
        <StatusDot />
        <span className="label text-accent">Active</span>
      </div>
      <div className="flex flex-col gap-5">
        {blocks.map((b) => (
          <div key={b.label} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
            <p className="label mb-2.5">{b.label}</p>
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
