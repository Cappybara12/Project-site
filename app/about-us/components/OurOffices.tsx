"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const OurOffices = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50/80 to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
         
        </motion.div>

        {/* Globe Image - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <Image
            src="/globe-offices.webp"
            alt="Global offices map"
            width={1200}
            height={1200}
            className="w-full max-w-5xl h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

