"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function MarketplacesPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Total visibility and control to operate marketplaces",
      es: "Visibilidad y control total para operar marketplaces"
    },
    titlePart2: {
      en: "with multiple sellers, products and information flows",
      es: "con múltiples vendedores, productos y flujos de información"
    },
    subtitle: {
      en: "Marketplaces handle large volumes of data from sellers, catalogs, orders, payments, campaigns and operations. One Source Platform centralizes the entire ecosystem and powers it with artificial intelligence to offer control, deep analysis and clearer decisions at scale.",
      es: "Los marketplaces manejan grandes volúmenes de datos provenientes de vendedores, catálogos, pedidos, pagos, campañas y operaciones. One Source Platform centraliza todo el ecosistema y lo potencia con inteligencia artificial para ofrecer control, análisis profundo y decisiones más claras a escala."
    }
  };

  const statements = [
    {
      title: {
        en: "Unified vision of sellers, products and operations",
        es: "Visión unificada de vendedores, productos y operaciones"
      },
      description: {
        en: "Centralizes information on sales, inventories, commissions, performance by seller and order status in dashboards designed for complex operations.",
        es: "Centraliza información de ventas, inventarios, comisiones, desempeño por vendedor y estado de pedidos en dashboards diseñados para operaciones complejas."
      }
    },
    {
      title: {
        en: "Deep analysis of marketplace performance",
        es: "Análisis profundo del rendimiento del marketplace"
      },
      description: {
        en: "Evaluates categories, sellers, products, conversion, average ticket and customer behavior to identify growth and optimization opportunities.",
        es: "Evalúa categorías, sellers, productos, conversión, ticket promedio y comportamiento del cliente para identificar oportunidades de crecimiento y optimización."
      }
    },
    {
      title: {
        en: "AI applied to operational and strategic decisions",
        es: "IA aplicada a decisiones operativas y estratégicas"
      },
      description: {
        en: "OS Copilot, AI Chat and Insight ML help answer key questions, detect patterns, project demand and anticipate scenarios without depending on manual analysis.",
        es: "OS Copilot, AI Chat e Insight ML ayudan a responder preguntas clave, detectar patrones, proyectar demanda y anticipar escenarios sin depender de análisis manuales."
      }
    },
    {
      title: {
        en: "Integrated competitive intelligence",
        es: "Inteligencia competitiva integrada"
      },
      description: {
        en: "Competitor Intelligence allows monitoring market prices, trends by category and positioning against other marketplaces to adjust commercial strategies.",
        es: "Competitor Intelligence permite monitorear precios del mercado, tendencias por categoría y posicionamiento frente a otros marketplaces para ajustar estrategias comerciales."
      }
    }
  ];

  const results = [
    {
      value: "3x",
      label: {
        en: "faster speed in analyzing performance by seller and category",
        es: "más velocidad en análisis de desempeño por vendedor y categoría"
      }
    },
    {
      value: "45%",
      label: {
        en: "less time consolidating operational information",
        es: "menos tiempo consolidando información operativa"
      }
    },
    {
      value: "30%",
      label: {
        en: "improvement in pricing and assortment decisions",
        es: "mejora en decisiones de pricing y surtido"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Does One Source Platform support multiple sellers and large catalogs?",
        es: "¿One Source Platform soporta múltiples vendedores y catálogos grandes?"
      },
      answer: {
        en: "Yes. It is designed to handle operations with multiple sellers, large product volumes and different commercial rules.",
        es: "Sí. Está diseñada para manejar operaciones con múltiples sellers, grandes volúmenes de productos y diferentes reglas comerciales."
      }
    },
    {
      question: {
        en: "Can I analyze performance by seller or category?",
        es: "¿Se puede analizar el desempeño por vendedor o categoría?"
      },
      answer: {
        en: "Yes. The platform allows segmenting analysis by seller, category, product, channel or period.",
        es: "Sí. La plataforma permite segmentar análisis por vendedor, categoría, producto, canal o periodo."
      }
    },
    {
      question: {
        en: "Can it integrate with proprietary marketplace systems?",
        es: "¿Puede integrarse con sistemas propios del marketplace?"
      },
      answer: {
        en: "Yes. It connects with internal platforms, proprietary APIs, payment systems, logistics and marketing tools.",
        es: "Sí. Se conecta con plataformas internas, APIs propias, sistemas de pagos, logística y herramientas de marketing."
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

