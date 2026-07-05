import { NavLink, Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

const links = [
  { to: "/trabalhos", key: "nav.projects", fallback: "Trabalhos" },
  { to: "/stack", key: "nav.stack", fallback: "Stack" },
  { to: "/arquiteturas", key: "nav.architectures", fallback: "Arquiteturas" },
  { to: "/certificacoes", key: "nav.certifications", fallback: "Certificações" },
  { to: "/contato", key: "nav.contact", fallback: "Contato" },
];

export function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLang = () => {
    const next = i18n.language?.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(next);
    localStorage.setItem("language", next);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="container-page grid h-14 grid-cols-[1fr_auto_1fr] items-center">
        {/* Esquerda: logo */}
        <Link to="/" className="flex items-center gap-2 font-medium tracking-tight">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
            PV
          </span>
          <span className="hidden sm:inline">Pedro Ventura</span>
        </Link>

        {/* Centro: navegação */}
        <div className="hidden items-center gap-7 text-sm text-secondary md:flex">
          {links.map((l) => {
            const active =
              location.pathname === l.to ||
              (l.to === "/trabalhos" && location.pathname.startsWith("/projetos"));
            return (
              <NavLink
                key={l.to}
                to={l.to}
                className={`transition-colors hover:text-foreground ${active ? "text-foreground" : ""}`}
              >
                {t(l.key, l.fallback)}
              </NavLink>
            );
          })}
        </div>

        {/* Direita: social + controles */}
        <div className="flex items-center justify-end gap-1.5">
          <a
            href="https://github.com/phventuraogum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-md border border-border p-1.5 text-secondary transition-colors hover:border-foreground/30 hover:text-foreground sm:flex"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/phventura/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-md border border-border p-1.5 text-secondary transition-colors hover:border-foreground/30 hover:text-foreground sm:flex"
          >
            <Linkedin size={15} />
          </a>
          <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
          <button
            onClick={toggleLang}
            className="rounded-md border border-border px-2 py-1 font-mono-jb text-xs text-secondary transition-colors hover:border-foreground/30 hover:text-foreground"
            aria-label="Trocar idioma"
          >
            {i18n.language?.startsWith("pt") ? "PT" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md border border-border p-1.5 text-secondary transition-colors hover:border-foreground/30 hover:text-foreground"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
