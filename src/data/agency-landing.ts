import type {
  ContactData,
  FaqItem,
  HeroData,
  PortfolioItem,
  PricingPlan,
  ProcessStep,
  ServiceItem,
} from "@/templates/types";

export const agencyLanding: {
  hero: HeroData;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  faq: FaqItem[];
  contact: ContactData;
} = {
  hero: {
    eyebrow: "Landing pages premium para pequenos negocios",
    title: "Convertimos negocios locales en marcas que generan consultas.",
    description:
      "Disenamos landing pages rapidas, modernas y enfocadas en conversion para profesionales y comercios que necesitan vender mejor sin perder semanas en desarrollo.",
    primaryCta: "Quiero mi landing",
    secondaryCta: "Ver paquetes",
    stats: [
      { value: "7 dias", label: "para una primera version" },
      { value: "100%", label: "mobile first" },
      { value: "SEO", label: "base incluida" },
    ],
  },
  services: [
    {
      title: "Landing page premium",
      description:
        "Una pagina clara, veloz y profesional con estructura pensada para convertir visitas en consultas reales.",
    },
    {
      title: "Copywriting y propuesta",
      description:
        "Ordenamos el mensaje comercial para que el cliente entienda rapido que ofreces, por que confiar y como contactarte.",
    },
    {
      title: "WhatsApp y formularios",
      description:
        "Integramos llamados a la accion visibles, formularios simples y flujos preparados para captar oportunidades.",
    },
    {
      title: "SEO tecnico basico",
      description:
        "Metadatos, jerarquia de contenido, rendimiento y estructura semantica para una base solida desde el inicio.",
    },
    {
      title: "Templates por rubro",
      description:
        "Creamos bloques reutilizables para adaptar rapido paginas de odontologia, psicologia, veterinaria, gimnasios y servicios.",
    },
    {
      title: "Mantenimiento mensual",
      description:
        "Actualizaciones, cambios menores, mejoras y soporte para que la pagina siga viva despues del lanzamiento.",
    },
  ],
  portfolio: [
    {
      niche: "Odontologia",
      title: "Clinica dental con foco en implantes",
      result: "Agenda clara, beneficios visibles y CTA directo a WhatsApp.",
    },
    {
      niche: "Psicologia",
      title: "Profesional independiente",
      result: "Tono humano, confianza y formulario de primera consulta.",
    },
    {
      niche: "Gimnasio",
      title: "Estudio fitness boutique",
      result: "Oferta de prueba, planes simples y energia visual premium.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Diagnostico",
      description:
        "Entendemos el negocio, el cliente ideal, la oferta y la accion principal que debe lograr la pagina.",
    },
    {
      step: "02",
      title: "Estructura y contenido",
      description:
        "Definimos secciones, copy, prueba social y CTA antes de entrar al diseno visual.",
    },
    {
      step: "03",
      title: "Diseno y desarrollo",
      description:
        "Construimos una landing mobile first con componentes reutilizables, animaciones sutiles y buena performance.",
    },
    {
      step: "04",
      title: "Publicacion y mejora",
      description:
        "Preparamos despliegue en Vercel, ajustes finales, SEO basico y plan de mantenimiento si aplica.",
    },
  ],
  pricing: [
    {
      name: "Base",
      price: "USD 250",
      description: "Para validar presencia profesional rapido.",
      features: [
        "Landing one-page",
        "Diseno responsive",
        "WhatsApp CTA",
        "SEO basico",
      ],
    },
    {
      name: "Premium",
      price: "USD 450",
      description: "La opcion principal para negocios que quieren vender mejor.",
      highlighted: true,
      features: [
        "Landing premium completa",
        "Copywriting inicial",
        "Formulario de contacto",
        "Secciones de prueba social",
        "Animaciones suaves",
      ],
    },
    {
      name: "Growth",
      price: "USD 650+",
      description: "Para negocios que necesitan mas contenido y optimizacion.",
      features: [
        "Landing extendida",
        "Variantes por campana",
        "Integraciones adicionales",
        "Mantenimiento mensual opcional",
      ],
    },
  ],
  faq: [
    {
      question: "Cuanto tarda una landing page?",
      answer:
        "Una primera version puede estar lista en aproximadamente una semana si el contenido y las decisiones principales estan claros.",
    },
    {
      question: "Sirve para cualquier rubro?",
      answer:
        "La base es reutilizable, pero cada pagina se adapta al rubro, tono, oferta y tipo de cliente que necesita convertir.",
    },
    {
      question: "Incluye hosting y dominio?",
      answer:
        "Podemos orientar la configuracion con Vercel, dominio y Cloudflare. El costo del dominio o servicios externos se cobra aparte.",
    },
    {
      question: "Puedo pedir cambios despues?",
      answer:
        "Si. La idea comercial es ofrecer mantenimiento mensual para cambios menores, mejoras y soporte continuo.",
    },
  ],
  contact: {
    title: "Construyamos una landing que trabaje como vendedor digital.",
    description:
      "Contanos tu rubro, tu oferta principal y que tipo de consultas queres recibir. Te respondemos con una recomendacion concreta.",
    email: "hola@novastudio.dev",
    whatsapp: "+54 9 11 0000-0000",
  },
};
