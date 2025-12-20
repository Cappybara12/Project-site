"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function AseguradorasPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Custom systems to manage policies, claims and internal processes",
      es: "Sistemas a la medida para gestionar pólizas, siniestros y procesos internos"
    },
    titlePart2: {
      en: "in insurance companies",
      es: "en aseguradoras"
    },
    subtitle: {
      en: "Insurance companies operate with critical processes that require control, traceability and compliance. Through Custom Projects, we develop customized platforms and systems that allow digitalizing internal flows, organizing information and improving efficiency in policy management, claims and customer service.",
      es: "Las aseguradoras operan con procesos críticos que requieren control, trazabilidad y cumplimiento. A través de Custom Projects, desarrollamos plataformas y sistemas personalizados que permiten digitalizar flujos internos, organizar información y mejorar la eficiencia en la gestión de pólizas, reclamaciones y atención al cliente."
    }
  };

  const statements = [
    {
      title: {
        en: "Custom platforms for policy and client management",
        es: "Plataformas personalizadas para gestión de pólizas y clientes"
      },
      description: {
        en: "We develop systems to manage policies, clients, coverage, renewals, expirations and statuses in a centralized environment.",
        es: "Desarrollamos sistemas para administrar pólizas, clientes, coberturas, renovaciones, vencimientos y estados en un entorno centralizado."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Digitalization of claims processes",
        es: "Digitalización de procesos de siniestros"
      },
      description: {
        en: "We create digital flows for registration, validation, tracking and resolution of claims, including document upload and status control.",
        es: "Creamos flujos digitales para el registro, validación, seguimiento y resolución de siniestros, incluyendo carga de documentos y control de estados."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integration with internal and external systems",
        es: "Integración con sistemas internos y externos"
      },
      description: {
        en: "We connect platforms with core systems, accounting tools, CRMs, external providers and internal databases to keep information synchronized.",
        es: "Conectamos plataformas con sistemas core, herramientas contables, CRMs, proveedores externos y bases de datos internas para mantener la información sincronizada."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Security, traceability and control",
        es: "Seguridad, trazabilidad y control"
      },
      description: {
        en: "We design systems with access controls, action logging and structures that guarantee compliance and complete visibility of each process.",
        es: "Diseñamos sistemas con controles de acceso, registro de acciones y estructuras que garantizan cumplimiento y visibilidad completa de cada proceso."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "reduction in claims management times",
        es: "reducción en tiempos de gestión de siniestros"
      }
    },
    {
      value: "3x",
      label: {
        en: "improvement in case traceability and control",
        es: "mejora en trazabilidad y control de casos"
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
        en: "Can you develop specific systems for claims management?",
        es: "¿Pueden desarrollar sistemas específicos para gestión de siniestros?"
      },
      answer: {
        en: "Yes. We design platforms focused on the complete claims flow, from registration to resolution.",
        es: "Sí. Diseñamos plataformas enfocadas en el flujo completo de siniestros, desde el registro hasta la resolución."
      }
    },
    {
      question: {
        en: "Do the systems comply with security and control requirements?",
        es: "¿Los sistemas cumplen con requisitos de seguridad y control?"
      },
      answer: {
        en: "Yes. We implement access controls, auditing and security best practices appropriate for enterprise environments.",
        es: "Sí. Implementamos controles de acceso, auditoría y buenas prácticas de seguridad acordes a entornos empresariales."
      }
    },
    {
      question: {
        en: "Is it possible to integrate these systems with existing insurance company platforms?",
        es: "¿Es posible integrar estos sistemas con plataformas existentes de la aseguradora?"
      },
      answer: {
        en: "Yes. We can integrate them with core systems, CRMs, ERPs and any internal or external tool used by the insurance company.",
        es: "Sí. Podemos integrarlos con sistemas core, CRMs, ERPs y cualquier herramienta interna o externa que utilice la aseguradora."
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

