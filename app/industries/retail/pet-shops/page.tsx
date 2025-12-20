"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function PetShopsPage() {
  const heroContent = {
    badge: {
      en: "AUTOMATIONS",
      es: "AUTOMATIZACIONES"
    },
    titlePart1: {
      en: "AI automation to manage appointments",
      es: "Automatización con IA para gestionar agendamientos"
    },
    titlePart2: {
      en: "respond to inquiries and improve the experience of pet owners",
      es: "responder consultas y mejorar la experiencia de dueños de mascotas"
    },
    subtitle: {
      en: "Pet shops receive hundreds of inquiries about services, products, availability and veterinary care. Our AI agents automate communication on WhatsApp, Instagram, Messenger, email and calls to offer quick responses, manage reservations, send recommendations and operate internal processes with total precision.",
      es: "Los pet shops reciben cientos de consultas sobre servicios, productos, disponibilidad y atención veterinaria. Nuestros agentes de IA automatizan la comunicación en WhatsApp, Instagram, Messenger, email y llamadas para ofrecer respuestas rápidas, gestionar reservas, enviar recomendaciones y operar procesos internos con total precisión."
    }
  };

  const statements = [
    {
      title: {
        en: "Immediate responses for pet owners",
        es: "Respuestas inmediatas para dueños de mascotas"
      },
      description: {
        en: "Information about spa services, grooming, veterinary, hours, prices, locations and availability attended instantly, without wait times.",
        es: "Información sobre servicios de spa, grooming, veterinaria, horarios, precios, sedes y disponibilidad atendida al instante, sin tiempos de espera."
      }
    },
    {
      title: {
        en: "Automated appointments for spa and veterinary",
        es: "Agendamientos automatizados para spa y veterinaria"
      },
      description: {
        en: "The agent can manage appointments, confirm reservations, send reminders and reschedule sessions according to business availability.",
        es: "El agente puede gestionar citas, confirmar reservas, enviar recordatorios y reprogramar sesiones según la disponibilidad del negocio."
      }
    },
    {
      title: {
        en: "Product recommendations and inventory inquiries",
        es: "Recomendación de productos y consultas sobre inventario"
      },
      description: {
        en: "Guides users with recommendations for food, snacks, accessories or medicines and checks inventory in real time if integrated with your system.",
        es: "Guía a los usuarios con recomendaciones de alimentos, snacks, accesorios o medicinas y consulta el inventario en tiempo real si está integrado a tu sistema."
      }
    },
    {
      title: {
        en: "More organized internal processes and less operational workload",
        es: "Procesos internos más organizados y menos carga operativa"
      },
      description: {
        en: "The agent classifies requests, records information, notifies internal teams and significantly reduces the volume of manual tasks.",
        es: "El agente clasifica solicitudes, registra información, notifica a equipos internos y reduce significativamente el volumen de tareas manuales."
      }
    }
  ];

  const results = [
    {
      value: "60%",
      label: {
        en: "fewer operational messages handled by humans",
        es: "menos mensajes operativos atendidos por humanos"
      }
    },
    {
      value: "3x",
      label: {
        en: "faster appointment process speed",
        es: "más rapidez en el proceso de agendamiento"
      }
    },
    {
      value: "25%",
      label: {
        en: "increase in sales of products recommended by AI",
        es: "aumento en ventas de productos recomendados por IA"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can the agent manage appointments for spa, grooming and veterinary?",
        es: "¿El agente puede gestionar citas para spa, grooming y veterinaria?"
      },
      answer: {
        en: "Yes. It can manage the entire flow: reservation, confirmation, reminder, cancellation or rescheduling.",
        es: "Sí. Puede gestionar todo el flujo: reserva, confirmación, recordatorio, cancelación o reprogramación."
      }
    },
    {
      question: {
        en: "Can it recommend products according to customer needs?",
        es: "¿Puede recomendar productos según la necesidad del cliente?"
      },
      answer: {
        en: "Yes. It can suggest food, accessories, medicines, toys and more according to categories and availability.",
        es: "Sí. Puede sugerir alimentos, accesorios, medicinas, juguetes y más según categorías y disponibilidad."
      }
    },
    {
      question: {
        en: "Does it integrate with inventory systems or appointment platforms?",
        es: "¿Se integra con sistemas de inventario o plataformas de agendamiento?"
      },
      answer: {
        en: "Yes. We integrate with internal systems, reservation platforms, CRMs, ecommerce and databases according to your operation.",
        es: "Sí. Integramos con sistemas internos, plataformas de reservas, CRMs, ecommerce y bases de datos según tu operación."
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

