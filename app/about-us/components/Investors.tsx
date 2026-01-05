"use client";

import { motion } from "framer-motion";

export const Investors = () => {
  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Backed by leading global investors
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            It takes the best to build the best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="text-3xl font-bold text-gray-900">DST GLOBAL PARTNERS</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="text-3xl font-bold text-gray-900">KASZEK</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="text-3xl font-bold text-gray-900">TIGERGLOBAL</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="text-3xl font-bold text-gray-900">monashees+</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div className="text-3xl font-bold text-gray-900">andreessen horowitz</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-semibold text-gray-600 uppercase tracking-wide">
            80+ Individual Investors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

