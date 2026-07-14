import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-20 text-center md:py-28">
        <Reveal>
          <h2 className="section-title mx-auto max-w-2xl">
            Tem um sistema pra tirar do papel?
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Me conta o problema. Se eu puder resolver, você recebe um plano de
            ataque, não um pitch de vendas.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contato" className="btn-primary">
              Falar comigo <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
