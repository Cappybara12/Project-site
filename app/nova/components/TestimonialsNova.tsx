"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const TestimonialsNova = () => {
  return (
    <section className="relative py-20 bg-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 rounded-full mb-8 border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Customers
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What our clients are saying
          </h2>
          
          <p className="text-xl text-gray-400">
            Explore how companies leverage NOVA to unlock revenue streams.
          </p>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-8 mb-16"
        >
          {/* Altura Logo */}
          <div className="flex items-center gap-2 px-6 py-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-blue-400 rounded-sm opacity-60"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm opacity-40"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm opacity-80"></div>
            </div>
            <span className="text-2xl font-bold text-blue-400">altura</span>
          </div>

          {/* X Symbol */}
          <div className="text-3xl text-gray-600 font-light">×</div>

          {/* Rappi Logo Placeholder */}
          <div className="flex items-center gap-2 px-6 py-4 bg-orange-600/10 rounded-2xl border border-orange-500/20">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-2xl font-bold text-orange-400">Rappi</span>
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12 font-light">
            "NOVA allows us to support the customer at critical moments, offering alternatives and personalized guidance so they can complete their payment whenever possible. It's not just about recovering revenue, but about building a smoother, more reliable, and customer-centric experience."
          </blockquote>

          <div className="space-y-2">
            <p className="text-lg font-bold text-white uppercase tracking-wider">
              Leonardo Benante
            </p>
            <p className="text-base text-gray-400">
              Global Head of PayIns, Rappi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

