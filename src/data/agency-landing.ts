import type { LandingPageData } from "@/templates/types";

export const agencyLanding: LandingPageData = {
  theme: "studio",
  seo: {
    title: "Nova Studio | Landings premium por rubro",
    description:
      "Landings premium por rubro, diseñadas para verse caras y convertir rápido.",
    siteName: "Nova Studio",
  },
  hero: {
    businessName: "Nova Studio",
    demoLabel: "Sistema premium de landings",
    eyebrow: "Landings por rubro. Diseño caro. Conversión rápida.",
    title: "Tu negocio puede verse más profesional en 7 días.",
    description:
      "Creamos landings premium por nicho para que pequeños negocios parezcan más confiables, se entiendan rápido y reciban consultas con menos fricción.",
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
          title: "Rápida sin parecer barata",
          description: "Estructura reusable con acabado editorial premium.",
          meta: "7 días",
        },
      ],
    },
    stats: [
      { value: "7 días", label: "primera versión" },
      { value: "Mobile", label: "first real" },
      { value: "WhatsApp", label: "CTA listo" },
    ],
  },
  sectionHeadings: {
    services: {
      eyebrow: "Valor",
      title:
        "No hacemos webs genéricas. Diseñamos landings por rubro para generar consultas.",
      description:
        "La diferencia está en parecer específico, confiable y listo para atender antes de que el cliente escriba.",
    },
    portfolio: {
      eyebrow: "Demos por nicho",
      title: "Cada rubro necesita una primera impresión distinta.",
      description:
        "Usamos la misma base técnica, pero cambiamos estructura, tono visual, copy y CTA según el negocio.",
    },
    process: {
      eyebrow: "Sistema",
      title: "Un proceso claro para lanzar rápido sin perder calidad.",
      description:
        "Primero definimos cómo tiene que vender la landing. Después diseñamos, construimos y publicamos.",
    },
    pricing: {
      eyebrow: "Paquetes",
      title: "Tres formas simples de comprar una landing premium.",
      description:
        "Elegí según el nivel de estrategia, contenido y acompañamiento que necesite tu negocio.",
    },
    faq: {
      eyebrow: "Dudas",
      title: "Lo importante antes de empezar.",
      description:
        "La idea es comprar claridad, velocidad y una presencia que parezca de mayor nivel.",
    },
  },
  services: [
    {
      title: "Dirección visual por nicho",
      description:
        "Odontología, salud, servicios o negocios locales no deberían verse igual. Definimos una estética propia para que el rubro se sienta premium.",
    },
    {
      title: "Copy orientado a conversión",
      description:
        "Ordenamos la oferta para que se entienda qué hacés, por qué confiar y cuál es el próximo paso para consultar.",
    },
    {
      title: "Mobile first real",
      description:
        "La landing se piensa para el teléfono desde el inicio: lectura rápida, CTAs visibles y secciones fáciles de escanear.",
    },
    {
      title: "Entrega rápida sin parecer barata",
      description:
        "Usamos un sistema reusable para acelerar producción, pero cuidando detalle visual, jerarquía y sensación premium.",
    },
  ],
  portfolio: [
    {
      niche: "Demo conceptual",
      title: "Clínica dental premium",
      result:
        "Tratamientos claros, confianza clínica y CTA preparado para coordinar consultas por WhatsApp.",
      href: "/templates/odontologia",
      visualBadge: "Odontología",
      visualDetail: "Ver demo",
    },
    {
      niche: "Demo en preparación",
      title: "Pediatría familiar",
      result:
        "Una landing cálida y confiable para familias que necesitan pedir turno sin fricción.",
      href: "/demos/pediatra",
      visualBadge: "Pediatría",
      visualDetail: "Próxima",
    },
    {
      niche: "Demo en preparación",
      title: "Servicios profesionales",
      result:
        "Oferta clara, autoridad visual y estructura pensada para recibir consultas calificadas.",
      href: "/demos/papa",
      visualBadge: "Servicios",
      visualDetail: "Próxima",
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
      title: "Estructura comercial",
      description:
        "Definimos el orden de secciones, promesa, prueba, objeciones y llamados a la acción.",
    },
    {
      step: "03",
      title: "Diseño premium",
      description:
        "Aplicamos una dirección visual específica para que el negocio parezca más profesional y confiable.",
    },
    {
      step: "04",
      title: "Publicación y mejora",
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
      description: "La opción principal para negocios que quieren verse mejor y vender más claro.",
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
      description: "Para negocios que necesitan más contenido, variantes o acompañamiento.",
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
  faq: [
    {
      question: "¿Esto es una web completa?",
      answer:
        "No necesariamente. Es una landing enfocada en una oferta concreta, pensada para verse profesional y generar consultas rápido.",
    },
    {
      question: "¿Sirve si todavía no tengo marca definida?",
      answer:
        "Sí. Podemos partir de una dirección visual simple y premium para ordenar la primera impresión del negocio.",
    },
    {
      question: "¿Puedo usarla con dominio propio?",
      answer:
        "Sí. Podemos publicarla en Vercel y conectar un dominio propio cuando esté listo.",
    },
  ],
  contact: {
    title: "Contame tu rubro y te devuelvo una dirección concreta.",
    description:
      "Decime qué vendés, qué tipo de consultas querés recibir y qué estilo querés transmitir. Te respondo con una recomendación clara para tu landing.",
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
