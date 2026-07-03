import type {
  ContactData,
  FaqItem,
  HeroData,
  PortfolioItem,
  PricingPlan,
  ProcessStep,
  ServiceItem,
} from "@/templates/types";

export const odontologiaLanding: {
  hero: HeroData;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  faq: FaqItem[];
  contact: ContactData;
} = {
  hero: {
    eyebrow: "Template premium para clinicas odontologicas",
    title: "Mas turnos para tratamientos de alto valor.",
    description:
      "Una landing clara, confiable y mobile first para clinicas dentales que quieren captar pacientes para implantes, ortodoncia, estetica dental y urgencias.",
    primaryCta: "Reservar turno",
    secondaryCta: "Ver tratamientos",
    primaryHref: "#contacto",
    secondaryHref: "#servicios",
    stats: [
      { value: "24 hs", label: "respuesta por WhatsApp" },
      { value: "4.9/5", label: "satisfaccion de pacientes" },
      { value: "+120", label: "sonrisas atendidas al mes" },
    ],
  },
  services: [
    {
      title: "Implantes dentales",
      description:
        "Seccion orientada a explicar seguridad, diagnostico previo, materiales y beneficios para pacientes que comparan opciones.",
    },
    {
      title: "Ortodoncia invisible",
      description:
        "Bloque ideal para destacar comodidad, estetica, controles y resultados esperados sin saturar de informacion tecnica.",
    },
    {
      title: "Estetica dental",
      description:
        "Copy preparado para blanqueamiento, carillas y diseno de sonrisa, con foco en confianza y resultado visual.",
    },
    {
      title: "Urgencias odontologicas",
      description:
        "CTA rapido para dolor, fracturas o molestias, con contacto visible desde mobile y mensajes directos a WhatsApp.",
    },
    {
      title: "Odontologia familiar",
      description:
        "Seccion para transmitir cercania, prevencion y continuidad de atencion para adultos, jovenes y ninos.",
    },
    {
      title: "Diagnostico digital",
      description:
        "Espacio para reforzar tecnologia, planificacion y profesionalismo antes de que el paciente pida un turno.",
    },
  ],
  portfolio: [
    {
      niche: "Confianza",
      title: "Antes de pedir turno",
      result:
        "La pagina responde dudas clave: experiencia, tratamientos, ubicacion, testimonios y canales de contacto.",
    },
    {
      niche: "Conversion",
      title: "CTA visible en mobile",
      result:
        "WhatsApp y formulario aparecen en momentos naturales, sin interrumpir la lectura ni parecer agresivos.",
    },
    {
      niche: "Premium",
      title: "Imagen clinica moderna",
      result:
        "La estetica transmite limpieza, precision y calidad para sostener tratamientos de mayor ticket.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Consulta inicial",
      description:
        "El paciente cuenta que necesita y deja sus datos para recibir orientacion sin friccion.",
    },
    {
      step: "02",
      title: "Evaluacion",
      description:
        "La clinica coordina diagnostico, estudios o revision segun el tratamiento solicitado.",
    },
    {
      step: "03",
      title: "Plan de tratamiento",
      description:
        "Se explica el camino, tiempos aproximados, cuidados y opciones de pago si corresponde.",
    },
    {
      step: "04",
      title: "Seguimiento",
      description:
        "La landing tambien puede apoyar controles, mantenimiento y consultas posteriores.",
    },
  ],
  pricing: [
    {
      name: "Consulta",
      price: "Desde $0",
      description: "Primer contacto para orientar al paciente.",
      features: [
        "WhatsApp directo",
        "Formulario simple",
        "Ubicacion visible",
        "Horarios de atencion",
      ],
    },
    {
      name: "Tratamientos",
      price: "A evaluar",
      description: "Para servicios de mayor valor que requieren diagnostico.",
      highlighted: true,
      features: [
        "Implantes",
        "Ortodoncia",
        "Estetica dental",
        "Plan personalizado",
        "Seguimiento profesional",
      ],
    },
    {
      name: "Urgencias",
      price: "Prioridad",
      description: "Contacto rapido para casos que no pueden esperar.",
      features: [
        "CTA destacado",
        "Mensaje prearmado",
        "Respuesta rapida",
        "Indicaciones iniciales",
      ],
    },
  ],
  faq: [
    {
      question: "Necesito una consulta antes de saber el precio?",
      answer:
        "Si. En tratamientos como implantes, ortodoncia o estetica dental conviene evaluar el caso para indicar el plan correcto.",
    },
    {
      question: "Puedo pedir turno por WhatsApp?",
      answer:
        "Si. El objetivo del template es facilitar el primer contacto desde mobile con un llamado a la accion claro.",
    },
    {
      question: "La pagina sirve para campañas de anuncios?",
      answer:
        "Si. La estructura esta pensada para recibir trafico de Google, Meta o recomendaciones y convertirlo en consultas.",
    },
    {
      question: "Se puede adaptar a una clinica real?",
      answer:
        "Si. Cambiamos tratamientos, fotos, testimonios, ubicacion, tono de marca y llamados a la accion.",
    },
  ],
  contact: {
    title: "Agenda una evaluacion y recibe una orientacion clara.",
    description:
      "Deja tus datos y el tratamiento que te interesa. El equipo puede responder por WhatsApp y ayudarte a coordinar el mejor horario.",
    email: "turnos@clinicadentaldemo.com",
    whatsapp: "+54 9 11 1234-5678",
  },
};
