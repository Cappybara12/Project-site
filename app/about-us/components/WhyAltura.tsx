"use client";

import { motion } from "framer-motion";
import { Target, Zap, Network, TrendingUp } from "lucide-react";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";

export const WhyAltura = () => {
  const { currentLang } = useLanguageSwitcher();

  const content = {
    badge: {
      en: "Why Altura",
      es: "Por qué Altura"
    },
    title: {
      en: "Long-term support",
      es: "Acompañamiento a largo plazo"
    },
    advantages: [
      {
        icon: Target,
        title: {
          en: "Solutions designed for real processes",
          es: "Soluciones diseñadas para procesos reales"
        },
        description: {
          en: "Each solution adapts to how your business really works, not generic models.",
          es: "Cada solución se adapta a cómo funciona realmente tu negocio, no a modelos genéricos."
        }
      },
      {
        icon: Zap,
        title: {
          en: "Practical and results-oriented approach",
          es: "Enfoque práctico y orientado a resultados"
        },
        description: {
          en: "We prioritize direct impact on operations and measurable business results.",
          es: "Priorizamos el impacto directo en la operación y los resultados medibles del negocio."
        }
      },
      {
        icon: Network,
        title: {
          en: "Deep integrations between systems",
          es: "Integraciones profundas entre sistemas"
        },
        description: {
          en: "We connect your technology ecosystem so everything works in a coordinated way.",
          es: "Conectamos tu ecosistema tecnológico para que todo funcione de forma coordinada."
        }
      },
      {
        icon: TrendingUp,
        title: {
          en: "Technology ready to scale",
          es: "Tecnología preparada para escalar"
        },
        description: {
          en: "Modern architectures that grow with your company without limitations.",
          es: "Arquitecturas modernas que crecen junto a tu empresa sin limitaciones."
        }
      }
    ]
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">
            {content.badge[currentLang]}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            {content.title[currentLang]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title[currentLang]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {advantage.title[currentLang]}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {advantage.description[currentLang]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

