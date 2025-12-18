"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function AppsPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Applications designed to measure",
      es: "Aplicaciones diseñadas a la medida"
    },
    titlePart2: {
      en: "to digitalize processes, improve user experience and strengthen your business operations",
      es: "para digitalizar procesos, mejorar la experiencia del usuario y fortalecer la operación de tu negocio"
    },
    subtitle: {
      en: "We develop mobile and web applications that adapt exactly to your needs. From internal tools to complete customer-focused products, our apps are built with modern, scalable architectures ready to grow with your company.",
      es: "Desarrollamos aplicaciones móviles y web que se adaptan exactamente a tus necesidades. Desde herramientas internas hasta productos completos enfocados en clientes, nuestras apps están construidas con arquitecturas modernas, escalables y listas para crecer junto a tu empresa."
    }
  };

  const statements = [
    {
      title: {
        en: "Designed with your real operational flows",
        es: "Diseñadas con tus flujos reales de operación"
      },
      description: {
        en: "Each app is built from how your business works: processes, needs, teams, constraints and objectives. Nothing generic, everything personalized.",
        es: "Cada app se construye a partir de cómo funciona tu negocio: procesos, necesidades, equipos, restricciones y objetivos. Nada genérico, todo personalizado."
      }
    },
    {
      title: {
        en: "Fast, intuitive and user-centered experiences",
        es: "Experiencias rápidas, intuitivas y centradas en el usuario"
      },
      description: {
        en: "Modern interfaces, simple navigation, optimal loading times and designs created so anyone can use the app without a learning curve.",
        es: "Interfaces modernas, navegación simple, tiempos de carga óptimos y diseños creados para que cualquier persona pueda utilizar la app sin curva de aprendizaje."
      }
    },
    {
      title: {
        en: "Connected to your internal systems",
        es: "Conectadas a tus sistemas internos"
      },
      description: {
        en: "Integration with CRM, ERP, databases, ecommerce platforms, inventory systems or any tool your business uses, ensuring smooth operation.",
        es: "Integración con CRM, ERP, bases de datos, plataformas de ecommerce, sistemas de inventario o cualquier herramienta que use tu negocio, garantizando una operación fluida."
      }
    },
    {
      title: {
        en: "Scalable architectures to grow without limits",
        es: "Arquitecturas escalables para crecer sin límites"
      },
      description: {
        en: "Modern technologies that allow future expansions, new modules, updates and improvements without needing to rebuild from scratch.",
        es: "Tecnologías modernas que permiten futuras expansiones, nuevos módulos, actualizaciones y mejoras sin necesidad de reconstruir desde cero."
      }
    }
  ];

  const results = [
    {
      value: "45%",
      label: {
        en: "more efficiency in digitized internal processes",
        es: "más eficiencia en procesos internos digitalizados"
      }
    },
    {
      value: "60%",
      label: {
        en: "reduction in manual operational errors",
        es: "reducción de errores operativos manuales"
      }
    },
    {
      value: "3x",
      label: {
        en: "greater adoption by teams or clients thanks to intuitive interfaces",
        es: "mayor adopción por parte de equipos o clientes gracias a interfaces intuitivas"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can you develop both internal and external apps?",
        es: "¿Pueden desarrollar tanto apps internas como externas?"
      },
      answer: {
        en: "Yes. We create applications for internal, operational or administrative use, as well as apps oriented to customers or end users.",
        es: "Sí. Creamos aplicaciones para uso interno, operativo o administrativo, así como apps orientadas a clientes o usuarios finales."
      }
    },
    {
      question: {
        en: "What technologies do you use?",
        es: "¿Qué tecnologías utilizan?"
      },
      answer: {
        en: "We work with modern and scalable frameworks, ensuring performance, security and long-term compatibility.",
        es: "Trabajamos con frameworks modernos y escalables, asegurando rendimiento, seguridad y compatibilidad a largo plazo."
      }
    },
    {
      question: {
        en: "Can functions or modules be added in the future?",
        es: "¿Se pueden agregar funciones o módulos en el futuro?"
      },
      answer: {
        en: "Of course. All apps are built with a flexible architecture that allows growth and adding new capabilities without complications.",
        es: "Claro. Todas las apps se construyen con una arquitectura flexible que permite crecer y agregar nuevas capacidades sin complicaciones."
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

