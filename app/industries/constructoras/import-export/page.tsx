"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function ImportExportPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Custom systems to digitalize operations",
      es: "Sistemas a la medida para digitalizar operaciones"
    },
    titlePart2: {
      en: "control processes and centralize information in import and export",
      es: "controlar procesos y centralizar información en importación y exportación"
    },
    subtitle: {
      en: "Import and export operations involve multiple actors, documents, states and critical timelines. Through Custom Projects, we develop systems and platforms designed to organize information, automate operational flows and improve the traceability of each international operation.",
      es: "Las operaciones de importación y exportación involucran múltiples actores, documentos, estados y tiempos críticos. A través de Custom Projects, desarrollamos sistemas y plataformas diseñadas para organizar la información, automatizar flujos operativos y mejorar la trazabilidad de cada operación internacional."
    }
  };

  const statements = [
    {
      title: {
        en: "Custom platforms for operational control",
        es: "Plataformas personalizadas para control operativo"
      },
      description: {
        en: "We develop systems to manage orders, shipments, suppliers, clients, cargo status, logistical milestones and documentation associated with each operation.",
        es: "Desarrollamos sistemas para gestionar órdenes, embarques, proveedores, clientes, estados de carga, hitos logísticos y documentación asociada a cada operación."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Digitalization and automation of documentary processes",
        es: "Digitalización y automatización de procesos documentales"
      },
      description: {
        en: "We automate document management, validations, records, internal approvals and notifications between involved areas.",
        es: "Automatizamos la gestión de documentos, validaciones, registros, aprobaciones internas y notificaciones entre áreas involucradas."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integration with internal and external systems",
        es: "Integración con sistemas internos y externos"
      },
      description: {
        en: "We connect platforms with ERPs, accounting systems, logistics tools, external operators, customs agencies and internal databases.",
        es: "Conectamos plataformas con ERPs, sistemas contables, herramientas logísticas, operadores externos, agencias de aduana y bases de datos internas."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Real-time visibility and traceability",
        es: "Visibilidad y trazabilidad en tiempo real"
      },
      description: {
        en: "Centralizes all information from each operation to have clarity on statuses, timelines, costs and responsibilities in a single environment.",
        es: "Centraliza toda la información de cada operación para tener claridad sobre estados, tiempos, costos y responsabilidades en un solo entorno."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "45%",
      label: {
        en: "reduction in operational management times",
        es: "reducción en tiempos de gestión operativa"
      }
    },
    {
      value: "3x",
      label: {
        en: "improvement in shipment and process traceability",
        es: "mejora en trazabilidad de embarques y procesos"
      }
    },
    {
      value: "40%",
      label: {
        en: "fewer errors associated with manual information handling",
        es: "menos errores asociados a manejo manual de información"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can you develop specific systems for shipment tracking?",
        es: "¿Pueden desarrollar sistemas específicos para seguimiento de embarques?"
      },
      answer: {
        en: "Yes. We design platforms focused on status control, logistical milestones and documentation of each shipment.",
        es: "Sí. Diseñamos plataformas enfocadas en el control de estados, hitos logísticos y documentación de cada embarque."
      }
    },
    {
      question: {
        en: "Do the systems adapt to different types of operations (maritime, air, land)?",
        es: "¿Los sistemas se adaptan a distintos tipos de operación (marítima, aérea, terrestre)?"
      },
      answer: {
        en: "Yes. Developments adapt to the type of operation and specific flows of each company.",
        es: "Sí. Los desarrollos se adaptan al tipo de operación y a los flujos específicos de cada empresa."
      }
    },
    {
      question: {
        en: "Is it possible to integrate these systems with existing ERPs or logistics tools?",
        es: "¿Es posible integrar estos sistemas con ERPs o herramientas logísticas existentes?"
      },
      answer: {
        en: "Yes. We can integrate with ERPs, accounting systems, logistics platforms and external services according to business needs.",
        es: "Sí. Podemos integrar con ERPs, sistemas contables, plataformas logísticas y servicios externos según la necesidad del negocio."
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

