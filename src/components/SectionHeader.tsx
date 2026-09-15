import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * Numbered section header in the "01 / SELECTED SYSTEMS" engineering style.
 * index e.g. "01", label e.g. "Selected Systems".
 */
export function SectionHeader({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-3 mono-label">
          <span className="text-brand">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{label}</span>
        </div>
      </Reveal>
      {title && (
        <Reveal delay={0.06}>
          <h2 className="section-title mt-6 max-w-3xl">{title}</h2>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.12}>
          <div className="mt-5">{children}</div>
        </Reveal>
      )}
    </div>
  );
}
