import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

/* Contatos ofuscados — montados só no clique (nada de e-mail/telefone no DOM) */
const emailAddr = () => ["passisventura", "gmail.com"].join("@");
const waNumber = () => ["55", "32", "99953", "0416"].join("");

const Contato = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const contactLinks = [
    {
      icon: Mail,
      label: t("contact.email.label", "E-mail"),
      description: "resposta em até 1 dia útil",
      action: () => {
        window.location.href = `mailto:${emailAddr()}`;
      },
    },
    {
      icon: MessageCircle,
      label: t("contact.whatsapp.label", "WhatsApp"),
      description: "canal mais rápido",
      action: () => {
        window.open(`https://wa.me/${waNumber()}`, "_blank", "noopener,noreferrer");
      },
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin.label", "LinkedIn"),
      description: "rede profissional",
      action: () => {
        window.open("https://www.linkedin.com/in/phventura/", "_blank", "noopener,noreferrer");
      },
    },
    {
      icon: Github,
      label: "GitHub",
      description: "projetos pessoais",
      action: () => {
        window.open("https://github.com/phventuraogum", "_blank", "noopener,noreferrer");
      },
    },
    {
      icon: Github,
      label: "GitHub · Pinn",
      description: "onde vive a maior parte do meu código de produção",
      action: () => {
        window.open("https://github.com/pinn-product-builder", "_blank", "noopener,noreferrer");
      },
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Contato via portfólio — ${name}` : "Contato via portfólio"
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${emailAddr()}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="container-page py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        {/* Esquerda: contexto + links */}
        <div className="animate-in-up">
          <span className="badge-available">Disponível para projetos</span>
          <h1 className="section-title mt-6">
            {t("contact.title", "Vamos conversar")}
          </h1>
          <p className="section-subtitle mt-4">
            {t(
              "contact.subtitle",
              "Aberto a projetos de integração, dados, automação e IA — do discovery à operação."
            )}
          </p>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {contactLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.action}
                className="group flex w-full items-center gap-4 py-4 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-secondary transition-colors group-hover:text-foreground">
                  <link.icon size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{link.label}</span>
                  <span className="block font-mono-jb text-xs text-muted">
                    {link.description}
                  </span>
                </span>
                <span className="btn-ghost pointer-events-none shrink-0 !px-3 !py-1.5 text-xs">
                  Abrir <ArrowUpRight size={13} />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Direita: form (abre e-mail preenchido) */}
        <div className="animate-in-up" style={{ animationDelay: "0.1s" }}>
          <form onSubmit={handleSubmit} className="card-base">
            <h2 className="text-lg font-semibold">
              {t("contact.form.title", "Mandar uma mensagem")}
            </h2>
            <p className="mt-1 text-xs text-muted">
              Abre no seu e-mail, já preenchido.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  {t("contact.form.name", "Nome")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 w-full rounded-md border border-border bg-surface-1 px-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand"
                  placeholder={t("contact.form.namePlaceholder", "Seu nome")}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  {t("contact.form.message", "Mensagem")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-md border border-border bg-surface-1 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand"
                  placeholder={t(
                    "contact.form.messagePlaceholder",
                    "Me conta o que você quer construir…"
                  )}
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {t("contact.form.submit", "Enviar")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contato;
