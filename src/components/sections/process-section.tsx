import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LandingPageData, ProcessStep, SectionCopy } from "@/templates/types";

type ProcessSectionProps = {
  steps: ProcessStep[];
  heading?: SectionCopy;
  theme?: LandingPageData["theme"];
};

const defaultHeading: SectionCopy = {
  eyebrow: "Proceso",
  title: "Un sistema claro para entregar rápido sin perder criterio.",
  description:
    "Primero definimos la venta. Después diseñamos y desarrollamos la página.",
};

export function ProcessSection({
  steps,
  heading = defaultHeading,
  theme = "studio",
}: ProcessSectionProps) {
  const isClinic = theme === "clinic";

  return (
    <section
      className={`py-20 sm:py-24 ${
        isClinic
          ? "bg-[#eaf7f3] text-[var(--landing-ink)]"
          : "bg-[var(--landing-primary)] text-bone"
      }`}
      id="proceso"
    >
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
          theme={isClinic ? "light" : "dark"}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn
              className={`border p-6 ${
                isClinic
                  ? "rounded-[1.2rem] border-[#d1e9e1] bg-white shadow-[0_14px_34px_rgba(15,79,74,0.06)]"
                  : "rounded-3xl border-bone/12 bg-bone/6"
              }`}
              delay={index * 0.05}
              key={step.step}
            >
              <span className="text-sm font-bold text-[var(--landing-accent)]">{step.step}</span>
              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
              <p
                className={`mt-3 leading-7 ${
                  isClinic ? "text-[var(--landing-muted)]" : "text-bone/68"
                }`}
              >
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
