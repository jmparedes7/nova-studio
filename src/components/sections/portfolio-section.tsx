import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { PortfolioItem } from "@/templates/types";

type PortfolioSectionProps = {
  items: PortfolioItem[];
};

export function PortfolioSection({ items }: PortfolioSectionProps) {
  return (
    <section className="py-20 sm:py-24" id="portfolio">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Casos modelo pensados para vender por rubro."
          description="Cada template parte de una estrategia de conversion distinta: no necesita lo mismo una clinica, un gimnasio o un profesional independiente."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft"
              delay={index * 0.06}
              key={item.title}
            >
              <div className="h-48 bg-[linear-gradient(135deg,#151716_0%,#39483b_45%,#bd6f3c_100%)] p-5">
                <span className="rounded-full bg-bone px-3 py-1 text-xs font-semibold text-ink">
                  {item.niche}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/68">{item.result}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
