import { FadeIn } from "@/components/animation/fade-in";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";
import type {
  LandingPageData,
  LandingSectionConfig,
  ProblemItem,
  SectionCopy,
} from "@/landing-system/types";

type LandingComposerProps = {
  data: LandingPageData;
};

const agencyNavItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Demos", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

const defaultSections: LandingSectionConfig[] = [
  { type: "hero", variant: "standard" },
  { type: "services", variant: "standard" },
  { type: "portfolio", variant: "standard" },
  { type: "process", variant: "standard" },
  { type: "pricing", variant: "standard" },
  { type: "testimonials", variant: "standard" },
  { type: "faq", variant: "standard" },
  { type: "location", variant: "standard" },
  { type: "contact", variant: "standard" },
];

export function LandingComposer({ data }: LandingComposerProps) {
  const theme = data.theme ?? "studio";
  const sections = data.sections?.length ? data.sections : defaultSections;

  return (
    <main className={`landing-theme landing-theme-${theme}`}>
      {sections
        .filter((section) => section.enabled !== false)
        .map((section, index) => (
          <SectionRenderer
            data={data}
            index={index}
            key={`${section.type}-${section.variant ?? "standard"}-${index}`}
            section={section}
            theme={theme}
          />
        ))}

      {data.floatingCta ? (
        <WhatsappFloatingButton
          href={data.floatingCta.href}
          label={data.floatingCta.label}
        />
      ) : null}
    </main>
  );
}

function SectionRenderer({
  data,
  section,
  theme,
  index,
}: {
  data: LandingPageData;
  section: LandingSectionConfig;
  theme: NonNullable<LandingPageData["theme"]>;
  index: number;
}) {
  switch (section.type) {
    case "hero":
      return section.variant === "agency-bold" ? (
        <AgencyHeroSection data={data} />
      ) : (
        <HeroSection data={data.hero} theme={theme} />
      );

    case "problem":
      return data.problem?.length ? (
        <ProblemSection
          heading={data.sectionHeadings?.problem}
          items={data.problem}
        />
      ) : null;

    case "services":
      return data.services?.length ? (
        <ServicesSection
          heading={data.sectionHeadings?.services}
          items={data.services}
          theme={theme}
        />
      ) : null;

    case "portfolio":
      return data.portfolio?.length ? (
        <PortfolioSection
          heading={data.sectionHeadings?.portfolio}
          items={data.portfolio}
          theme={theme}
        />
      ) : null;

    case "trust":
      return data.portfolio?.length ? (
        <PortfolioSection
          heading={data.sectionHeadings?.trust ?? data.sectionHeadings?.portfolio}
          items={data.portfolio}
          theme={theme}
        />
      ) : null;

    case "process":
      return data.process?.length ? (
        <ProcessSection
          heading={data.sectionHeadings?.process}
          steps={data.process}
          theme={theme}
        />
      ) : null;

    case "pricing":
      return data.pricing?.length ? (
        <PricingSection
          ctaHref={data.pricingCta?.href}
          ctaLabel={data.pricingCta?.label}
          heading={data.sectionHeadings?.pricing}
          plans={data.pricing}
          theme={theme}
        />
      ) : null;

    case "testimonials":
      return data.testimonials?.length && data.sectionHeadings?.testimonials ? (
        <TestimonialsSection
          heading={data.sectionHeadings.testimonials}
          items={data.testimonials}
          theme={theme}
        />
      ) : null;

    case "faq":
      return data.faq?.length ? (
        <FaqSection
          heading={data.sectionHeadings?.faq}
          items={data.faq}
          theme={theme}
        />
      ) : null;

    case "location":
      return data.location ? (
        <LocationSection data={data.location} theme={theme} />
      ) : null;

    case "contact":
      return data.contact ? (
        <ContactSection data={data.contact} theme={theme} />
      ) : null;

    default:
      return (
        <div aria-hidden="true" className="hidden" data-section-index={index} />
      );
  }
}

