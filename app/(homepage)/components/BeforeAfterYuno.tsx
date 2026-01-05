"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const BeforeAfterYuno = () => {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <div className="flex justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                THE PROBLEM
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Companies are trapped<br />in daily operations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Teams spend most of their time on manual tasks: responding to messages, managing orders, updating systems, resolving requests, and reviewing scattered data. With so much operational work, there's no room to think about strategy, growth, or innovation.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">This challenge affects:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Customer Service</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Sales</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Ecommerce Ecosystem</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Internal Operations</span>
              </div>
            </div>
            <p className="text-base font-medium text-gray-800 italic">
              The business works, but it doesn't advance.
            </p>
          </div>

          {/* Right - Toggle & Diagram */}
          <div>
            {/* Toggle */}
            <div className="flex justify-center lg:justify-end mb-8">
              <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
                <button
                  onClick={() => setView("before")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    view === "before"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  BEFORE ALTURA
                </button>
                <button
                  onClick={() => setView("after")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    view === "after"
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  AFTER ALTURA
                </button>
              </div>
            </div>

            {/* Diagram */}
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-sm border border-gray-100 h-[400px] md:h-[500px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {view === "before" ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 h-full flex flex-col justify-center"
                  >
                    {/* Company at top */}
                    <div className="flex justify-center mb-8">
                      <Link href="/about-us" className="px-6 py-3 bg-gray-100 rounded-xl font-semibold text-gray-700 border-2 border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer">
                        COMPANY
                      </Link>
                    </div>

                    {/* Manual Tasks */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {["Manual Messages", "Manual Orders", "Manual Updates", "Manual Reports"].map((task, i) => (
                        <div key={task} className="relative">
                          <div className="px-4 py-3 bg-red-50 rounded-lg text-center text-xs font-medium text-red-700 border border-red-200 h-20 flex flex-col items-center justify-center">
                            {task}
                            <div className="mt-2 flex flex-wrap gap-1 justify-center">
                              <span className="px-2 py-0.5 bg-white rounded text-xs">⏱️</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500 justify-center">
                      <span className="px-2 py-1 bg-gray-100 rounded">REACTIVE OPERATION</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">MANUAL PROCESSES</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">SCATTERED DATA</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">MULTIPLE PLATFORMS</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">LIMITED GROWTH</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 h-full flex flex-col justify-center"
                  >
                    {/* Company at top */}
                    <div className="flex justify-center mb-4">
                      <Link href="/about-us" className="px-6 py-3 bg-gray-100 rounded-xl font-semibold text-gray-700 border-2 border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer">
                        COMPANY
                      </Link>
                    </div>

                    {/* Altura Layer */}
                    <div className="relative py-4">
                      <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-blue-400 -translate-x-1/2" />
                      <div className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-center">
                        <div className="text-white font-bold text-lg">ALTURA</div>
                        <div className="text-blue-100 text-xs mt-1">Automated Technology Platform</div>
                      </div>
                    </div>

                    {/* Automated Solutions */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {["AI Automation", "Centralized Data", "Strategic Teams", "Scalable Tech"].map((solution, i) => (
                        <div key={solution} className="relative">
                          <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-blue-300 -translate-x-1/2 -translate-y-full" />
                          <div className="px-4 py-3 bg-green-50 rounded-lg text-center text-xs font-medium text-green-700 border border-green-200 h-20 flex flex-col items-center justify-center">
                            {solution}
                            <div className="mt-2">
                              <span className="px-2 py-0.5 bg-white rounded text-xs">✅</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

