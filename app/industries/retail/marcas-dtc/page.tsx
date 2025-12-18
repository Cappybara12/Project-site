"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function MarcasDTCPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Data intelligence to scale DTC brands",
      es: "Inteligencia de datos para escalar marcas DTC"
    },
    titlePart2: {
      en: "with fast decisions based on the entire digital ecosystem",
      es: "con decisiones rápidas y basadas en todo el ecosistema digital"
    },
    subtitle: {
      en: "DTC brands depend on multiple sources: ecommerce, digital advertising, CRM, payments, logistics and customer service. One Source Platform centralizes that information and powers it with AI and ML to offer a clear vision of performance, optimize campaigns and accelerate brand growth.",
      es: "Las marcas DTC dependen de múltiples fuentes: ecommerce, pauta digital, CRM, pagos, logística y atención al cliente. One Source Platform centraliza esa información y la potencia con IA y ML para ofrecer una visión clara del rendimiento, optimizar campañas y acelerar el crecimiento de la marca."
    }
  };

  const statements = [
    {
      title: {
        en: "Complete view of the conversion funnel",
        es: "Vista completa del funnel de conversión"
      },
      description: {
        en: "Unifies traffic, campaigns, conversions, orders and recurrence in dashboards that show the real performance of each funnel stage.",
        es: "Unifica tráfico, campañas, conversiones, pedidos y recurrencia en dashboards que muestran el desempeño real de cada etapa del funnel."
      }
    },
    {
      title: {
        en: "Marketing optimization with deep analysis",
        es: "Optimización de marketing con análisis profundo"
      },
      description: {
        en: "Cross-references data from digital advertising, organic channels and sales to understand which campaigns convert, which audiences work best and where to adjust investment.",
        es: "Cruza datos de pauta digital, canales orgánicos y ventas para entender qué campañas convierten, qué audiencias funcionan mejor y dónde ajustar inversión."
      }
    },
    {
      title: {
        en: "AI-assisted decisions",
        es: "Decisiones asistidas por IA"
      },
      description: {
        en: "OS Copilot, AI Chat and Insight ML help interpret results, answer questions instantly and project growth scenarios without depending on manual reports.",
        es: "OS Copilot, AI Chat e Insight ML ayudan a interpretar resultados, responder preguntas al instante y proyectar escenarios de crecimiento sin depender de reportes manuales."
      }
    },
    {
      title: {
        en: "Informed competitive strategy",
        es: "Estrategia competitiva informada"
      },
      description: {
        en: "Competitor Intelligence allows monitoring prices, trends and market movements to adjust offers, bundles and positioning strategies.",
        es: "Competitor Intelligence permite monitorear precios, tendencias y movimientos del mercado para ajustar ofertas, bundles y estrategias de posicionamiento."
      }
    }
  ];

  const results = [
    {
      value: "3x",
      label: {
        en: "faster speed to evaluate campaign performance",
        es: "más velocidad para evaluar rendimiento de campañas"
      }
    },
    {
      value: "40%",
      label: {
        en: "better budget allocation in marketing",
        es: "mejor asignación de presupuesto en marketing"
      }
    },
    {
      value: "30%",
      label: {
        en: "increase in visibility of key business metrics",
        es: "aumento en visibilidad de métricas clave del negocio"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Does One Source Platform work for brands that only sell online?",
        es: "¿One Source Platform funciona para marcas que solo venden online?"
      },
      answer: {
        en: "Yes. It is specifically designed for DTC operations with focus on ecommerce, digital marketing and customer data.",
        es: "Sí. Está diseñada específicamente para operaciones DTC con foco en ecommerce, marketing digital y datos de clientes."
      }
    },
    {
      question: {
        en: "Can I analyze campaigns and sales in the same place?",
        es: "¿Puedo analizar campañas y ventas en un mismo lugar?"
      },
      answer: {
        en: "Yes. The platform automatically cross-references data from advertising, ecommerce and conversions for comprehensive analysis.",
        es: "Sí. La plataforma cruza automáticamente datos de pauta, ecommerce y conversiones para análisis integrales."
      }
    },
    {
      question: {
        en: "What teams usually use One Source Platform in DTC brands?",
        es: "¿Qué equipos suelen usar One Source Platform en marcas DTC?"
      },
      answer: {
        en: "Marketing, performance, growth, operations and management, each with personalized views according to their objectives.",
        es: "Marketing, performance, growth, operaciones y dirección, cada uno con vistas personalizadas según sus objetivos."
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

