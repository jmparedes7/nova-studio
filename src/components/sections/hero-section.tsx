import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { HeroData, LandingPageData } from "@/templates/types";
import Image from "next/image";

type HeroSectionProps = {
  data: HeroData;
  theme?: LandingPageData["theme"];
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

export function HeroSection({ data, theme = "studio" }: HeroSectionProps) {
  const visual = data.visual;
  const isSystemVisual = visual?.mode === "system";
  const isClinic = theme === "clinic";
  const navItems = isClinic
    ? [
        { label: "Tratamientos", href: "#servicios" },
        { label: "Proceso", href: "#proceso" },
        { label: "Testimonios", href: "#testimonios" },
        { label: "Ubicación", href: "#ubicacion" },
      ]
    : [
        { label: "Servicios", href: "#servicios" },
        { label: "Proceso", href: "#proceso" },
        { label: "Contacto", href: "#contacto" },
      ];

  return (
    <section
      className={`relative overflow-hidden pb-18 pt-6 sm:pb-24 lg:pb-28 ${
        isSystemVisual
          ? "bg-[#101713]"
          : isClinic
            ? "bg-[linear-gradient(180deg,#f7fffc_0%,#eef8f5_58%,#ffffff_100%)]"
            : "bg-[var(--landing-bg)]"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <a
            className={`text-lg font-bold tracking-tight ${
              isSystemVisual ? "text-[#F6F1E8]" : "text-[var(--landing-ink)]"
            }`}
            href="#"
          >
            {data.businessName}
          </a>
          <div
            className={`hidden items-center gap-5 text-sm font-semibold lg:flex ${
              isSystemVisual ? "text-[#F6F1E8]/68" : "text-[var(--landing-muted)]"
            }`}
          >
            {navItems.map((item) => (
              <a
                className="transition hover:text-[var(--landing-accent)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition hover:border-[var(--landing-accent)] ${
              isSystemVisual
                ? "border-[#F6F1E8]/18 text-[#F6F1E8]"
                : isClinic
                  ? "border-[#cfe5df] bg-white/80 text-[#12302e] shadow-[0_10px_28px_rgba(15,79,74,0.06)]"
                  : "border-ink/15 text-[var(--landing-ink)]"
            }`}
            href="#contacto"
          >
            Contacto
          </a>
        </nav>

        <div className="grid items-center gap-10 pt-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14 lg:pt-16">
          <FadeIn>
            {data.demoLabel ? (
              <p
                className={`mb-4 inline-flex rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] shadow-[0_10px_24px_rgba(21,23,22,0.05)] ${
                  isSystemVisual
                    ? "border-[#B8FF5C]/25 bg-[#B8FF5C]/10 text-[#B8FF5C]"
                    : isClinic
                      ? "border-[#d7ece6] bg-white text-[#0f4f4a]"
                    : "border-[var(--landing-accent-soft)] bg-white/70 text-[var(--landing-accent)]"
                }`}
              >
                {data.demoLabel}
              </p>
            ) : null}
            <p
              className={`text-sm font-semibold uppercase tracking-[0.24em] ${
                isSystemVisual
                  ? "text-[#B8FF5C]"
                  : isClinic
                    ? "text-[#b88955]"
                    : "text-[var(--landing-accent)]"
              }`}
            >
              {data.eyebrow}
            </p>
            <h1
              className={`mt-4 max-w-4xl font-serif ${
                isClinic
                  ? "text-[2.65rem] leading-[2.95rem] sm:text-[3.8rem] sm:leading-[1.04] lg:text-[4.05rem]"
                  : "text-[2.9rem] leading-[3.12rem] sm:text-6xl sm:leading-[1.02] lg:text-[4.45rem]"
              } ${
                isSystemVisual ? "text-[#F6F1E8]" : "text-[var(--landing-ink)]"
              }`}
            >
              {data.title}
            </h1>
            <p
              className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
                isSystemVisual ? "text-[#F6F1E8]/70" : "text-[var(--landing-muted)]"
              }`}
            >
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
            {data.microcopy ? (
              <p
                className={`mt-3 text-sm font-medium ${
                  isSystemVisual
                    ? "text-[#F6F1E8]/58"
                    : isClinic
                      ? "text-[#52706b]"
                      : "text-ink/62"
                }`}
              >
                {data.microcopy}
              </p>
            ) : null}

            <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
              {data.stats.map((stat) => (
                <div
                  className={`border bg-white/72 px-3 py-3 backdrop-blur sm:p-4 ${
                    isClinic
                      ? "rounded-[1.05rem] border-[#d7ece6] shadow-[0_10px_28px_rgba(15,79,74,0.06)]"
                      : "rounded-2xl border-ink/10 shadow-[0_12px_34px_rgba(21,23,22,0.06)]"
                  }`}
                  key={stat.label}
                >
                  <dt className="whitespace-nowrap text-sm font-bold leading-5 text-[var(--landing-ink)] sm:text-xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 whitespace-nowrap text-[0.7rem] font-medium leading-4 text-[var(--landing-muted)] sm:mt-1 sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="relative mx-auto max-w-xl">
              {isSystemVisual ? (
                <div className="relative overflow-hidden rounded-[1.75rem] border border-[#F6F1E8]/12 bg-[#18221d] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:rounded-[2rem] sm:p-4">
                  <div className="rounded-[1.35rem] border border-[#F6F1E8]/10 bg-[#0f1612] p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-[#F6F1E8]/10 pb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8FF5C]">
                          Sistema Nova
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#F6F1E8]/72">
                          Landings por rubro listas para vender
                        </p>
                      </div>
                      <span className="rounded-full bg-[#B8FF5C] px-3 py-1 text-xs font-black text-[#101713]">
                        7 días
                      </span>
                    </div>
                    <div className="grid gap-3 py-4 sm:grid-cols-[1fr_0.82fr]">
                      <div className="rounded-3xl bg-[#F6F1E8] p-4 text-[#111312]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full bg-[#101713] px-3 py-1 text-xs font-bold text-[#F6F1E8]">
                            Odontología
                          </span>
                          <span className="text-xs font-bold text-[#BD6F3C]">
                            WhatsApp CTA
                          </span>
                        </div>
                        <div className="mt-8 h-3 w-4/5 rounded-full bg-[#101713]" />
                        <div className="mt-3 h-3 w-2/3 rounded-full bg-[#101713]/24" />
                        <div className="mt-6 grid grid-cols-2 gap-2">
                          <div className="h-20 rounded-2xl bg-[#dfe9e3]" />
                          <div className="h-20 rounded-2xl bg-[#B8FF5C]/28" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        {(visual?.systemCards ?? []).slice(0, 3).map((card) => (
                          <div
                            className="rounded-2xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/7 p-4"
                            key={card.title}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#B8FF5C]">
                                {card.eyebrow}
                              </span>
                              <span className="rounded-full bg-[#F6F1E8]/10 px-2 py-1 text-[0.68rem] font-bold text-[#F6F1E8]/70">
                                {card.meta}
                              </span>
                            </div>
                            <p className="mt-2 text-sm font-bold text-[#F6F1E8]">
                              {card.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-[#F6F1E8]/58">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-2 border-t border-[#F6F1E8]/10 pt-4 text-xs font-semibold text-[#F6F1E8]/68 sm:grid-cols-3">
                      {(data.previewItems ?? []).map((item) => (
                        <span
                          className="rounded-2xl bg-[#F6F1E8]/8 px-3 py-2"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {isClinic ? (
                    <div className="absolute -right-5 top-10 hidden rounded-full border border-[#d7ece6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0f4f4a] shadow-[0_12px_34px_rgba(15,79,74,0.08)] sm:block">
                      Atención coordinada
                    </div>
                  ) : (
                    <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full border border-[var(--landing-accent-soft)] bg-white/35 backdrop-blur sm:block" />
                  )}
                  <div
                    className={`relative overflow-hidden border bg-white p-3 sm:p-4 ${
                      isClinic
                        ? "rounded-[1.25rem] border-[#d7ece6] shadow-[0_26px_70px_rgba(15,79,74,0.12)] sm:rounded-[1.55rem]"
                        : "rounded-[1.6rem] border-white/70 shadow-soft sm:rounded-[2rem]"
                    }`}
                  >
                <div
                  className={`relative min-h-[390px] overflow-hidden bg-fog sm:min-h-[500px] ${
                    isClinic
                      ? "rounded-[0.95rem] sm:rounded-[1.15rem]"
                      : "rounded-[1.25rem] sm:rounded-[1.55rem]"
                  }`}
                >
                  {visual?.imageSrc ? (
                    <>
                      <Image
                        alt={visual.imageAlt ?? ""}
                        className="object-cover"
                        fill
                        priority
                        sizes="(min-width: 1024px) 46vw, 90vw"
                        src={visual.imageSrc}
                      />
                      <div
                        className={`absolute inset-0 ${
                          isClinic
                            ? "bg-[linear-gradient(180deg,rgba(18,48,46,0.02)_36%,rgba(18,48,46,0.58)_100%)]"
                            : "bg-[linear-gradient(180deg,rgba(21,23,22,0)_40%,rgba(21,23,22,0.68)_100%)]"
                        }`}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-bone p-4">
                      <div className="h-full rounded-[1rem] bg-white p-4 shadow-soft">
                        <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                          <div>
                            <div className="h-3 w-24 rounded-full bg-moss" />
                            <div className="mt-2 h-2 w-36 rounded-full bg-ink/12" />
                          </div>
                        <div className="rounded-full bg-[var(--landing-success)] px-3 py-1 text-xs font-semibold text-[var(--landing-primary)]">
                            {data.statusLabel ?? "Online"}
                          </div>
                        </div>
                        <div className="grid gap-3 py-5 sm:grid-cols-2">
                          <div className="rounded-2xl bg-fog p-4">
                            <div className="h-28 rounded-xl bg-[linear-gradient(135deg,#39483b,#d8f1df)]" />
                            <div className="mt-4 h-3 w-3/4 rounded-full bg-ink/16" />
                            <div className="mt-2 h-2 w-1/2 rounded-full bg-ink/10" />
                          </div>
                          <div className="space-y-3">
                            {(data.previewItems ?? [
                              "Hero",
                              "Servicios",
                              "Testimonios",
                            ]).map((item) => (
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
                          <p className="text-sm font-semibold">
                            {data.notificationTitle ?? "Consulta recibida"}
                          </p>
                          <p className="mt-1 text-xs text-bone/70">
                            {data.notificationText ?? "Nuevo mensaje"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {visual?.imageSrc ? (
                    <>
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-5 sm:right-5 sm:top-5">
                        <div className="rounded-full bg-white/88 px-3 py-2 text-xs font-bold text-ink shadow-[0_10px_28px_rgba(21,23,22,0.1)] backdrop-blur">
                          {data.statusLabel ?? "Disponible"}
                        </div>
                        <div className="rounded-full bg-[var(--landing-success)] px-3 py-2 text-xs font-bold text-[var(--landing-primary)] shadow-[0_10px_28px_rgba(21,23,22,0.08)]">
                          {visual.trustBadge ?? "Demo"}
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:bottom-5 sm:left-5 sm:right-auto sm:w-[78%] sm:grid-cols-[1fr_0.78fr]">
                        <div className="rounded-3xl bg-white/92 p-4 text-ink shadow-[0_18px_50px_rgba(21,23,22,0.18)] backdrop-blur">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--landing-accent)]">
                            {visual.appointmentEyebrow ?? "Próximo paso"}
                          </p>
                          <p className="mt-2 text-lg font-bold leading-6">
                            {visual.appointmentTitle ?? data.notificationTitle}
                          </p>
                          {visual.appointmentMeta?.length ? (
                            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-ink/68">
                              {visual.appointmentMeta.slice(0, 2).map((item, index) => (
                                <span
                                  className={`rounded-2xl px-3 py-2 ${
                                    index === 1
                                      ? "bg-[var(--landing-success)] text-[var(--landing-primary)]"
                                      : "bg-[var(--landing-soft)]"
                                  }`}
                                  key={item}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <div className="hidden rounded-3xl bg-ink/84 p-4 text-bone shadow-[0_18px_50px_rgba(21,23,22,0.16)] backdrop-blur sm:block">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--landing-accent)]">
                            {visual.detailEyebrow ?? "Detalle"}
                          </p>
                          <div className="mt-3 space-y-2">
                            {(data.previewItems ?? []).map((item) => (
                              <div
                                className="flex items-center gap-2 text-sm font-semibold"
                                key={item}
                              >
                                <span className="size-1.5 rounded-full bg-[var(--landing-accent)]" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
