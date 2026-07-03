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
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type PortfolioItem = {
  niche: string;
  title: string;
  result: string;
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

export type ContactData = {
  title: string;
  description: string;
  email: string;
  whatsapp: string;
};
