import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LandingPageData, PricingPlan, SectionCopy } from "@/landing-system/types";

type PricingSectionProps = {
  plans: PricingPlan[];
  heading?: SectionCopy;
  ctaHref?: string;
  ctaLabel?: string;
  theme?: LandingPageData["theme"];
};

const defaultHeading: SectionCopy = {
  eyebrow: "Precios",
  title: "Paquetes simples para vender valor, no horas.",
  description:
    "Los precios son una base comercial inicial. Cada propuesta puede ajustarse segun urgencia, contenido, integraciones y mantenimiento.",
};

export function PricingSection({
  plans,
  heading = defaultHeading,
  ctaHref = "#contacto",
  ctaLabel = "Consultar",
  theme = "studio",
}: PricingSectionProps) {
  const isClinic = theme === "clinic";

  return (
    <section
      className={`py-20 sm:py-24 ${
        isClinic ? "bg-white" : "bg-[var(--landing-band)]"
      }`}
      id="precios"
    >
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn
              className={`border p-6 ${
                isClinic
                  ? plan.highlighted
                    ? "rounded-[1.3rem] border-[var(--landing-accent)] bg-[#eef8f5] text-[var(--landing-ink)] shadow-[0_20px_50px_rgba(15,79,74,0.1)]"
                    : "rounded-[1.3rem] border-[#d8ece6] bg-white text-[var(--landing-ink)] shadow-[0_12px_32px_rgba(15,79,74,0.05)]"
                  : plan.highlighted
                    ? "rounded-3xl border-[var(--landing-accent)] bg-[var(--landing-primary)] text-bone shadow-soft"
                    : "rounded-3xl border-ink/10 bg-[var(--landing-soft)] text-[var(--landing-ink)]"
              }`}
              delay={index * 0.05}
              key={plan.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p
                    className={`mt-2 text-sm ${
                      plan.highlighted && !isClinic ? "text-bone/68" : "text-ink/62"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                {plan.highlighted ? (
                  <span className="rounded-full bg-copper px-3 py-1 text-xs font-bold text-white">
                    Recomendado
                  </span>
                ) : null}
              </div>
              <p className="mt-8 text-4xl font-bold">{plan.price}</p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-3 text-sm" key={feature}>
                    <span
                      className={`mt-1 h-2 w-2 rounded-full ${
                        plan.highlighted
                          ? "bg-[var(--landing-accent)]"
                          : "bg-[var(--landing-primary)]"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted && !isClinic ? "text-bone/78" : "text-ink/72"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                href={ctaHref}
                variant={plan.highlighted && !isClinic ? "secondary" : "primary"}
              >
                {ctaLabel}
              </Button>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

