"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function EmpresasLogisticasPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Custom systems to optimize operations",
      es: "Sistemas a la medida para optimizar operaciones"
    },
    titlePart2: {
      en: "improve traceability and coordinate logistics processes from start to finish",
      es: "mejorar trazabilidad y coordinar procesos logísticos de principio a fin"
    },
    subtitle: {
      en: "Logistics companies operate with multiple variables: routes, statuses, timelines, documents, clients and suppliers. Through Custom Projects, we develop customized platforms and systems that centralize information, automate operational flows and offer complete visibility of each operation.",
      es: "Las empresas de logística operan con múltiples variables: rutas, estados, tiempos, documentos, clientes y proveedores. A través de Custom Projects, desarrollamos plataformas y sistemas personalizados que centralizan la información, automatizan flujos operativos y ofrecen visibilidad completa de cada operación."
    }
  };

  const statements = [
    {
      title: {
        en: "Custom platforms for operational control",
        es: "Plataformas personalizadas para control operativo"
      },
      description: {
        en: "We develop systems to manage orders, shipments, routes, statuses, incidents and clients in a single environment, adapted to the real operation of each company.",
        es: "Desarrollamos sistemas para gestionar órdenes, envíos, rutas, estados, incidencias y clientes en un solo entorno, adaptado a la operación real de cada empresa."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Complete real-time traceability",
        es: "Trazabilidad completa en tiempo real"
      },
      description: {
        en: "Centralizes tracking of packages, cargo and deliveries with clear statuses, defined milestones and visibility for internal teams and clients.",
        es: "Centraliza el seguimiento de paquetes, cargas y entregas con estados claros, hitos definidos y visibilidad para equipos internos y clientes."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integration with systems and external actors",
        es: "Integración con sistemas y actores externos"
      },
      description: {
        en: "We connect platforms with ERPs, inventory systems, clients, carriers, external operators and monitoring tools to keep everything synchronized.",
        es: "Conectamos plataformas con ERPs, sistemas de inventario, clientes, transportistas, operadores externos y herramientas de monitoreo para mantener todo sincronizado."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Automation of logistics processes",
        es: "Automatización de procesos logísticos"
      },
      description: {
        en: "We digitalize and automate processes like route assignment, notifications, validations, delivery records, incident management and report generation.",
        es: "Digitalizamos y automatizamos procesos como asignación de rutas, notificaciones, validaciones, registros de entrega, gestión de incidencias y generación de reportes."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "improvement in visibility and control of operations",
        es: "mejora en visibilidad y control de operaciones"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster speed in incident management",
        es: "más velocidad en gestión de incidencias"
      }
    },
    {
      value: "40%",
      label: {
        en: "fewer errors derived from manual processes",
        es: "menos errores derivados de procesos manuales"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can you develop systems for different types of logistics?",
        es: "¿Pueden desarrollar sistemas para distintos tipos de logística?"
      },
      answer: {
        en: "Yes. We work with last-mile logistics, cargo transportation, B2B operations, B2C and hybrid models.",
        es: "Sí. Trabajamos con logística de última milla, transporte de carga, operaciones B2B, B2C y modelos híbridos."
      }
    },
    {
      question: {
        en: "Is it possible to integrate the system with clients and suppliers?",
        es: "¿Es posible integrar el sistema con clientes y proveedores?"
      },
      answer: {
        en: "Yes. We design integrations with client systems, carriers, ERPs and external platforms according to needs.",
        es: "Sí. Diseñamos integraciones con sistemas de clientes, transportistas, ERPs y plataformas externas según la necesidad."
      }
    },
    {
      question: {
        en: "Can the systems scale with growth in operational volume?",
        es: "¿Los sistemas pueden escalar con el crecimiento del volumen operativo?"
      },
      answer: {
        en: "Yes. All solutions are built with scalable architectures, prepared to grow in number of shipments, routes and users.",
        es: "Sí. Todas las soluciones se construyen con arquitecturas escalables, preparadas para crecer en número de envíos, rutas y usuarios."
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

