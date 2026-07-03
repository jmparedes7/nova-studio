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

const whatsappNumber = "5491112345678";
const whatsappMessage =
  "Hola Clinica Dental Nova, quiero solicitar una primera evaluacion odontologica.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const hours = [
  "Lunes a viernes de 9:00 a 19:00",
  "Sabados de 9:00 a 13:00",
  "Urgencias con coordinacion previa por WhatsApp",
];

export const dentalNovaBrand: BusinessBrand = {
  businessName: "Clinica Dental Nova",
  industry: "Odontologia integral",
  location: "Av. Santa Fe 2842, Palermo, CABA",
  whatsapp: "+54 9 11 1234-5678",
  email: "turnos@clinicadentalnova.com",
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
    eyebrow: "Odontologia integral en Palermo, CABA",
    title: "Cuidamos tu sonrisa con tecnologia, calidez y criterio clinico.",
    description:
      "En Clinica Dental Nova atendemos implantes, ortodoncia estetica, urgencias y odontologia familiar con planes personalizados y una primera evaluacion clara.",
    primaryCta: "Reservar por WhatsApp",
    secondaryCta: "Ver tratamientos",
    primaryHref: dentalNovaBrand.whatsappHref,
    secondaryHref: "#servicios",
    statusLabel: "Turnos disponibles",
    previewItems: ["Implantes", "Ortodoncia", "Urgencias"],
    notificationTitle: "Turno solicitado",
    notificationText: "Primera evaluacion por WhatsApp",
    stats: [
      { value: "24 hs", label: "respuesta en dias habiles" },
      { value: "4.9/5", label: "valoracion de pacientes" },
      { value: "+120", label: "pacientes atendidos al mes" },
    ],
  },
  sectionHeadings: {
    services: {
      eyebrow: "Tratamientos",
      title: "Odontologia integral para cada etapa de tu sonrisa.",
      description:
        "Atencion profesional para resolver urgencias, planificar tratamientos y mantener tu salud bucal con seguimiento cercano.",
    },
    portfolio: {
      eyebrow: "Experiencia",
      title: "Una clinica pensada para que llegues con tranquilidad.",
      description:
        "Desde el primer mensaje hasta el seguimiento posterior, cada paso esta disenado para que sepas que esperar.",
    },
    process: {
      eyebrow: "Primera evaluacion",
      title: "Un proceso simple para empezar con informacion clara.",
      description:
        "Escuchamos tu consulta, evaluamos tu caso y te orientamos sobre el tratamiento mas conveniente.",
    },
    pricing: {
      eyebrow: "Atencion",
      title: "Opciones claras segun el tipo de consulta.",
      description:
        "Cada paciente necesita un diagnostico propio. Por eso priorizamos una evaluacion inicial antes de definir valores finales.",
    },
    testimonials: {
      eyebrow: "Pacientes",
      title: "Historias de pacientes que volvieron a sonreir con confianza.",
      description:
        "La confianza se construye con explicaciones claras, buen trato y resultados sostenibles.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Dudas comunes antes de pedir turno.",
      description:
        "Queremos que llegues a la primera consulta con informacion clara y sin sorpresas.",
    },
  },
  services: [
    {
      title: "Implantes dentales seguros y personalizados",
      description:
        "Planificacion precisa, evaluacion previa y seguimiento profesional para recuperar funcion, estetica y confianza al sonreir.",
    },
    {
      title: "Ortodoncia estetica",
      description:
        "Alternativas discretas para alinear tu sonrisa con controles ordenados y una experiencia comoda durante el tratamiento.",
    },
    {
      title: "Estetica dental",
      description:
        "Blanqueamiento, carillas y diseno de sonrisa con una mirada natural, cuidando armonia facial y salud bucal.",
    },
    {
      title: "Urgencias odontologicas",
      description:
        "Atencion para dolor, fracturas, inflamacion o molestias que necesitan una respuesta rapida y orientacion profesional.",
    },
    {
      title: "Atencion familiar",
      description:
        "Controles, limpiezas y tratamientos para adultos, jovenes y ninos en un entorno cercano y confiable.",
    },
    {
      title: "Primera evaluacion",
      description:
        "Revisamos tu caso, respondemos dudas y te explicamos el camino recomendado antes de iniciar cualquier tratamiento.",
    },
  ],
  portfolio: [
    {
      niche: "Diagnostico",
      title: "Primera consulta sin vueltas",
      result:
        "Te explicamos que esta pasando, que opciones tenes y que pasos conviene seguir.",
    },
    {
      niche: "Tecnologia",
      title: "Planificacion precisa",
      result:
        "Usamos recursos digitales para evaluar mejor cada caso y planificar tratamientos con mas seguridad.",
    },
    {
      niche: "Cercania",
      title: "Seguimiento personalizado",
      result:
        "Acompanamos el proceso con controles, indicaciones claras y comunicacion directa.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Escribinos por WhatsApp",
      description:
        "Contanos que necesitas, si tenes dolor o que tratamiento te interesa consultar.",
    },
    {
      step: "02",
      title: "Coordinamos tu turno",
      description:
        "Te ofrecemos horarios disponibles en Palermo y te indicamos si hace falta llevar estudios previos.",
    },
    {
      step: "03",
      title: "Realizamos la evaluacion",
      description:
        "Revisamos tu caso, resolvemos dudas y definimos las opciones de tratamiento posibles.",
    },
    {
      step: "04",
      title: "Plan personalizado",
      description:
        "Recibis una recomendacion clara con pasos, tiempos estimados y cuidados necesarios.",
    },
  ],
  pricing: [
    {
      name: "Consulta inicial",
      price: "Primera evaluacion",
      description: "Para entender tu caso y definir el mejor camino.",
      features: [
        "Revision odontologica",
        "Orientacion profesional",
        "Plan de pasos recomendado",
        "Coordinacion por WhatsApp",
      ],
    },
    {
      name: "Tratamientos personalizados",
      price: "Segun diagnostico",
      description: "Implantes, ortodoncia, estetica dental y rehabilitacion.",
      highlighted: true,
      features: [
        "Evaluacion del caso",
        "Opciones de tratamiento",
        "Tiempos estimados",
        "Seguimiento clinico",
        "Indicaciones claras",
      ],
    },
    {
      name: "Urgencias",
      price: "Prioridad",
      description: "Para dolor, fracturas, inflamacion o molestias repentinas.",
      features: [
        "Contacto rapido",
        "Orientacion inicial",
        "Turno prioritario",
        "Indicaciones de cuidado",
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Llegue con miedo por un implante y me explicaron todo con mucha paciencia. El proceso fue claro desde el primer dia.",
      author: "Mariana R.",
      detail: "Paciente de implantes dentales",
    },
    {
      quote:
        "Me gusto que no me apuraron. Evaluaron mi caso, me dieron opciones y pude empezar ortodoncia con confianza.",
      author: "Lucas M.",
      detail: "Paciente de ortodoncia estetica",
    },
    {
      quote:
        "Tuve una urgencia un sabado y me orientaron por WhatsApp enseguida. La atencion fue excelente.",
      author: "Sofia P.",
      detail: "Consulta por urgencia odontologica",
    },
  ],
  faq: [
    {
      question: "Necesito una consulta antes de saber el precio?",
      answer:
        "Si. En tratamientos como implantes, ortodoncia o estetica dental es importante evaluar tu caso para indicar un plan responsable.",
    },
    {
      question: "Puedo pedir turno por WhatsApp?",
      answer:
        "Si. Podes escribirnos por WhatsApp, contar brevemente que necesitas y coordinar el horario mas conveniente.",
    },
    {
      question: "Atienden urgencias odontologicas?",
      answer:
        "Si. Recibimos consultas por dolor, fracturas, inflamacion y molestias repentinas con coordinacion previa.",
    },
    {
      question: "Donde esta ubicada la clinica?",
      answer:
        "Estamos en Palermo, CABA, cerca de avenidas principales y con facil acceso en transporte publico.",
    },
  ],
  location: {
    eyebrow: "Ubicacion",
    title: "Estamos en Palermo, CABA.",
    description:
      "La clinica esta ubicada en una zona accesible, ideal para pacientes que trabajan o viven cerca de Palermo, Recoleta, Belgrano y Almagro.",
    address: dentalNovaBrand.location,
    neighborhood: "Palermo, Ciudad Autonoma de Buenos Aires",
    hours,
    mapLabel: "Av. Santa Fe 2842",
  },
  contact: {
    title: "Reserva tu primera evaluacion.",
    description:
      "Escribinos por WhatsApp y contanos que necesitas. Te ayudamos a coordinar un turno y resolver tus primeras dudas.",
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
      message: "Contanos brevemente que necesitas.",
    },
    submitLabel: "Enviar por WhatsApp",
  },
};
