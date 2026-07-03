import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqItem, LandingPageData, SectionCopy } from "@/landing-system/types";

type FaqSectionProps = {
  items: FaqItem[];
  heading?: SectionCopy;
  theme?: LandingPageData["theme"];
};

const defaultHeading: SectionCopy = {
  eyebrow: "FAQ",
  title: "Preguntas que conviene responder antes de vender.",
  description:
    "Una landing premium tambiÃ©n reduce fricciÃ³n comercial antes de la primera conversaciÃ³n.",
};

export function FaqSection({
  items,
  heading = defaultHeading,
  theme = "studio",
}: FaqSectionProps) {
  const isClinic = theme === "clinic";

  return (
    <section
      className={`py-20 sm:py-24 ${isClinic ? "bg-[#f7fffc]" : ""}`}
      id="faq"
    >
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {items.map((item, index) => (
            <FadeIn
              className={`border bg-white p-6 ${
                isClinic
                  ? "rounded-[1.15rem] border-[#d8ece6]"
                  : "rounded-3xl border-ink/10"
              }`}
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

