"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { regions } from "@/data/regions";
import Image from "next/image";

export const GlobalRegions = () => {
  const [activeRegion, setActiveRegion] = useState(regions[0].id);

  const active = regions.find(r => r.id === activeRegion) || regions[0];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              VALUE
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Make global<br />payments effortless
          </h2>
          <p className="text-lg text-gray-500">Connect every part of your global payment operation.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Navigation */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-6">{active.heading}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{active.description}</p>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mb-12">
                Explore all integrations
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Region List */}
              <div className="space-y-1 relative">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />
                
                {regions.map((region, index) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region.id)}
                    className={`relative flex items-center gap-3 w-full text-left py-3 transition-colors ${
                      activeRegion === region.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {activeRegion === region.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute left-[-3px] w-[7px] h-[7px] rounded-full bg-blue-600 z-10"
                      />
                    )}
                    <span className="text-sm font-semibold uppercase tracking-wider pl-6">{region.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Globe & Providers */}
          <div className="lg:col-span-8">
            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-8 md:p-12 flex items-center justify-center overflow-hidden">
              {/* Globe Image */}
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-2xl"
              >
                <Image
                  src="/globe-regions.webp"
                  alt="Global regions"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>

              {/* Payment Providers - Overlaying on left side */}
              <motion.div
                key={`providers-${activeRegion}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]"
              >
                <div className="flex flex-col gap-3">
                  {active.providers.map((provider, index) => (
                    <motion.div
                      key={provider.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: provider.color }}
                      >
                        {provider.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">{provider.name}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">+60 regional providers</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

