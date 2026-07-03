import { FadeIn } from "@/components/animation/fade-in";
import { Container } from "@/components/ui/container";
import type { LandingPageData, LocationData } from "@/landing-system/types";

type LocationSectionProps = {
  data: LocationData;
  theme?: LandingPageData["theme"];
};

export function LocationSection({
  data,
  theme = "studio",
}: LocationSectionProps) {
  const isClinic = theme === "clinic";

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
            <div
              className={`mt-8 border p-6 ${
                isClinic
                  ? "rounded-[1.2rem] border-[#d8ece6] bg-[#f7fffc]"
                  : "rounded-3xl border-ink/10 bg-fog"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                DirecciÃ³n
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
            <div
              className={`flex min-h-[24rem] items-center justify-center border p-6 ${
                isClinic
                  ? "rounded-[1.4rem] border-[#d8ece6] bg-[#eaf7f3] shadow-[0_20px_52px_rgba(15,79,74,0.08)]"
                  : "rounded-[2rem] border-ink/10 bg-[linear-gradient(135deg,#edf0ee,#d8f1df)] shadow-soft"
              }`}
            >
              <div
                className={`w-full max-w-md bg-white p-6 text-center ${
                  isClinic ? "rounded-[1.15rem]" : "rounded-3xl"
                }`}
              >
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

