import type { Metadata } from "next";
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
import { odontologiaLanding } from "@/data/odontologia-landing";

export const metadata: Metadata = {
  title: "Demo conceptual dental | Nova Studio",
  description:
    "Demo conceptual de una landing premium para una clínica dental. No corresponde a un cliente real de Nova Studio.",
  openGraph: {
    title: "Demo conceptual dental | Nova Studio",
    description:
      "Así podría verse una landing premium para una clínica dental: conversión, confianza y claridad comercial.",
    type: "website",
    locale: "es_AR",
    siteName: "Nova Studio",
  },
};

export default function OdontologiaTemplatePage() {
  return (
    <main>
      <HeroSection data={odontologiaLanding.hero} />
      <ServicesSection
        heading={odontologiaLanding.sectionHeadings.services}
        items={odontologiaLanding.services}
      />
      <PortfolioSection
        heading={odontologiaLanding.sectionHeadings.portfolio}
        items={odontologiaLanding.portfolio}
      />
      <ProcessSection
        heading={odontologiaLanding.sectionHeadings.process}
        steps={odontologiaLanding.process}
      />
      <PricingSection
        ctaHref="#contacto"
        ctaLabel="Simular consulta"
        heading={odontologiaLanding.sectionHeadings.pricing}
        plans={odontologiaLanding.pricing}
      />
      <TestimonialsSection
        heading={odontologiaLanding.sectionHeadings.testimonials}
        items={odontologiaLanding.testimonials}
      />
      <FaqSection
        heading={odontologiaLanding.sectionHeadings.faq}
        items={odontologiaLanding.faq}
      />
      <LocationSection data={odontologiaLanding.location} />
      <ContactSection data={odontologiaLanding.contact} />
      <WhatsappFloatingButton
        href="#contacto"
        label="Ver consulta"
      />
    </main>
  );
}
