import type { TechItem } from "@/data/caseStudies";

/**
 * TechStack — grade de tecnologias com logo (simple-icons CDN) + nome.
 * Se o logo falhar, some (o nome permanece).
 */
export function TechStack({ items }: { items: TechItem[] }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-6">
      {items.map((t) => (
        <div key={t.name} className="flex flex-col items-center gap-2.5 w-16 text-center">
          <img
            src={`https://cdn.simpleicons.org/${t.slug}/B7B8B9`}
            alt=""
            width={26}
            height={26}
            loading="lazy"
            className="h-6 w-6 object-contain"
            onError={(e) => { (e.currentTarget.style.display = "none"); }}
          />
          <span className="font-mono-jb text-[11px] leading-tight text-foreground-secondary">
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}
