import { LandingPage } from "@/components/landing-page";
import { odontologiaLanding } from "@/data/odontologia-landing";
import { createLandingMetadata } from "@/landing-system/landing-metadata";

export const metadata = createLandingMetadata(odontologiaLanding);

export default function OdontologiaDemoPage() {
  return <LandingPage data={odontologiaLanding} />;
}
