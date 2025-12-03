"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join us and shape the future of payments
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Challenge yourself to grow within our high-performing culture.
            </p>
            <Link href="#careers">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                View open positions
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

