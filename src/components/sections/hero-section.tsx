import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { HeroData } from "@/templates/types";
import Image from "next/image";

type HeroSectionProps = {
  data: HeroData;
};

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.48-8.41Zm-8.44 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c-.01 5.45-4.45 9.86-9.9 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-18 pt-6 sm:pb-24 lg:pb-28">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <a className="text-lg font-bold tracking-tight text-ink" href="#">
            {data.businessName}
          </a>
          <a
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-copper"
            href="#contacto"
          >
            Contacto
          </a>
        </nav>

        <div className="grid items-center gap-10 pt-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14 lg:pt-16">
          <FadeIn>
            {data.demoLabel ? (
              <p className="mb-4 inline-flex rounded-full border border-copper/25 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-copper shadow-[0_10px_24px_rgba(21,23,22,0.05)]">
                {data.demoLabel}
              </p>
            ) : null}
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
              {data.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-[2.9rem] leading-[3.12rem] text-ink sm:text-6xl sm:leading-[1.02] lg:text-[4.45rem]">
              {data.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/72 sm:text-lg sm:leading-8">
              {data.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="gap-2" href={data.primaryHref ?? "#contacto"}>
                <span className="grid size-6 place-items-center rounded-full bg-[#25d366] text-white">
                  <WhatsappIcon className="size-3.5" />
                </span>
                <span>{data.primaryCta}</span>
              </Button>
              <Button href={data.secondaryHref ?? "#precios"} variant="secondary">
                {data.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm font-medium text-ink/62">
              Demo conceptual: el WhatsApp se conecta al número real al publicar para un cliente.
            </p>

            <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
              {data.stats.map((stat) => (
                <div
                  className="rounded-2xl border border-ink/10 bg-white/65 px-3 py-3 shadow-[0_12px_34px_rgba(21,23,22,0.06)] backdrop-blur sm:p-4"
                  key={stat.label}
                >
                  <dt className="whitespace-nowrap text-sm font-bold leading-5 text-ink sm:text-xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 whitespace-nowrap text-[0.7rem] font-medium leading-4 text-ink/60 sm:mt-1 sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full border border-copper/25 bg-white/35 backdrop-blur sm:block" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white p-3 shadow-soft sm:rounded-[2rem] sm:p-4">
                <div className="relative min-h-[390px] overflow-hidden rounded-[1.25rem] bg-fog sm:min-h-[500px] sm:rounded-[1.55rem]">
                  <Image
                    alt="Dentista conversando con una paciente en un consultorio moderno"
                    className="object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 90vw"
                    src="/images/dental-nova-hero.png"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,23,22,0)_40%,rgba(21,23,22,0.68)_100%)]" />

                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-5 sm:right-5 sm:top-5">
                    <div className="rounded-full bg-white/88 px-3 py-2 text-xs font-bold text-ink shadow-[0_10px_28px_rgba(21,23,22,0.1)] backdrop-blur">
                      {data.statusLabel ?? "Turnos disponibles"}
                    </div>
                    <div className="rounded-full bg-mint/95 px-3 py-2 text-xs font-bold text-moss shadow-[0_10px_28px_rgba(21,23,22,0.08)]">
                      Demo
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:bottom-5 sm:left-5 sm:right-auto sm:w-[78%] sm:grid-cols-[1fr_0.78fr]">
                    <div className="rounded-3xl bg-white/92 p-4 text-ink shadow-[0_18px_50px_rgba(21,23,22,0.18)] backdrop-blur">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
                        Próximo turno
                      </p>
                      <p className="mt-2 text-lg font-bold leading-6">
                        Evaluación inicial
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-ink/68">
                        <span className="rounded-2xl bg-fog px-3 py-2">
                          Palermo
                        </span>
                        <span className="rounded-2xl bg-mint px-3 py-2 text-moss">
                          24 hs
                        </span>
                      </div>
                    </div>
                    <div className="hidden rounded-3xl bg-ink/84 p-4 text-bone shadow-[0_18px_50px_rgba(21,23,22,0.16)] backdrop-blur sm:block">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
                        Tratamientos
                      </p>
                      <div className="mt-3 space-y-2">
                      {(data.previewItems ?? [
                        "Implantes",
                        "Ortodoncia",
                        "Urgencias",
                      ]).map((item) => (
                          <div className="flex items-center gap-2 text-sm font-semibold" key={item}>
                            <span className="size-1.5 rounded-full bg-copper" />
                            {item}
                          </div>
                      ))}
                      </div>
                    </div>
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
