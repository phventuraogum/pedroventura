import { ArchitectureHero } from "@/components/architecture/ArchitectureHero";
import { SystemModel } from "@/components/architecture/SystemModel";
import { Principles } from "@/components/architecture/Principles";
import { Patterns } from "@/components/architecture/Patterns";

export default function Architecture() {
  return (
    <main>
      <ArchitectureHero />
      <SystemModel />
      <Principles />
      <Patterns />
    </main>
  );
}
