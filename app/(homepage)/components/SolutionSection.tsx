"use client";

import { motion } from "framer-motion";
import { Zap, Database, Code } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Intelligent automation for your key operations",
    description: "AI agents that serve customers, manage sales, and execute internal flows across multiple channels.",
    benefits: [
      "Lower operational burden",
      "Immediate attention",
      "Automatic processes",
      "Teams with more time to think"
    ],
    icon: Zap,
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "02",
    title: "Centralized information for better decisions",
    description: "One Source Platform integrates your entire ecommerce ecosystem to offer a complete and actionable view of the business.",
    benefits: [
      "Connected data",
      "Customized dashboards",
      "Deep analysis",
      "Clearer decisions"
    ],
    icon: Database,
    color: "from-cyan-500 to-blue-600"
  },
  {
    number: "03",
    title: "Technology development that adapts to your business",
    description: "Custom Projects creates systems, applications, and integrations with modern and scalable standards.",
    benefits: [
      "Processes tailored to you",
      "Real integrations",
      "Solid infrastructure",
      "Continuous growth"
    ],
    icon: Code,
    color: "from-purple-500 to-pink-600"
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              The Tech
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Technology that frees your company<br />from daily operations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Altura automates repetitive tasks, centralizes information, and enables advanced capabilities with AI so your team can focus on what matters: strategy, innovation, and growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            // Mobile: Always content first, then visual (consistent order)
            // Desktop: alternate order - even indices: content left, visual right; odd indices: visual left, content right
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={solution.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Content - Always first on mobile, alternating on desktop */}
                <div className={`order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-gray-300">{solution.number}</span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Enables:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${solution.color}`} />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Visual - Always second on mobile, alternating on desktop */}
                <div className={`order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className={`relative h-64 rounded-3xl bg-gradient-to-br ${solution.color} p-8 flex items-center justify-center overflow-hidden`}>
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-20">
                      {solution.number === "01" && (
                        <>
                          <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full" />
                          <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white rounded-full" />
                        </>
                      )}
                      {solution.number === "02" && (
                        <>
                          <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white rotate-45" />
                          <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-white rotate-45" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white rotate-45" />
                        </>
                      )}
                      {solution.number === "03" && (
                        <>
                          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white" />
                          <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-white" />
                        </>
                      )}
                    </div>
                    <Icon className="w-24 h-24 text-white relative z-10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
