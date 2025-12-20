"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function RetailCustomPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Custom developments to optimize operations",
      es: "Desarrollos a la medida para optimizar operaciones"
    },
    titlePart2: {
      en: "integrate channels and strengthen management in retail",
      es: "integrar canales y fortalecer la gestión en retail"
    },
    subtitle: {
      en: "Modern retail requires systems that adapt to complex operations: multiple channels, dynamic inventories, internal processes and personalized experiences. Through Custom Projects, we develop platforms, systems and integrations designed specifically for the real operation of each retailer.",
      es: "El retail moderno requiere sistemas que se adapten a operaciones complejas: múltiples canales, inventarios dinámicos, procesos internos y experiencias personalizadas. A través de Custom Projects, desarrollamos plataformas, sistemas e integraciones diseñadas específicamente para la operación real de cada retailer."
    }
  };

  const statements = [
    {
      title: {
        en: "Custom systems for retail operations",
        es: "Sistemas personalizados para operación retail"
      },
      description: {
        en: "We develop custom solutions to manage inventories, orders, clients, prices, promotions and internal operations from a centralized environment.",
        es: "Desarrollamos soluciones a medida para gestionar inventarios, pedidos, clientes, precios, promociones y operaciones internas desde un entorno centralizado."
      }
    },
    {
      title: {
        en: "Integration between physical and digital channels",
        es: "Integración entre canales físicos y digitales"
      },
      description: {
        en: "We connect physical stores, ecommerce, marketplaces, CRMs and internal systems to guarantee information coherence and operational continuity.",
        es: "Conectamos tiendas físicas, ecommerce, marketplaces, CRMs y sistemas internos para garantizar coherencia en la información y continuidad operativa."
      }
    },
    {
      title: {
        en: "Digitalization of internal processes",
        es: "Digitalización de procesos internos"
      },
      description: {
        en: "We transform manual processes into digital flows: inventory control, order management, returns, internal approvals and operational reports.",
        es: "Transformamos procesos manuales en flujos digitales: control de inventarios, gestión de pedidos, devoluciones, aprobaciones internas y reportes operativos."
      }
    },
    {
      title: {
        en: "Scalable architectures for growth",
        es: "Arquitecturas escalables para crecimiento"
      },
      description: {
        en: "Developments are built with modern technologies that allow scaling in number of stores, channels, products and operational volume without limiting growth.",
        es: "Los desarrollos se construyen con tecnologías modernas que permiten escalar en número de tiendas, canales, productos y volumen operativo sin limitar el crecimiento."
      }
    }
  ];

  const results = [
    {
      value: "45%",
      label: {
        en: "improvement in operational efficiency",
        es: "mejora en eficiencia operativa"
      }
    },
    {
      value: "3x",
      label: {
        en: "more visibility over inventories and orders",
        es: "más visibilidad sobre inventarios y pedidos"
      }
    },
    {
      value: "35%",
      label: {
        en: "reduction in operational errors",
        es: "reducción de errores operativos"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can you develop systems adapted to omnichannel retail?",
        es: "¿Pueden desarrollar sistemas adaptados a retail omnicanal?"
      },
      answer: {
        en: "Yes. We design solutions that integrate physical stores, ecommerce and other channels into a single coherent operation.",
        es: "Sí. Diseñamos soluciones que integran tiendas físicas, ecommerce y otros canales en una sola operación coherente."
      }
    },
    {
      question: {
        en: "Can the developments integrate with my current systems?",
        es: "¿Los desarrollos pueden integrarse con mis sistemas actuales?"
      },
      answer: {
        en: "Yes. We can connect them with ERPs, CRMs, ecommerce platforms, inventory systems and internal tools.",
        es: "Sí. Podemos conectarlos con ERPs, CRMs, plataformas de ecommerce, sistemas de inventario y herramientas internas."
      }
    },
    {
      question: {
        en: "Is it possible to add new functionalities over time?",
        es: "¿Es posible agregar nuevas funcionalidades con el tiempo?"
      },
      answer: {
        en: "Yes. All projects are built with flexible architectures that allow evolving according to business needs.",
        es: "Sí. Todos los proyectos se construyen con arquitecturas flexibles que permiten evolucionar según las necesidades del negocio."
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

