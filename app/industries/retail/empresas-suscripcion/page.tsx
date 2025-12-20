"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function EmpresasSuscripcionPage() {
  const heroContent = {
    badge: {
      en: "ONE SOURCE PLATFORM",
      es: "PLATAFORMA ÚNICA"
    },
    titlePart1: {
      en: "Total control of the subscription cycle",
      es: "Control total del ciclo de suscripción"
    },
    titlePart2: {
      en: "with centralized data and decisions based on real behavior",
      es: "con datos centralizados y decisiones basadas en comportamiento real"
    },
    subtitle: {
      en: "Subscription companies handle critical metrics like sign-ups, renewals, cancellations, recurrence and customer value. One Source Platform centralizes all ecosystem information —payments, users, campaigns, support and product usage— and powers it with artificial intelligence to optimize retention and sustainable growth.",
      es: "Las empresas de suscripción manejan métricas críticas como altas, renovaciones, cancelaciones, recurrencia y valor del cliente. One Source Platform centraliza toda la información del ecosistema —pagos, usuarios, campañas, soporte y uso del producto— y la potencia con inteligencia artificial para optimizar la retención y el crecimiento sostenible."
    }
  };

  const statements = [
    {
      title: {
        en: "Complete vision of the customer lifecycle",
        es: "Visión completa del ciclo de vida del cliente"
      },
      description: {
        en: "Centralizes data on acquisition, activation, renewals, upgrades, downgrades and cancellations to understand the real behavior of your subscribers.",
        es: "Centraliza datos de adquisición, activación, renovaciones, upgrades, downgrades y cancelaciones para entender el comportamiento real de tus suscriptores."
      }
    },
    {
      title: {
        en: "Key metrics always visible",
        es: "Métricas clave siempre visibles"
      },
      description: {
        en: "Monitors churn, LTV, MRR, ARPU, cohorts and performance by plan from dashboards designed for growth, operations and management teams.",
        es: "Monitorea churn, LTV, MRR, ARPU, cohortes y rendimiento por plan desde dashboards diseñados para equipos de growth, operaciones y dirección."
      }
    },
    {
      title: {
        en: "AI to anticipate risks and opportunities",
        es: "IA para anticipar riesgos y oportunidades"
      },
      description: {
        en: "OS Copilot, AI Chat and Insight ML help identify cancellation patterns, forecast renewals and detect retention opportunities before they occur.",
        es: "OS Copilot, AI Chat e Insight ML ayudan a identificar patrones de cancelación, prever renovaciones y detectar oportunidades de retención antes de que ocurran."
      }
    },
    {
      title: {
        en: "Information connected to the entire operation",
        es: "Información conectada a toda la operación"
      },
      description: {
        en: "Integrates payments, CRM, support, marketing and product usage to make coordinated decisions based on real data.",
        es: "Integra pagos, CRM, soporte, marketing y uso del producto para tomar decisiones coordinadas y basadas en datos reales."
      }
    }
  ];

  const results = [
    {
      value: "30%",
      label: {
        en: "improvement in visibility of retention metrics",
        es: "mejora en visibilidad de métricas de retención"
      }
    },
    {
      value: "2.5x",
      label: {
        en: "faster speed to detect churn risks",
        es: "más velocidad para detectar riesgos de churn"
      }
    },
    {
      value: "40%",
      label: {
        en: "less time consolidating subscription metrics",
        es: "menos tiempo consolidando métricas de suscripción"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Does One Source Platform work for any subscription model?",
        es: "¿One Source Platform funciona para cualquier modelo de suscripción?"
      },
      answer: {
        en: "Yes. It works for memberships, subscription boxes, SaaS, recurring services and hybrid models.",
        es: "Sí. Funciona para membresías, cajas de suscripción, SaaS, servicios recurrentes y modelos híbridos."
      }
    },
    {
      question: {
        en: "Can I analyze churn and retention by cohorts?",
        es: "¿Puedo analizar churn y retención por cohortes?"
      },
      answer: {
        en: "Yes. The platform allows analysis by cohorts, plans, periods and customer behavior.",
        es: "Sí. La plataforma permite análisis por cohortes, planes, periodos y comportamiento del cliente."
      }
    },
    {
      question: {
        en: "Does it integrate with payment platforms and CRM?",
        es: "¿Se integra con plataformas de pago y CRM?"
      },
      answer: {
        en: "Yes. It connects with payment gateways, billing systems, CRM, support and marketing tools.",
        es: "Sí. Se conecta con pasarelas de pago, sistemas de billing, CRM, soporte y herramientas de marketing."
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

