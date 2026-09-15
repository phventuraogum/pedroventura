import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/#systems", label: "Sistemas" },
  { to: "/architecture", label: "Arquitetura" },
  { to: "/experience", label: "Experiência" },
  { to: "/#lab", label: "Lab" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-colors duration-200"
      style={
        scrolled
          ? { background: "hsl(210 8% 4% / 0.82)", backdropFilter: "blur(16px)", borderBottom: "1px solid hsl(var(--border))" }
          : { background: "transparent", borderBottom: "1px solid transparent" }
      }
    >
      <nav className="container-wide flex h-[72px] items-center justify-between">
        <Link to="/" className="text-lg font-medium tracking-tight">
          PV<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.to.includes("#") ? (
              <a
                key={l.to}
                href={l.to}
                className="font-mono-jb text-[13px] text-foreground-secondary transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono-jb text-[13px] text-foreground-secondary transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <a
          href="https://github.com/phventuraogum"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono-jb text-[13px] text-foreground-secondary transition-colors hover:text-foreground"
          aria-label="GitHub"
        >
          GitHub <Github size={13} />
        </a>
      </nav>
    </header>
  );
}
