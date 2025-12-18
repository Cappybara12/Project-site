"use client";

import { motion } from "framer-motion";
import { Search, Palette, Layers, Rocket } from "lucide-react";

export const HowWeWork = () => {
  const steps = [
    {
      icon: Search,
      title: "Análisis del negocio"
    },
    {
      icon: Palette,
      title: "Diseño de soluciones a la medida"
    },
    {
      icon: Layers,
      title: "Arquitecturas modernas y escalables"
    },
    {
      icon: Rocket,
      title: "Implementación progresiva y evolutiva"
    }
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">
            Cómo trabajamos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Creemos que la tecnología debe adaptarse a la operación, no al revés.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Por eso cada proyecto parte del entendimiento profundo de los procesos, los datos y los equipos involucrados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              Nuestro enfoque combina:
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
