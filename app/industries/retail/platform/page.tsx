"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function RetailPlatformPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Data intelligence to centralize the retail ecosystem",
      es: "Inteligencia de datos para centralizar el ecosistema retail"
    },
    titlePart2: {
      en: "and make clearer decisions in less time",
      es: "y tomar decisiones más claras en menos tiempo"
    },
    subtitle: {
      en: "In retail, information lives in many places: ecommerce, physical stores, digital advertising, CRM, inventories and operational systems. One Source Platform centralizes that entire ecosystem and powers it with artificial intelligence and machine learning to offer a complete, actionable vision oriented to business growth.",
      es: "En retail, la información vive en muchos lugares: ecommerce, tiendas físicas, pauta digital, CRM, inventarios y sistemas operativos. One Source Platform centraliza todo ese ecosistema y lo potencia con inteligencia artificial y machine learning para ofrecer una visión completa, accionable y orientada al crecimiento del negocio."
    }
  };

  const statements = [
    {
      title: {
        en: "Unified vision of the entire business",
        es: "Visión unificada de todo el negocio"
      },
      description: {
        en: "Centralizes sales, inventories, traffic, campaigns, conversions and customer behavior in personalized dashboards that show the real state of operations.",
        es: "Centraliza ventas, inventarios, tráfico, campañas, conversiones y comportamiento del cliente en dashboards personalizados que muestran el estado real de la operación."
      }
    },
    {
      title: {
        en: "Deep analysis of performance by channel and product",
        es: "Análisis profundo del rendimiento por canal y producto"
      },
      description: {
        en: "Cross-references information from ecommerce, stores, marketing and operations to understand which products work best, which channels convert more and where improvement opportunities are.",
        es: "Cruza información de ecommerce, tiendas, marketing y operaciones para entender qué productos funcionan mejor, qué canales convierten más y dónde están las oportunidades de mejora."
      }
    },
    {
      title: {
        en: "Faster decisions with AI applied to your data",
        es: "Decisiones más rápidas con IA aplicada a tus datos"
      },
      description: {
        en: "OS Copilot, AI Chat and Insight ML transform complex data into clear conclusions, projections and immediate answers for commercial, operational and executive teams.",
        es: "OS Copilot, AI Chat e Insight ML transforman datos complejos en conclusiones claras, proyecciones y respuestas inmediatas para equipos comerciales, operativos y directivos."
      }
    },
    {
      title: {
        en: "Competitive intelligence integrated into strategy",
        es: "Información competitiva integrada a la estrategia"
      },
      description: {
        en: "With Competitor Intelligence, retail can monitor market prices, trends and competitor movements to adjust commercial strategies with greater precision.",
        es: "Con Competitor Intelligence, el retail puede monitorear precios del mercado, tendencias y movimientos de la competencia para ajustar estrategias comerciales con mayor precisión."
      }
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "less time consolidating information from multiple sources",
        es: "menos tiempo consolidando información desde múltiples fuentes"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster commercial decision-making speed",
        es: "más velocidad en la toma de decisiones comerciales"
      }
    },
    {
      value: "35%",
      label: {
        en: "improvement in inventory and campaign planning",
        es: "mejora en planificación de inventarios y campañas"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "What type of retailers can use One Source Platform?",
        es: "¿Qué tipo de retailers pueden usar One Source Platform?"
      },
      answer: {
        en: "Retailers with ecommerce, physical stores or omnichannel operations that need a centralized vision of their business.",
        es: "Retailers con ecommerce, tiendas físicas u operaciones omnicanal que necesiten una visión centralizada de su negocio."
      }
    },
    {
      question: {
        en: "Does the platform integrate with my current tools?",
        es: "¿La plataforma se integra con mis herramientas actuales?"
      },
      answer: {
        en: "Yes. It connects with ecommerce platforms, CRM, ERP, digital advertising, payment gateways and internal systems.",
        es: "Sí. Se conecta con plataformas de ecommerce, CRM, ERP, pauta digital, pasarelas de pago y sistemas internos."
      }
    },
    {
      question: {
        en: "Who can use the platform within the company?",
        es: "¿Quién puede usar la plataforma dentro de la empresa?"
      },
      answer: {
        en: "Commercial, marketing, operations, management and analytics teams, each with personalized views and access.",
        es: "Equipos comerciales, marketing, operaciones, dirección y analítica, cada uno con vistas y accesos personalizados."
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

