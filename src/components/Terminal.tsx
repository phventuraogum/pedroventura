import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Line = { type: "cmd" | "out"; text: string };

const COMMANDS = ["help", "whoami", "sobre", "stack", "projetos", "certs", "contato", "clear"];

const RESPONSES: Record<string, string[]> = {
  help: [
    "comandos disponíveis:",
    "  whoami     quem sou eu",
    "  sobre      resumo rápido",
    "  stack      tecnologias que uso",
    "  projetos   sistemas em produção",
    "  certs      certificações",
    "  contato    onde me achar",
    "  clear      limpa o terminal",
  ],
  whoami: ["CTO @ Pinn · operação comercial B2B com IA · integração / dados / agentes"],
  sobre: [
    "O que a proposta promete é o que roda em produção.",
    "Arquiteto SaaS multi-tenant, agentes de IA (OpenAI, Anthropic, LangChain)",
    "e integrações com CRMs B2B — automação que não quebra no terceiro mês.",
  ],
  stack: [
    "backend    Node.js · TypeScript · Python · APIs REST · Webhooks",
    "dados      PostgreSQL · Supabase · SQL · views · raw/curated/analytics",
    "automação  n8n · workers · cron · event-driven",
    "ia         federação de agentes · LangChain · RAG · LLMs",
    "infra      Docker · VPS · GitHub Actions · Vercel",
  ],
  projetos: [
    "hermes/         engine de prospecção B2B multi-tenant",
    "support-hub/    SaaS de suporte com triagem por IA + SLA",
    "bi-hub/         BI com onboarding guiado + mapeamento por IA",
    "okrs/           plataforma de OKRs e indicadores",
    "→ digite 'projetos' e navegue em /trabalhos",
  ],
  certs: ["15 certificações · n8n · AWS · Docker · Google IT · TypeScript · SQL · PostgreSQL…"],
  contato: ["linkedin · github · email — veja /contato"],
};

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "out", text: "Bem-vindo. Digite `help` pra começar." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const next: Line[] = [{ type: "cmd", text: raw }];
    if (RESPONSES[cmd]) {
      next.push(...RESPONSES[cmd].map((t) => ({ type: "out" as const, text: t })));
    } else {
      next.push({ type: "out", text: `comando não encontrado: ${cmd} — tente 'help'` });
    }
    setLines((l) => [...l, ...next]);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.trim().toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const idx = histIdx + 1;
      if (idx >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(idx);
        setInput(history[idx]);
      }
    }
  };

  return (
    <div className="terminal text-[13px] leading-relaxed" onClick={() => inputRef.current?.focus()}>
      <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: "1px solid hsl(var(--border-strong))" }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#cfccc2" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#cfccc2" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#cfccc2" }} />
        <span className="terminal-dim ml-2 text-xs">pedro@ventura — bash</span>
      </div>

      <div ref={bodyRef} className="max-h-[260px] min-h-[200px] overflow-y-auto px-4 py-3.5">
        {lines.map((l, i) =>
          l.type === "cmd" ? (
            <div key={i} className="whitespace-pre-wrap">
              <span className="terminal-prompt">pedro@ventura</span>
              <span className="terminal-dim">:~$ </span>
              <span className="terminal-fg">{l.text}</span>
            </div>
          ) : (
            <div key={i} className="terminal-fg whitespace-pre-wrap opacity-80">
              {l.text}
            </div>
          )
        )}

        <div className="flex">
          <span className="terminal-prompt">pedro@ventura</span>
          <span className="terminal-dim">:~$&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            autoComplete="off"
            spellCheck={false}
            aria-label="terminal input"
            className="terminal-fg flex-1 bg-transparent outline-none"
            style={{ caretColor: "hsl(var(--term-green))" }}
          />
        </div>
      </div>

      <div className="terminal-dim px-4 pb-2.5 text-[11px]">
        <kbd>Tab</kbd> autocompleta · <kbd>↑↓</kbd> histórico
      </div>
    </div>
  );
}
