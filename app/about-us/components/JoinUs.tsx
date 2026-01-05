"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join us and shape the future of payments
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
              Challenge yourself to grow within our high-performing culture.
            </p>
            
            {/* Button - After text for both mobile and desktop */}
            <div className="flex justify-center">
              <Link href="#careers" className="w-full max-w-md md:w-auto md:max-w-none">
                <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  View open positions
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

