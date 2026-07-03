import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LandingPageData, PortfolioItem, SectionCopy } from "@/landing-system/types";
import Image from "next/image";

type PortfolioSectionProps = {
  items: PortfolioItem[];
  heading?: SectionCopy;
  theme?: LandingPageData["theme"];
};

const clinicalVisuals = [
  {
    badge: "EvaluaciÃ³n",
    detail: "DiagnÃ³stico claro",
    position: "50% 42%",
  },
  {
    badge: "TecnologÃ­a",
    detail: "Plan digital",
    position: "58% 46%",
  },
  {
    badge: "Seguimiento",
    detail: "Control cercano",
    position: "42% 50%",
  },
];

const defaultHeading: SectionCopy = {
  eyebrow: "Demos",
  title: "Demos comerciales pensadas para contextos distintos.",
  description:
    "Cada landing parte de una estrategia distinta: no necesita lo mismo una clinica, un gimnasio o un profesional independiente.",
};

export function PortfolioSection({
  items,
  heading = defaultHeading,
  theme = "studio",
}: PortfolioSectionProps) {
  const isClinic = theme === "clinic";

  return (
    <section
      className={`py-20 sm:py-24 ${
        isClinic ? "bg-[#f3fbf8]" : "bg-[var(--landing-bg)]"
      }`}
      id="portfolio"
    >
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => {
            const visual = clinicalVisuals[index % clinicalVisuals.length];
            const imageSrc = item.imageSrc;

            return (
            <FadeIn
              className={`group overflow-hidden border bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--landing-accent)] ${
                isClinic
                  ? "rounded-[1.35rem] border-[#d8ece6] shadow-[0_18px_46px_rgba(15,79,74,0.08)] hover:shadow-[0_24px_58px_rgba(15,79,74,0.12)]"
                  : "rounded-3xl border-ink/10 shadow-[0_20px_58px_rgba(21,23,22,0.08)] hover:shadow-[0_24px_68px_rgba(21,23,22,0.12)]"
              }`}
              delay={index * 0.06}
              key={item.title}
            >
              <a
                aria-label={`Ver detalle: ${item.title}`}
                className="block h-full"
                href={item.href ?? "#contacto"}
              >
                <div className={`relative h-56 overflow-hidden ${isClinic ? "bg-[#e6f4ef]" : "bg-fog"}`}>
                  {imageSrc ? (
                    <Image
                      alt={item.imageAlt ?? ""}
                      aria-hidden={item.imageAlt ? undefined : "true"}
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      src={imageSrc}
                      style={{
                        objectPosition: item.visualPosition ?? visual.position,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[var(--landing-primary)] p-5">
                      <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-4">
                        <div className="h-2 w-20 rounded-full bg-[var(--landing-accent)]" />
                        <div className="mt-8 h-3 w-4/5 rounded-full bg-white/85" />
                        <div className="mt-3 h-3 w-3/5 rounded-full bg-white/28" />
                        <div className="mt-8 grid grid-cols-2 gap-3">
                          <div className="h-16 rounded-2xl bg-white/14" />
                          <div className="h-16 rounded-2xl bg-[var(--landing-accent)]/25" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={`absolute inset-0 ${
                      isClinic
                        ? "bg-[linear-gradient(180deg,rgba(18,48,46,0.02)_30%,rgba(18,48,46,0.56)_100%)]"
                        : "bg-[linear-gradient(180deg,rgba(21,23,22,0)_34%,rgba(21,23,22,0.62)_100%)]"
                    }`}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink shadow-[0_10px_24px_rgba(21,23,22,0.1)] backdrop-blur">
                    {item.niche}
                  </span>
                  <div
                    className={`absolute bottom-5 left-5 right-5 bg-white/92 p-4 text-ink shadow-[0_16px_42px_rgba(21,23,22,0.16)] backdrop-blur ${
                      isClinic ? "rounded-[1rem]" : "rounded-2xl"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--landing-accent)]">
                        {item.visualBadge ?? visual.badge}
                      </span>
                      <span className="rounded-full bg-[var(--landing-success)] px-2.5 py-1 text-[0.68rem] font-bold text-[var(--landing-primary)]">
                        {item.visualDetail ?? visual.detail}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ink/68">{item.result}</p>
                </div>
              </a>
            </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

