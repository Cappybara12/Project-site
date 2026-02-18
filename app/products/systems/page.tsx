"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function SystemsPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Enterprise systems designed to digitalize your operation",
      es: "Sistemas empresariales diseñados para digitalizar tu operación"
    },
    titlePart2: {
      en: "improve internal coordination and reinforce efficiency in every area of the business",
      es: "mejorar la coordinación interna y reforzar la eficiencia en cada área del negocio"
    },
    subtitle: {
      en: "We develop robust and customized systems that adapt to your real processes. From administrative modules to operational tools and complete internal platforms, we build solutions designed to organize, optimize and scale the way your company works.",
      es: "Desarrollamos sistemas robustos y personalizados que se adaptan a tus procesos reales. Desde módulos administrativos hasta herramientas operativas y plataformas internas completas, construimos soluciones diseñadas para organizar, optimizar y escalar la forma en que trabaja tu empresa."
    }
  };

  const statements = [
    {
      title: {
        en: "Built from your real processes",
        es: "Construidos a partir de tus procesos reales"
      },
      description: {
        en: "We design systems totally aligned to how your business works: flows, teams, responsibilities and specific needs.",
        es: "Diseñamos sistemas totalmente alineados a la forma en que funciona tu negocio: flujos, equipos, responsabilidades y necesidades específicas."
      }
    },
    {
      title: {
        en: "Internal tools that improve productivity",
        es: "Herramientas internas que mejoran la productividad"
      },
      description: {
        en: "Systems created to centralize tasks, organize information, digitalize processes and facilitate your teams' work.",
        es: "Sistemas creados para centralizar tareas, organizar información, digitalizar procesos y facilitar el trabajo de tus equipos."
      }
    },
    {
      title: {
        en: "Integration with your technological ecosystem",
        es: "Integración con tu ecosistema tecnológico"
      },
      description: {
        en: "Connect your system with CRM, ERP, inventory tools, ecommerce platforms, databases and any solution you currently use.",
        es: "Conecta tu sistema con CRM, ERP, herramientas de inventario, plataformas de ecommerce, bases de datos y cualquier solución que uses actualmente."
      }
    },
    {
      title: {
        en: "Stable architectures ready to grow",
        es: "Arquitecturas estables y listas para crecer"
      },
      description: {
        en: "Modern, secure and scalable technology, designed to support operations with high volume and evolve without needing to rebuild.",
        es: "Tecnología moderna, segura y escalable, diseñada para soportar operaciones con alto volumen y evolucionar sin necesidad de reconstruir."
      }
    }
  ];

  const results = [
    {
      value: "55%",
      label: {
        en: "greater efficiency in digitized operational processes",
        es: "mayor eficiencia en procesos operativos digitalizados"
      }
    },
    {
      value: "70%",
      label: {
        en: "fewer errors derived from manual processes",
        es: "menos errores derivados de procesos manuales"
      }
    },
    {
      value: "2.5x",
      label: {
        en: "more speed in the execution of internal tasks",
        es: "más velocidad en la ejecución de tareas internas"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "What type of systems can you develop?",
        es: "¿Qué tipo de sistemas pueden desarrollar?"
      },
      answer: {
        en: "Administrative systems, operational modules, internal management tools, corporate platforms and specialized solutions for specific areas.",
        es: "Sistemas administrativos, módulos operativos, herramientas de gestión interna, plataformas corporativas y soluciones especializadas para áreas específicas."
      }
    },
    {
      question: {
        en: "Can systems connect to my current tools?",
        es: "¿Los sistemas pueden conectarse a mis herramientas actuales?"
      },
      answer: {
        en: "Yes. We can integrate them with CRM, ERP, inventories, ecommerce, internal services and any API or database your company uses.",
        es: "Sí. Podemos integrarlos con CRM, ERP, inventarios, ecommerce, servicios internos y cualquier API o base de datos que tu empresa utilice."
      }
    },
    {
      question: {
        en: "Can they be scaled and updated in the future?",
        es: "¿Se pueden escalar y actualizar en el futuro?"
      },
      answer: {
        en: "Absolutely. All systems are built with a flexible architecture that allows expanding functionalities as your operation grows.",
        es: "Totalmente. Todos los sistemas se construyen con una arquitectura flexible que permite expandir funcionalidades a medida que tu operación crece."
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
