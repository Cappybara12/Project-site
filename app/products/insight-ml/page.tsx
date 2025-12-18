"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function InsightMLPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "A machine learning laboratory designed",
      es: "Un laboratorio de machine learning diseñado"
    },
    titlePart2: {
      en: "for any team to create predictive models without technical knowledge",
      es: "para que cualquier equipo pueda crear modelos predictivos sin conocimientos técnicos"
    },
    subtitle: {
      en: "Insight ML converts your data into an easy-to-use prediction engine. With a few clicks you can identify trends, anticipate behaviors, detect risks and project future scenarios, all powered by advanced machine learning models adapted to your operation.",
      es: "Insight ML convierte tus datos en un motor de predicción fácil de usar. Con pocos clics puedes identificar tendencias, anticipar comportamientos, detectar riesgos y proyectar escenarios futuros, todo impulsado por modelos avanzados de machine learning adaptados a tu operación."
    }
  };

  const statements = [
    {
      title: {
        en: "Build predictive models in minutes",
        es: "Construye modelos predictivos en minutos"
      },
      description: {
        en: "Without code, without complexity and without depending on specialized teams. Select a metric, choose a model and get a prediction ready to use.",
        es: "Sin código, sin complejidad y sin depender de equipos especializados. Selecciona una métrica, elige un modelo y obtén una predicción lista para usar."
      }
    },
    {
      title: {
        en: "Clear scenarios to make decisions with time",
        es: "Escenarios claros para tomar decisiones con tiempo"
      },
      description: {
        en: "Project sales, demand, inventory turnover, behavior by channel, campaign performance and more to anticipate instead of react.",
        es: "Proyecta ventas, demanda, rotación de inventario, comportamiento por canal, rendimiento de campañas y más para anticiparte en lugar de reaccionar."
      }
    },
    {
      title: {
        en: "Automatic identification of patterns and anomalies",
        es: "Identificación automática de patrones y anomalías"
      },
      description: {
        en: "Insight ML analyzes your business history and detects trends, unusual variations, behavior changes and hidden opportunities.",
        es: "Insight ML analiza el historial de tu negocio y detecta tendencias, variaciones inusuales, cambios de comportamiento y oportunidades ocultas."
      }
    },
    {
      title: {
        en: "Ideal for marketing, operations and management teams",
        es: "Ideal para equipos de marketing, operaciones y dirección"
      },
      description: {
        en: "Allows all areas to make informed decisions based on real data, without depending on complex analytics or manual processes.",
        es: "Permite que todas las áreas tomen decisiones informadas basadas en datos reales, sin depender de analíticos complejos o procesos manuales."
      }
    }
  ];

  const results = [
    {
      value: "40%",
      label: {
        en: "more precision in operational projections",
        es: "más precisión en proyecciones operativas"
      }
    },
    {
      value: "60%",
      label: {
        en: "less time invested in manual predictive analysis",
        es: "menos tiempo invertido en análisis predictivo manual"
      }
    },
    {
      value: "2x",
      label: {
        en: "improvement in monthly planning thanks to clear predictions",
        es: "mejora en la planificación mensual gracias a predicciones claras"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Do I need data science knowledge to use Insight ML?",
        es: "¿Necesito conocimientos de data science para usar Insight ML?"
      },
      answer: {
        en: "No. The entire module is designed to work with a few clicks and without technical knowledge.",
        es: "No. Todo el módulo está diseñado para funcionar con pocos clics y sin conocimiento técnico."
      }
    },
    {
      question: {
        en: "What type of predictions can I generate?",
        es: "¿Qué tipo de predicciones puedo generar?"
      },
      answer: {
        en: "Sales, demand, inventories, behavior by channel, campaign projections, operational times and more, according to the data available in your ecosystem.",
        es: "Ventas, demanda, inventarios, comportamiento por canal, proyección de campañas, tiempos operativos y más, según los datos disponibles en tu ecosistema."
      }
    },
    {
      question: {
        en: "How are the models trained?",
        es: "¿Cómo se entrenan los modelos?"
      },
      answer: {
        en: "Insight ML uses your historical information to automatically train models, adjusting to the real behavior of your company.",
        es: "Insight ML utiliza tu información histórica para entrenar modelos automáticamente, ajustándose al comportamiento real de tu empresa."
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

