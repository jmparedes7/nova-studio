import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SectionCopy, ServiceItem } from "@/templates/types";

type ServicesSectionProps = {
  items: ServiceItem[];
  heading?: SectionCopy;
};

const defaultHeading: SectionCopy = {
  eyebrow: "Servicios",
  title: "Todo lo necesario para lanzar una presencia que convierte.",
  description:
    "La landing no es una pieza aislada: combina estrategia, diseno, desarrollo y captacion.",
};

export function ServicesSection({
  items,
  heading = defaultHeading,
}: ServicesSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24" id="servicios">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const isFeatured = item.title.toLowerCase().includes("implantes");

            return (
            <FadeIn
              className={`group rounded-3xl border border-ink/10 bg-fog p-6 transition duration-200 hover:-translate-y-0.5 hover:border-copper/45 hover:bg-white hover:shadow-[0_18px_44px_rgba(21,23,22,0.08)] ${
                isFeatured ? "md:col-span-2 lg:col-span-2 lg:p-8" : ""
              }`}
              delay={index * 0.04}
              key={item.title}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="grid size-10 place-items-center rounded-2xl border border-ink/10 bg-white text-sm font-bold text-copper transition group-hover:border-copper/40 group-hover:bg-bone">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {isFeatured ? (
                  <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-moss">
                    Tratamiento destacado
                  </span>
                ) : null}
              </div>
              <h3 className={`${isFeatured ? "max-w-xl text-2xl" : "text-xl"} font-bold leading-tight text-ink`}>
                {item.title}
              </h3>
              <p className={`${isFeatured ? "max-w-2xl" : ""} mt-3 leading-7 text-ink/68`}>
                {item.description}
              </p>
            </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
