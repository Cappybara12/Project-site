"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function AIChatPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Chat with your data and get immediate answers",
      es: "Chatea con tus datos y obtén respuestas inmediatas"
    },
    titlePart2: {
      en: "without depending on analysts or manual reports",
      es: "sin depender de analistas ni reportes manuales"
    },
    subtitle: {
      en: "AI Chat transforms all information from your ecommerce ecosystem into a conversational experience. Ask what you need, filter, compare, analyze and make decisions in seconds. Everything powered by artificial intelligence models that understand the context of your business.",
      es: "AI Chat transforma toda la información de tu ecosistema de ecommerce en una experiencia conversacional. Pregunta lo que necesites, filtra, compara, analiza y toma decisiones en segundos. Todo impulsado por modelos de inteligencia artificial que entienden el contexto de tu negocio."
    }
  };

  const statements = [
    {
      title: {
        en: "Natural conversations with all your information",
        es: "Conversaciones naturales con toda tu información"
      },
      description: {
        en: "You can consult sales, conversions, inventories, campaigns, performance by channel, trends and any other data using natural language.",
        es: "Puedes consultar ventas, conversiones, inventarios, campañas, rendimiento por canal, tendencias y cualquier otro dato usando lenguaje natural."
      }
    },
    {
      title: {
        en: "Fast, clear and actionable responses",
        es: "Respuestas rápidas, claras y accionables"
      },
      description: {
        en: "The model interprets your intention, analyzes the connected sources and delivers conclusions with precision, without needing to review panels or long reports.",
        es: "El modelo interpreta tu intención, analiza las fuentes conectadas y te entrega conclusiones con precisión, sin necesidad de revisar paneles o reportes largos."
      }
    },
    {
      title: {
        en: "Explore scenarios and compare results instantly",
        es: "Explora escenarios y compara resultados al instante"
      },
      description: {
        en: "Ask about specific periods, compare months, analyze products or review the impact of your campaigns in seconds.",
        es: "Pregunta por periodos específicos, compara meses, analiza productos o revisa el impacto de tus campañas en segundos."
      }
    },
    {
      title: {
        en: "Ideal for teams that need speed and clarity",
        es: "Ideal para equipos que necesitan velocidad y claridad"
      },
      description: {
        en: "Managers, marketing leaders, commercial and operational teams can resolve doubts without waiting for someone to generate reports.",
        es: "Gerentes, líderes de marketing, equipos comerciales y operativos pueden resolver dudas sin esperar a que alguien genere reportes."
      }
    }
  ];

  const results = [
    {
      value: "5x",
      label: {
        en: "faster decision-making speed",
        es: "más rapidez en la toma de decisiones"
      }
    },
    {
      value: "70%",
      label: {
        en: "fewer internal queries between teams (sales → marketing → data)",
        es: "menos consultas internas entre equipos (ventas → marketing → data)"
      }
    },
    {
      value: "4x",
      label: {
        en: "more analysis capacity without depending on analysts",
        es: "más capacidad de análisis sin depender de analistas"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "What type of questions can I ask in AI Chat?",
        es: "¿Qué tipo de preguntas puedo hacer en AI Chat?"
      },
      answer: {
        en: "From basic metrics like daily sales, to advanced questions like performance by channel, conversion trends, campaign impact or comparative analysis between periods.",
        es: "Desde métricas básicas como ventas por día, hasta preguntas avanzadas como rendimiento por canal, tendencias de conversión, impacto de campañas o análisis comparativos entre periodos."
      }
    },
    {
      question: {
        en: "Does AI Chat understand the context of my business?",
        es: "¿AI Chat entiende el contexto de mi negocio?"
      },
      answer: {
        en: "Yes. The system learns from the behavior of your data, your key metrics and the way your company operates.",
        es: "Sí. El sistema aprende del comportamiento de tus datos, tus métricas clave y la forma en que tu empresa opera."
      }
    },
    {
      question: {
        en: "Do I need technical knowledge to use it?",
        es: "¿Necesito conocimientos técnicos para usarlo?"
      },
      answer: {
        en: "No. Just write your question as you would with a person and you'll receive clear and actionable answers.",
        es: "No. Solo escribe tu pregunta como lo harías con una persona y recibirás respuestas claras y accionables."
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

