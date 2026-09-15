import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divide mt-0">
      <div className="container-wide py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" className="text-lg font-medium tracking-tight">
              PV<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-foreground-muted">
              Pedro Ventura, AI Systems Architect. Da restrição de negócio ao
              sistema em produção.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://github.com/phventuraogum"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-jb text-[12px] text-foreground-secondary transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/phventura/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-jb text-[12px] text-foreground-secondary transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:passisventura@gmail.com"
              className="font-mono-jb text-[12px] text-foreground-secondary transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="font-mono-jb text-[11px] text-foreground-muted">
            © {year} Pedro Ventura
          </p>
        </div>
      </div>
    </footer>
  );
}
