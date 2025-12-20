"use client";

import { ProductHero } from "../../products/components/ProductHero";
import { StatementCards } from "../../products/components/StatementCards";
import { ResultCards } from "../../products/components/ResultCards";
import { ProductFAQ } from "../../products/components/ProductFAQ";

export default function RetailPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "AI automation to transform customer service",
      es: "Automatización con IA para transformar la atención"
    },
    titlePart2: {
      en: "accelerate sales and improve customer experience in retail",
      es: "acelerar las ventas y mejorar la experiencia del cliente en retail"
    },
    subtitle: {
      en: "In retail, every interaction matters. Our AI agents automate customer service, respond to inquiries, manage orders, recommend products, verify inventory and execute internal processes, all from channels like WhatsApp, Instagram, Messenger, email and calls. An automated channel that operates at the pace modern commerce demands.",
      es: "En retail, cada interacción importa. Nuestros agentes de IA automatizan el servicio al cliente, responden consultas, gestionan pedidos, recomiendan productos, verifican inventario y ejecutan procesos internos, todo desde canales como WhatsApp, Instagram, Messenger, email y llamadas. Un canal automatizado que opera al ritmo que exige el comercio moderno."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate attention on the channels your customers use",
        es: "Atención inmediata en los canales que usan tus clientes"
      },
      description: {
        en: "Instant responses for inquiries about products, availability, prices, locations, hours, policies and more. The agent responds with precision while maintaining your brand identity.",
        es: "Respuestas al instante para consultas sobre productos, disponibilidad, precios, ubicaciones, horarios, políticas y más. El agente responde con precisión y manteniendo la identidad de tu marca."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Conversations that drive purchase decisions",
        es: "Conversaciones que impulsan decisiones de compra"
      },
      description: {
        en: "Recommendations based on categories, upselling, cross-selling, automated catalog sends and intelligent follow-ups to close more sales without human intervention.",
        es: "Recomendaciones basadas en categorías, upselling, cross-selling, envíos de catálogos automatizados y seguimientos inteligentes para cerrar más ventas sin intervención humana."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integration with your inventory and internal systems",
        es: "Integración con tu inventario y sistemas internos"
      },
      description: {
        en: "The agent can check stock, process orders, validate information, record data and update statuses by connecting to your ecommerce platform, inventories or CRM.",
        es: "El agente puede consultar stock, procesar pedidos, validar información, registrar datos y actualizar estados conectándose a tu plataforma de ecommerce, inventarios o CRM."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Less operational workload for your teams",
        es: "Menos carga operativa para tus equipos"
      },
      description: {
        en: "Repetitive inquiries are resolved automatically, freeing time for your team to focus on strategic tasks and high-value personalized attention.",
        es: "Las consultas repetitivas se resuelven automáticamente, liberando tiempo para que tu equipo se enfoque en tareas estratégicas y atención personalizada de alto valor."
      },
      image: "/industries/placeholder-4.svg"
    }
  ];

  const results = [
    {
      value: "3x",
      label: {
        en: "faster response and resolution time",
        es: "más velocidad en respuestas y tiempo de resolución"
      }
    },
    {
      value: "35%",
      label: {
        en: "increase in conversion from conversational channels",
        es: "aumento en conversión desde canales conversacionales"
      }
    },
    {
      value: "50%",
      label: {
        en: "less operational workload for service and sales teams",
        es: "menos carga operativa para equipos de servicio y ventas"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent recommend personalized products?",
        es: "¿El agente puede recomendar productos personalizados?"
      },
      answer: {
        en: "Yes. It can suggest products based on category, availability, customer preferences or conversation history.",
        es: "Sí. Puede sugerir productos según categoría, disponibilidad, preferencias del cliente o histórico de conversación."
      }
    },
    {
      question: {
        en: "Is it possible to automate complete orders from WhatsApp or Instagram?",
        es: "¿Es posible automatizar pedidos completos desde WhatsApp o Instagram?"
      },
      answer: {
        en: "Yes. The agent can validate stock, generate orders, send payment links or record the sale in your system.",
        es: "Sí. El agente puede validar stock, generar pedidos, enviar enlaces de pago o registrar la venta en tu sistema."
      }
    },
    {
      question: {
        en: "Can it integrate with my current inventory or ecommerce systems?",
        es: "¿Puede integrarse con mis sistemas actuales de inventario o ecommerce?"
      },
      answer: {
        en: "Absolutely. We integrate with Shopify, WooCommerce, proprietary systems, CRMs, ERPs and any platform that manages your operation.",
        es: "Totalmente. Integramos con Shopify, WooCommerce, sistemas propios, CRMs, ERPs y cualquier plataforma que maneje tu operación."
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

