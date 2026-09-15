import { useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { askPedroSuggestions } from "@/data/labData";

interface Msg {
  role: "user" | "assistant";
  text: string;
}

/**
 * AskPedro — interface do agente do portfólio.
 * Preparada pra plugar endpoint de chat/RAG/streaming depois:
 * basta trocar o corpo de `send()` por uma chamada ao backend.
 */
export function AskPedro() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);

  const send = (q: string) => {
    const text = q.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { role: "user", text },
      {
        role: "assistant",
        text: "O agente do portfólio está em construção. Por enquanto, os sistemas, a arquitetura e a experiência estão documentados nas seções acima. Pra falar direto comigo, use o contato abaixo.",
      },
    ]);
    setInput("");
  };

  return (
    <section id="ask-pedro" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="07"
          label="Ask Pedro"
          title="Pergunte sobre minha arquitetura, projetos ou experiência."
        />

        <div className="mt-12 mx-auto max-w-2xl">
          <div className="border border-border bg-surface-01/40">
            {/* Histórico */}
            {messages.length > 0 && (
              <div className="flex flex-col gap-4 border-b border-border p-5">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "text-right" : ""}>
                    <p className="mono-label mb-1">{m.role === "user" ? "Você" : "Pedro"}</p>
                    <p className={`inline-block max-w-[85%] text-[14px] leading-relaxed ${
                      m.role === "user" ? "text-foreground" : "text-secondary"
                    }`}>
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-3 p-4"
            >
              <Sparkles size={16} className="shrink-0 text-accent" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte sobre projetos, arquitetura ou experiência..."
                className="min-w-0 flex-1 bg-transparent text-[14px] text-foreground placeholder:text-foreground-muted focus:outline-none"
                aria-label="Pergunte ao Pedro"
              />
              <button
                type="submit"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-foreground text-background transition-opacity disabled:opacity-30"
                disabled={!input.trim()}
                aria-label="Enviar"
              >
                <ArrowUp size={15} />
              </button>
            </form>
          </div>

          {/* Sugestões */}
          <div className="mt-4 flex flex-wrap gap-2">
            {askPedroSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="chip transition-colors hover:border-border-strong hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>

          <p className="mt-5 text-center font-mono-jb text-[11px] text-foreground-muted">
            Agente com RAG sobre meus projetos, em construção.
          </p>
        </div>
      </div>
    </section>
  );
}
