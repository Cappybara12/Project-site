"use client";

import { motion } from "framer-motion";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";
import Image from "next/image";
import { Zap, Database, Code, Bot, LayoutDashboard, Network, Settings, Workflow, MessageCircle, Instagram, Phone, Mail, TrendingUp, BarChart3, Brain, Globe, Smartphone, Plug } from "lucide-react";

interface Statement {
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  image?: string;
}

interface StatementCardsProps {
  statements: Statement[];
}

// Icon mapping for different statement types
const getIconForStatement = (index: number, title: string): any => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("automation") || titleLower.includes("automatización") || titleLower.includes("agente") || titleLower.includes("agent")) {
    return Bot;
  }
  if (titleLower.includes("platform") || titleLower.includes("plataforma") || titleLower.includes("centraliz") || titleLower.includes("datos") || titleLower.includes("data")) {
    return Database;
  }
  if (titleLower.includes("integration") || titleLower.includes("integración") || titleLower.includes("sistema") || titleLower.includes("system")) {
    return Network;
  }
  if (titleLower.includes("development") || titleLower.includes("desarrollo") || titleLower.includes("custom") || titleLower.includes("personaliz")) {
    return Code;
  }
  if (titleLower.includes("sales") || titleLower.includes("venta") || titleLower.includes("conversation") || titleLower.includes("conversación")) {
    return TrendingUp;
  }
  if (titleLower.includes("analysis") || titleLower.includes("análisis") || titleLower.includes("insight")) {
    return BarChart3;
  }
  if (titleLower.includes("ai") || titleLower.includes("inteligencia") || titleLower.includes("intelligence")) {
    return Brain;
  }
  if (titleLower.includes("whatsapp") || titleLower.includes("messenger")) {
    return MessageCircle;
  }
  if (titleLower.includes("instagram")) {
    return Instagram;
  }
  if (titleLower.includes("email") || titleLower.includes("correo")) {
    return Mail;
  }
  if (titleLower.includes("call") || titleLower.includes("llamada") || titleLower.includes("voice") || titleLower.includes("voz")) {
    return Phone;
  }
  if (titleLower.includes("dashboard") || titleLower.includes("panel")) {
    return LayoutDashboard;
  }
  if (titleLower.includes("app") || titleLower.includes("aplicación")) {
    return Smartphone;
  }
  if (titleLower.includes("website") || titleLower.includes("sitio") || titleLower.includes("web")) {
    return Globe;
  }
  if (titleLower.includes("process") || titleLower.includes("proceso") || titleLower.includes("workflow")) {
    return Workflow;
  }
  if (titleLower.includes("setting") || titleLower.includes("configuración")) {
    return Settings;
  }
  // Default icons based on index
  const defaultIcons = [Zap, Database, Code, Network];
  return defaultIcons[index % defaultIcons.length];
};

// Color gradients based on index
const getGradientForIndex = (index: number): string => {
  const gradients = [
    "from-blue-500 to-indigo-600",
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-green-500 to-teal-600"
  ];
  return gradients[index % gradients.length];
};

export const StatementCards = ({ statements }: StatementCardsProps) => {
  const { currentLang } = useLanguageSwitcher();

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {statements.map((statement, index) => {
            const Icon = getIconForStatement(index, statement.title[currentLang]);
            const gradient = getGradientForIndex(index);
            const number = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content Section */}
                <div className={isEven ? "order-1" : "order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-gray-300">{number}</span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                    {statement.title[currentLang]}
                  </h2>
                  <div className="space-y-4 mb-6">
                    {statement.description[currentLang].split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Visual/Image Section */}
                <div className={isEven ? "order-2" : "order-1"}>
                  {statement.image ? (
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
                      <Image
                        src={statement.image}
                        alt={statement.title[currentLang]}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`relative h-[500px] rounded-3xl bg-gradient-to-br ${gradient} p-8 flex items-center justify-center overflow-hidden`}>
                      {/* Decorative elements */}
                      <div className="absolute inset-0 opacity-20">
                        {index % 3 === 0 && (
                          <>
                            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full" />
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white rounded-full" />
                          </>
                        )}
                        {index % 3 === 1 && (
                          <>
                            <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white rotate-45" />
                            <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-white rotate-45" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white rotate-45" />
                          </>
                        )}
                        {index % 3 === 2 && (
                          <>
                            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white" />
                            <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-white" />
                          </>
                        )}
                      </div>
                      <Icon className="w-24 h-24 text-white relative z-10" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
