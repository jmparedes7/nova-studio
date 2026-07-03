import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import type { LocationData } from "@/templates/types";

type LocationSectionProps = {
  data: LocationData;
};

export function LocationSection({ data }: LocationSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24" id="ubicacion">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
              {data.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-5xl">
              {data.title}
            </h2>
            <p className="mt-5 leading-8 text-ink/70">{data.description}</p>
            <div className="mt-8 rounded-3xl border border-ink/10 bg-fog p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                Dirección
              </p>
              <p className="mt-3 text-lg font-bold text-ink">{data.address}</p>
              <p className="mt-1 text-ink/64">{data.neighborhood}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                  Horarios
                </p>
                <ul className="mt-3 space-y-2 text-ink/72">
                  {data.hours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex min-h-[24rem] items-center justify-center rounded-[2rem] border border-ink/10 bg-[linear-gradient(135deg,#edf0ee,#d8f1df)] p-6 shadow-soft">
              <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
                  Google Maps
                </p>
                <p className="mt-4 font-serif text-3xl text-ink">
                  {data.mapLabel}
                </p>
                <p className="mt-4 text-sm leading-6 text-ink/64">
                  A pocas cuadras de estaciones de subte, avenidas principales
                  y paradas de colectivo.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
