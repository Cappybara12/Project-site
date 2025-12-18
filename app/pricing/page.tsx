"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, LayoutDashboard, Code, Check, ArrowRight } from "lucide-react";
import { useLanguageSwitcher } from "../components/common/useLanguageSwitcher";

export default function PricingPage() {
  const { currentLang } = useLanguageSwitcher();

  const content = {
    hero: {
      badge: {
        en: "💳 PRICING",
        es: "💳 PRICING"
      },
      title: {
        en: "Clear pricing models, designed to adapt to the reality of each business",
        es: "Modelos de precio claros, diseñados para adaptarse a la realidad de cada negocio"
      },
      subtitle: {
        en: "At Altura Group we offer flexible solutions. Some products require a personalized approach; others are ready to scale with a simple and transparent subscription model.",
        es: "En Altura Group ofrecemos soluciones flexibles. Algunos productos requieren un enfoque personalizado; otros están listos para escalar con un modelo de suscripción simple y transparente."
      }
    },
    plans: [
      {
        name: {
          en: "Altura Automations",
          es: "Automatizaciones Altura"
        },
        icon: Bot,
        model: {
          en: "Custom implementation + monthly fee",
          es: "Implementación personalizada + fee mensual"
        },
        description: {
          en: "The price is defined by:",
          es: "El precio se define según:"
        },
        features: {
          en: [
            "Enabled channels (WhatsApp, Instagram, Messenger, email, calls)",
            "Complexity of conversational flows",
            "Level of personalization by industry",
            "Integrations with internal systems",
            "Volume of interactions"
          ],
          es: [
            "Canales habilitados (WhatsApp, Instagram, Messenger, correo electrónico, llamadas)",
            "Complejidad de los flujos conversacionales",
            "Nivel de personalización por industria",
            "Integraciones con sistemas internos",
            "Volumen de interacciones"
          ]
        },
        idealFor: {
          en: "Companies looking to automate customer service, sales and operational processes with AI agents adapted to their business.",
          es: "Empresas que buscan automatizar servicio al cliente, ventas y procesos operativos con agentes de IA adaptados a su negocio."
        },
        cta: {
          en: "Request a quote",
          es: "Solicitar cotización"
        },
        ctaLink: "/book-a-demo",
        gradient: "from-blue-500 to-blue-600"
      },
      {
        name: {
          en: "One Source Platform",
          es: "Plataforma de una sola fuente"
        },
        icon: LayoutDashboard,
        price: "USD 499",
        period: {
          en: "/ month",
          es: "/ mes"
        },
        model: {
          en: "Monthly subscription",
          es: "Suscripción mensual"
        },
        description: {
          en: "Includes:",
          es: "Incluye:"
        },
        features: {
          en: [
            "Customizable dashboards",
            "Deep Analysis",
            "AI Chat",
            "Insight ML",
            "Competitor Intelligence",
            "Integration with multiple data sources",
            "Multi-user access"
          ],
          es: [
            "Dashboards personalizables",
            "Deep Analysis",
            "AI Chat",
            "Insight ML",
            "Competitor Intelligence",
            "Integración con múltiples fuentes de datos",
            "Acceso multiusuario"
          ]
        },
        idealFor: {
          en: "Ecommerce, DTC brands, agencies, marketplaces and subscription companies that need to centralize their information and power it with AI and ML.",
          es: "Ecommerce, marcas DTC, agencias, marketplaces y empresas de suscripción que necesitan centralizar su información y potenciarla con IA y ML."
        },
        cta: {
          en: "Request a demo",
          es: "Solicitar demo"
        },
        ctaLink: "/book-a-demo",
        gradient: "from-purple-500 to-pink-500",
        featured: true
      },
      {
        name: {
          en: "Altura Custom Projects",
          es: "Proyectos personalizados de Altura"
        },
        icon: Code,
        model: {
          en: "Custom project (one-time fee) + optional support",
          es: "Proyecto a la medida (tarifa única) + soporte opcional"
        },
        description: {
          en: "The price is defined by:",
          es: "El precio se define según:"
        },
        features: {
          en: [
            "Functional scope",
            "Required architecture",
            "Necessary integrations",
            "Development time",
            "Expected scalability level"
          ],
          es: [
            "Alcance funcional",
            "Arquitectura requerida",
            "Integraciones necesarias",
            "Tiempo de desarrollo",
            "Nivel de escalabilidad esperado"
          ]
        },
        idealFor: {
          en: "Companies that need systems, applications, integrations or process automation designed specifically for their operation.",
          es: "Empresas que necesitan sistemas, aplicaciones, integraciones o automatización de procesos diseñados específicamente para su operación."
        },
        cta: {
          en: "Talk to a specialist",
          es: "Hablar con un especialista"
        },
        ctaLink: "/book-a-demo",
        gradient: "from-green-500 to-teal-500"
      }
    ],
    cta: {
      title: {
        en: "Need help choosing the best option?",
        es: "¿Necesitas ayuda para elegir la mejor opción?"
      },
      subtitle: {
        en: "Our team accompanies you to define the right solution according to your processes, objectives and growth stage.",
        es: "Nuestro equipo te acompaña para definir la solución adecuada según tus procesos, objetivos y etapa de crecimiento."
      },
      button: {
        en: "Schedule a call",
        es: "Agendar una llamada"
      }
    },
    labels: {
      mostPopular: {
        en: "Most Popular",
        es: "Más Popular"
      },
      idealFor: {
        en: "Ideal for:",
        es: "Ideal para:"
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">
              {content.hero.badge[currentLang]}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {content.hero.title[currentLang]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {content.hero.subtitle[currentLang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name[currentLang]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white border-2 rounded-3xl p-8 hover:shadow-xl transition-all ${
                    plan.featured 
                      ? "border-blue-500 shadow-lg lg:scale-105" 
                      : "border-gray-200"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {content.labels.mostPopular[currentLang]}
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name[currentLang]}
                  </h2>

                  {plan.price && (
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-lg text-gray-600 ml-2">{plan.period[currentLang]}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    {plan.model[currentLang]}
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description[currentLang]}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features[currentLang].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      {content.labels.idealFor[currentLang]}
                    </p>
                    <p className="text-sm text-gray-600">
                      {plan.idealFor[currentLang]}
                    </p>
                  </div>

                  <Link href={plan.ctaLink}>
                    <button className={`w-full py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg ${
                      plan.featured
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                        : `bg-gradient-to-r ${plan.gradient} hover:opacity-90`
                    }`}>
                      {plan.cta[currentLang]}
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {content.cta.title[currentLang]}
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              {content.cta.subtitle[currentLang]}
            </p>
            <Link href="/book-a-demo">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 mx-auto">
                {content.cta.button[currentLang]}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

