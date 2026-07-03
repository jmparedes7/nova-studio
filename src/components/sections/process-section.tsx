import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProcessStep, SectionCopy } from "@/templates/types";

type ProcessSectionProps = {
  steps: ProcessStep[];
  heading?: SectionCopy;
};

const defaultHeading: SectionCopy = {
  eyebrow: "Proceso",
  title: "Un sistema claro para entregar rapido sin perder criterio.",
  description:
    "Primero definimos la venta. Despues disenamos y desarrollamos la pagina.",
};

export function ProcessSection({
  steps,
  heading = defaultHeading,
}: ProcessSectionProps) {
  return (
    <section className="bg-[var(--landing-primary)] py-20 text-bone sm:py-24" id="proceso">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
          theme="dark"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn
              className="rounded-3xl border border-bone/12 bg-bone/6 p-6"
              delay={index * 0.05}
              key={step.step}
            >
              <span className="text-sm font-bold text-[var(--landing-accent)]">{step.step}</span>
              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-bone/68">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
