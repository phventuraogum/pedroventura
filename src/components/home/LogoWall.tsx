import { clients } from "@/data/clients";
import { Reveal } from "@/components/Reveal";

export function LogoWall() {
  return (
    <section className="section-divide">
      <div className="container-wide py-12 md:py-16">
        <Reveal>
          <p className="text-center text-sm text-muted">
            Empresas por trás dos sistemas que entreguei
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {clients.map((c) => (
              <li key={c.name}>
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-7 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-8"
                  />
                ) : (
                  <span
                    className="text-xl font-semibold tracking-tight text-muted transition-colors hover:text-foreground md:text-2xl"
                    aria-label={c.name}
                  >
                    {c.wordmark}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
