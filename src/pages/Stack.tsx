import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stackCategories } from "@/data/stack";
import { techRationale, type TechRationale } from "@/data/techRationale";

const principles = [
  {
    title: "Idempotência em tudo que é crítico",
    text: "Webhooks retentam, filas reprocessam. Todo fluxo crítico é desenhado para que o mesmo evento processado N vezes tenha o efeito de 1 — chave de idempotência, dedupe e reprocesso explícito.",
  },
  {
    title: "Camadas raw → curated → analytics",
    text: "Dado bruto nunca se mistura com dado tratado. A separação em camadas permite reprocessar com segurança e evoluir métricas sem quebrar a ingestão.",
  },
  {
    title: "Observabilidade desde o dia 1",
    text: "Logs estruturados, correlation id e trilha de auditoria não são acabamento — são o que permite operar em produção e responder 'o que aconteceu' com evidência.",
  },
  {
    title: "Multi-tenant por configuração, não fork",
    text: "Cliente novo é configuração sobre a mesma base, com isolamento por RLS. Um código, N clientes — sem Frankenstein de forks divergindo.",
  },
];

const kindLabel: Record<TechRationale["kind"], string> = {
  linguagem: "Linguagens",
  runtime: "Runtime",
  banco: "Dados & bancos",
  frontend: "Frontend",
  automação: "Automação",
  ia: "IA & agentes",
  integração: "Integração",
  infra: "Infra & entrega",
};

const kindOrder: TechRationale["kind"][] = [
  "linguagem",
  "runtime",
  "banco",
  "frontend",
  "automação",
  "ia",
  "integração",
  "infra",
];

const Stack = () => {
  const grouped = kindOrder
    .map((kind) => ({
      kind,
      label: kindLabel[kind],
      items: techRationale.filter((t) => t.kind === kind),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <main className="container-page py-16 md:py-20">
      {/* Header */}
      <header className="animate-in-up">
        <span className="section-label">// stack</span>
        <h1 className="section-title mt-4">Como eu construo</h1>
        <p className="section-subtitle mt-4">
          Princípios primeiro. Ferramenta é consequência.
        </p>
      </header>

      {/* Princípios */}
      <section className="mt-12 border-t border-border pt-10">
        <span className="section-label">// princípios</span>
        <h2 className="mt-3 text-xl font-semibold tracking-tight">
          O que não muda de projeto pra projeto
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="card-base">
              <h3 className="text-sm font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Domínios */}
      <section className="mt-12 border-t border-border pt-10">
        <span className="section-label">// domínios</span>
        <h2 className="mt-3 text-xl font-semibold tracking-tight">
          Áreas de atuação
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {stackCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-sm font-semibold">{cat.title}</h3>
              <p className="mt-1 text-sm text-muted">{cat.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-1.5">
                {cat.practices.map((pr) => (
                  <li key={pr} className="flex items-start gap-2.5 text-xs text-secondary">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {pr}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ferramentas e porquês */}
      <section className="mt-12 border-t border-border pt-10">
        <span className="section-label">// decisões</span>
        <h2 className="mt-3 text-xl font-semibold tracking-tight">
          Cada ferramenta, um porquê
        </h2>
        <p className="section-subtitle mt-3 text-sm">
          Stack é um conjunto de decisões, não uma coleção de logos. Abaixo, o
          motivo de cada uma.
        </p>

        <div className="mt-8 space-y-10">
          {grouped.map((group) => (
            <div key={group.kind}>
              <h3 className="font-mono-jb text-xs uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="mt-2 divide-y divide-border border-y border-border">
                {group.items.map((t) => (
                  <div
                    key={t.name}
                    className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
                  >
                    <div>
                      <p className="font-mono-jb text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary">{t.why}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA arquiteturas */}
      <Link
        to="/arquiteturas"
        className="card-base group mt-12 flex items-center justify-between gap-4"
      >
        <div>
          <p className="font-mono-jb text-xs uppercase tracking-wider text-muted">
            Próximo nível
          </p>
          <h3 className="mt-1 font-semibold">
            Arquiteturas autorais — os padrões que aplico em produção
          </h3>
        </div>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </Link>
    </main>
  );
};

export default Stack;
