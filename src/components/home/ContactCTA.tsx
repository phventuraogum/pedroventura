import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-20 text-center md:py-28">
        <span className="badge-available mx-auto">Disponível para projetos</span>
        <h2 className="section-title mx-auto mt-6 max-w-2xl">
          Tem um sistema pra tirar do papel?
        </h2>
        <p className="section-subtitle mx-auto mt-4">
          Me conta o problema. Se eu puder resolver, você recebe um plano de
          ataque, não um pitch de vendas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contato" className="btn-primary">
            Falar comigo <ArrowRight size={16} />
          </Link>
          <Link to="/trabalhos" className="btn-ghost">
            Ver trabalhos
          </Link>
        </div>
      </div>
    </section>
  );
}
