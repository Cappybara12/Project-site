"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function DeepAnalysisPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Deep analysis that connects all information",
      es: "Análisis profundo que conecta toda la información"
    },
    titlePart2: {
      en: "from your ecommerce ecosystem to discover invisible opportunities in daily operations",
      es: "de tu ecosistema de ecommerce para descubrir oportunidades invisibles en la operación diaria"
    },
    subtitle: {
      en: "Deep Analysis gathers data from your website, digital advertising, CRM, ERP, inventories, sales and more to detect patterns, understand behaviors, identify bottlenecks and reveal strategic insights that help your company make smarter decisions.",
      es: "Deep Analysis reúne datos de tu sitio web, pauta digital, CRM, ERP, inventarios, ventas y más para detectar patrones, entender comportamientos, identificar cuellos de botella y revelar insights estratégicos que ayudan a tu empresa a tomar decisiones más inteligentes."
    }
  };

  const statements = [
    {
      title: {
        en: "Complete integration of all your information sources",
        es: "Integración completa de todas tus fuentes de información"
      },
      description: {
        en: "Connect data from each tool that is part of your ecommerce to analyze the total performance of your operation in a single module.",
        es: "Conecta datos de cada herramienta que forma parte de tu ecommerce para analizar el rendimiento total de tu operación en un solo módulo."
      }
    },
    {
      title: {
        en: "Insights that go beyond the numbers",
        es: "Insights que van más allá de los números"
      },
      description: {
        en: "Identify trends, purchase behaviors, performance by channel, campaign impact, demand variations and other key patterns that are not seen in traditional reports.",
        es: "Identifica tendencias, comportamientos de compra, rendimiento por canal, impacto de campañas, variaciones de demanda y otros patrones clave que no se ven en reportes tradicionales."
      }
    },
    {
      title: {
        en: "Automatic detection of opportunities and risks",
        es: "Detección automática de oportunidades y riesgos"
      },
      description: {
        en: "With algorithms designed to cross-reference information, discover drops in conversions, unusual increases, operational problems, products with potential and areas that need immediate attention.",
        es: "Con algoritmos diseñados para cruzar información, descubre caídas en conversiones, aumentos inusuales, problemas operativos, productos con potencial y áreas que necesitan atención inmediata."
      }
    },
    {
      title: {
        en: "Analytical depth without depending on technical teams",
        es: "Profundidad analítica sin depender de equipos técnicos"
      },
      description: {
        en: "Access advanced reports, visualizations and automated conclusions without needing dedicated analysts or manual consolidation processes.",
        es: "Accede a reportes avanzados, visualizaciones y conclusiones automatizadas sin necesidad de analistas dedicados o procesos manuales de consolidación."
      }
    }
  ];

  const results = [
    {
      value: "40%",
      label: {
        en: "more precision in identifying improvement opportunities",
        es: "más precisión en la identificación de oportunidades de mejora"
      }
    },
    {
      value: "65%",
      label: {
        en: "less time invested in manual analysis",
        es: "menos tiempo invertido en análisis manual"
      }
    },
    {
      value: "2.5x",
      label: {
        en: "more actionable insights detected per month",
        es: "más insights accionables detectados por mes"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "What tools can be connected to Deep Analysis?",
        es: "¿Qué herramientas se pueden conectar a Deep Analysis?"
      },
      answer: {
        en: "Website, advertising platforms, CRM, ERP, payment gateways, inventories, logistics and any system that is part of your ecommerce ecosystem.",
        es: "Sitio web, plataformas de pauta, CRM, ERP, pasarelas de pago, inventarios, logística y cualquier sistema que forme parte de tu ecosistema ecommerce."
      }
    },
    {
      question: {
        en: "Does Deep Analysis generate conclusions automatically?",
        es: "¿Deep Analysis genera conclusiones automáticamente?"
      },
      answer: {
        en: "Yes. The module identifies patterns, anomalies and opportunities to facilitate decision-making.",
        es: "Sí. El módulo identifica patrones, anomalías y oportunidades para facilitar la toma de decisiones."
      }
    },
    {
      question: {
        en: "Do I need technical knowledge to use it?",
        es: "¿Necesito conocimientos técnicos para usarlo?"
      },
      answer: {
        en: "No. The interface is designed so any team member can navigate, understand and act on insights without depending on analysts or data teams.",
        es: "No. La interfaz está diseñada para que cualquier miembro del equipo pueda navegar, comprender y accionar insights sin depender de analistas o equipos de datos."
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
