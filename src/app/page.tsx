import { AgencyHomePage } from "@/components/agency-home-page";
import { agencyLanding } from "@/data/agency-landing";
import { createLandingMetadata } from "@/landing-system/landing-metadata";

export const metadata = createLandingMetadata(agencyLanding);

export default function Home() {
  return <AgencyHomePage data={agencyLanding} />;
}

