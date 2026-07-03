import type { LandingPageData } from "@/templates/types";

export const papaLanding: LandingPageData = {
  seo: {
    title: "Demo familiar | Nova Studio",
    description:
      "Ruta preparada para una futura landing familiar construida sobre el sistema reusable de Nova Studio.",
    siteName: "Nova Studio",
  },
  hero: {
    businessName: "Demo Familiar",
    demoLabel: "Demo en preparación",
    eyebrow: "Landing familiar",
    title: "Una base lista para una landing cálida, clara y personal.",
    description:
      "Esta ruta queda preparada para evolucionar desde data propia, assets propios y secciones compartidas del sistema Nova Studio.",
    primaryCta: "Próximamente",
    secondaryCta: "Volver a Nova Studio",
    primaryHref: "#",
    secondaryHref: "/",
    microcopy: "Stub técnico: falta completar contenido comercial y assets.",
    stats: [
      { value: "Data", label: "configurable" },
      { value: "Ruta", label: "lista" },
      { value: "UI", label: "reusable" },
    ],
  },
};
