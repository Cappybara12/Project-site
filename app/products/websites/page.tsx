"use client";

import { ProductHero } from "../components/ProductHero";
import { StatementCards } from "../components/StatementCards";
import { ResultCards } from "../components/ResultCards";
import { ProductFAQ } from "../components/ProductFAQ";

export default function WebsitesPage() {
  const heroContent = {
    badge: {
      en: "CUSTOM PROJECTS",
      es: "PROYECTOS PERSONALIZADOS"
    },
    titlePart1: {
      en: "Websites designed to boost your brand",
      es: "Sitios web diseñados para impulsar tu marca"
    },
    titlePart2: {
      en: "optimize conversions and adapt to the real needs of your business",
      es: "optimizar conversiones y adaptarse a las necesidades reales de tu negocio"
    },
    subtitle: {
      en: "We create modern, fast and functional websites that represent your identity, improve your users' experience and integrate completely with your systems and internal processes. From corporate pages to advanced platforms, we build solutions that combine design, technology and performance.",
      es: "Creamos sitios web modernos, rápidos y funcionales que representan tu identidad, mejoran la experiencia de tus usuarios y se integran completamente con tus sistemas y procesos internos. Desde páginas corporativas hasta plataformas avanzadas, construimos soluciones que combinan diseño, tecnología y rendimiento."
    }
  };

  const statements = [
    {
      title: {
        en: "Design centered on your identity and objectives",
        es: "Diseño centrado en tu identidad y tus objetivos"
      },
      description: {
        en: "Each website is developed from the essence of your brand, your key metrics and the experience you want to offer your users.",
        es: "Cada sitio web se desarrolla a partir de la esencia de tu marca, tus métricas clave y la experiencia que deseas ofrecer a tus usuarios."
      }
    },
    {
      title: {
        en: "Optimized for performance, speed and conversion",
        es: "Optimizado para rendimiento, velocidad y conversión"
      },
      description: {
        en: "We apply modern development practices to guarantee fast loading times, fluid navigation and better conversion in your digital funnels.",
        es: "Aplicamos prácticas de desarrollo moderno para garantizar tiempos de carga rápidos, navegación fluida y mejor conversión en tus embudos digitales."
      }
    },
    {
      title: {
        en: "Integrated with your technological ecosystem",
        es: "Integrado con tu ecosistema tecnológico"
      },
      description: {
        en: "We connect your website with CRM, ERP, ecommerce platforms, marketing tools, internal systems and more, so everything works in a coordinated way.",
        es: "Conectamos tu web con CRM, ERP, plataformas de ecommerce, herramientas de marketing, sistemas internos y más, para que todo funcione de manera coordinada."
      }
    },
    {
      title: {
        en: "Scalable, secure and prepared for the future",
        es: "Escalable, seguro y preparado para el futuro"
      },
      description: {
        en: "We develop with solid architectures and current technologies that allow growth, updates and expanding capabilities without limitations.",
        es: "Desarrollamos con arquitecturas sólidas y tecnologías actuales que permiten crecer, actualizar y ampliar capacidades sin limitaciones."
      }
    }
  ];

  const results = [
    {
      value: "40%",
      label: {
        en: "improvement in speed and performance compared to traditional sites",
        es: "mejora en velocidad y rendimiento frente a sitios tradicionales"
      }
    },
    {
      value: "25%",
      label: {
        en: "average increase in conversions thanks to an optimized experience",
        es: "aumento promedio en conversiones gracias a una experiencia optimizada"
      }
    },
    {
      value: "3x",
      label: {
        en: "more ease to integrate tools and automate processes",
        es: "más facilidad para integrar herramientas y automatizar procesos"
      }
    }
  ];

  const faqs = [
    {
      question: {
        en: "Can you build corporate sites and also more complex sites?",
        es: "¿Pueden construir sitios corporativos y también sitios más complejos?"
      },
      answer: {
        en: "Yes. From institutional pages to advanced platforms with multiple modules and functionalities.",
        es: "Sí. Desde páginas institucionales hasta plataformas avanzadas con múltiples módulos y funcionalidades."
      }
    },
    {
      question: {
        en: "What technologies do you use for web development?",
        es: "¿Qué tecnologías utilizan para el desarrollo web?"
      },
      answer: {
        en: "We work with modern frameworks that ensure high performance, scalability and compatibility with current and future tools.",
        es: "Trabajamos con frameworks modernos que aseguran alto rendimiento, escalabilidad y compatibilidad con herramientas actuales y futuras."
      }
    },
    {
      question: {
        en: "Will my website be able to integrate with other systems?",
        es: "¿Mi sitio web podrá integrarse con otros sistemas?"
      },
      answer: {
        en: "Absolutely. We can connect it to CRM, ERP, internal systems, databases, marketing tools and any service necessary for your operation.",
        es: "Sin duda. Podemos conectarlo a CRM, ERP, sistemas internos, bases de datos, herramientas de marketing y cualquier servicio necesario para tu operación."
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

