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
    title: "Nova Studio | Landings premium por rubro",
    description:
      "Landings premium por rubro, diseÃ±adas para verse caras y convertir rÃ¡pido.",
    siteName: "Nova Studio",
  },
  hero: {
    businessName: "Nova Studio",
    demoLabel: "Sistema premium de landings",
    eyebrow: "Landings por rubro. DiseÃ±o caro. ConversiÃ³n rÃ¡pida.",
    title: "Tu negocio puede verse mÃ¡s profesional en 7 dÃ­as.",
    description:
      "Creamos landings premium por nicho para que pequeÃ±os negocios parezcan mÃ¡s confiables, se entiendan rÃ¡pido y reciban consultas con menos fricciÃ³n.",
    primaryCta: "Quiero mi landing",
    secondaryCta: "Ver demos",
    primaryHref: "#contacto",
    secondaryHref: "#portfolio",
    microcopy: "Primera versiÃ³n en 7 dÃ­as. Mobile first. CTA directo a WhatsApp.",
    statusLabel: "Sistema activo",
    previewItems: ["OdontologÃ­a", "PediatrÃ­a", "Servicios"],
    notificationTitle: "Nueva consulta",
    notificationText: "Landing lista para captar oportunidades",
    visual: {
      mode: "system",
      trustBadge: "Premium",
      detailEyebrow: "Demos",
      systemCards: [
        {
          eyebrow: "Nicho",
          title: "DirecciÃ³n visual por rubro",
          description: "Cada landing se adapta al negocio, no a un molde genÃ©rico.",
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
          title: "RÃ¡pida sin parecer barata",
          description: "Estructura reusable con acabado editorial premium.",
          meta: "7 dÃ­as",
        },
      ],
    },
    stats: [
      { value: "7 dÃ­as", label: "primera versiÃ³n" },
      { value: "Mobile", label: "first real" },
      { value: "WhatsApp", label: "CTA listo" },
    ],
  },
  sectionHeadings: {
    problem: {
      eyebrow: "Problema / solución",
      title: "El problema no es tener una web. Es parecer uno más.",
      description:
        "Nova separa estrategia, estética y conversión para que cada landing se sienta diseñada para un rubro concreto.",
    },
    services: {
      eyebrow: "Valor",
      title:
        "No hacemos webs genÃ©ricas. DiseÃ±amos landings por rubro para generar consultas.",
      description:
        "La diferencia estÃ¡ en parecer especÃ­fico, confiable y listo para atender antes de que el cliente escriba.",
    },
    portfolio: {
      eyebrow: "Demos por nicho",
      title: "Cada rubro necesita una primera impresiÃ³n distinta.",
      description:
        "Usamos la misma base tÃ©cnica, pero cambiamos estructura, tono visual, copy y CTA segÃºn el negocio.",
    },
    process: {
      eyebrow: "Sistema",
      title: "Un proceso claro para lanzar rÃ¡pido sin perder calidad.",
      description:
        "Primero definimos cÃ³mo tiene que vender la landing. DespuÃ©s diseÃ±amos, construimos y publicamos.",
    },
    pricing: {
      eyebrow: "Paquetes",
      title: "Tres formas simples de comprar una landing premium.",
      description:
        "ElegÃ­ segÃºn el nivel de estrategia, contenido y acompaÃ±amiento que necesite tu negocio.",
    },
    faq: {
      eyebrow: "Dudas",
      title: "Lo importante antes de empezar.",
      description:
        "La idea es comprar claridad, velocidad y una presencia que parezca de mayor nivel.",
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
      title: "DirecciÃ³n visual por nicho",
      description:
        "OdontologÃ­a, salud, servicios o negocios locales no deberÃ­an verse igual. Definimos una estÃ©tica propia para que el rubro se sienta premium.",
    },
    {
      title: "Copy orientado a conversiÃ³n",
      description:
        "Ordenamos la oferta para que se entienda quÃ© hacÃ©s, por quÃ© confiar y cuÃ¡l es el prÃ³ximo paso para consultar.",
    },
    {
      title: "Mobile first real",
      description:
        "La landing se piensa para el telÃ©fono desde el inicio: lectura rÃ¡pida, CTAs visibles y secciones fÃ¡ciles de escanear.",
    },
    {
      title: "Entrega rÃ¡pida sin parecer barata",
      description:
        "Usamos un sistema reusable para acelerar producciÃ³n, pero cuidando detalle visual, jerarquÃ­a y sensaciÃ³n premium.",
    },
  ],
  portfolio: [
    {
      niche: "Demo conceptual",
      title: "ClÃ­nica dental premium",
      result:
        "Tratamientos claros, confianza clÃ­nica y CTA preparado para coordinar consultas por WhatsApp.",
      href: "/templates/odontologia",
      visualBadge: "OdontologÃ­a",
      visualDetail: "Ver demo",
    },
    {
      niche: "Demo en preparaciÃ³n",
      title: "PediatrÃ­a familiar",
      result:
        "Una landing cÃ¡lida y confiable para familias que necesitan pedir turno sin fricciÃ³n.",
      href: "/demos/pediatra",
      visualBadge: "PediatrÃ­a",
      visualDetail: "PrÃ³xima",
    },
    {
      niche: "Demo en preparaciÃ³n",
      title: "Servicios profesionales",
      result:
        "Oferta clara, autoridad visual y estructura pensada para recibir consultas calificadas.",
      href: "/demos/papa",
      visualBadge: "Servicios",
      visualDetail: "PrÃ³xima",
    },
  ],
  process: [
    {
      step: "01",
      title: "DiagnÃ³stico",
      description:
        "Entendemos el rubro, la oferta, el cliente ideal y quÃ© consulta tiene que generar la landing.",
    },
    {
      step: "02",
      title: "Estructura comercial",
      description:
        "Definimos el orden de secciones, promesa, prueba, objeciones y llamados a la acciÃ³n.",
    },
    {
      step: "03",
      title: "DiseÃ±o premium",
      description:
        "Aplicamos una direcciÃ³n visual especÃ­fica para que el negocio parezca mÃ¡s profesional y confiable.",
    },
    {
      step: "04",
      title: "PublicaciÃ³n y mejora",
      description:
        "Publicamos, revisamos mobile, SEO base y dejamos la landing lista para captar consultas.",
    },
  ],
  pricing: [
    {
      name: "Base",
      price: "USD 250",
      description: "Para validar presencia profesional rÃ¡pido.",
      features: [
        "Landing one-page",
        "DiseÃ±o responsive",
        "CTA a WhatsApp",
        "SEO tÃ©cnico base",
      ],
    },
    {
      name: "Premium",
      price: "USD 450",
      description:
        "La opciÃ³n principal para negocios que quieren verse mejor y vender mÃ¡s claro.",
      highlighted: true,
      features: [
        "Landing premium completa",
        "DirecciÃ³n visual por nicho",
        "Copy inicial orientado a conversiÃ³n",
        "Formulario o WhatsApp CTA",
        "Secciones de confianza y prueba social",
      ],
    },
    {
      name: "Growth",
      price: "USD 650+",
      description:
        "Para negocios que necesitan mÃ¡s contenido, variantes o acompaÃ±amiento.",
      features: [
        "Landing extendida",
        "Variantes por campaÃ±a",
        "Integraciones adicionales",
        "Mejoras mensuales opcionales",
      ],
    },
  ],
  pricingCta: {
    href: "#contacto",
    label: "Pedir propuesta",
  },
  faq: [
    {
      question: "Â¿Esto es una web completa?",
      answer:
        "No necesariamente. Es una landing enfocada en una oferta concreta, pensada para verse profesional y generar consultas rÃ¡pido.",
    },
    {
      question: "Â¿Sirve si todavÃ­a no tengo marca definida?",
      answer:
        "SÃ­. Podemos partir de una direcciÃ³n visual simple y premium para ordenar la primera impresiÃ³n del negocio.",
    },
    {
      question: "Â¿Puedo usarla con dominio propio?",
      answer:
        "SÃ­. Podemos publicarla en Vercel y conectar un dominio propio cuando estÃ© listo.",
    },
  ],
  contact: {
    title: "Contame tu rubro y te devuelvo una direcciÃ³n concreta.",
    description:
      "Decime quÃ© vendÃ©s, quÃ© tipo de consultas querÃ©s recibir y quÃ© estilo querÃ©s transmitir. Te respondo con una recomendaciÃ³n clara para tu landing.",
    email: "hola@novastudio.dev",
    whatsapp: "+54 9 11 0000-0000",
    whatsappHref:
      "https://wa.me/5491100000000?text=Hola%20Nova%20Studio%2C%20quiero%20pedir%20una%20propuesta%20para%20una%20landing.",
    formLabels: {
      name: "Nombre",
      reason: "Rubro",
      message: "QuÃ© necesitÃ¡s",
    },
    formPlaceholders: {
      name: "Tu nombre",
      reason: "Ej: odontologÃ­a, pediatrÃ­a, servicios",
      message: "Contame quÃ© vendÃ©s y quÃ© consultas querÃ©s recibir.",
    },
    submitLabel: "Pedir propuesta",
  },
};

