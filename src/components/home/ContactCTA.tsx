import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 mono-label">
            <span className="text-accent">08</span>
            <span>Contact</span>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-10 border-l-2 border-accent pl-6 lg:flex-row lg:items-end">
          <Reveal>
            <div>
              <p className="mono-label mb-3">Vamos construir</p>
              <h2 className="type-h2 max-w-2xl">Vamos construir algo difícil.</h2>
              <p className="section-subtitle mt-4 text-[1.05rem]">
                Problema complexo merece sistema bem arquitetado. Me conta o que
                você quer tirar do papel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:passisventura@gmail.com"
                className="link-arrow group"
              >
                <Mail size={15} /> Email
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/phventuraogum"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group"
              >
                <Github size={15} /> GitHub
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/phventura/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group"
              >
                <Linkedin size={15} /> LinkedIn
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
