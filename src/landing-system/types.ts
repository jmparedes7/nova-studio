export type NicheKey =
  | "odontologia"
  | "pediatra"
  | "papa"
  | "psicologia"
  | "veterinaria"
  | "gimnasio"
  | "servicios-profesionales";

export type BusinessNiche = {
  key: NicheKey;
  name: string;
  audience: string;
  mainGoal: string;
  conversionAction: string;
  tone: string;
};

export type HeroData = {
  businessName: string;
  demoLabel?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref?: string;
  secondaryHref?: string;
  microcopy?: string;
  statusLabel?: string;
  previewItems?: string[];
  notificationTitle?: string;
  notificationText?: string;
  visual?: {
    mode?: "image" | "system";
    imageSrc?: string;
    imageAlt?: string;
    trustBadge?: string;
    appointmentEyebrow?: string;
    appointmentTitle?: string;
    appointmentMeta?: string[];
    detailEyebrow?: string;
    systemCards?: Array<{
      eyebrow: string;
      title: string;
      description: string;
      meta: string;
    }>;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type ProblemItem = {
  label: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type PortfolioItem = {
  niche: string;
  title: string;
  result: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  visualBadge?: string;
  visualDetail?: string;
  visualPosition?: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  detail: string;
};

export type LocationData = {
  eyebrow: string;
  title: string;
  description: string;
  address: string;
  neighborhood: string;
  hours: string[];
  mapLabel: string;
};

export type ContactData = {
  title: string;
  description: string;
  email: string;
  whatsapp: string;
  whatsappHref: string;
  formLabels: {
    name: string;
    reason: string;
    message: string;
  };
  formPlaceholders: {
    name: string;
    reason: string;
    message: string;
  };
  submitLabel: string;
};

export type BusinessBrand = {
  businessName: string;
  industry: string;
  location: string;
  whatsapp: string;
  email: string;
  hours: string[];
  whatsappMessage: string;
  whatsappHref: string;
};

export type LandingSeo = {
  title: string;
  description: string;
  siteName?: string;
};

export type LandingSectionHeadings = Partial<{
  problem: SectionCopy;
  services: SectionCopy;
  portfolio: SectionCopy;
  trust: SectionCopy;
  process: SectionCopy;
  pricing: SectionCopy;
  testimonials: SectionCopy;
  faq: SectionCopy;
}>;

export type LandingSectionType =
  | "hero"
  | "problem"
  | "services"
  | "portfolio"
  | "trust"
  | "process"
  | "pricing"
  | "testimonials"
  | "faq"
  | "location"
  | "contact";

export type LandingSectionVariant =
  | "agency-bold"
  | "pain-solution"
  | "conversion-grid"
  | "demo-showcase"
  | "timeline"
  | "offer-cards"
  | "lead-form"
  | "clinic-appointment"
  | "treatment-cards"
  | "medical-trust"
  | "guided-steps"
  | "patient-cards"
  | "map-with-hours"
  | "whatsapp-first"
  | "standard";

export type LandingSectionConfig = {
  type: LandingSectionType;
  variant?: LandingSectionVariant;
  id?: string;
  enabled?: boolean;
};

export type LandingPageData = {
  brand?: BusinessBrand;
  seo?: LandingSeo;
  theme?: "studio" | "clinic" | "warm";
  sections?: LandingSectionConfig[];
  hero: HeroData;
  sectionHeadings?: LandingSectionHeadings;
  problem?: ProblemItem[];
  services?: ServiceItem[];
  portfolio?: PortfolioItem[];
  process?: ProcessStep[];
  pricing?: PricingPlan[];
  testimonials?: TestimonialItem[];
  faq?: FaqItem[];
  location?: LocationData;
  contact?: ContactData;
  pricingCta?: {
    href: string;
    label: string;
  };
  floatingCta?: {
    href: string;
    label: string;
  };
};
