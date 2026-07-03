import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { agencyLanding } from "@/data/agency-landing";

export default function Home() {
  return (
    <main>
      <HeroSection data={agencyLanding.hero} />
      <ServicesSection items={agencyLanding.services} />
      <PortfolioSection items={agencyLanding.portfolio} />
      <ProcessSection steps={agencyLanding.process} />
      <PricingSection plans={agencyLanding.pricing} />
      <FaqSection items={agencyLanding.faq} />
      <ContactSection data={agencyLanding.contact} />
    </main>
  );
}
