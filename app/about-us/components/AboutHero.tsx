"use client";

import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
              About Us
            </p>
          </motion.div>

          {/* Right Side - Heading and Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Technology that transforms<br />how businesses operate
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Altura is dedicated to helping businesses automate operations, centralize information, and accelerate growth through intelligent technology solutions. We combine AI-powered automation, unified data platforms, and custom enterprise development to create technology that scales with your ambitions.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              1,000+
            </h3>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Payment Methods & Anti-Fraud Providers
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              200+
            </h3>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Countries Supported
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              180+
            </h3>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Currencies Supported
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

