"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function CallsPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "Automation by calls",
      es: "Automatización por llamadas"
    },
    titlePart2: {
      en: "Serve, Guide and Resolve requests without depending on a saturated phone team",
      es: "Atender, Guiar y Resolver solicitudes sin depender de un equipo telefónico saturado"
    },
    subtitle: {
      en: "Implement AI-powered voice agents that answer calls, understand intentions, follow operational flows, verify information and execute internal processes. An intelligent phone channel that operates 24/7 and reduces the workload of your human team.",
      es: "Implementa agentes de voz impulsados por IA que responden llamadas, entienden intenciones, siguen flujos operativos, verifican información y ejecutan procesos internos. Un canal telefónico inteligente que opera 24/7 y reduce la carga de tu equipo humano."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate phone attention available at all times",
        es: "Atención telefónica inmediata y disponible en todo momento"
      },
      description: {
        en: "Your voice agent responds instantly, interprets what the user needs and executes defined steps without wait times.",
        es: "Tu agente de voz responde al instante, interpreta lo que el usuario necesita y ejecuta pasos definidos sin tiempos de espera."
      },
      image: "/products/calls-immediate.svg"
    },
    {
      title: {
        en: "Natural and guided conversational flows",
        es: "Flujos conversacionales naturales y guiados"
      },
      description: {
        en: "The agent guides the user through processes such as reservations, inquiries, validations, support or follow-up, maintaining a fluid and professional conversation.",
        es: "El agente guía al usuario a través de procesos como reservas, consultas, validaciones, soporte o seguimiento, manteniendo una conversación fluida y profesional."
      },
      image: "/products/calls-natural.svg"
    },
    {
      title: {
        en: "Complete integration with your internal systems",
        es: "Integración completa con tus sistemas internos"
      },
      description: {
        en: "It can query databases, validate identity, update statuses, record information or activate operational flows directly from the call.",
        es: "Puede consultar bases de datos, validar identidad, actualizar estados, registrar información o activar flujos operativos directamente desde la llamada."
      },
      image: "/products/calls-integration.svg"
    },
    {
      title: {
        en: "Less operational workload for your team",
        es: "Menos carga operativa para tu equipo"
      },
      description: {
        en: "Repetitive calls are managed automatically. Only complex cases are transferred to a human agent, improving efficiency and reducing wait times.",
        es: "Las llamadas repetitivas son gestionadas automáticamente. Solo los casos complejos se transfieren a un agente humano, mejorando la eficiencia y reduciendo tiempos de espera."
      },
      image: "/products/calls-workload.svg"
    }
  ];

  const results = [
    {
      value: "50%",
      label: {
        en: "fewer call volume handled by humans",
        es: "menos volumen de llamadas atendidas por humanos"
      }
    },
    {
      value: "4x",
      label: {
        en: "faster request resolution speed",
        es: "más velocidad en resolución de solicitudes"
      }
    },
    {
      value: "35%",
      label: {
        en: "increase in user satisfaction thanks to minimal wait times",
        es: "aumento en satisfacción del usuario gracias a tiempos de espera mínimos"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Do calls sound natural or robotic?",
        es: "¿Las llamadas suenan naturales o robóticas?"
      },
      answer: {
        en: "The voice agent uses advanced natural language technology to maintain fluid, clear conversations very similar to human interaction.",
        es: "El agente de voz utiliza tecnología avanzada de lenguaje natural para mantener conversaciones fluidas, claras y muy similares a la interacción humana."
      }
    },
    {
      question: {
        en: "Can it validate sensitive information?",
        es: "¿Puede validar información sensible?"
      },
      answer: {
        en: "Yes. It can authenticate identity, validate documents, query serials, verify statuses and handle processes with specific filters.",
        es: "Sí. Puede autenticar identidad, validar documentos, consultar seriales, verificar estados y manejar procesos con filtros específicos."
      }
    },
    {
      question: {
        en: "Does it integrate with my current tools?",
        es: "¿Se integra con mis herramientas actuales?"
      },
      answer: {
        en: "Yes. We can connect it with your CRM, ERP, internal systems, databases and other services according to your needs.",
        es: "Sí. Podemos conectarlo con tu CRM, ERP, sistemas internos, bases de datos y otros servicios según tus necesidades."
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

