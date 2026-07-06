const stats = [
  { value: "5+", label: "anos em tecnologia" },
  { value: "18", label: "projetos entregues" },
  { value: "10+", label: "clientes, em 8 setores" },
  { value: "6", label: "arquiteturas autorais" },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-border">
      <div className="container-page py-16 md:py-24">
        <span className="section-label">// sobre</span>

        <div className="mt-6 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <h2 className="section-title">
              O que a proposta promete é o que roda em produção.
            </h2>
            <div className="section-subtitle mt-5 space-y-4">
              <p>
                Minha especialidade é pegar o sistema que só existe em proposta
                e fazer ele rodar: agente com latência real, pipeline limpo,
                automação que não quebra no terceiro mês, arquitetura que escala
                sem reescrita.
              </p>
              <p>
                Cheguei aqui por camadas: integração de sistemas, automação,
                engenharia de dados, arquitetura e liderança técnica. Hoje ocupo
                cadeira de CTO numa operação B2B com IA, e sigo com a mão no
                código todos os dias.
              </p>
              <p>
                No dia a dia: desenho arquiteturas SaaS multi-tenant do zero,
                projeto agentes de IA (OpenAI, Anthropic, LangChain), integro
                CRMs e ERPs que nem API têm, e decido os trade-offs que afetam
                margem e entrega.
              </p>
            </div>
          </div>

          <div className="self-start md:border-l md:border-border md:pl-10">
            <img
              src="/pedro.jpg"
              alt="Pedro Ventura"
              width={800}
              height={800}
              loading="lazy"
              className="mb-8 w-full max-w-[240px] rounded-xl border border-border"
            />
            <dl className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-semibold tracking-tight">{s.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
