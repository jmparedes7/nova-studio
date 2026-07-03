import type { Metadata } from "next";
import type { LandingPageData } from "@/landing-system/types";

export function createLandingMetadata(data: LandingPageData): Metadata {
  return {
    title: data.seo?.title ?? data.hero.businessName,
    description: data.seo?.description ?? data.hero.description,
    openGraph: {
      title: data.seo?.title ?? data.hero.businessName,
      description: data.seo?.description ?? data.hero.description,
      type: "website",
      locale: "es_AR",
      siteName: data.seo?.siteName ?? data.hero.businessName,
    },
  };
}
