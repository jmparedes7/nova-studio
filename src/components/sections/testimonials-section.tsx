import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SectionCopy, TestimonialItem } from "@/templates/types";

type TestimonialsSectionProps = {
  heading: SectionCopy;
  items: TestimonialItem[];
};

export function TestimonialsSection({
  heading,
  items,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-fog py-20 sm:py-24" id="testimonios">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft"
              delay={index * 0.05}
              key={item.author}
            >
              <p className="text-lg leading-8 text-ink/78">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="font-bold text-ink">{item.author}</p>
                <p className="mt-1 text-sm text-ink/58">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
