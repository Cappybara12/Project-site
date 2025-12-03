"use client";

import { motion } from "framer-motion";
import { infrastructureFeatures } from "@/data/features";

export const UnifiedInfrastructure = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              THE SOLUTION
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            A unified infrastructure layer<br />for global payments
          </h2>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infrastructureFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="text-xs text-gray-400 font-mono mb-4">0{index + 1}.</div>
              
              {/* Icon/Visual */}
              <div className="mb-6 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden group">
                {feature.icon === 'chart' && (
                  <div className="w-full h-full p-8">
                    <div className="flex items-end justify-between h-full gap-2">
                      {[40, 65, 45, 80, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          whileHover={{ 
                            height: `${Math.min(height + 15, 95)}%`,
                            transition: { duration: 0.3 }
                          }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className={`flex-1 rounded-t-lg transition-all ${i === 1 || i === 3 ? 'bg-blue-600' : 'bg-lime-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {feature.icon === 'routing' && (
                  <div className="relative w-full h-full p-6">
                    <div className="flex items-end justify-center h-full gap-2">
                      {[
                        { h: 60, w: 24, color: 'bg-gradient-to-b from-blue-400 to-blue-600', delay: 0 },
                        { h: 85, w: 24, color: 'bg-gradient-to-b from-blue-500 to-blue-700', delay: 0.1 },
                        { h: 50, w: 24, color: 'bg-gradient-to-b from-blue-300 to-blue-500', delay: 0.2 },
                        { h: 75, w: 24, color: 'bg-gradient-to-b from-lime-300 to-lime-400', delay: 0.3 },
                        { h: 65, w: 24, color: 'bg-gradient-to-b from-blue-400 to-blue-600', delay: 0.4 }
                      ].map((tube, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${tube.h}%` }}
                          whileHover={{
                            height: `${Math.min(tube.h + 20, 100)}%`,
                            transition: { 
                              duration: 0.4,
                              ease: "easeOut"
                            }
                          }}
                          transition={{ 
                            duration: 0.8, 
                            delay: tube.delay,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`${tube.color} rounded-full opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                          style={{ width: `${tube.w}px` }}
                        >
                          {/* Inner glow */}
                          <div className="w-full h-full rounded-full bg-gradient-to-t from-white/20 to-transparent" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {feature.icon === 'globe' && (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-60 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">{feature.title}</h3>
              <p className="text-xl font-semibold text-gray-900 mb-4 leading-snug">{feature.heading}</p>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

