"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function ProcessAutomationPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Internal process automation",
      es: "Automatización de procesos internos"
    },
    titlePart2: {
      en: "to reduce operational workload, improve consistency and allow your team to move forward with greater speed",
      es: "para reducir carga operativa, mejorar consistencia y permitir que tu equipo avance con mayor velocidad"
    },
    subtitle: {
      en: "We digitalize and automate repetitive tasks, validations, operational flows, internal records and any process that depends on manual intervention. Our automations connect to your systems, execute real actions and allow your business to function more efficiently every day.",
      es: "Digitalizamos y automatizamos tareas repetitivas, validaciones, flujos operativos, registros internos y cualquier proceso que dependa de intervención manual. Nuestras automatizaciones se conectan a tus sistemas, ejecutan acciones reales y permiten que tu negocio funcione de forma más eficiente todos los días."
    }
  };

  const statements = [
    {
      title: {
        en: "Automation designed according to your real flows",
        es: "Automatización diseñada según tus flujos reales"
      },
      description: {
        en: "Each process is analyzed in detail: how it works today, where bottlenecks are generated and what can be optimized. The final solution adapts exactly to your operation.",
        es: "Cada proceso se analiza a detalle: cómo funciona hoy, dónde se generan cuellos de botella y qué se puede optimizar. La solución final se adapta exactamente a tu operación."
      }
    },
    {
      title: {
        en: "Elimination of repetitive tasks to free up time",
        es: "Eliminación de tareas repetitivas para liberar tiempo"
      },
      description: {
        en: "Updates, validations, records, queries, follow-ups, synchronizations... Everything that today consumes your team's time can be operated by automations.",
        es: "Actualizaciones, validaciones, registros, consultas, seguimientos, sincronizaciones… Todo lo que hoy consume tiempo de tu equipo puede ser operado por automatizaciones."
      }
    },
    {
      title: {
        en: "Internal actions executed automatically",
        es: "Acciones internas ejecutadas automáticamente"
      },
      description: {
        en: "Automations can create records, update statuses, query data, generate reports, notify teams or activate complete processes without human intervention.",
        es: "Las automatizaciones pueden crear registros, actualizar estados, consultar datos, generar informes, notificar equipos o activar procesos completos sin intervención humana."
      }
    },
    {
      title: {
        en: "Integration with your systems and key tools",
        es: "Integración con tus sistemas y herramientas clave"
      },
      description: {
        en: "CRM, ERP, inventories, ecommerce, databases, internal services and any platform you already use. Automation works connected to your entire ecosystem.",
        es: "CRM, ERP, inventarios, ecommerce, bases de datos, servicios internos y cualquier plataforma que ya utilices. La automatización funciona conectada a todo tu ecosistema."
      }
    }
  ];

  const results = [
    {
      value: "65%",
      label: {
        en: "reduction in manual tasks within internal operations",
        es: "reducción en tareas manuales dentro de operaciones internas"
      }
    },
    {
      value: "4x",
      label: {
        en: "more speed in flows that previously required human intervention",
        es: "más velocidad en flujos que antes requerían intervención humana"
      }
    },
    {
      value: "50%",
      label: {
        en: "more consistency in critical processes thanks to stable automations",
        es: "más consistencia en procesos críticos gracias a automatizaciones estables"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "What processes can be automated?",
        es: "¿Qué procesos pueden automatizar?"
      },
      answer: {
        en: "From validations, records, synchronizations and updates, to complex flows that connect multiple systems and teams within the business.",
        es: "Desde validaciones, registros, sincronizaciones y actualizaciones, hasta flujos complejos que conectan múltiples sistemas y equipos dentro del negocio."
      }
    },
    {
      question: {
        en: "Do automations require changes in my current systems?",
        es: "¿Las automatizaciones requieren cambios en mis sistemas actuales?"
      },
      answer: {
        en: "Not necessarily. We can work with existing APIs, integrations or databases without modifying your main tools.",
        es: "No necesariamente. Podemos trabajar con APIs, integraciones o bases de datos existentes sin modificar tus herramientas principales."
      }
    },
    {
      question: {
        en: "Is it possible to monitor or modify flows over time?",
        es: "¿Es posible monitorear o modificar los flujos con el tiempo?"
      },
      answer: {
        en: "Yes. Automations can be adjusted, scaled or expanded according to the evolution of your operation or new internal requirements.",
        es: "Sí. Las automatizaciones pueden ajustarse, escalar o expandirse según la evolución de tu operación o nuevos requerimientos internos."
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
