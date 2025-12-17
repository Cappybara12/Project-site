"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const OrchestrationSection = () => {
  return (
    <section className="relative py-20 bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 rounded-full mb-12 border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Intelligent Automation
            </span>
          </div>

          {/* Headline with Alternating Brightness */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white">
              Altura Automations handle every interaction,
            </span>
            <span className="block text-gray-500">
              respond instantly across all channels,
            </span>
            <span className="block text-white">
              and learn from each conversation
            </span>
            <span className="block text-gray-500">
              to continuously improve your operations.
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

