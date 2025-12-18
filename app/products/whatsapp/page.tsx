"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function WhatsAppPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "Intelligent automation in WhatsApp",
      es: "Automatización inteligente en WhatsApp"
    },
    titlePart2: {
      en: "Serve, Sell, and Operate",
      es: "Atender, Vender y Operar"
    },
    subtitle: {
      en: "Turn WhatsApp into an advanced customer service and sales channel with personalized AI agents for your company. Respond in real time, execute complete processes, integrate your internal systems and improve your users' experience from the most used channel in Latin America.",
      es: "Convierte WhatsApp en un canal avanzado de servicio al cliente y ventas con agentes de IA personalizados para tu empresa. Responde en tiempo real, ejecuta procesos completos, integra tus sistemas internos y mejora la experiencia de tus usuarios desde el canal más utilizado en Latinoamérica."
    }
  };

  const statements = [
    {
      title: {
        en: "Instant and personalized attention",
        es: "Atención instantánea y personalizada"
      },
      description: {
        en: "Precise, contextualized responses available 24/7.\n\nYour AI agent understands intentions, remembers information and follows flows designed for your business.",
        es: "Respuestas precisas, contextualizadas y disponibles 24/7.\n\nTu agente de IA comprende intenciones, recuerda información y sigue flujos diseñados para tu negocio."
      },
      image: "/products/whatsapp-instant-attention.svg"
    },
    {
      title: {
        en: "Guided sales and automated business processes",
        es: "Ventas guiadas y procesos comerciales automatizados"
      },
      description: {
        en: "Product recommendations, sales closures, automatic follow-ups and business flows that work without manual intervention.",
        es: "Recomendaciones de productos, cierres de venta, seguimientos automáticos y flujos comerciales que funcionan sin intervención manual."
      },
      image: "/products/whatsapp-sales.svg"
    },
    {
      title: {
        en: "Integration with your internal systems",
        es: "Integración con tus sistemas internos"
      },
      description: {
        en: "Check inventories, validate documents, record information, update orders or execute internal processes by connecting to your CRM, ERP or database.",
        es: "Consulta inventarios, valida documentos, registra información, actualiza pedidos o ejecuta procesos internos conectándose a tu CRM, ERP o base de datos."
      },
      image: "/products/whatsapp-integration.svg"
    },
    {
      title: {
        en: "More organized and efficient operation",
        es: "Operación más ordenada y eficiente"
      },
      description: {
        en: "Reduce manual workload, improve response times and ensure consistency in your service, sales and technical support processes.",
        es: "Reduce carga manual, mejora tiempos de respuesta y garantiza coherencia en tus procesos de servicio, ventas y soporte técnico."
      },
      image: "/products/whatsapp-operation.svg"
    }
  ];

  const results = [
    {
      value: "40%",
      label: {
        en: "less time invested in customer service",
        es: "menos tiempo invertido en atención al cliente"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster response and resolution of requests",
        es: "más velocidad en respuestas y resolución de solicitudes"
      }
    },
    {
      value: "25%",
      label: {
        en: "more conversions in automated business processes",
        es: "más conversiones en procesos comerciales automatizados"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the WhatsApp agent adapt to my company's tone and processes?",
        es: "¿El agente de WhatsApp puede adaptarse al tono y procesos de mi empresa?"
      },
      answer: {
        en: "Yes. It is trained with your policies, your operational flow and your communication style to respond exactly as your business needs.",
        es: "Sí. Se entrena con tus políticas, tu flujo operativo y tu estilo de comunicación para responder exactamente como tu negocio lo necesita."
      }
    },
    {
      question: {
        en: "Can they connect to the CRM, ERP or internal systems I already use?",
        es: "¿Pueden conectarse al CRM, ERP o sistemas internos que ya uso?"
      },
      answer: {
        en: "Yes. We can integrate the agent with the tools you use to consult, update or record information in real time.",
        es: "Sí. Podemos integrar el agente con las herramientas que utilizas para consultar, actualizar o registrar información en tiempo real."
      }
    },
    {
      question: {
        en: "What type of processes can be automated?",
        es: "¿Qué tipo de procesos se pueden automatizar?"
      },
      answer: {
        en: "From frequently asked questions and information validations, to complete sales, follow-ups, order registration, technical support and complex internal flows.",
        es: "Desde preguntas frecuentes y validaciones de información, hasta ventas completas, seguimientos, registro de pedidos, soporte técnico y flujos internos complejos."
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

