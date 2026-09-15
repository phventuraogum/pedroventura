import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SystemCard } from "@/components/SystemCard";
import { Reveal } from "@/components/Reveal";
import { selectedSystems } from "@/data/systems";

export function SelectedSystems() {
  return (
    <section id="systems" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="01"
          label="Sistemas selecionados"
          title="Sistemas que desenhei e coloquei no ar, não telas soltas."
        />

        <div className="mt-10">
          {selectedSystems.map((s) => (
            <SystemCard key={s.index} system={s} />
          ))}
        </div>

        <Reveal>
          <div className="border-t border-border pt-8">
            <Link to="/trabalhos" className="link-arrow">
              Ver todos os sistemas
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