function AgencyHeroSection({ data }: { data: LandingPageData }) {
  const cards = data.hero.visual?.systemCards ?? [];

  return (
    <section className="relative overflow-hidden border-b border-[#f6f1e8]/10 bg-[#101713] pb-16 pt-5 text-[#f6f1e8] sm:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(184,255,92,0.14),transparent_30rem),radial-gradient(circle_at_86%_4%,rgba(189,111,60,0.2),transparent_26rem)]" />
      <Container className="relative">
        <nav className="flex items-center justify-between py-4">
          <a className="text-lg font-black tracking-tight" href="#">
            {data.hero.businessName}
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[#f6f1e8]/68 lg:flex">
            {agencyNavItems.map((item) => (
              <a
                className="transition hover:text-[#b8ff5c]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="rounded-full border border-[#f6f1e8]/15 bg-[#f6f1e8]/8 px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#b8ff5c] hover:bg-[#b8ff5c] hover:text-[#101713]"
            href="#contacto"
          >
            Pedir propuesta
          </a>
        </nav>

        <div className="grid items-center gap-12 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:pt-20">
          <FadeIn>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b8ff5c] sm:text-sm">
              {data.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-[3.05rem] leading-[0.96] sm:text-6xl lg:text-[4.9rem]">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f6f1e8]/72">
              {data.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="!bg-[#b8ff5c] !text-[#101713] hover:!bg-[#d2ff8f]"
                href={data.hero.primaryHref ?? "#contacto"}
              >
                {data.hero.primaryCta}
              </Button>
              <Button href={data.hero.secondaryHref ?? "#demos"} variant="secondary">
                {data.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.hero.stats.map((stat) => (
                <span
                  className="rounded-full border border-[#f6f1e8]/10 bg-[#f6f1e8]/8 px-4 py-2 text-sm font-bold text-[#f6f1e8]/72"
                  key={stat.label}
                >
                  {stat.value} · {stat.label}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#f6f1e8]/12 bg-[#151f19] p-4 shadow-[0_34px_110px_rgba(0,0,0,0.32)]">
              <div className="rounded-[1.1rem] border border-[#f6f1e8]/10 bg-[#0d130f] p-4">
                <div className="flex items-center justify-between border-b border-[#f6f1e8]/10 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8ff5c]">
                      Sistema Nova
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#f6f1e8]/62">
                      Landings premium por rubro
                    </p>
                  </div>
                  <span className="rounded-full bg-[#b8ff5c] px-3 py-1 text-xs font-black text-[#101713]">
                    7 días
                  </span>
                </div>

                <div className="grid gap-4 py-5 md:grid-cols-[1fr_0.78fr]">
                  <div className="rounded-[1rem] bg-[#f6f1e8] p-4 text-[#111312]">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#101713] px-3 py-1 text-xs font-bold text-[#f6f1e8]">
                        Demo dental
                      </span>
                      <span className="text-xs font-black text-[#bd6f3c]">
                        WhatsApp CTA
                      </span>
                    </div>
                    <div className="mt-8 h-3 w-5/6 rounded-full bg-[#101713]" />
                    <div className="mt-3 h-3 w-2/3 rounded-full bg-[#101713]/20" />
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-[0.85rem] bg-[#dfe9e3]" />
                      <div className="h-24 rounded-[0.85rem] bg-[#b8ff5c]/30" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {cards.slice(0, 3).map((card) => (
                      <div
                        className="rounded-[1rem] border border-[#f6f1e8]/10 bg-[#f6f1e8]/7 p-4"
                        key={card.title}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#b8ff5c]">
                            {card.eyebrow}
                          </span>
                          <span className="rounded-full bg-[#f6f1e8]/10 px-2 py-1 text-[0.68rem] font-bold text-[#f6f1e8]/70">
                            {card.meta}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-black text-[#f6f1e8]">
                          {card.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#f6f1e8]/58">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ProblemSection({
  heading,
  items,
}: {
  heading?: SectionCopy;
  items: ProblemItem[];
}) {
  return (
    <section className="bg-[#f6f1e8] py-16 text-[#111312] sm:py-24" id="problema">
      <Container>
        {heading ? (
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />
        ) : null}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn
              className="rounded-[1.25rem] border border-[#111312]/10 bg-white p-6 shadow-[0_18px_52px_rgba(17,19,18,0.08)] sm:p-8"
              delay={index * 0.05}
              key={item.label}
            >
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#bd6f3c]">
                {item.label}
              </p>
              <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-[#111312]/68">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
