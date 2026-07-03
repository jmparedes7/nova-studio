import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { odontologiaLanding } from "@/data/odontologia-landing";

export const metadata: Metadata = {
  title: "Template odontologia | Nova Studio",
  description:
    "Landing page premium para clinicas odontologicas, preparada para captar turnos y consultas por WhatsApp.",
};

export default function OdontologiaTemplatePage() {
  return (
    <main>
      <HeroSection data={odontologiaLanding.hero} />
      <ServicesSection items={odontologiaLanding.services} />
      <PortfolioSection items={odontologiaLanding.portfolio} />
      <ProcessSection steps={odontologiaLanding.process} />
      <PricingSection plans={odontologiaLanding.pricing} />
      <FaqSection items={odontologiaLanding.faq} />
      <ContactSection data={odontologiaLanding.contact} />
    </main>
  );
}
