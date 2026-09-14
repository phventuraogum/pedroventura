import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "5+", label: "anos em tecnologia" },
  { value: "18", label: "sistemas entregues" },
  { value: "10+", label: "clientes em 8 setores" },
  { value: "6", label: "arquiteturas autorais" },
];

export function About() {
  return (
    <section id="sobre" className="section-divide">
      <div className="container-wide py-16 md:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Sobre</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title mt-5">Quem sou</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-secondary">
              <p>
                Sou o Pedro. Trabalho com software há mais de cinco anos e
                gosto mesmo é de ver um sistema no ar, sendo usado.
              </p>
              <p>
                Hoje meu foco é engenharia de IA: agentes, LLMs, RAG e
                pipelines que colocam modelo pra trabalhar de verdade, com
                latência, custo e confiabilidade sob controle. Isso apoiado
                numa base forte de engenharia de software, backend, dados e
                integração entre sistemas.
              </p>
              <p>
                Sou CTO numa operação de IA e continuo programando todo dia.
                Se você tem um problema de verdade pra resolver com IA, me
                chama que eu te falo se consigo ajudar.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-4xl font-medium tracking-tight md:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
