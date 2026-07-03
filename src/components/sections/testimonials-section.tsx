import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LandingPageData, SectionCopy, TestimonialItem } from "@/landing-system/types";

type TestimonialsSectionProps = {
  heading: SectionCopy;
  items: TestimonialItem[];
  theme?: LandingPageData["theme"];
};

export function TestimonialsSection({
  heading,
  items,
  theme = "studio",
}: TestimonialsSectionProps) {
  const isClinic = theme === "clinic";

  return (
    <section
      className={`py-20 sm:py-24 ${isClinic ? "bg-white" : "bg-fog"}`}
      id="testimonios"
    >
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              className={`border bg-white p-6 ${
                isClinic
                  ? "rounded-[1.2rem] border-[#d8ece6] shadow-[0_14px_34px_rgba(15,79,74,0.06)]"
                  : "rounded-3xl border-ink/10 shadow-soft"
              }`}
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

