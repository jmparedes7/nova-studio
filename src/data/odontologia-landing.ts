import type { BusinessBrand, LandingPageData } from "@/landing-system/types";

const whatsappMessage =
  "Hola ClÃ­nica Dental Nova, quiero solicitar una primera evaluaciÃ³n odontolÃ³gica.";
const whatsappHref = "#contacto";

const hours = [
  "Lunes a viernes de 9:00 a 19:00",
  "SÃ¡bados de 9:00 a 13:00",
  "Urgencias con coordinaciÃ³n previa",
];

export const dentalNovaBrand: BusinessBrand = {
  businessName: "ClÃ­nica Dental Nova",
  industry: "OdontologÃ­a integral",
  location: "Av. Santa Fe 2842, Palermo, CABA",
  whatsapp: "WhatsApp demo: pendiente de conectar al nÃºmero real",
  email: "Demo conceptual de Nova Studio",
  hours,
  whatsappMessage,
  whatsappHref,
};

export const odontologiaLanding: LandingPageData = {
  brand: dentalNovaBrand,
  theme: "clinic",
  sections: [
    { type: "hero", variant: "clinic-appointment" },
    { type: "services", variant: "treatment-cards" },
    { type: "trust", variant: "medical-trust" },
    { type: "process", variant: "guided-steps" },
    { type: "testimonials", variant: "patient-cards" },
    { type: "location", variant: "map-with-hours" },
    { type: "contact", variant: "whatsapp-first" },
  ],
  seo: {
    title: "Demo conceptual dental | Nova Studio",
    description:
      "Demo conceptual de una landing premium para una clÃ­nica dental. No corresponde a un cliente real de Nova Studio.",
    siteName: "Nova Studio",
  },
  hero: {
    businessName: dentalNovaBrand.businessName,
    demoLabel: "Demo conceptual de Nova Studio",
    eyebrow: "OdontologÃ­a integral en Palermo, CABA",
    title: "Cuidamos tu sonrisa con tecnologÃ­a, calidez y criterio clÃ­nico.",
    description:
      "Una experiencia modelo para una clÃ­nica dental moderna: tratamientos claros, primera evaluaciÃ³n guiada y un recorrido pensado para que el paciente sepa quÃ© hacer desde el primer mensaje.",
    primaryCta: "Simular consulta",
    secondaryCta: "Ver tratamientos",
    primaryHref: dentalNovaBrand.whatsappHref,
    secondaryHref: "#servicios",
    statusLabel: "Turnos demo",
    previewItems: ["Implantes", "Ortodoncia", "Urgencias"],
    notificationTitle: "Consulta recibida",
    notificationText: "Primera evaluaciÃ³n coordinada",
    microcopy:
      "Demo conceptual: el WhatsApp se conecta al nÃºmero real al publicar para un cliente.",
    visual: {
      imageSrc: "/odontologia/hero.png",
      imageAlt:
        "Dentista conversando con una paciente en un consultorio moderno",
      trustBadge: "Demo",
      appointmentEyebrow: "PrÃ³ximo paso",
      appointmentTitle: "EvaluaciÃ³n inicial",
      appointmentMeta: ["Palermo", "24 hs hÃ¡biles"],
      detailEyebrow: "Tratamientos",
    },
    stats: [
      { value: "Eval.", label: "inicial" },
      { value: "Plan", label: "claro" },
      { value: "WhatsApp", label: "demo" },
    ],
  },
  sectionHeadings: {
    services: {
      eyebrow: "Tratamientos",
      title: "OdontologÃ­a integral para cada etapa de tu sonrisa.",
      description:
        "AtenciÃ³n profesional para resolver urgencias, planificar tratamientos y mantener tu salud bucal con seguimiento cercano.",
    },
    portfolio: {
      eyebrow: "Experiencia",
      title: "Una clÃ­nica pensada para que llegues con tranquilidad.",
      description:
        "Desde el primer mensaje hasta el seguimiento posterior, cada paso estÃ¡ diseÃ±ado para que sepas quÃ© esperar.",
    },
    trust: {
      eyebrow: "Confianza clínica",
      title: "Señales claras para pedir turno con tranquilidad.",
      description:
        "La demo prioriza diagnóstico claro, planificación y seguimiento para que la experiencia se perciba médica, no de agencia.",
    },
    process: {
      eyebrow: "Primera evaluaciÃ³n",
      title: "Un proceso simple para empezar con informaciÃ³n clara.",
      description:
        "Escuchamos tu consulta, evaluamos tu caso y te orientamos sobre el tratamiento mÃ¡s conveniente.",
    },
    pricing: {
      eyebrow: "AtenciÃ³n",
      title: "Opciones claras segÃºn el tipo de consulta.",
      description:
        "Cada paciente necesita un diagnÃ³stico propio. Por eso priorizamos una evaluaciÃ³n inicial antes de definir valores finales.",
    },
    testimonials: {
      eyebrow: "Confianza",
      title: "Testimonios modelo para mostrar prueba social sin fingir un caso real.",
      description:
        "Estos textos son ejemplos de contenido para la demo conceptual, no reseÃ±as de pacientes reales.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Dudas comunes antes de pedir turno.",
      description:
        "Queremos que llegues a la primera consulta con informaciÃ³n clara y sin sorpresas.",
    },
  },
  services: [
    {
      title: "Implantes dentales seguros y personalizados",
      description:
        "PlanificaciÃ³n precisa, evaluaciÃ³n previa y seguimiento profesional para recuperar funciÃ³n, estÃ©tica y confianza al sonreÃ­r.",
    },
    {
      title: "Ortodoncia estÃ©tica",
      description:
        "Alternativas discretas para alinear tu sonrisa con controles ordenados y una experiencia cÃ³moda durante el tratamiento.",
    },
    {
      title: "EstÃ©tica dental",
      description:
        "Blanqueamiento, carillas y diseÃ±o de sonrisa con una mirada natural, cuidando armonÃ­a facial y salud bucal.",
    },
    {
      title: "Urgencias odontolÃ³gicas",
      description:
        "AtenciÃ³n para dolor, fracturas, inflamaciÃ³n o molestias que necesitan una respuesta rÃ¡pida y orientaciÃ³n profesional.",
    },
    {
      title: "AtenciÃ³n familiar",
      description:
        "Controles, limpiezas y tratamientos para adultos, jÃ³venes y niÃ±os en un entorno cercano y confiable.",
    },
    {
      title: "Primera evaluaciÃ³n",
      description:
        "Revisamos tu caso, respondemos dudas y te explicamos el camino recomendado antes de iniciar cualquier tratamiento.",
    },
  ],
  portfolio: [
    {
      niche: "DiagnÃ³stico",
      title: "Primera consulta sin vueltas",
      result:
        "Te explicamos quÃ© estÃ¡ pasando, quÃ© opciones tenÃ©s y quÃ© pasos conviene seguir.",
      imageSrc: "/odontologia/hero.png",
      visualBadge: "EvaluaciÃ³n",
      visualDetail: "DiagnÃ³stico claro",
      visualPosition: "50% 42%",
    },
    {
      niche: "TecnologÃ­a",
      title: "PlanificaciÃ³n precisa",
      result:
        "Usamos recursos digitales para evaluar mejor cada caso y planificar tratamientos con mÃ¡s seguridad.",
      imageSrc: "/odontologia/hero.png",
      visualBadge: "TecnologÃ­a",
      visualDetail: "Plan digital",
      visualPosition: "58% 46%",
    },
    {
      niche: "CercanÃ­a",
      title: "Seguimiento personalizado",
      result:
        "AcompaÃ±amos el proceso con controles, indicaciones claras y comunicaciÃ³n directa.",
      imageSrc: "/odontologia/hero.png",
      visualBadge: "Seguimiento",
      visualDetail: "Control cercano",
      visualPosition: "42% 50%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Escribinos por WhatsApp",
      description:
        "Contanos quÃ© necesitÃ¡s, si tenÃ©s dolor o quÃ© tratamiento te interesa consultar.",
    },
    {
      step: "02",
      title: "Coordinamos tu turno",
      description:
        "Te ofrecemos horarios disponibles en Palermo y te indicamos si hace falta llevar estudios previos.",
    },
    {
      step: "03",
      title: "Realizamos la evaluaciÃ³n",
      description:
        "Revisamos tu caso, resolvemos dudas y definimos las opciones de tratamiento posibles.",
    },
    {
      step: "04",
      title: "Plan personalizado",
      description:
        "RecibÃ­s una recomendaciÃ³n clara con pasos, tiempos estimados y cuidados necesarios.",
    },
  ],
  pricing: [
    {
      name: "Consulta inicial",
      price: "Primera evaluaciÃ³n",
      description: "Para entender tu caso y definir el mejor camino.",
      features: [
        "RevisiÃ³n odontolÃ³gica",
        "OrientaciÃ³n profesional",
        "Plan de pasos recomendado",
        "CoordinaciÃ³n por WhatsApp",
      ],
    },
    {
      name: "Tratamientos personalizados",
      price: "SegÃºn diagnÃ³stico",
      description: "Implantes, ortodoncia, estÃ©tica dental y rehabilitaciÃ³n.",
      highlighted: true,
      features: [
        "EvaluaciÃ³n del caso",
        "Opciones de tratamiento",
        "Tiempos estimados",
        "Seguimiento clÃ­nico",
        "Indicaciones claras",
      ],
    },
    {
      name: "Urgencias",
      price: "Prioridad",
      description: "Para dolor, fracturas, inflamaciÃ³n o molestias repentinas.",
      features: [
        "Contacto rÃ¡pido",
        "OrientaciÃ³n inicial",
        "Turno prioritario",
        "Indicaciones de cuidado",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Ejemplo de testimonio para mostrar cÃ³mo se verÃ­a una reseÃ±a breve enfocada en claridad, trato y confianza.",
      author: "Testimonio modelo",
      detail: "Contenido demostrativo",
    },
    {
      quote:
        "La secciÃ³n puede adaptarse con reseÃ±as reales del negocio cuando el cliente autorice su uso comercial.",
      author: "Prueba social modelo",
      detail: "Demo conceptual",
    },
    {
      quote:
        "El objetivo es enseÃ±ar el formato: mensaje humano, resultado esperado y contexto del tratamiento.",
      author: "Formato de reseÃ±a",
      detail: "Ejemplo no real",
    },
  ],
  faq: [
    {
      question: "Â¿Necesito una consulta antes de saber el precio?",
      answer:
        "SÃ­. En tratamientos como implantes, ortodoncia o estÃ©tica dental es importante evaluar tu caso para indicar un plan responsable.",
    },
    {
      question: "Â¿Puedo pedir turno por WhatsApp?",
      answer:
        "SÃ­. Esta demo muestra un flujo preparado para WhatsApp; al publicar para un cliente se conecta el nÃºmero real del negocio.",
    },
    {
      question: "Â¿Atienden urgencias odontolÃ³gicas?",
      answer:
        "SÃ­. Recibimos consultas por dolor, fracturas, inflamaciÃ³n y molestias repentinas con coordinaciÃ³n previa.",
    },
    {
      question: "Â¿DÃ³nde estÃ¡ ubicada la clÃ­nica?",
      answer:
        "Estamos en Palermo, CABA, cerca de avenidas principales y con fÃ¡cil acceso en transporte pÃºblico.",
    },
  ],
  location: {
    eyebrow: "UbicaciÃ³n",
    title: "Estamos en Palermo, CABA.",
    description:
      "La clÃ­nica estÃ¡ ubicada en una zona accesible, ideal para pacientes que trabajan o viven cerca de Palermo, Recoleta, Belgrano y Almagro.",
    address: dentalNovaBrand.location,
    neighborhood: "Palermo, Ciudad AutÃ³noma de Buenos Aires",
    hours,
    mapLabel: "Av. Santa Fe 2842",
  },
  contact: {
    title: "SimulÃ¡ una primera evaluaciÃ³n.",
    description:
      "Este formulario es demostrativo. Para usarlo con un cliente real, Nova Studio conecta el WhatsApp, el formulario y los datos comerciales definitivos.",
    email: dentalNovaBrand.email,
    whatsapp: dentalNovaBrand.whatsapp,
    whatsappHref: dentalNovaBrand.whatsappHref,
    formLabels: {
      name: "Nombre",
      reason: "Motivo de consulta",
      message: "Mensaje",
    },
    formPlaceholders: {
      name: "Tu nombre",
      reason: "Ej: implantes, ortodoncia, urgencia",
      message: "Contanos brevemente quÃ© necesitÃ¡s.",
    },
    submitLabel: "Simular consulta",
  },
  pricingCta: {
    href: "#contacto",
    label: "Simular consulta",
  },
  floatingCta: {
    href: "#contacto",
    label: "Ver consulta",
  },
};

