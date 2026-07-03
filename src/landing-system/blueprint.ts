import { businessNiches } from "@/data/niches";

export const landingSectionOrder = [
  "hero",
  "services",
  "portfolio",
  "process",
  "pricing",
  "faq",
  "contact",
] as const;

export type LandingSectionKey = (typeof landingSectionOrder)[number];

export const landingSystemBlueprint = {
  supportedNiches: businessNiches,
  sectionOrder: landingSectionOrder,
  defaultConversionActions: [
    "WhatsApp",
    "formulario de contacto",
    "llamada",
    "reserva de turno",
  ],
};
