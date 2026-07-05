import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Container } from "@/components/ui/container";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";
import type { ReactNode } from "react";
import type {
  LandingPageData,
  LandingSectionConfig,
  PortfolioItem,
  PricingPlan,
  ProblemItem,
  ProcessStep,
  SectionCopy,
  ServiceItem,
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
  const isStudio = theme === "studio";

  switch (section.type) {
    case "hero":
      return isStudio && section.variant === "agency-bold" ? (
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
      return isStudio && section.variant === "conversion-grid" ? (
        data.services?.length ? (
          <AgencyServicesSection
            heading={data.sectionHeadings?.services}
            items={data.services}
          />
        ) : null
      ) : data.services?.length ? (
        <ServicesSection
          heading={data.sectionHeadings?.services}
          items={data.services}
          theme={theme}
        />
      ) : null;

    case "portfolio":
      return isStudio && section.variant === "demo-showcase" ? (
        data.portfolio?.length ? (
          <AgencyDemosSection
            heading={data.sectionHeadings?.portfolio}
            items={data.portfolio}
          />
        ) : null
      ) : data.portfolio?.length ? (
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
      return isStudio && section.variant === "timeline" ? (
        data.process?.length ? (
          <AgencyProcessSection
            heading={data.sectionHeadings?.process}
            steps={data.process}
          />
        ) : null
      ) : data.process?.length ? (
        <ProcessSection
          heading={data.sectionHeadings?.process}
          steps={data.process}
          theme={theme}
        />
      ) : null;

    case "pricing":
      return isStudio && section.variant === "offer-cards" ? (
        data.pricing?.length ? (
          <AgencyPricingSection
            ctaHref={data.pricingCta?.href}
            ctaLabel={data.pricingCta?.label}
            heading={data.sectionHeadings?.pricing}
            plans={data.pricing}
          />
        ) : null
      ) : data.pricing?.length ? (
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
      return isStudio && section.variant === "lead-form" ? (
        data.contact ? (
          <AgencyContactSection data={data} />
        ) : null
      ) : data.contact ? (
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
    <section className="overflow-hidden bg-[#f6f1e8] text-[#111312]">
      <Container>
        <nav className="grid border-x-2 border-t-2 border-[#111312] bg-[#f6f1e8] sm:grid-cols-[auto_1fr_auto]">
          <a
            className="border-b-2 border-[#111312] px-4 py-4 text-lg font-black tracking-tight sm:border-b-0 sm:border-r-2"
            href="#"
          >
            {data.hero.businessName}
          </a>
          <div className="hidden items-stretch justify-end text-sm font-black uppercase tracking-[0.08em] lg:flex">
            {agencyNavItems.map((item) => (
              <a
                className="flex items-center border-r-2 border-[#111312] px-4 transition hover:bg-[#111312] hover:text-[#f6f1e8]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="border-b-2 border-[#111312] bg-[#b8ff5c] px-4 py-4 text-center text-sm font-black uppercase tracking-[0.08em] transition hover:translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#111312] hover:text-[#b8ff5c] sm:border-b-0"
            href="#contacto"
          >
            Pedir propuesta
          </a>
        </nav>

        <div className="grid min-w-0 border-2 border-[#111312] bg-[#f6f1e8] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="min-w-0 border-b-2 border-[#111312] p-5 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10">
            <p className="mb-5 inline-block border-2 border-[#111312] bg-[#e6f8d6] px-3 py-2 text-xs font-black uppercase tracking-[0.18em]">
              {data.hero.eyebrow}
            </p>
            <h1 className="w-72 max-w-full break-words font-serif text-5xl font-black leading-[0.96] tracking-normal sm:w-auto sm:max-w-full lg:max-w-5xl lg:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 w-72 max-w-full text-base font-semibold leading-7 sm:w-auto sm:max-w-2xl sm:text-xl sm:leading-8">
              {data.hero.description}
            </p>
            <div className="mt-8 grid w-72 max-w-full gap-3 sm:w-auto sm:max-w-none sm:grid-cols-[auto_auto] sm:justify-start">
              <EditorialButton href={data.hero.primaryHref ?? "#contacto"}>
                {data.hero.primaryCta}
              </EditorialButton>
              <EditorialButton
                href={data.hero.secondaryHref ?? "#portfolio"}
                variant="secondary"
              >
                {data.hero.secondaryCta}
              </EditorialButton>
            </div>
          </div>

          <div className="min-w-0">
            <div className="h-full overflow-hidden bg-[#edf0ee] p-4 sm:p-6 lg:p-8">
              <div className="grid h-full min-h-[29rem] min-w-0 grid-rows-[auto_1fr_auto] border-2 border-[#111312] bg-[#f6f1e8]">
                <div className="flex items-center justify-between border-b-2 border-[#111312] bg-[#24352b] px-4 py-3 text-[#f6f1e8]">
                  <p className="text-xs font-black uppercase tracking-[0.2em]">
                    Sistema Nova
                  </p>
                  <span className="hidden border-2 border-[#111312] bg-[#b8ff5c] px-2 py-1 text-xs font-black text-[#111312] sm:inline-block">
                    7 dias
                  </span>
                </div>

                <div className="grid min-w-0 gap-0 md:grid-cols-[1.08fr_0.92fr]">
                  <div className="border-b-2 border-[#111312] bg-[#f6f1e8] p-4 md:border-b-0 md:border-r-2">
                    <div className="mb-8 inline-block border-2 border-[#111312] bg-[#b8ff5c] px-3 py-1 text-xs font-black uppercase">
                      Demo dental
                    </div>
                    <div className="h-5 w-5/6 bg-[#111312]" />
                    <div className="mt-3 h-5 w-2/3 bg-[#111312]" />
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="h-28 border-2 border-[#111312] bg-[#edf0ee]" />
                      <div className="h-28 border-2 border-[#111312] bg-[#e6f8d6]" />
                    </div>
                  </div>

                  <div className="grid">
                    {cards.slice(0, 3).map((card) => (
                      <div
                        className="border-b-2 border-[#111312] bg-[#f6f1e8] p-4 last:border-b-0"
                        key={card.title}
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="text-[0.68rem] font-black uppercase tracking-[0.16em]">
                            {card.eyebrow}
                          </span>
                          <span className="border border-[#111312] bg-[#edf0ee] px-2 py-1 text-[0.68rem] font-black">
                            {card.meta}
                          </span>
                        </div>
                        <p className="text-sm font-black">{card.title}</p>
                        <p className="mt-1 text-xs font-semibold leading-5 text-[#111312]/70">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid border-t-2 border-[#111312] sm:grid-cols-3">
                  {(data.hero.previewItems ?? []).map((item) => (
                    <span
                      className="border-b-2 border-[#111312] px-4 py-3 text-xs font-black uppercase last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-x-2 border-b-2 border-[#111312] bg-[#f6f1e8] sm:grid-cols-4">
          {data.hero.stats.map((stat) => (
            <div
              className="border-b-2 border-[#111312] px-4 py-4 last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0"
              key={stat.label}
            >
              <p className="text-xl font-black">{stat.value}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.12em]">
                {stat.label}
              </p>
            </div>
          ))}
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
    <section className="bg-[#f6f1e8] py-12 text-[#111312] sm:py-16" id="problema">
      <Container>
        <div className="grid border-2 border-[#111312] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b-2 border-[#111312] bg-[#24352b] p-5 text-[#f6f1e8] sm:p-8 lg:border-b-0 lg:border-r-2">
            <p className="mb-5 inline-block border-2 border-[#111312] bg-[#b8ff5c] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#111312]">
              {heading?.eyebrow ?? "Manifiesto"}
            </p>
            <h2 className="font-serif text-4xl font-black leading-tight sm:text-6xl">
              {heading?.title ??
                "No hacemos webs genericas. Creamos sistemas visuales vendibles."}
            </h2>
            {heading?.description ? (
              <p className="mt-5 text-lg font-semibold leading-8 text-[#f6f1e8]/78">
                {heading.description}
              </p>
            ) : null}
          </div>

          <div className="grid">
            {items.map((item) => (
              <div
                className="border-b-2 border-[#111312] bg-[#f6f1e8] p-5 last:border-b-0 sm:p-8"
                key={item.label}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  {item.label}
                </p>
                <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#111312]/72">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AgencyServicesSection({
  heading,
  items,
}: {
  heading?: SectionCopy;
  items: ServiceItem[];
}) {
  return (
    <section className="bg-[#f6f1e8] py-12 text-[#111312] sm:py-16" id="servicios">
      <Container>
        <EditorialIntro
          eyebrow={heading?.eyebrow ?? "Sistema"}
          title={heading?.title ?? "Servicios Nova Studio"}
          text={heading?.description}
        />
        <div className="grid border-x-2 border-t-2 border-[#111312] md:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 4).map((item, index) => (
            <div
              className="border-b-2 border-[#111312] bg-[#edf0ee] p-5 transition hover:-translate-y-0.5 hover:bg-[#b8ff5c] md:border-r-2 md:even:border-r-0 lg:even:border-r-2 lg:last:border-r-0"
              key={item.title}
            >
              <p className="text-5xl font-black">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-10 text-2xl font-black leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 font-semibold leading-7 text-[#111312]/72">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgencyDemosSection({
  heading,
  items,
}: {
  heading?: SectionCopy;
  items: PortfolioItem[];
}) {
  return (
    <section className="bg-[#edf0ee] py-12 text-[#111312] sm:py-16" id="portfolio">
      <Container>
        <EditorialIntro
          eyebrow={heading?.eyebrow ?? "Demos"}
          title={heading?.title ?? "Demos por rubro"}
          text={heading?.description}
        />
        <div className="grid border-x-2 border-t-2 border-[#111312] md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              className="group border-b-2 border-[#111312] bg-[#f6f1e8] transition hover:-translate-y-0.5 hover:bg-[#e6f8d6] md:border-r-2 md:even:border-r-0 xl:even:border-r-2 xl:last:border-r-0"
              key={item.title}
            >
              <a className="block h-full p-5" href={item.href ?? "#contacto"}>
                <p className="inline-block border-2 border-[#111312] bg-[#b8ff5c] px-2 py-1 text-xs font-black uppercase tracking-[0.14em]">
                  {item.visualBadge ?? item.niche}
                </p>
                <h3 className="mt-14 text-3xl font-black leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 font-semibold leading-7 text-[#111312]/70">
                  {item.result}
                </p>
                <span className="mt-8 inline-block border-2 border-[#111312] px-3 py-2 text-sm font-black uppercase transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#111312] group-hover:text-[#f6f1e8]">
                  {item.visualDetail ?? "Ver demo"}
                </span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgencyProcessSection({
  heading,
  steps,
}: {
  heading?: SectionCopy;
  steps: ProcessStep[];
}) {
  return (
    <section className="bg-[#f6f1e8] py-12 text-[#111312] sm:py-16" id="proceso">
      <Container>
        <EditorialIntro
          eyebrow={heading?.eyebrow ?? "Proceso"}
          title={heading?.title ?? "Proceso de trabajo"}
          text={heading?.description}
        />
        <div className="border-x-2 border-t-2 border-[#111312]">
          {steps.map((step) => (
            <div
              className="grid border-b-2 border-[#111312] bg-[#f6f1e8] transition hover:bg-[#edf0ee] md:grid-cols-[11rem_1fr_1.25fr]"
              key={step.step}
            >
              <div className="border-b-2 border-[#111312] p-4 text-4xl font-black md:border-b-0 md:border-r-2">
                {step.step}
              </div>
              <h3 className="border-b-2 border-[#111312] p-4 text-2xl font-black md:border-b-0 md:border-r-2">
                {step.title}
              </h3>
              <p className="p-4 font-semibold leading-7 text-[#111312]/72">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgencyPricingSection({
  heading,
  plans,
  ctaHref = "#contacto",
  ctaLabel = "Pedir propuesta",
}: {
  heading?: SectionCopy;
  plans: PricingPlan[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-[#edf0ee] py-12 text-[#111312] sm:py-16" id="precios">
      <Container>
        <EditorialIntro
          eyebrow={heading?.eyebrow ?? "Paquetes"}
          title={heading?.title ?? "Paquetes Nova"}
          text={heading?.description}
        />
        <div className="border-x-2 border-t-2 border-[#111312]">
          {plans.map((plan) => (
            <div
              className={`grid border-b-2 border-[#111312] md:grid-cols-[0.8fr_0.7fr_1.2fr_0.55fr] ${
                plan.highlighted ? "bg-[#b8ff5c]" : "bg-[#f6f1e8]"
              }`}
              key={plan.name}
            >
              <div className="border-b-2 border-[#111312] p-4 md:border-b-0 md:border-r-2">
                <p className="text-xs font-black uppercase tracking-[0.14em]">
                  Plan
                </p>
                <h3 className="mt-3 text-2xl font-black">{plan.name}</h3>
              </div>
              <div className="border-b-2 border-[#111312] p-4 md:border-b-0 md:border-r-2">
                <p className="text-xs font-black uppercase tracking-[0.14em]">
                  Inversion
                </p>
                <p className="mt-3 text-2xl font-black">{plan.price}</p>
              </div>
              <p className="border-b-2 border-[#111312] p-4 font-semibold leading-7 text-[#111312]/72 md:border-b-0 md:border-r-2">
                {plan.description}
              </p>
              <a
                className="flex items-center justify-center bg-[#111312] p-4 text-sm font-black uppercase text-[#f6f1e8] transition hover:bg-[#24352b] hover:text-[#b8ff5c]"
                href={ctaHref}
              >
                {ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgencyContactSection({ data }: { data: LandingPageData }) {
  const contact = data.contact;

  if (!contact) {
    return null;
  }

  return (
    <section className="bg-[#f6f1e8] py-12 text-[#111312] sm:py-16" id="contacto">
      <Container>
        <div className="grid border-2 border-[#111312] bg-[#24352b] text-[#f6f1e8] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b-2 border-[#111312] p-5 sm:p-8 lg:border-b-0 lg:border-r-2">
            <p className="mb-5 inline-block border-2 border-[#111312] bg-[#b8ff5c] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#111312]">
              Contacto
            </p>
            <h2 className="font-serif text-4xl font-black leading-tight sm:text-6xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#f6f1e8]/78">
              {contact.description}
            </p>
          </div>

          <div className="bg-[#111312] p-5 sm:p-8">
            <div className="border-2 border-[#f6f1e8] bg-[#f6f1e8] text-[#111312]">
              <div className="border-b-2 border-[#111312] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em]">
                  Brief express
                </p>
              </div>
              {["Rubro y ciudad", "Servicio principal", "Tono visual deseado"].map(
                (item) => (
                  <div
                    className="border-b-2 border-[#111312] p-4 text-sm font-black"
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
              <a
                className="block bg-[#b8ff5c] p-4 text-center text-sm font-black uppercase transition hover:bg-[#111312] hover:text-[#b8ff5c]"
                href={contact.whatsappHref}
              >
                {contact.submitLabel}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function EditorialIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="border-x-2 border-t-2 border-[#111312] bg-[#f6f1e8] p-5 sm:p-8">
      <p className="mb-4 inline-block border-2 border-[#111312] bg-[#b8ff5c] px-3 py-2 text-xs font-black uppercase tracking-[0.16em]">
        {eyebrow}
      </p>
      <h2 className="max-w-4xl font-serif text-4xl font-black leading-tight sm:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#111312]/72">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function EditorialButton({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={`inline-flex min-h-12 w-full items-center justify-center border-2 border-[#111312] px-5 py-3 text-center text-sm font-black uppercase tracking-[0.08em] transition hover:translate-x-0.5 hover:-translate-y-0.5 sm:w-auto sm:min-w-44 ${
        variant === "primary"
          ? "bg-[#b8ff5c] text-[#111312] hover:bg-[#111312] hover:text-[#b8ff5c]"
          : "bg-[#f6f1e8] text-[#111312] hover:bg-[#111312] hover:text-[#f6f1e8]"
      }`}
      href={href}
    >
      {children}
    </a>
  );
}
