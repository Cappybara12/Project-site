"use client";

import { ProductHero } from "../../../products/components/ProductHero";
import { StatementCards } from "../../../products/components/StatementCards";
import { ResultCards } from "../../../products/components/ResultCards";
import { ProductFAQ } from "../../../products/components/ProductFAQ";

export default function DistribuidorasCustomPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Custom systems and developments to optimize operations",
      es: "Sistemas y desarrollos a la medida para optimizar operaciones"
    },
    titlePart2: {
      en: "orders and internal control in distributors",
      es: "pedidos y control interno en distribuidoras"
    },
    subtitle: {
      en: "Distributors handle high volumes of orders, inventories, clients and logistics processes. Through Custom Projects, we develop customized systems that allow centralizing information, automating internal flows and improving operational efficiency at every stage of the business.",
      es: "Las distribuidoras manejan altos volúmenes de pedidos, inventarios, clientes y procesos logísticos. A través de Custom Projects, desarrollamos sistemas personalizados que permiten centralizar información, automatizar flujos internos y mejorar la eficiencia operativa en cada etapa del negocio."
    }
  };

  const statements = [
    {
      title: {
        en: "Custom platforms for order and client management",
        es: "Plataformas personalizadas para gestión de pedidos y clientes"
      },
      description: {
        en: "We develop systems to manage orders, clients, price lists, commercial conditions, billing and account statuses in a single environment.",
        es: "Desarrollamos sistemas para administrar pedidos, clientes, listas de precios, condiciones comerciales, facturación y estados de cuenta en un solo entorno."
      },
      image: "/industries/placeholder-1.svg"
    },
    {
      title: {
        en: "Digitalization of operational and logistics processes",
        es: "Digitalización de procesos operativos y logísticos"
      },
      description: {
        en: "We convert manual processes into digital flows: inventory management, order preparation, dispatches, deliveries and logistics tracking.",
        es: "Convertimos procesos manuales en flujos digitales: gestión de inventarios, preparación de pedidos, despachos, entregas y seguimiento logístico."
      },
      image: "/industries/placeholder-2.svg"
    },
    {
      title: {
        en: "Integration with ERPs and existing systems",
        es: "Integración con ERPs y sistemas existentes"
      },
      description: {
        en: "We connect developments with ERPs, accounting systems, inventory platforms, ecommerce and internal tools to keep information synchronized.",
        es: "Conectamos los desarrollos con ERPs, sistemas contables, plataformas de inventario, ecommerce y herramientas internas para mantener la información sincronizada."
      },
      image: "/industries/placeholder-3.svg"
    },
    {
      title: {
        en: "Scalable architectures to grow with the business",
        es: "Arquitecturas escalables para crecer con el negocio"
      },
      description: {
        en: "Systems are designed to support growth in volume, new channels, more clients and geographic expansion without needing to rebuild the solution.",
        es: "Los sistemas se diseñan para soportar crecimiento en volumen, nuevos canales, más clientes y expansión geográfica sin necesidad de reconstruir la solución."
      },
      image: "/industries/placeholder-4.svg"
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
        en: "more visibility over orders and inventories",
        es: "más visibilidad sobre pedidos e inventarios"
      }
    },
    {
      value: "40%",
      label: {
        en: "fewer errors associated with manual processes",
        es: "menos errores asociados a procesos manuales"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can you develop systems adapted to how my distributor operates?",
        es: "¿Pueden desarrollar sistemas adaptados a la forma de operar de mi distribuidora?"
      },
      answer: {
        en: "Yes. Each solution is designed according to real flows, commercial rules and specific business needs.",
        es: "Sí. Cada solución se diseña según los flujos reales, reglas comerciales y necesidades específicas del negocio."
      }
    },
    {
      question: {
        en: "Can the systems integrate with my current ERP?",
        es: "¿Los sistemas pueden integrarse con mi ERP actual?"
      },
      answer: {
        en: "Yes. We can integrate them with ERPs, accounting systems, inventory platforms and existing internal tools.",
        es: "Sí. Podemos integrarlos con ERPs, sistemas contables, plataformas de inventario y herramientas internas existentes."
      }
    },
    {
      question: {
        en: "Is it possible to automate processes like recurring orders or stock control?",
        es: "¿Es posible automatizar procesos como pedidos recurrentes o control de stock?"
      },
      answer: {
        en: "Yes. We design specific automations for recurring orders, inventory replenishment and operational control.",
        es: "Sí. Diseñamos automatizaciones específicas para pedidos recurrentes, reposición de inventario y control operativo."
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

