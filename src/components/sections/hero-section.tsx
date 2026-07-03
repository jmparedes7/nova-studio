import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { HeroData } from "@/templates/types";

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-8 sm:pb-24 lg:pb-28">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <a className="text-lg font-bold tracking-tight text-ink" href="#">
            Nova Studio
          </a>
          <a
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-copper"
            href="#contacto"
          >
            Contacto
          </a>
        </nav>

        <div className="grid items-center gap-12 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
              {data.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              {data.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contacto">{data.primaryCta}</Button>
              <Button href="#precios" variant="secondary">
                {data.secondaryCta}
              </Button>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {data.stats.map((stat) => (
                <div
                  className="rounded-2xl border border-ink/10 bg-white/55 p-4"
                  key={stat.label}
                >
                  <dt className="text-xl font-bold text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-5 text-ink/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="relative rounded-[2rem] border border-ink/10 bg-ink p-4 shadow-soft">
              <div className="rounded-[1.45rem] bg-bone p-4">
                <div className="rounded-[1.2rem] bg-white p-4 shadow-soft">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                    <div>
                      <div className="h-3 w-24 rounded-full bg-moss" />
                      <div className="mt-2 h-2 w-36 rounded-full bg-ink/12" />
                    </div>
                    <div className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-moss">
                      Online
                    </div>
                  </div>
                  <div className="grid gap-3 py-5 sm:grid-cols-2">
                    <div className="rounded-2xl bg-fog p-4">
                      <div className="h-28 rounded-xl bg-[linear-gradient(135deg,#39483b,#d8f1df)]" />
                      <div className="mt-4 h-3 w-3/4 rounded-full bg-ink/16" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-ink/10" />
                    </div>
                    <div className="space-y-3">
                      {["Hero", "Servicios", "Testimonios"].map((item) => (
                        <div
                          className="rounded-2xl border border-ink/10 bg-white p-4"
                          key={item}
                        >
                          <div className="text-sm font-semibold text-ink">
                            {item}
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-copper/35" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-ink p-4 text-bone">
                    <p className="text-sm font-semibold">Consulta recibida</p>
                    <p className="mt-1 text-xs text-bone/70">
                      Nuevo lead desde WhatsApp CTA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
