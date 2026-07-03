import { LandingPage } from "@/components/landing-page";
import { pediatraLanding } from "@/data/pediatra-landing";
import { createLandingMetadata } from "@/landing-system/landing-metadata";

export const metadata = createLandingMetadata(pediatraLanding);

export default function PediatraDemoPage() {
  return <LandingPage data={pediatraLanding} />;
}

