import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div>
          <p className="text-sm font-medium">Pedro Ventura</p>
          <p className="mt-0.5 text-xs text-muted">
            © {year} · CTO na Pinn · sistemas que vão pra produção
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/phventuraogum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/phventura/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Linkedin size={16} />
          </a>
          <Link to="/contato" className="btn-ghost !px-3 !py-1.5 text-xs">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
