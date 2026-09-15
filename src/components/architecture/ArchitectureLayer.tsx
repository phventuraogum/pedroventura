import { useState } from "react";
import {
  ChevronDown, MonitorSmartphone, Boxes, BrainCircuit, Database, Server, Circle,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { ArchLayer } from "@/data/architecture";

const ICONS: Record<string, typeof Circle> = {
  MonitorSmartphone, Boxes, BrainCircuit, Database, Server,
};

export function ArchitectureLayer({
  layer,
  open,
  onToggle,
  highlight = false,
}: {
  layer: ArchLayer;
  open: boolean;
  onToggle: () => void;
  highlight?: boolean;
}) {
  const reduce = useReducedMotion();
  const Icon = ICONS[layer.icon] ?? Circle;

  return (
    <div
      className={`border border-border transition-colors ${
        open ? "bg-surface-02" : "bg-surface-01/50 hover:bg-surface-02"
      } ${highlight ? "border-l-2 border-l-accent" : ""}`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="mono-label text-accent">{layer.index}</span>
        <Icon size={18} className="shrink-0 text-foreground-secondary" />
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-medium text-foreground">{layer.name}</span>
          <span className="mt-0.5 block font-mono-jb text-[11px] text-foreground-muted">
            {layer.short}
          </span>
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-foreground-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-5 py-5">
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {layer.groups.map((g) => (
                  <div key={g.title}>
                    <p className="mono-label mb-2.5">{g.title}</p>
                    <ul className="flex flex-col gap-1">
                      {g.items.map((it) => (
                        <li key={it} className="text-[13px] text-foreground-secondary">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {layer.note && (
                <p className="mt-5 border-l-2 border-accent pl-4 text-[13px] italic leading-relaxed text-secondary">
                  {layer.note}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
