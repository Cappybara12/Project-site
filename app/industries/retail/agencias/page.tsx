"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function AgenciasPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "A central platform for agencies to analyze, compare and optimize",
      es: "Una plataforma central para que las agencias analicen, comparen y optimicen"
    },
    titlePart2: {
      en: "their clients' performance in one place",
      es: "el desempeño de sus clientes en un solo lugar"
    },
    subtitle: {
      en: "Agencies manage multiple accounts, campaigns and data sources at the same time. One Source Platform centralizes all marketing, sales and results information from each client, and powers it with artificial intelligence to facilitate analysis, improve decision-making and scale operations without increasing operational workload.",
      es: "Las agencias gestionan múltiples cuentas, campañas y fuentes de datos al mismo tiempo. One Source Platform centraliza toda la información de marketing, ventas y resultados de cada cliente, y la potencia con inteligencia artificial para facilitar el análisis, mejorar la toma de decisiones y escalar la operación sin aumentar la carga operativa."
    }
  };

  const statements = [
    {
      title: {
        en: "Unified view by client and by account",
        es: "Visión unificada por cliente y por cuenta"
      },
      description: {
        en: "Centralizes data from digital advertising, ecommerce, leads, conversions and results in dashboards separated by client, brand or campaign.",
        es: "Centraliza datos de pauta digital, ecommerce, leads, conversiones y resultados en dashboards separados por cliente, marca o campaña."
      }
    },
    {
      title: {
        en: "Deep analysis of campaign performance",
        es: "Análisis profundo del rendimiento de campañas"
      },
      description: {
        en: "Cross-references information from channels, audiences, creatives and results to understand what is working, what is not and where to optimize investment.",
        es: "Cruza información de canales, audiencias, creativos y resultados para entender qué está funcionando, qué no y dónde optimizar inversión."
      }
    },
    {
      title: {
        en: "AI to answer questions and generate insights",
        es: "IA para responder preguntas y generar insights"
      },
      description: {
        en: "With OS Copilot and AI Chat, teams can consult results, compare periods and obtain conclusions without building manual reports.",
        es: "Con OS Copilot y AI Chat, los equipos pueden consultar resultados, comparar periodos y obtener conclusiones sin construir reportes manuales."
      }
    },
    {
      title: {
        en: "Scalability to operate more clients without friction",
        es: "Escalabilidad para operar más clientes sin fricción"
      },
      description: {
        en: "The platform allows managing multiple brands and accounts without duplicating efforts, maintaining order, consistency and clarity in data.",
        es: "La plataforma permite manejar múltiples marcas y cuentas sin duplicar esfuerzos, manteniendo orden, consistencia y claridad en los datos."
      }
    }
  ];

  const results = [
    {
      value: "3x",
      label: {
        en: "faster speed in analyzing results per client",
        es: "más velocidad en el análisis de resultados por cliente"
      }
    },
    {
      value: "50%",
      label: {
        en: "less time dedicated to manual reports",
        es: "menos tiempo dedicado a reportes manuales"
      }
    },
    {
      value: "30%",
      label: {
        en: "improvement in campaign optimization thanks to centralized insights",
        es: "mejora en optimización de campañas gracias a insights centralizados"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Does One Source Platform allow managing multiple clients at the same time?",
        es: "¿One Source Platform permite manejar varios clientes al mismo tiempo?"
      },
      answer: {
        en: "Yes. It is designed for agencies that manage multiple accounts, with separate and controlled views per client.",
        es: "Sí. Está diseñada para agencias que gestionan múltiples cuentas, con vistas separadas y controladas por cliente."
      }
    },
    {
      question: {
        en: "Can I integrate different marketing and sales platforms?",
        es: "¿Puedo integrar distintas plataformas de marketing y ventas?"
      },
      answer: {
        en: "Yes. It connects with advertising platforms, ecommerce, CRM, analytics tools and internal systems.",
        es: "Sí. Se conecta con plataformas de pauta, ecommerce, CRM, herramientas de analítica y sistemas internos."
      }
    },
    {
      question: {
        en: "Is it useful for both technical and commercial teams?",
        es: "¿Es útil tanto para equipos técnicos como comerciales?"
      },
      answer: {
        en: "Yes. Marketing, performance, management and commercial teams can use the platform with views adapted to their needs.",
        es: "Sí. Marketing, performance, dirección y equipos comerciales pueden usar la plataforma con vistas adaptadas a sus necesidades."
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

