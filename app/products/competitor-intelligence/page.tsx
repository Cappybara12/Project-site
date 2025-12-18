"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function CompetitorIntelligencePage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Monitor prices, movements and market trends",
      es: "Monitorea precios, movimientos y tendencias del mercado"
    },
    titlePart2: {
      en: "to make decisions based on what's really happening outside",
      es: "para tomar decisiones basadas en lo que realmente está pasando afuera"
    },
    subtitle: {
      en: "Competitor Intelligence tracks your competitors' prices, analyzes market variations and detects commercial opportunities in real time. All this information integrates directly into your platform to help you adjust strategies, optimize your offer and always stay competitive.",
      es: "Competitor Intelligence rastrea los precios de tus competidores, analiza variaciones en el mercado y detecta oportunidades comerciales en tiempo real. Toda esta información se integra directamente en tu plataforma para ayudarte a ajustar estrategias, optimizar tu oferta y mantenerte siempre competitivo."
    }
  };

  const statements = [
    {
      title: {
        en: "Automatic tracking of competitor prices",
        es: "Rastreo automático de precios de competidores"
      },
      description: {
        en: "Monitor key products in your industry, compare prices and detect important changes without manual work.",
        es: "Monitorea los productos clave de tu industria, compara precios y detecta cambios importantes sin trabajo manual."
      }
    },
    {
      title: {
        en: "Market trends visible in a single module",
        es: "Tendencias del mercado visibles en un solo módulo"
      },
      description: {
        en: "Identify competitor movements, category fluctuations, positioning opportunities and signals of change in demand.",
        es: "Identifica movimientos de la competencia, fluctuaciones en categorías, oportunidades de posicionamiento y señales de cambio en la demanda."
      }
    },
    {
      title: {
        en: "Comparative analysis integrated into your ecosystem",
        es: "Análisis comparativo integrado a tu ecosistema"
      },
      description: {
        en: "Compare your prices, inventories and performance with market behavior to make more informed and strategic decisions.",
        es: "Compara tus precios, inventarios y rendimiento con el comportamiento del mercado para tomar decisiones más informadas y estratégicas."
      }
    },
    {
      title: {
        en: "Faster and better-founded decisions",
        es: "Decisiones más rápidas y mejor fundamentadas"
      },
      description: {
        en: "Access updated information without depending on manual searches or external reports. Everything you need in one place.",
        es: "Accede a información actualizada sin depender de búsquedas manuales o reportes externos. Todo lo que necesitas en un solo lugar."
      }
    }
  ];

  const results = [
    {
      value: "4x",
      label: {
        en: "faster speed to identify competitive movements",
        es: "más velocidad para identificar movimientos competitivos"
      }
    },
    {
      value: "35%",
      label: {
        en: "improvement in pricing and positioning decisions",
        es: "mejora en decisiones de pricing y posicionamiento"
      }
    },
    {
      value: "60%",
      label: {
        en: "less time invested in manual market analysis",
        es: "menos tiempo invertido en análisis manual del mercado"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "What type of information can Competitor Intelligence track?",
        es: "¿Qué tipo de información puede rastrear Competitor Intelligence?"
      },
      answer: {
        en: "Prices, product availability, variations by category, trends by brand and relevant market movements.",
        es: "Precios, disponibilidad de productos, variaciones por categoría, tendencias por marca y movimientos relevantes del mercado."
      }
    },
    {
      question: {
        en: "How often is the information updated?",
        es: "¿Cada cuánto se actualiza la información?"
      },
      answer: {
        en: "Depending on volume and category, data can be updated several times a day to maintain an accurate and up-to-date view.",
        es: "Dependiendo del volumen y categoría, los datos pueden actualizarse varias veces al día para mantener una visión precisa y actualizada."
      }
    },
    {
      question: {
        en: "Can I integrate this information with my pricing decisions?",
        es: "¿Puedo integrar esta información con mis decisiones de pricing?"
      },
      answer: {
        en: "Yes. You can use the insights to adjust prices, campaigns, inventory and commercial strategies directly from One Source Platform.",
        es: "Sí. Puedes usar los insights para ajustar precios, campañas, inventario y estrategias comerciales directamente desde One Source Platform."
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

