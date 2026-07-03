import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { PortfolioItem, SectionCopy } from "@/templates/types";
import Image from "next/image";

type PortfolioSectionProps = {
  items: PortfolioItem[];
  heading?: SectionCopy;
};

const clinicalVisuals = [
  {
    badge: "Evaluación",
    detail: "Diagnóstico claro",
    position: "50% 42%",
  },
  {
    badge: "Tecnología",
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
  eyebrow: "Portfolio",
  title: "Casos modelo pensados para vender por rubro.",
  description:
    "Cada template parte de una estrategia de conversion distinta: no necesita lo mismo una clinica, un gimnasio o un profesional independiente.",
};

export function PortfolioSection({
  items,
  heading = defaultHeading,
}: PortfolioSectionProps) {
  return (
    <section className="py-20 sm:py-24" id="portfolio">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => {
            const visual = clinicalVisuals[index % clinicalVisuals.length];

            return (
            <FadeIn
              className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_20px_58px_rgba(21,23,22,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-copper/45 hover:shadow-[0_24px_68px_rgba(21,23,22,0.12)]"
              delay={index * 0.06}
              key={item.title}
            >
              <a
                aria-label={`Ver detalle: ${item.title}`}
                className="block h-full"
                href={item.href ?? "#contacto"}
              >
                <div className="relative h-56 overflow-hidden bg-fog">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    src="/images/dental-nova-hero.png"
                    style={{ objectPosition: visual.position }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,23,22,0)_34%,rgba(21,23,22,0.62)_100%)]" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink shadow-[0_10px_24px_rgba(21,23,22,0.1)] backdrop-blur">
                    {item.niche}
                  </span>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-4 text-ink shadow-[0_16px_42px_rgba(21,23,22,0.16)] backdrop-blur">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-copper">
                        {visual.badge}
                      </span>
                      <span className="rounded-full bg-mint px-2.5 py-1 text-[0.68rem] font-bold text-moss">
                        {visual.detail}
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
