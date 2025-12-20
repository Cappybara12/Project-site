"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function ConstructorasPage() {
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
      en: "after-sales service and information processes in construction companies",
      es: "atención posventa y procesos informativos en constructoras"
    },
    subtitle: {
      en: "Construction companies handle a high volume of inquiries about projects, prices, availability, deliveries, documentation, warranties and after-sales. Our AI agents automate customer service on WhatsApp, Instagram, Messenger, email and calls, allowing instant responses, organized requests and structured execution of internal processes.",
      es: "Las constructoras manejan un alto volumen de consultas sobre proyectos, precios, disponibilidad, entregas, escrituración, garantías y posventa. Nuestros agentes de IA automatizan la atención en WhatsApp, Instagram, Messenger, email y llamadas, permitiendo responder al instante, organizar solicitudes y ejecutar procesos internos de forma estructurada."
    }
  };

  const statements = [
    {
      title: {
        en: "Automated attention for leads and buyers",
        es: "Atención automatizada para leads y compradores"
      },
      description: {
        en: "The agent responds to inquiries about projects, typologies, locations, reference prices, availability, estimated dates and required documentation, maintaining clear and consistent communication.",
        es: "El agente responde consultas sobre proyectos, tipologías, ubicaciones, precios de referencia, disponibilidad, fechas estimadas y documentación requerida, manteniendo una comunicación clara y consistente."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Structured after-sales management",
        es: "Gestión estructurada de posventa"
      },
      description: {
        en: "Automates requests related to warranties, repairs, deliveries, documentation, claims and case follow-up, capturing all necessary information for the human team.",
        es: "Automatiza solicitudes relacionadas con garantías, reparaciones, entregas, escrituración, reclamos y seguimiento de casos, capturando toda la información necesaria para el equipo humano."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Automatic classification and registration of requests",
        es: "Clasificación y registro automático de solicitudes"
      },
      description: {
        en: "Each interaction is organized by type, project, apartment or client, and recorded in internal systems or tracking tools to guarantee traceability.",
        es: "Cada interacción se organiza por tipo, proyecto, apartamento o cliente, y se registra en sistemas internos o herramientas de seguimiento para garantizar trazabilidad."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Integration with internal systems",
        es: "Integración con sistemas internos"
      },
      description: {
        en: "The agent can connect to CRMs, after-sales tracking systems, databases or internal files to check, create or update information in real time.",
        es: "El agente puede conectarse a CRMs, sistemas de seguimiento posventa, bases de datos o archivos internos para consultar, crear o actualizar información en tiempo real."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "60%",
      label: {
        en: "less operational workload in after-sales service",
        es: "menos carga operativa en atención posventa"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster request and claim management speed",
        es: "más velocidad en la gestión de solicitudes y reclamos"
      }
    },
    {
      value: "40%",
      label: {
        en: "improvement in organization and traceability of cases",
        es: "mejora en organización y trazabilidad de casos"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent handle complete after-sales processes?",
        es: "¿El agente puede manejar procesos de posventa completos?"
      },
      answer: {
        en: "Yes. It can capture information, classify the type of request, record the case and send information to the responsible team for follow-up.",
        es: "Sí. Puede capturar información, clasificar el tipo de solicitud, registrar el caso y enviar la información al equipo encargado para su seguimiento."
      }
    },
    {
      question: {
        en: "Can it integrate with internal construction company tools?",
        es: "¿Puede integrarse con herramientas internas de la constructora?"
      },
      answer: {
        en: "Yes. We can integrate it with CRMs, tracking systems, control sheets, databases or proprietary platforms.",
        es: "Sí. Podemos integrarlo con CRMs, sistemas de seguimiento, hojas de control, bases de datos o plataformas propias."
      }
    },
    {
      question: {
        en: "Can the agent handle multiple projects at the same time?",
        es: "¿El agente puede atender múltiples proyectos al mismo tiempo?"
      },
      answer: {
        en: "Yes. It can differentiate projects, stages, locations and client types without problem.",
        es: "Sí. Puede diferenciar proyectos, etapas, ubicaciones y tipos de cliente sin problema."
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

