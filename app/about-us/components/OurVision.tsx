"use client";

import { motion } from "framer-motion";

export const OurVision = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">
            Nuestra visión
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Ser el socio tecnológico que permite a las empresas operar con mayor claridad, eficiencia y capacidad de crecimiento en un entorno cada vez más digital.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
