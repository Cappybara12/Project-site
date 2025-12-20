"use client";

import { ProductHero } from "../../products/components/ProductHero";
import { StatementCards } from "../../products/components/StatementCards";
import { ResultCards } from "../../products/components/ResultCards";
import { ProductFAQ } from "../../products/components/ProductFAQ";

export default function ConstructorasCustomPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Custom developments to digitalize processes",
      es: "Desarrollos a la medida para digitalizar procesos"
    },
    titlePart2: {
      en: "centralize information and improve management in construction companies",
      es: "centralizar información y mejorar la gestión en constructoras"
    },
    subtitle: {
      en: "Construction companies handle complex processes ranging from commercial management and customer relations, to construction control, after-sales and documentation. Through Custom Projects, we design and develop systems, platforms and integrations created specifically for the real operation of each construction company.",
      es: "Las constructoras manejan procesos complejos que van desde la gestión comercial y la relación con clientes, hasta el control de obra, posventa y documentación. A través de Custom Projects, diseñamos y desarrollamos sistemas, plataformas e integraciones creadas específicamente para la operación real de cada constructora."
    }
  };

  const statements = [
    {
      title: {
        en: "Custom platforms for commercial and after-sales management",
        es: "Plataformas personalizadas para gestión comercial y posventa"
      },
      description: {
        en: "We develop systems for tracking leads, projects, units, clients, documentation, warranties and after-sales requests, all in a single environment.",
        es: "Desarrollamos sistemas para el seguimiento de leads, proyectos, unidades, clientes, escrituración, garantías y solicitudes de posventa, todo en un solo entorno."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Digitalization of internal processes",
        es: "Digitalización de procesos internos"
      },
      description: {
        en: "We convert manual processes into clear digital flows: request control, approvals, assignment of responsible parties, case tracking and report generation.",
        es: "Convertimos procesos manuales en flujos digitales claros: control de solicitudes, aprobaciones, asignación de responsables, seguimiento de casos y generación de reportes."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integrations with existing systems",
        es: "Integraciones con sistemas existentes"
      },
      description: {
        en: "We connect new platforms with CRMs, accounting systems, project management tools, control sheets or internal databases.",
        es: "Conectamos plataformas nuevas con CRMs, sistemas contables, herramientas de gestión de proyectos, hojas de control o bases de datos internas."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Architectures designed to grow",
        es: "Arquitecturas diseñadas para crecer"
      },
      description: {
        en: "Systems are built with modern and scalable technologies, allowing the addition of new projects, modules or functionalities without rebuilding the platform.",
        es: "Los sistemas se construyen con tecnologías modernas y escalables, permitiendo agregar nuevos proyectos, módulos o funcionalidades sin rehacer la plataforma."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "reduction in administrative management times",
        es: "reducción en tiempos de gestión administrativa"
      }
    },
    {
      value: "3x",
      label: {
        en: "improvement in project and request traceability",
        es: "mejora en trazabilidad de proyectos y solicitudes"
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
        en: "Can you develop specific systems for after-sales and warranties?",
        es: "¿Pueden desarrollar sistemas específicos para posventa y garantías?"
      },
      answer: {
        en: "Yes. We design platforms focused on after-sales, warranty tracking, requests, claims and case control.",
        es: "Sí. Diseñamos plataformas enfocadas en posventa, seguimiento de garantías, solicitudes, reclamos y control de casos."
      }
    },
    {
      question: {
        en: "Do the systems adapt to how each construction company works?",
        es: "¿Los sistemas se adaptan a la forma de trabajar de cada constructora?"
      },
      answer: {
        en: "Yes. Each project is designed according to real processes, internal structures and specific client needs.",
        es: "Sí. Cada proyecto se diseña según los procesos reales, estructuras internas y necesidades específicas del cliente."
      }
    },
    {
      question: {
        en: "Is it possible to integrate these systems with current tools?",
        es: "¿Es posible integrar estos sistemas con herramientas actuales?"
      },
      answer: {
        en: "Yes. We can integrate them with CRMs, accounting systems, project management platforms and any existing internal system.",
        es: "Sí. Podemos integrarlos con CRMs, sistemas contables, plataformas de gestión de proyectos y cualquier sistema interno existente."
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

