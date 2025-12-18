"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function MessengerPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "Complete automation in Messenger",
      es: "Automatización completa en Messenger"
    },
    titlePart2: {
      en: "Serve, Guide and Resolve requests without waiting for a human agent",
      es: "Atender, Guiar y Resolver solicitudes sin esperar a un agente humano"
    },
    subtitle: {
      en: "Turn Messenger into an automated channel capable of answering questions, managing sales, solving problems and executing internal processes. Ideal for businesses that receive high volumes of inquiries and need fast and consistent responses.",
      es: "Convierte Messenger en un canal automatizado capaz de responder preguntas, gestionar ventas, solucionar problemas y ejecutar procesos internos. Ideal para negocios que reciben alto volumen de consultas y necesitan respuestas rápidas y consistentes."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate attention on the channel preferred by thousands of users",
        es: "Atención inmediata en el canal preferido por miles de usuarios"
      },
      description: {
        en: "Your AI agent responds in seconds, understands context and adapts to your brand's communication style.",
        es: "Tu agente de IA responde en segundos, entiende el contexto y se adapta al estilo de comunicación de tu marca."
      },
      image: "/products/messenger-immediate.svg"
    },
    {
      title: {
        en: "Conversations designed to drive sales",
        es: "Conversaciones diseñadas para impulsar ventas"
      },
      description: {
        en: "Guide users through their purchase process, recommend products, provide detailed information and automatically follow up on each opportunity.",
        es: "Guía a los usuarios en su proceso de compra, recomienda productos, ofrece información detallada y da seguimiento automático a cada oportunidad."
      },
      image: "/products/messenger-sales.svg"
    },
    {
      title: {
        en: "Integrated with your systems to operate with real information",
        es: "Integrado a tus sistemas para operar con información real"
      },
      description: {
        en: "Check inventories, validate data, create records, update orders and execute internal flows by connecting to your CRM, ERP, ecommerce or other tools.",
        es: "Consulta inventarios, valida datos, crea registros, actualiza pedidos y ejecuta flujos internos conectándose a tu CRM, ERP, ecommerce u otras herramientas."
      },
      image: "/products/messenger-integrated.svg"
    },
    {
      title: {
        en: "Automated request manager with intelligent escalation",
        es: "Gestor automatizado de solicitudes con escalamiento inteligente"
      },
      description: {
        en: "The agent resolves most inquiries and only transfers cases that require human intervention, keeping the entire user flow organized.",
        es: "El agente resuelve la mayoría de consultas y solo transfiere los casos que requieren intervención humana, manteniendo organizado todo el flujo del usuario."
      },
      image: "/products/messenger-escalation.svg"
    }
  ];

  const results = [
    {
      value: "70%",
      label: {
        en: "fewer repetitive inquiries handled by humans",
        es: "menos consultas repetitivas atendidas por humanos"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster request resolution speed",
        es: "más velocidad en la resolución de solicitudes"
      }
    },
    {
      value: "22%",
      label: {
        en: "increase in conversions from Messenger channel",
        es: "aumento en conversiones desde el canal Messenger"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can it handle large volumes of messages?",
        es: "¿Puede manejar grandes volúmenes de mensajes?"
      },
      answer: {
        en: "Yes. The agent is designed to operate stably even with thousands of simultaneous interactions.",
        es: "Sí. El agente está diseñado para operar de manera estable incluso con miles de interacciones simultáneas."
      }
    },
    {
      question: {
        en: "Can it connect with my current systems?",
        es: "¿Puede conectarse con mis sistemas actuales?"
      },
      answer: {
        en: "Yes. We integrate Messenger with your internal platforms so the agent works with real and updated data.",
        es: "Sí. Integramos Messenger con tus plataformas internas para que el agente trabaje con datos reales y actualizados."
      }
    },
    {
      question: {
        en: "Is it possible to automate complete sales?",
        es: "¿Es posible automatizar ventas completas?"
      },
      answer: {
        en: "Yes. It can recommend products, generate orders, validate information and send payment links when necessary.",
        es: "Sí. Puede recomendar productos, generar pedidos, validar información y enviar enlaces de pago cuando sea necesario."
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

