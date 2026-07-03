import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceItem } from "@/templates/types";

type ServicesSectionProps = {
  items: ServiceItem[];
};

export function ServicesSection({ items }: ServicesSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24" id="servicios">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo necesario para lanzar una presencia que convierte."
          description="La landing no es una pieza aislada: combina estrategia, diseno, desarrollo y captacion."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              className="rounded-3xl border border-ink/10 bg-fog p-6"
              delay={index * 0.04}
              key={item.title}
            >
              <h3 className="text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
