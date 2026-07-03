import { LandingPage } from "@/components/landing-page";
import { papaLanding } from "@/data/papa-landing";
import { createLandingMetadata } from "@/landing-system/landing-metadata";

export const metadata = createLandingMetadata(papaLanding);

export default function PapaDemoPage() {
  return <LandingPage data={papaLanding} />;
}

