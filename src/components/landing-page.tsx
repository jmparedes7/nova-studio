import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";
import type { LandingPageData } from "@/templates/types";

type LandingPageProps = {
  data: LandingPageData;
};

export function LandingPage({ data }: LandingPageProps) {
  return (
    <main className={`landing-theme landing-theme-${data.theme ?? "studio"}`}>
      <HeroSection data={data.hero} />

      {data.services?.length ? (
        <ServicesSection
          heading={data.sectionHeadings?.services}
          items={data.services}
        />
      ) : null}

      {data.portfolio?.length ? (
        <PortfolioSection
          heading={data.sectionHeadings?.portfolio}
          items={data.portfolio}
        />
      ) : null}

      {data.process?.length ? (
        <ProcessSection
          heading={data.sectionHeadings?.process}
          steps={data.process}
        />
      ) : null}

      {data.pricing?.length ? (
        <PricingSection
          ctaHref={data.pricingCta?.href}
          ctaLabel={data.pricingCta?.label}
          heading={data.sectionHeadings?.pricing}
          plans={data.pricing}
        />
      ) : null}

      {data.testimonials?.length && data.sectionHeadings?.testimonials ? (
        <TestimonialsSection
          heading={data.sectionHeadings.testimonials}
          items={data.testimonials}
        />
      ) : null}

      {data.faq?.length ? (
        <FaqSection heading={data.sectionHeadings?.faq} items={data.faq} />
      ) : null}

      {data.location ? <LocationSection data={data.location} /> : null}

      {data.contact ? <ContactSection data={data.contact} /> : null}

      {data.floatingCta ? (
        <WhatsappFloatingButton
          href={data.floatingCta.href}
          label={data.floatingCta.label}
        />
      ) : null}
    </main>
  );
}
