"use client";

import { motion } from "framer-motion";

export const WhatWeDo = () => {
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
            What We Do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We're redefining global payments to enable the businesses of tomorrow.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Founded in 2021, Yuno has quickly become the payment orchestration solution of choice by leading global brands like McDonalds, Rappi, Viva Aerobus, and Netease. Our platform empowers global merchants to seamlessly accept payments from anywhere in the world and optimize their payment workflows.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

