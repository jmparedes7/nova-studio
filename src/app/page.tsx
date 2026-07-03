import { LandingPage } from "@/components/landing-page";
import { agencyLanding } from "@/data/agency-landing";

export default function Home() {
  return <LandingPage data={agencyLanding} />;
}
