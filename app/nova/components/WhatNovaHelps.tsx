"use client";

import { motion } from "framer-motion";
import { CreditCard, Headphones, Package } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    number: "01.",
    title: "AUTOMATED CUSTOMER SERVICE",
    description: "AI agents that handle customer inquiries, support requests, and order management through WhatsApp, Instagram, Messenger, email, and phone calls—providing instant responses 24/7.",
  },
  {
    icon: Headphones,
    number: "02.",
    title: "PROCESS AUTOMATION",
    description: "Automate repetitive tasks like order processing, inventory updates, appointment scheduling, and data entry. Your team can focus on strategy and growth instead of manual work.",
  },
  {
    icon: Package,
    number: "03.",
    title: "MULTI-CHANNEL INTEGRATION",
    description: "Seamlessly connect and manage customer interactions across all your communication channels. One AI agent, multiple platforms, unified experience for your customers.",
  },
];

export const WhatNovaHelps = () => {
  return (
    <section className="relative py-16 bg-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
            What Altura Automations can help with:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Card Number - Larger and more subtle */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-gray-900/30">
                  {feature.number}
                </div>

                {/* Icon - Simple with glow */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-lg"></div>
                    <Icon className="relative w-10 h-10 text-blue-400" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3 uppercase tracking-wide leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

