import { LandingComposer } from "@/components/landing-composer";
import type { LandingPageData } from "@/landing-system/types";

type AgencyHomePageProps = {
  data: LandingPageData;
};

export function AgencyHomePage({ data }: AgencyHomePageProps) {
  return <LandingComposer data={data} />;
}
