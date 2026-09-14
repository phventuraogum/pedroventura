import { Reveal } from "@/components/Reveal";

const principles = [
  {
    n: "01",
    title: "IA avaliada, não no chute",
    body: "Antes de trocar modelo ou prompt, rodo eval. A decisão vem de número, não de impressão. RAG só entra com recuperação medida.",
  },
  {
    n: "02",
    title: "Custo e latência sob controle",
    body: "Token tem preço e resposta tem prazo. Escolho o modelo por rota, cacheio o que dá, e mantenho a conta previsível.",
  },
  {
    n: "03",
    title: "Rastreabilidade ponta a ponta",
    body: "Prompt, contexto e resposta ficam registrados. Quando o agente erra, dá pra ver onde e por quê, em minutos.",
  },
  {
    n: "04",
    title: "Guardrails e isolamento",
    body: "Saída de modelo é validada antes de virar ação. Em multi-tenant, dado de um cliente não vaza pro outro, e isso é testado.",
  },
];

export function Principles() {
  return (
    <section className="section-divide">
      <div className="container-wide py-16 md:py-24">
        <Reveal>
          <h2 className="section-title max-w-2xl">
            Antes do código, as decisões que seguram a operação.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.08}>
              <div className="h-full bg-surface-1 p-7 md:p-9">
                <span className="font-mono-jb text-sm text-brand">{p.n}</span>
                <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
