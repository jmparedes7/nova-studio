import type { TemplateNiche } from "@/templates/types";

export const templateNiches: TemplateNiche[] = [
  {
    key: "odontologia",
    name: "Odontologia",
    audience: "consultorios odontologicos y clinicas pequenas",
    mainGoal: "generar turnos para tratamientos de alto valor",
    conversionAction: "WhatsApp o formulario de reserva",
    tone: "calido, profesional y confiable",
  },
  {
    key: "psicologia",
    name: "Psicologia",
    audience: "psicologos y centros terapeuticos",
    mainGoal: "transmitir confianza y facilitar primeras consultas",
    conversionAction: "formulario privado o WhatsApp",
    tone: "sereno, humano y claro",
  },
  {
    key: "veterinaria",
    name: "Veterinaria",
    audience: "veterinarias, pet shops y servicios para mascotas",
    mainGoal: "aumentar consultas, turnos y visitas al local",
    conversionAction: "WhatsApp, mapa y llamada rapida",
    tone: "cercano, activo y confiable",
  },
  {
    key: "gimnasio",
    name: "Gimnasio",
    audience: "gimnasios, estudios fitness y entrenadores",
    mainGoal: "captar pruebas, membresias y consultas por planes",
    conversionAction: "WhatsApp o reserva de clase",
    tone: "energetico, directo y aspiracional",
  },
  {
    key: "servicios-profesionales",
    name: "Servicios profesionales",
    audience: "abogados, contadores, consultores y tecnicos",
    mainGoal: "convertir visitas en consultas calificadas",
    conversionAction: "formulario y llamada de diagnostico",
    tone: "preciso, premium y resolutivo",
  },
];
