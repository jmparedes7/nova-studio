import type { LandingPageData } from "@/landing-system/types";

export const agencyLanding: LandingPageData = {
  theme: "studio",
  sections: [
    { type: "hero", variant: "agency-bold" },
    { type: "problem", variant: "pain-solution" },
    { type: "services", variant: "conversion-grid" },
    { type: "portfolio", variant: "demo-showcase" },
    { type: "process", variant: "timeline" },
    { type: "pricing", variant: "offer-cards" },
    { type: "contact", variant: "lead-form" },
  ],
  seo: {
    title: "Nova Studio | Landings semi-custom por rubro",
    description:
      "Landings semi-custom por rubro con dirección visual premium, estructura comercial y foco en consultas reales.",
    siteName: "Nova Studio",
  },
  hero: {
    businessName: "Nova Studio",
    demoLabel: "Sistema premium de landings",
    eyebrow: "Landings semi-custom por rubro",
    title: "Landings semi-custom para negocios que quieren verse grandes.",
    description:
      "Diseñamos páginas por rubro con estructura comercial, dirección visual premium y foco en consultas reales.",
    primaryCta: "Quiero mi landing",
    secondaryCta: "Ver demos",
    primaryHref: "#contacto",
    secondaryHref: "#portfolio",
    microcopy: "Primera versión en 7 días. Mobile first. CTA directo a WhatsApp.",
    statusLabel: "Sistema activo",
    previewItems: ["Odontología", "Pediatría", "Servicios"],
    notificationTitle: "Nueva consulta",
    notificationText: "Landing lista para captar oportunidades",
    visual: {
      mode: "system",
      trustBadge: "Premium",
      detailEyebrow: "Demos",
      systemCards: [
        {
          eyebrow: "Nicho",
          title: "Dirección visual por rubro",
          description: "Cada landing se adapta al negocio, no a un molde genérico.",
          meta: "Brand",
        },
        {
          eyebrow: "Venta",
          title: "Copy pensado para consultas",
          description: "Mensaje claro, beneficios visibles y CTA sin vueltas.",
          meta: "CTA",
        },
        {
          eyebrow: "Entrega",
          title: "Semi-custom sin parecer barata",
          description: "Sistema reusable con composición y ritmo propios por rubro.",
          meta: "7 días",
        },
      ],
    },
    stats: [
      { value: "Primera versión", label: "en 7 días" },
      { value: "Mobile", label: "first" },
      { value: "Por rubro", label: "semi-custom" },
      { value: "WhatsApp", label: "CTA listo" },
    ],
  },
  sectionHeadings: {
    problem: {
      eyebrow: "Manifiesto",
      title:
        "No hacemos webs genéricas. Creamos sistemas visuales para que cada negocio parezca más confiable, más claro y más vendible.",
      description:
        "Nova Studio combina criterio editorial, estructura comercial y componentes semi-custom para que cada landing tenga identidad propia sin empezar desde cero.",
    },
    services: {
      eyebrow: "Sistema",
      title: "Cuatro piezas para que una landing venda mejor desde el primer scroll.",
      description:
        "No es decoración. Es dirección visual, mensaje, componentes y publicación trabajando para que el negocio reciba consultas.",
    },
    portfolio: {
      eyebrow: "Demos por rubro",
      title: "Fichas de colección para mostrar cómo cambia el sistema según el nicho.",
      description:
        "La estructura base acelera el trabajo. La dirección visual evita que todo parezca la misma plantilla.",
    },
    process: {
      eyebrow: "Proceso",
      title: "De rubro a landing publicada con decisiones claras.",
      description:
        "Ordenamos oferta, mensaje, visual y publicación para reducir vueltas y lanzar rápido sin perder carácter.",
    },
    pricing: {
      eyebrow: "Paquetes",
      title: "Una oferta simple para comprar presencia premium sin vueltas.",
      description:
        "Planes pensados para negocios que necesitan verse más serios, explicar mejor su oferta y recibir consultas.",
    },
  },
  problem: [
    {
      label: "Problema",
      title: "Una web prolija no alcanza si parece genérica.",
      description:
        "El visitante decide rápido si confía, entiende la oferta y tiene ganas de escribir.",
    },
    {
      label: "Solución",
      title: "Una landing por rubro, con dirección visual y mensaje comercial.",
      description:
        "Nova ordena estética, copy, estructura y CTA para que el negocio parezca más profesional desde el primer scroll.",
    },
  ],
  services: [
    {
      title: "Dirección visual por nicho",
      description:
        "Definimos una estética propia para que odontología, salud, servicios o fitness no se vean como el mismo molde.",
    },
    {
      title: "Copy orientado a conversión",
      description:
        "Ordenamos la oferta para que se entienda qué hacés, por qué confiar y cuál es el próximo paso.",
    },
    {
      title: "Componentes semi-custom",
      description:
        "Usamos una base modular, pero cambiamos orden, ritmo y variantes visuales según el rubro.",
    },
    {
      title: "Publicación rápida",
      description:
        "Dejamos la landing lista para compartir, conectar a WhatsApp y usar en conversaciones comerciales.",
    },
  ],
  portfolio: [
    {
      niche: "Demo conceptual",
      title: "Odontología",
      result:
        "Tratamientos claros, confianza clínica y CTA preparado para coordinar consultas por WhatsApp.",
      href: "/templates/odontologia",
      visualBadge: "Odontología",
      visualDetail: "Ver demo",
    },
    {
      niche: "Demo en preparación",
      title: "Pediatría",
      result:
        "Tono cálido, información simple y una experiencia pensada para familias que necesitan pedir turno.",
      href: "/demos/pediatra",
      visualBadge: "Pediatría",
      visualDetail: "Próxima",
    },
    {
      niche: "Demo en preparación",
      title: "Servicios profesionales",
      result:
        "Autoridad visual, oferta clara y estructura pensada para recibir consultas calificadas.",
      href: "/demos/papa",
      visualBadge: "Servicios",
      visualDetail: "Próxima",
    },
    {
      niche: "Demo en preparación",
      title: "Fitness / boutique",
      result:
        "Una dirección visual más enérgica para estudios, marcas locales y negocios de experiencia.",
      href: "#contacto",
      visualBadge: "Fitness",
      visualDetail: "Explorar",
    },
  ],
  process: [
    {
      step: "01",
      title: "Diagnóstico",
      description:
        "Entendemos el rubro, la oferta, el cliente ideal y qué consulta tiene que generar la landing.",
    },
    {
      step: "02",
      title: "Estructura",
      description:
        "Definimos el orden de secciones, promesa, prueba, objeciones y llamados a la acción.",
    },
    {
      step: "03",
      title: "Diseño",
      description:
        "Aplicamos una dirección visual específica para que el negocio parezca más profesional y confiable.",
    },
    {
      step: "04",
      title: "Publicación",
      description:
        "Publicamos, revisamos mobile, SEO base y dejamos la landing lista para captar consultas.",
    },
  ],
  pricing: [
    {
      name: "Base",
      price: "USD 250",
      description: "Para validar presencia profesional rápido.",
      features: [
        "Landing one-page",
        "Diseño responsive",
        "CTA a WhatsApp",
        "SEO técnico base",
      ],
    },
    {
      name: "Premium",
      price: "USD 450",
      description:
        "La opción principal para negocios que quieren verse mejor y vender más claro.",
      highlighted: true,
      features: [
        "Landing premium completa",
        "Dirección visual por nicho",
        "Copy inicial orientado a conversión",
        "Formulario o WhatsApp CTA",
        "Secciones de confianza y prueba social",
      ],
    },
    {
      name: "Growth",
      price: "USD 650+",
      description:
        "Para negocios que necesitan más contenido, variantes o acompañamiento.",
      features: [
        "Landing extendida",
        "Variantes por campaña",
        "Integraciones adicionales",
        "Mejoras mensuales opcionales",
      ],
    },
  ],
  pricingCta: {
    href: "#contacto",
    label: "Pedir propuesta",
  },
  contact: {
    title: "Contame tu rubro y te devolvemos una dirección concreta.",
    description:
      "Decinos qué vendés, qué tipo de consultas querés recibir y qué estilo querés transmitir. Te respondemos con una recomendación clara para tu landing.",
    email: "hola@novastudio.dev",
    whatsapp: "+54 9 11 0000-0000",
    whatsappHref:
      "https://wa.me/5491100000000?text=Hola%20Nova%20Studio%2C%20quiero%20pedir%20una%20propuesta%20para%20una%20landing.",
    formLabels: {
      name: "Nombre",
      reason: "Rubro",
      message: "Qué necesitás",
    },
    formPlaceholders: {
      name: "Tu nombre",
      reason: "Ej: odontología, pediatría, servicios",
      message: "Contame qué vendés y qué consultas querés recibir.",
    },
    submitLabel: "Pedir propuesta",
  },
};
