import { LandingComposer } from "@/components/landing-composer";
import type { LandingPageData } from "@/landing-system/types";

type LandingPageProps = {
  data: LandingPageData;
};

export function LandingPage({ data }: LandingPageProps) {
  return <LandingComposer data={data} />;
}
