"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function RestaurantesPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "AI automation to handle reservations",
      es: "Automatización con IA para atender reservas"
    },
    titlePart2: {
      en: "manage orders and improve customer experience in restaurants",
      es: "gestionar pedidos y mejorar la experiencia del cliente en restaurantes"
    },
    subtitle: {
      en: "Restaurants constantly receive inquiries about menus, reservations, deliveries, hours and events. Our AI agents automate customer service on WhatsApp, Instagram, Messenger, email and calls to respond instantly, manage reservations and support daily operations without depending on the team during peak hours.",
      es: "Los restaurantes reciben constantemente consultas sobre menús, reservas, domicilios, horarios y eventos. Nuestros agentes de IA automatizan la atención en WhatsApp, Instagram, Messenger, email y llamadas para responder al instante, gestionar reservas y apoyar la operación diaria sin depender del equipo en horas pico."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate attention for frequent inquiries",
        es: "Atención inmediata para consultas frecuentes"
      },
      description: {
        en: "Quick responses about menu, prices, promotions, hours, locations, policies and special events, maintaining clear communication aligned with the brand.",
        es: "Respuestas rápidas sobre menú, precios, promociones, horarios, sedes, políticas y eventos especiales, manteniendo una comunicación clara y alineada a la marca."
      }
    },
    {
      title: {
        en: "Automated reservation management",
        es: "Gestión automatizada de reservas"
      },
      description: {
        en: "The agent can take reservations, confirm availability, send reminders, manage changes and cancellations according to restaurant capacity.",
        es: "El agente puede tomar reservas, confirmar disponibilidad, enviar recordatorios, gestionar cambios y cancelaciones según la capacidad del restaurante."
      }
    },
    {
      title: {
        en: "Support for orders and deliveries",
        es: "Soporte para pedidos y domicilios"
      },
      description: {
        en: "Attends inquiries about orders, delivery times, statuses, coverage areas and payment methods, integrating with order systems or delivery platforms.",
        es: "Atiende consultas sobre pedidos, tiempos de entrega, estados, zonas de cobertura y métodos de pago, integrándose con sistemas de pedidos o plataformas de delivery."
      }
    },
    {
      title: {
        en: "Less operational pressure during peak hours",
        es: "Menos presión operativa en horas pico"
      },
      description: {
        en: "During high demand moments, the agent absorbs most inquiries, allowing the team to focus on in-person service and internal operations.",
        es: "Durante momentos de alta demanda, el agente absorbe la mayor parte de las consultas, permitiendo que el equipo se enfoque en la atención presencial y la operación interna."
      }
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "fewer calls and messages handled by the human team",
        es: "menos llamadas y mensajes atendidos por el equipo humano"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster reservation management speed",
        es: "más rapidez en la gestión de reservas"
      }
    },
    {
      value: "20%",
      label: {
        en: "increase in confirmed reservations thanks to immediate responses",
        es: "aumento en reservas confirmadas gracias a respuestas inmediatas"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent handle reservations for different times and locations?",
        es: "¿El agente puede manejar reservas para diferentes horarios y sedes?"
      },
      answer: {
        en: "Yes. It can manage availability by time, date and location according to rules defined by the restaurant.",
        es: "Sí. Puede gestionar disponibilidad por horario, fecha y sede según las reglas definidas por el restaurante."
      }
    },
    {
      question: {
        en: "Can it integrate with order platforms or POS?",
        es: "¿Puede integrarse con plataformas de pedidos o POS?"
      },
      answer: {
        en: "Yes. We can connect it with order systems, delivery platforms or internal restaurant tools.",
        es: "Sí. Podemos conectarlo con sistemas de pedidos, plataformas de delivery o herramientas internas del restaurante."
      }
    },
    {
      question: {
        en: "Does the agent work during high demand hours?",
        es: "¿El agente funciona durante horarios de alta demanda?"
      },
      answer: {
        en: "Yes. It is designed to operate continuously and stably, even when inquiry volume is high.",
        es: "Sí. Está diseñado para operar de forma continua y estable, incluso cuando el volumen de consultas es alto."
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

