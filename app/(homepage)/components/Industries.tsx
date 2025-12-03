"use client";

import { industries } from "@/data/industries";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Industries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-black text-white border-t border-gray-900 relative overflow-hidden">
      {/* Animated background lines with traveling dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {/* Top curvy line */}
        <svg className="absolute top-0 right-0 w-[800px] h-[400px]" viewBox="0 0 800 400" fill="none">
          <motion.path
            d="M 800 0 Q 600 100, 500 200 T 200 400"
            stroke="#374151"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Traveling dot */}
          <motion.circle
            r="4"
            fill="#E4F59A"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#path1" />
            </animateMotion>
          </motion.circle>
          <path id="path1" d="M 800 0 Q 600 100, 500 200 T 200 400" fill="none" />
        </svg>

        {/* Bottom curvy line */}
        <svg className="absolute bottom-0 left-0 w-[800px] h-[400px]" viewBox="0 0 800 400" fill="none">
          <motion.path
            d="M 0 400 Q 200 300, 300 200 T 800 0"
            stroke="#374151"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.circle
            r="4"
            fill="#E4F59A"
          >
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href="#path2" />
            </animateMotion>
          </motion.circle>
          <path id="path2" d="M 0 400 Q 200 300, 300 200 T 800 0" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="mb-16 text-center">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                INDUSTRIES
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold">Solutions for every industry</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Helping global enterprises grow and scale at every step.</p>
         </div>

         {/* Horizontal Scrollable Cards */}
         <div className="relative">
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1 flex-shrink-0 snap-center"
                  style={{ minWidth: '380px', maxWidth: '380px' }}
                >
                    <div className="aspect-[16/9] overflow-hidden">
                        <img 
                            src={industry.image} 
                            alt={industry.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" 
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-sm font-bold text-gray-200 mb-4 uppercase tracking-wider">{industry.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{industry.description}</p>
                    </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicator gradient */}
            <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
         </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

