import { LandingPage } from "@/components/landing-page";
import { odontologiaLanding } from "@/data/odontologia-landing";
import { createLandingMetadata } from "@/templates/landing-metadata";

export const metadata = createLandingMetadata(odontologiaLanding);

export default function OdontologiaTemplatePage() {
  return <LandingPage data={odontologiaLanding} />;
}
