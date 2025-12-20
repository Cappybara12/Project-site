"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function EcommercePage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "A central platform to understand, manage and optimize",
      es: "Una plataforma central para entender, gestionar y optimizar"
    },
    titlePart2: {
      en: "the entire ecommerce ecosystem",
      es: "todo el ecosistema ecommerce"
    },
    subtitle: {
      en: "Ecommerce businesses constantly generate data from multiple sources: online store, digital campaigns, payments, inventories, logistics and customer service. One Source Platform centralizes all this information and powers it with artificial intelligence and machine learning to offer a clear, actionable vision oriented to results.",
      es: "Los negocios ecommerce generan datos constantemente desde múltiples fuentes: tienda online, campañas digitales, pagos, inventarios, logística y atención al cliente. One Source Platform centraliza toda esta información y la potencia con inteligencia artificial y machine learning para ofrecer una visión clara, accionable y orientada a resultados."
    }
  };

  const statements = [
    {
      title: {
        en: "Total centralization of the ecommerce ecosystem",
        es: "Centralización total del ecosistema ecommerce"
      },
      description: {
        en: "Integrates data from your online store, payment gateways, inventories, CRM, digital advertising and logistics to have a complete vision of operations in one place.",
        es: "Integra datos de tu tienda online, pasarelas de pago, inventarios, CRM, pauta digital y logística para tener una visión completa de la operación en un solo lugar."
      }
    },
    {
      title: {
        en: "Deep analysis of business performance",
        es: "Análisis profundo del rendimiento del negocio"
      },
      description: {
        en: "Evaluates sales, conversions, average ticket, customer behavior, performance by channel and product performance without depending on manual reports.",
        es: "Evalúa ventas, conversiones, ticket promedio, comportamiento de clientes, rendimiento por canal y desempeño de productos sin depender de reportes manuales."
      }
    },
    {
      title: {
        en: "AI applied to decision-making",
        es: "IA aplicada a la toma de decisiones"
      },
      description: {
        en: "With OS Copilot, AI Chat and Insight ML, transforms complex data into clear conclusions, immediate answers and projections that help anticipate scenarios and optimize operations.",
        es: "Con OS Copilot, AI Chat e Insight ML, transforma datos complejos en conclusiones claras, respuestas inmediatas y proyecciones que ayudan a anticipar escenarios y optimizar la operación."
      }
    },
    {
      title: {
        en: "Integrated competitive intelligence",
        es: "Información competitiva integrada"
      },
      description: {
        en: "Monitors market prices, competitor movements and trends to adjust commercial strategies and maintain a solid competitive position.",
        es: "Monitorea precios del mercado, movimientos de la competencia y tendencias para ajustar estrategias comerciales y mantener una posición competitiva sólida."
      }
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "less time consolidating operational information",
        es: "menos tiempo consolidando información operativa"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster speed in analyzing key metrics",
        es: "más rapidez en el análisis de métricas clave"
      }
    },
    {
      value: "35%",
      label: {
        en: "improvement in commercial and operational planning",
        es: "mejora en la planificación comercial y operativa"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Does One Source Platform work with any ecommerce platform?",
        es: "¿One Source Platform funciona con cualquier plataforma de ecommerce?"
      },
      answer: {
        en: "Yes. It integrates with Shopify, WooCommerce and other platforms, as well as proprietary systems or custom developments.",
        es: "Sí. Se integra con Shopify, WooCommerce y otras plataformas, así como con sistemas propios o desarrollos a medida."
      }
    },
    {
      question: {
        en: "Can I analyze sales, marketing and operations in the same place?",
        es: "¿Puedo analizar ventas, marketing y operaciones en el mismo lugar?"
      },
      answer: {
        en: "Yes. The platform is designed to cross-reference information from the entire ecommerce ecosystem in a single panel.",
        es: "Sí. La plataforma está diseñada para cruzar información de todo el ecosistema ecommerce en un solo panel."
      }
    },
    {
      question: {
        en: "What type of teams use One Source Platform in ecommerce?",
        es: "¿Qué tipo de equipos usan One Source Platform en ecommerce?"
      },
      answer: {
        en: "Marketing, operations, finance, growth and management teams, each with personalized views according to their needs.",
        es: "Equipos de marketing, operaciones, finanzas, growth y dirección, cada uno con vistas personalizadas según sus necesidades."
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

