import { useState, useRef, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { askPedroSuggestions } from "@/data/labData";

interface Msg {
  role: "user" | "assistant";
  text: string;
}

const FALLBACK =
  "O agente está indisponível agora. Enquanto isso, os sistemas, a arquitetura e a experiência estão documentados nas seções acima. Pra falar direto comigo, use o contato abaixo.";

export function AskPedro() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const send = async (q: string) => {
    const text = q.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((m) => [...m, { role: "user", text }, { role: "assistant", text: "" }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: text }),
      });

      if (!res.ok || !res.body) throw new Error("no stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", text: acc };
          return copy;
        });
      }
      if (!acc.trim()) throw new Error("empty");
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", text: FALLBACK };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask-pedro" className="section-divide">
      <div className="container-wide py-20 md:py-28">
        <SectionHeader
          index="07"
          label="Pergunte ao Pedro"
          title="Pergunte sobre minha arquitetura, projetos ou experiência."
        />

        <div className="mt-12 mx-auto max-w-2xl">
          <div className="border border-border bg-surface-01/40">
            {messages.length > 0 && (
              <div ref={bodyRef} className="flex max-h-[420px] flex-col gap-4 overflow-y-auto border-b border-border p-5">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "text-right" : ""}>
                    <p className="mono-label mb-1">{m.role === "user" ? "Você" : "Pedro"}</p>
                    <p className={`inline-block max-w-[85%] whitespace-pre-wrap text-[14px] leading-relaxed ${
                      m.role === "user" ? "text-foreground" : "text-secondary"
                    }`}>
                      {m.text || (loading && i === messages.length - 1 ? "…" : "")}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-3 p-4"
            >
              <Sparkles size={16} className="shrink-0 text-accent" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte sobre projetos, arquitetura ou experiência..."
                maxLength={600}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent text-[14px] text-foreground placeholder:text-foreground-muted focus:outline-none disabled:opacity-60"
                aria-label="Pergunte ao Pedro"
              />
              <button
                type="submit"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-foreground text-background transition-opacity disabled:opacity-30"
                disabled={!input.trim() || loading}
                aria-label="Enviar"
              >
                <ArrowUp size={15} />
              </button>
            </form>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {askPedroSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={loading}
                className="chip transition-colors hover:border-border-strong hover:text-foreground disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>

          <p className="mt-5 text-center font-mono-jb text-[11px] text-foreground-muted">
            Agente com IA sobre meus projetos. Responde só com o que está documentado.
          </p>
        </div>
      </div>
    </section>
  );
}
