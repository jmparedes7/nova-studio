import type {
  BusinessBrand,
  ContactData,
  FaqItem,
  HeroData,
  LocationData,
  PortfolioItem,
  PricingPlan,
  ProcessStep,
  SectionCopy,
  ServiceItem,
  TestimonialItem,
} from "@/templates/types";

const whatsappMessage =
  "Hola Clínica Dental Nova, quiero solicitar una primera evaluación odontológica.";
const whatsappHref = "#contacto";

const hours = [
  "Lunes a viernes de 9:00 a 19:00",
  "Sábados de 9:00 a 13:00",
  "Urgencias con coordinación previa",
];

export const dentalNovaBrand: BusinessBrand = {
  businessName: "Clínica Dental Nova",
  industry: "Odontología integral",
  location: "Av. Santa Fe 2842, Palermo, CABA",
  whatsapp: "WhatsApp demo: pendiente de conectar al número real",
  email: "Demo conceptual de Nova Studio",
  hours,
  whatsappMessage,
  whatsappHref,
};

export const odontologiaLanding: {
  brand: BusinessBrand;
  hero: HeroData;
  sectionHeadings: {
    services: SectionCopy;
    portfolio: SectionCopy;
    process: SectionCopy;
    pricing: SectionCopy;
    testimonials: SectionCopy;
    faq: SectionCopy;
  };
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  testimonials: TestimonialItem[];
  faq: FaqItem[];
  location: LocationData;
  contact: ContactData;
} = {
  brand: dentalNovaBrand,
  hero: {
    businessName: dentalNovaBrand.businessName,
    demoLabel: "Demo conceptual de Nova Studio",
    eyebrow: "Odontología integral en Palermo, CABA",
    title: "Cuidamos tu sonrisa con tecnología, calidez y criterio clínico.",
    description:
      "Esta demo muestra cómo podría verse una landing premium para una clínica dental: implantes, ortodoncia estética, urgencias y odontología familiar con una primera evaluación clara.",
    primaryCta: "Ver flujo de WhatsApp",
    secondaryCta: "Ver tratamientos",
    primaryHref: dentalNovaBrand.whatsappHref,
    secondaryHref: "#servicios",
    statusLabel: "Turnos disponibles",
    previewItems: ["Implantes", "Ortodoncia", "Urgencias"],
    notificationTitle: "Turno solicitado",
    notificationText: "Primera evaluación por WhatsApp",
    stats: [
      { value: "Demo", label: "conceptual" },
      { value: "CTA", label: "WhatsApp" },
      { value: "SEO", label: "local" },
    ],
  },
  sectionHeadings: {
    services: {
      eyebrow: "Tratamientos",
      title: "Odontología integral para cada etapa de tu sonrisa.",
      description:
        "Atención profesional para resolver urgencias, planificar tratamientos y mantener tu salud bucal con seguimiento cercano.",
    },
    portfolio: {
      eyebrow: "Experiencia",
      title: "Una clínica pensada para que llegues con tranquilidad.",
      description:
        "Desde el primer mensaje hasta el seguimiento posterior, cada paso está diseñado para que sepas qué esperar.",
    },
    process: {
      eyebrow: "Primera evaluación",
      title: "Un proceso simple para empezar con información clara.",
      description:
        "Escuchamos tu consulta, evaluamos tu caso y te orientamos sobre el tratamiento más conveniente.",
    },
    pricing: {
      eyebrow: "Atención",
      title: "Opciones claras según el tipo de consulta.",
      description:
        "Cada paciente necesita un diagnóstico propio. Por eso priorizamos una evaluación inicial antes de definir valores finales.",
    },
    testimonials: {
      eyebrow: "Confianza",
      title: "Testimonios modelo para mostrar prueba social sin fingir un caso real.",
      description:
        "Estos textos son ejemplos de contenido para la demo conceptual, no reseñas de pacientes reales.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Dudas comunes antes de pedir turno.",
      description:
        "Queremos que llegues a la primera consulta con información clara y sin sorpresas.",
    },
  },
  services: [
    {
      title: "Implantes dentales seguros y personalizados",
      description:
        "Planificación precisa, evaluación previa y seguimiento profesional para recuperar función, estética y confianza al sonreír.",
    },
    {
      title: "Ortodoncia estética",
      description:
        "Alternativas discretas para alinear tu sonrisa con controles ordenados y una experiencia cómoda durante el tratamiento.",
    },
    {
      title: "Estética dental",
      description:
        "Blanqueamiento, carillas y diseño de sonrisa con una mirada natural, cuidando armonía facial y salud bucal.",
    },
    {
      title: "Urgencias odontológicas",
      description:
        "Atención para dolor, fracturas, inflamación o molestias que necesitan una respuesta rápida y orientación profesional.",
    },
    {
      title: "Atención familiar",
      description:
        "Controles, limpiezas y tratamientos para adultos, jóvenes y niños en un entorno cercano y confiable.",
    },
    {
      title: "Primera evaluación",
      description:
        "Revisamos tu caso, respondemos dudas y te explicamos el camino recomendado antes de iniciar cualquier tratamiento.",
    },
  ],
  portfolio: [
    {
      niche: "Diagnóstico",
      title: "Primera consulta sin vueltas",
      result:
        "Te explicamos qué está pasando, qué opciones tenés y qué pasos conviene seguir.",
    },
    {
      niche: "Tecnología",
      title: "Planificación precisa",
      result:
        "Usamos recursos digitales para evaluar mejor cada caso y planificar tratamientos con más seguridad.",
    },
    {
      niche: "Cercanía",
      title: "Seguimiento personalizado",
      result:
        "Acompañamos el proceso con controles, indicaciones claras y comunicación directa.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Escribinos por WhatsApp",
      description:
        "Contanos qué necesitás, si tenés dolor o qué tratamiento te interesa consultar.",
    },
    {
      step: "02",
      title: "Coordinamos tu turno",
      description:
        "Te ofrecemos horarios disponibles en Palermo y te indicamos si hace falta llevar estudios previos.",
    },
    {
      step: "03",
      title: "Realizamos la evaluación",
      description:
        "Revisamos tu caso, resolvemos dudas y definimos las opciones de tratamiento posibles.",
    },
    {
      step: "04",
      title: "Plan personalizado",
      description:
        "Recibís una recomendación clara con pasos, tiempos estimados y cuidados necesarios.",
    },
  ],
  pricing: [
    {
      name: "Consulta inicial",
      price: "Primera evaluación",
      description: "Para entender tu caso y definir el mejor camino.",
      features: [
        "Revisión odontológica",
        "Orientación profesional",
        "Plan de pasos recomendado",
        "Coordinación por WhatsApp",
      ],
    },
    {
      name: "Tratamientos personalizados",
      price: "Según diagnóstico",
      description: "Implantes, ortodoncia, estética dental y rehabilitación.",
      highlighted: true,
      features: [
        "Evaluación del caso",
        "Opciones de tratamiento",
        "Tiempos estimados",
        "Seguimiento clínico",
        "Indicaciones claras",
      ],
    },
    {
      name: "Urgencias",
      price: "Prioridad",
      description: "Para dolor, fracturas, inflamación o molestias repentinas.",
      features: [
        "Contacto rápido",
        "Orientación inicial",
        "Turno prioritario",
        "Indicaciones de cuidado",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Ejemplo de testimonio para mostrar cómo se vería una reseña breve enfocada en claridad, trato y confianza.",
      author: "Testimonio modelo",
      detail: "Contenido demostrativo",
    },
    {
      quote:
        "La sección puede adaptarse con reseñas reales del negocio cuando el cliente autorice su uso comercial.",
      author: "Prueba social modelo",
      detail: "Demo conceptual",
    },
    {
      quote:
        "El objetivo es enseñar el formato: mensaje humano, resultado esperado y contexto del tratamiento.",
      author: "Formato de reseña",
      detail: "Ejemplo no real",
    },
  ],
  faq: [
    {
      question: "Necesito una consulta antes de saber el precio?",
      answer:
        "Sí. En tratamientos como implantes, ortodoncia o estética dental es importante evaluar tu caso para indicar un plan responsable.",
    },
    {
      question: "Puedo pedir turno por WhatsApp?",
      answer:
        "Sí. Esta demo muestra un flujo preparado para WhatsApp; al publicar para un cliente se conecta el número real del negocio.",
    },
    {
      question: "Atienden urgencias odontológicas?",
      answer:
        "Sí. Recibimos consultas por dolor, fracturas, inflamación y molestias repentinas con coordinación previa.",
    },
    {
      question: "Dónde está ubicada la clínica?",
      answer:
        "Estamos en Palermo, CABA, cerca de avenidas principales y con fácil acceso en transporte público.",
    },
  ],
  location: {
    eyebrow: "Ubicación",
    title: "Estamos en Palermo, CABA.",
    description:
      "La clínica está ubicada en una zona accesible, ideal para pacientes que trabajan o viven cerca de Palermo, Recoleta, Belgrano y Almagro.",
    address: dentalNovaBrand.location,
    neighborhood: "Palermo, Ciudad Autónoma de Buenos Aires",
    hours,
    mapLabel: "Av. Santa Fe 2842",
  },
  contact: {
    title: "Simulá una primera evaluación.",
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
      message: "Contanos brevemente qué necesitás.",
    },
    submitLabel: "Simular consulta",
  },
};
