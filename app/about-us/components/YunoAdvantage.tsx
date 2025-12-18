"use client";

import { motion } from "framer-motion";
import { Target, Zap, Network, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Target,
    title: "Soluciones diseñadas para procesos reales"
  },
  {
    icon: Zap,
    title: "Enfoque práctico y orientado a resultados"
  },
  {
    icon: Network,
    title: "Integraciones profundas entre sistemas"
  },
  {
    icon: TrendingUp,
    title: "Tecnología preparada para escalar"
  }
];

export const YunoAdvantage = () => {
  const FirstIcon = advantages[0].icon;
  
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">
            Por qué Altura
          </p>
        </motion.div>

        {/* First Row: Blue Card + First Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Blue Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Acompañamiento a largo plazo
            </h2>
          </motion.div>

          {/* First Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <FirstIcon className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {advantages[0].title}
            </h3>
          </motion.div>
        </div>

        {/* Second Row: Remaining 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.slice(1).map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {advantage.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
