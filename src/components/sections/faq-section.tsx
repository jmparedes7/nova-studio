import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqItem, SectionCopy } from "@/templates/types";

type FaqSectionProps = {
  items: FaqItem[];
  heading?: SectionCopy;
};

const defaultHeading: SectionCopy = {
  eyebrow: "FAQ",
  title: "Preguntas que conviene responder antes de vender.",
  description:
    "Una landing premium tambien reduce friccion comercial antes de la primera conversacion.",
};

export function FaqSection({ items, heading = defaultHeading }: FaqSectionProps) {
  return (
    <section className="py-20 sm:py-24" id="faq">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {items.map((item, index) => (
            <FadeIn
              className="rounded-3xl border border-ink/10 bg-white p-6"
              delay={index * 0.04}
              key={item.question}
            >
              <h3 className="text-lg font-bold text-ink">{item.question}</h3>
              <p className="mt-3 leading-7 text-ink/68">{item.answer}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
