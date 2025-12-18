"use client";

import { motion } from "framer-motion";
import { Bot, LayoutDashboard, Code } from "lucide-react";

export const WhatWeDo = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización de servicio al cliente y ventas con agentes de IA"
    },
    {
      icon: LayoutDashboard,
      title: "Plataformas que centralizan y potencian la información del ecosistema digital"
    },
    {
      icon: Code,
      title: "Desarrollo de sistemas, aplicaciones e integraciones personalizadas"
    }
  ];

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
            Qué hacemos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Diseñamos e implementamos tecnología que impacta directamente la operación diaria de las empresas:
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-relaxed">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-gray-600 italic">
            Todo con un enfoque práctico, escalable y alineado a los objetivos del negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
