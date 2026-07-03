export type NicheKey =
  | "odontologia"
  | "psicologia"
  | "veterinaria"
  | "gimnasio"
  | "servicios-profesionales";

export type TemplateNiche = {
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
  statusLabel?: string;
  previewItems?: string[];
  notificationTitle?: string;
  notificationText?: string;
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

export type ServiceItem = {
  title: string;
  description: string;
};

export type PortfolioItem = {
  niche: string;
  title: string;
  result: string;
  href?: string;
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
