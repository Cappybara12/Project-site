"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function IntegrationsPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Integrations designed to connect your systems",
      es: "Integraciones diseñadas para conectar tus sistemas"
    },
    titlePart2: {
      en: "unify information and create a more coordinated and efficient operation",
      es: "unificar información y crear una operación más coordinada y eficiente"
    },
    subtitle: {
      en: "We build custom integrations between your internal platforms, external tools and enterprise systems so your data flows without interruptions. From CRMs and ERPs to ecommerce platforms, payments, marketing and logistics: everything connected, everything organized, everything automated.",
      es: "Construimos integraciones personalizadas entre tus plataformas internas, herramientas externas y sistemas empresariales para que tus datos fluyan sin interrupciones. Desde CRMs y ERPs hasta plataformas de ecommerce, pagos, marketing y logística: todo conectado, todo ordenado, todo automatizado."
    }
  };

  const statements = [
    {
      title: {
        en: "We connect your key tools",
        es: "Conectamos tus herramientas clave"
      },
      description: {
        en: "We integrate CRM, ERP, inventories, ecommerce, payment gateways, marketing platforms, logistics and any system necessary for your operation.",
        es: "Integramos CRM, ERP, inventarios, ecommerce, pasarelas de pago, plataformas de marketing, logística y cualquier sistema necesario para tu operación."
      }
    },
    {
      title: {
        en: "Unified and updated information in all your systems",
        es: "Información unificada y actualizada en todos tus sistemas"
      },
      description: {
        en: "We eliminate duplication, inconsistencies and manual processes ensuring that each tool works with the same data in real time.",
        es: "Eliminamos duplicidad, inconsistencias y procesos manuales asegurando que cada herramienta trabaje con los mismos datos en tiempo real."
      }
    },
    {
      title: {
        en: "Automatic flows between platforms",
        es: "Flujos automáticos entre plataformas"
      },
      description: {
        en: "Automate complete processes such as order creation, stock updates, customer synchronization, document issuance and more.",
        es: "Automatiza procesos completos como creación de pedidos, actualización de stocks, sincronización de clientes, emisión de documentos y más."
      }
    },
    {
      title: {
        en: "Stable, secure and scalable solutions",
        es: "Soluciones estables, seguras y escalables"
      },
      description: {
        en: "Built with enterprise standards to guarantee long-term performance, even in operations with high volume.",
        es: "Construidas con estándares empresariales para garantizar rendimiento a largo plazo, incluso en operaciones con mucho volumen."
      }
    }
  ];

  const results = [
    {
      value: "75%",
      label: {
        en: "fewer manual tasks caused by disconnected systems",
        es: "menos tareas manuales causadas por sistemas desconectados"
      }
    },
    {
      value: "3x",
      label: {
        en: "more consistency in data shared between platforms",
        es: "más consistencia en datos compartidos entre plataformas"
      }
    },
    {
      value: "2x",
      label: {
        en: "more speed in processes that previously depended on manual synchronizations",
        es: "más velocidad en procesos que antes dependían de sincronizaciones manuales"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can they integrate with tools I currently use?",
        es: "¿Pueden integrarse con herramientas que ya uso actualmente?"
      },
      answer: {
        en: "Yes. We can work with modern systems, legacy, open APIs or internal services according to your company's needs.",
        es: "Sí. Podemos trabajar con sistemas modernos, legacy, APIs abiertas o servicios internos según las necesidades de tu empresa."
      }
    },
    {
      question: {
        en: "How complex can an integration be?",
        es: "¿Qué tan compleja puede ser una integración?"
      },
      answer: {
        en: "From simple connections to deep integrations between multiple tools. It's designed according to the real flow of your operation.",
        es: "Desde conexiones simples hasta integraciones profundas entre múltiples herramientas. Se diseña según el flujo real de tu operación."
      }
    },
    {
      question: {
        en: "Are integrations scalable and secure?",
        es: "¿Las integraciones son escalables y seguras?"
      },
      answer: {
        en: "Yes. We use best practices in architecture, security and monitoring to guarantee stability and long-term growth.",
        es: "Sí. Usamos buenas prácticas de arquitectura, seguridad y monitoreo para garantizar estabilidad y crecimiento a largo plazo."
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

