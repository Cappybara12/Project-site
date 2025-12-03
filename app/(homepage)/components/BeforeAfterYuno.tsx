"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BeforeAfterYuno = () => {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                THE PROBLEM
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Global infrastructure<br />is broken
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Building and scaling financial services across borders isn't just complex—it's fragmented. Each market comes with its own providers, regulations, tax rules, currencies, and customer preferences. That means companies are forced to stitch together dozens of systems just to operate internationally.
            </p>
          </div>

          {/* Right - Toggle & Diagram */}
          <div>
            {/* Toggle */}
            <div className="flex justify-end mb-8">
              <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
                <button
                  onClick={() => setView("before")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    view === "before"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Before Yuno
                </button>
                <button
                  onClick={() => setView("after")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    view === "after"
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  After Yuno
                </button>
              </div>
            </div>

            {/* Diagram */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {view === "before" ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Merchant at top */}
                    <div className="flex justify-center mb-8">
                      <div className="px-6 py-3 bg-gray-100 rounded-xl font-semibold text-gray-700 border-2 border-gray-200">
                        MERCHANT
                      </div>
                    </div>

                    {/* Multiple PSP connections */}
                    <div className="grid grid-cols-3 gap-4">
                      {["PSP 1", "PSP 2", "PSP 3"].map((psp, i) => (
                        <div key={psp} className="relative">
                          <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2 -translate-y-full" />
                          <div className="px-4 py-3 bg-red-50 rounded-lg text-center text-sm font-medium text-red-700 border border-red-200">
                            {psp}
                            <div className="mt-2 flex flex-wrap gap-1 justify-center">
                              <span className="px-2 py-0.5 bg-white rounded text-xs">❌</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500 justify-center">
                      <span className="px-2 py-1 bg-gray-100 rounded">RESTRICTED TOKENS</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">LIMITED ROUTING</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">SILOED DATA</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">LIMITED PAYMENTS METHODS</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Merchant at top */}
                    <div className="flex justify-center mb-4">
                      <div className="px-6 py-3 bg-gray-100 rounded-xl font-semibold text-gray-700 border-2 border-gray-200">
                        MERCHANT
                      </div>
                    </div>

                    {/* Yuno Layer */}
                    <div className="relative py-4">
                      <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-blue-400 -translate-x-1/2" />
                      <div className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-center">
                        <div className="text-white font-bold text-lg">YUNO</div>
                        <div className="text-blue-100 text-xs mt-1">Unified Orchestration Layer</div>
                      </div>
                    </div>

                    {/* Connected PSPs */}
                    <div className="grid grid-cols-3 gap-4">
                      {["PSP 1", "PSP 2", "PSP 3"].map((psp, i) => (
                        <div key={psp} className="relative">
                          <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-blue-300 -translate-x-1/2 -translate-y-full" />
                          <div className="px-4 py-3 bg-green-50 rounded-lg text-center text-sm font-medium text-green-700 border border-green-200">
                            {psp}
                            <div className="mt-2">
                              <span className="px-2 py-0.5 bg-white rounded text-xs">✅</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-sm text-blue-600 font-semibold">+1,000 payment methods connected</p>
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

