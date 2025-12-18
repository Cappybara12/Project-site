"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function ConcesionariosPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "AI automation to manage leads",
      es: "Automatización con IA para gestionar leads"
    },
    titlePart2: {
      en: "respond to inquiries and improve customer experience in dealerships",
      es: "responder consultas y mejorar la experiencia del cliente en concesionarios"
    },
    subtitle: {
      en: "Dealerships receive a high volume of questions about models, availability, financing, appointments, parts and services. Our AI agents automate customer service on WhatsApp, Instagram, Messenger, email and calls to respond instantly, qualify prospects and execute internal processes without manual intervention.",
      es: "Los concesionarios reciben un alto volumen de preguntas sobre modelos, disponibilidad, financiación, citas, repuestos y servicios. Nuestros agentes de IA automatizan la atención en WhatsApp, Instagram, Messenger, email y llamadas para responder al instante, calificar prospectos y ejecutar procesos internos sin intervención manual."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate attention for inquiries about vehicles and services",
        es: "Atención inmediata para consultas sobre vehículos y servicios"
      },
      description: {
        en: "The agent responds instantly to common questions: availability, delivery times, review processes, required documents, locations, hours and more. Always with a professional tone consistent with the dealership's identity.",
        es: "El agente responde al instante preguntas comunes: disponibilidad, tiempos de entrega, procesos de revisión, documentos requeridos, sedes, horarios y más. Siempre con un tono profesional y coherente con la identidad del concesionario."
      }
    },
    {
      title: {
        en: "Automatic lead qualification",
        es: "Calificación automática de leads"
      },
      description: {
        en: "Identifies user intent, collects key data, validates information and classifies the type of need, leaving prospects ready for your sales team.",
        es: "Identifica la intención del usuario, recopila datos clave, valida información y clasifica el tipo de necesidad, dejando listos los prospectos para tu equipo comercial."
      }
    },
    {
      title: {
        en: "Automation of appointments and administrative processes",
        es: "Automatización de citas y procesos administrativos"
      },
      description: {
        en: "The agent can manage appointments for test drives, workshops, reviews, maintenance or commercial consultations, according to internal availability.",
        es: "El agente puede gestionar agendamientos para test drives, talleres, revisiones, mantenimientos o asesorías comerciales, según disponibilidad interna."
      }
    },
    {
      title: {
        en: "Integrated with your internal systems",
        es: "Integrado a tus sistemas internos"
      },
      description: {
        en: "Checks inventories, records leads, updates information or sends data to your CRM or ERP to maintain a more organized and efficient operation.",
        es: "Consulta inventarios, registra leads, actualiza información o envía datos a tu CRM o ERP para mantener una operación más ordenada y eficiente."
      }
    }
  ];

  const results = [
    {
      value: "3x",
      label: {
        en: "faster attention to prospects",
        es: "más velocidad en la atención a prospectos"
      }
    },
    {
      value: "40%",
      label: {
        en: "better conversion of qualified leads",
        es: "mejor conversión de leads calificados"
      }
    },
    {
      value: "50%",
      label: {
        en: "reduction in operational workload for commercial teams",
        es: "reducción en carga operativa para equipos comerciales"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent handle both sales and after-sales?",
        es: "¿Puede el agente atender tanto ventas como postventa?"
      },
      answer: {
        en: "Yes. It can respond to requests for availability, appointments, parts, services, maintenance and other associated processes.",
        es: "Sí. Puede responder solicitudes de disponibilidad, citas, repuestos, servicios, mantenimiento y otros procesos asociados."
      }
    },
    {
      question: {
        en: "Does the agent integrate with CRM or inventory systems?",
        es: "¿El agente se integra con CRM o sistemas de inventario?"
      },
      answer: {
        en: "Yes. We can connect it with your CRM, ERP or any internal tool to keep information updated.",
        es: "Sí. Podemos conectarlo con tu CRM, ERP o cualquier herramienta interna para mantener la información actualizada."
      }
    },
    {
      question: {
        en: "Can it classify and qualify prospects automatically?",
        es: "¿Puede clasificar y calificar prospectos automáticamente?"
      },
      answer: {
        en: "Yes. The agent collects key information, segments the user and identifies their intent to send ready leads to the sales team.",
        es: "Sí. El agente recopila información clave, segmenta al usuario e identifica su intención para enviar leads listos al equipo comercial."
      }
    }
  ];

  return (
    <>
      <ProductHero {...heroContent} />
      <StatementCards statements={statements} />
      <ResultCards results={results} />
      <ProductFAQ faqs={faqs} />
    </>
  );
}

