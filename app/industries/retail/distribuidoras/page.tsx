"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function DistribuidorasPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "AI automation to manage orders",
      es: "Automatización con IA para gestionar pedidos"
    },
    titlePart2: {
      en: "respond to commercial inquiries and optimize operations in distributors",
      es: "responder consultas comerciales y optimizar la operación en distribuidoras"
    },
    subtitle: {
      en: "Distributors operate with high volume of requests about prices, availability, orders, deliveries and account statuses. Our AI agents automate customer service on WhatsApp, Instagram, Messenger, email and calls to respond instantly, execute internal processes and keep operations running more efficiently.",
      es: "Las distribuidoras operan con alto volumen de solicitudes sobre precios, disponibilidad, pedidos, entregas y estados de cuenta. Nuestros agentes de IA automatizan la atención en WhatsApp, Instagram, Messenger, email y llamadas para responder al instante, ejecutar procesos internos y mantener la operación funcionando con mayor eficiencia."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate responses for commercial inquiries",
        es: "Respuestas inmediatas para consultas comerciales"
      },
      description: {
        en: "The agent attends questions about prices, catalogs, presentations, availability, commercial conditions and delivery times, maintaining consistency and accuracy in information.",
        es: "El agente atiende preguntas sobre precios, catálogos, presentaciones, disponibilidad, condiciones comerciales y tiempos de entrega, manteniendo coherencia y exactitud en la información."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Automated order management and tracking",
        es: "Gestión automatizada de pedidos y seguimiento"
      },
      description: {
        en: "Allows customers to check order statuses, dispatch dates, billing and logistics updates without human team intervention.",
        es: "Permite a los clientes consultar estados de pedido, fechas de despacho, facturación y novedades logísticas sin intervención del equipo humano."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integration with inventories and internal systems",
        es: "Integración con inventarios y sistemas internos"
      },
      description: {
        en: "Checks stock, records orders, updates statuses, validates customers and connects with ERP, CRM or proprietary distributor systems.",
        es: "Consulta stock, registra pedidos, actualiza estados, valida clientes y se conecta con ERP, CRM o sistemas propios de la distribuidora."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "More organized operation for commercial and operational teams",
        es: "Operación más ordenada para equipos comerciales y operativos"
      },
      description: {
        en: "Reduces repetitive calls and messages, frees the team from manual tasks and improves organization of incoming request flows.",
        es: "Reduce llamadas y mensajes repetitivos, libera al equipo de tareas manuales y mejora la organización del flujo de solicitudes entrantes."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "45%",
      label: {
        en: "reduction in repetitive inquiries handled by humans",
        es: "reducción en consultas repetitivas atendidas por humanos"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster order and status management speed",
        es: "más velocidad en la gestión de pedidos y estados"
      }
    },
    {
      value: "30%",
      label: {
        en: "improvement in commercial team operational efficiency",
        es: "mejora en eficiencia operativa del equipo comercial"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent handle large product catalogs?",
        es: "¿El agente puede manejar catálogos grandes de productos?"
      },
      answer: {
        en: "Yes. It can consult extensive catalogs, filter by category, presentation or availability and respond with precise information.",
        es: "Sí. Puede consultar catálogos extensos, filtrar por categoría, presentación o disponibilidad y responder con información precisa."
      }
    },
    {
      question: {
        en: "Can it integrate with my ERP or inventory systems?",
        es: "¿Puede integrarse con mi ERP o sistema de inventarios?"
      },
      answer: {
        en: "Yes. We integrate the agent with your internal systems to check and update information in real time.",
        es: "Sí. Integramos el agente con tus sistemas internos para consultar y actualizar información en tiempo real."
      }
    },
    {
      question: {
        en: "Is it possible to automate recurring orders?",
        es: "¿Es posible automatizar pedidos recurrentes?"
      },
      answer: {
        en: "Yes. The agent can identify recurring customers, record frequent orders and facilitate reorder processes.",
        es: "Sí. El agente puede identificar clientes recurrentes, registrar pedidos frecuentes y facilitar procesos de recompra."
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

