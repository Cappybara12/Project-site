"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function EmailPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "Intelligent automation by email",
      es: "Automatización inteligente por email"
    },
    titlePart2: {
      en: "Manage requests, organize processes and maintain clear communication with your customers",
      es: "Gestionar solicitudes, organizar procesos y mantener una comunicación clara con tus clientes"
    },
    subtitle: {
      en: "Transform email into an automated channel capable of responding to messages, classifying requests, executing internal flows and delivering precise information without manual intervention. Ideal for teams that receive large volumes of emails and need order, speed and consistency.",
      es: "Transforma el email en un canal automatizado capaz de responder mensajes, clasificar solicitudes, ejecutar flujos internos y entregar información precisa sin intervención manual. Ideal para equipos que reciben grandes volúmenes de correos y necesitan orden, rapidez y consistencia."
    }
  };

  const statements = [
    {
      title: {
        en: "Automatic responses based on context",
        es: "Respuestas automáticas basadas en contexto"
      },
      description: {
        en: "Your AI agent analyzes the email content, identifies the user's intention and responds with clear, personalized information consistent with your company's policies.",
        es: "Tu agente de IA analiza el contenido del email, identifica la intención del usuario y responde con información clara, personalizada y coherente con las políticas de tu empresa."
      },
      image: "/products/email-context.svg"
    },
    {
      title: {
        en: "Automatic classification and intelligent prioritization",
        es: "Clasificación automática y priorización inteligente"
      },
      description: {
        en: "Organize incoming emails according to their type (sales, support, billing, follow-up, technical inquiries) so each message reaches the correct area without human effort.",
        es: "Organiza los correos entrantes según su tipo (ventas, soporte, facturación, seguimiento, consultas técnicas) para que cada mensaje llegue al área correcta sin esfuerzo humano."
      },
      image: "/products/email-classification.svg"
    },
    {
      title: {
        en: "Integration with your internal systems",
        es: "Integración con tus sistemas internos"
      },
      description: {
        en: "From updating a ticket in your support system, to validating information in your CRM or registering an order: the agent executes real actions by connecting to your internal tools.",
        es: "Desde actualizar un ticket en tu sistema de soporte, hasta validar información en tu CRM o registrar un pedido: el agente ejecuta acciones reales conectándose a tus herramientas internas."
      },
      image: "/products/email-integration.svg"
    },
    {
      title: {
        en: "Smoother operation and better experience for your users",
        es: "Operación más fluida y mejor experiencia para tus usuarios"
      },
      description: {
        en: "Reduced response time, more organized processes and a channel that works stably even during high demand periods.",
        es: "Reducción del tiempo de respuesta, procesos más ordenados y un canal que funciona de manera estable incluso en momentos de alta demanda."
      },
      image: "/products/email-smoother.svg"
    }
  ];

  const results = [
    {
      value: "60%",
      label: {
        en: "less time dedicated to operational emails",
        es: "menos tiempo dedicado a correos operativos"
      }
    },
    {
      value: "5x",
      label: {
        en: "faster request processing speed",
        es: "más velocidad en el procesamiento de solicitudes"
      }
    },
    {
      value: "70%",
      label: {
        en: "better organization in message classification",
        es: "mayor organización en la clasificación de mensajes"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent understand long or complex emails?",
        es: "¿El agente puede entender correos largos o complejos?"
      },
      answer: {
        en: "Yes. It analyzes the complete email content, identifies the intention and generates a precise response according to your guidelines.",
        es: "Sí. Analiza el contenido completo del email, identifica la intención y genera una respuesta precisa según tus lineamientos."
      }
    },
    {
      question: {
        en: "Can it execute internal actions from an email?",
        es: "¿Puede ejecutar acciones internas desde un correo?"
      },
      answer: {
        en: "Yes. It can create records, update statuses, query data, generate processes and connect with your internal systems.",
        es: "Sí. Puede crear registros, actualizar estados, consultar datos, generar procesos y conectar con tus sistemas internos."
      }
    },
    {
      question: {
        en: "Do I need to change my email tool?",
        es: "¿Necesito cambiar mi herramienta de email?"
      },
      answer: {
        en: "No. It works with Gmail, Outlook or other providers without needing to migrate your infrastructure.",
        es: "No. Funciona con Gmail, Outlook u otros proveedores sin necesidad de migrar tu infraestructura."
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

