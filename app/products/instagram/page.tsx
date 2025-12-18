"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function InstagramPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "Advanced automation in Instagram",
      es: "Automatización avanzada en Instagram"
    },
    titlePart2: {
      en: "Convert messages into sales and improve your customers' experience",
      es: "Convertir mensajes en ventas y mejorar la experiencia de tus clientes"
    },
    subtitle: {
      en: "Activate AI agents capable of responding to inquiries, guiding purchases, resolving requests and executing internal processes directly from Instagram. Optimize the channel where your customers discover your brand, interact with your products and expect immediate responses.",
      es: "Activa agentes de IA capaces de responder consultas, guiar compras, resolver solicitudes y ejecutar procesos internos directamente desde Instagram. Optimiza el canal donde tus clientes descubren tu marca, interactúan con tus productos y esperan respuestas inmediatas."
    }
  };

  const statements = [
    {
      title: {
        en: "Respond instantly on the channel where your customers already are",
        es: "Responde al instante en el canal donde tus clientes ya están"
      },
      description: {
        en: "Instagram users seek agility. Your AI agent attends to messages, comments and inquiries in seconds with precise information and consistent with your brand.",
        es: "Los usuarios de Instagram buscan agilidad. Tu agente de IA atiende mensajes, comentarios y consultas en segundos con información precisa y coherente con tu marca."
      },
      image: "/products/instagram-instant.svg"
    },
    {
      title: {
        en: "Conversations that drive purchase decisions",
        es: "Conversaciones que impulsan decisiones de compra"
      },
      description: {
        en: "Product recommendations, catalog sends, price information, availability and sales follow-up: all automated and personalized according to the user.",
        es: "Recomendaciones de productos, envíos de catálogos, información de precios, disponibilidad y seguimiento de ventas: todo automatizado y personalizado según el usuario."
      },
      image: "/products/instagram-conversations.svg"
    },
    {
      title: {
        en: "Integration with your systems to handle real processes",
        es: "Integración con tus sistemas para manejar procesos reales"
      },
      description: {
        en: "Check inventories, update statuses, record leads, sync with your CRM or connect with your ecommerce platform to complete processes without manual friction.",
        es: "Consulta inventarios, actualiza estados, registra leads, sincroniza con tu CRM o conecta con tu plataforma de ecommerce para completar procesos sin fricción manual."
      },
      image: "/products/instagram-integration.svg"
    },
    {
      title: {
        en: "Organized attention without overwhelming your team",
        es: "Atención organizada y sin saturar a tu equipo"
      },
      description: {
        en: "Your team is freed from responding to repetitive messages, while the agent manages 80% of inquiries and only delegates cases that truly require human attention.",
        es: "Tu equipo se libera de responder mensajes repetitivos, mientras el agente gestiona el 80% de las consultas y solo delega los casos que realmente requieren atención humana."
      },
      image: "/products/instagram-organized.svg"
    }
  ];

  const results = [
    {
      value: "3x",
      label: {
        en: "faster response and follow-up speed",
        es: "más velocidad en respuestas y seguimiento"
      }
    },
    {
      value: "30%",
      label: {
        en: "increase in conversions from DM",
        es: "aumento en conversiones desde DM"
      }
    },
    {
      value: "50%",
      label: {
        en: "reduction in team operational workload",
        es: "reducción en carga operativa del equipo"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can it respond to direct messages and comments?",
        es: "¿Puede responder mensajes directos y comentarios?"
      },
      answer: {
        en: "Yes. The agent manages both, understanding context and responding in a way that is consistent with your brand.",
        es: "Sí. El agente gestiona ambos, entendiendo el contexto y respondiendo de forma coherente con tu marca."
      }
    },
    {
      question: {
        en: "Is it possible to sell directly from Instagram with automation?",
        es: "¿Es posible vender directo desde Instagram con automatización?"
      },
      answer: {
        en: "Yes. It can recommend products, process orders, validate inventory and send payment links or generate orders.",
        es: "Sí. Puede recomendar productos, procesar órdenes, validar inventario y enviar enlaces de pago o generar pedidos."
      }
    },
    {
      question: {
        en: "Does it connect with my current systems?",
        es: "¿Se conecta con mis sistemas actuales?"
      },
      answer: {
        en: "Yes. We can integrate it with your CRM, ecommerce, ERP or any internal system so it operates with real and updated information.",
        es: "Sí. Podemos integrarlo a tu CRM, ecommerce, ERP o cualquier sistema interno para que opere con información real y actualizada."
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

