"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import Image from "next/image";

type TabType = "failed" | "abandoned" | "unpaid";

const tabContent = {
  failed: {
    title: "FAILED PAYMENTS",
    description: "Click to experience NOVA resolving an abandoned checkout",
    color: "from-red-500/40 to-orange-500/40",
    filter: "hue-rotate(330deg) saturate(1.5)",
  },
  abandoned: {
    title: "ABANDONED CHECKOUTS",
    description: "Click to experience NOVA resolving an abandoned checkout",
    color: "from-green-500/40 to-emerald-500/40",
    filter: "hue-rotate(90deg) saturate(1.3)",
  },
  unpaid: {
    title: "UNPAID BALANCES",
    description: "Click to experience NOVA collecting a payment from a customer",
    color: "from-purple-500/40 to-blue-500/40",
    filter: "hue-rotate(250deg) saturate(1.2)",
  },
};

export const SimulateCall = () => {
  const [activeTab, setActiveTab] = useState<TabType>("abandoned");

  return (
    <section className="relative py-16 bg-[#070714] overflow-hidden">
      {/* Deep space background gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(30, 50, 120, 0.15) 0%, transparent 50%)'
      }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Label */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Simulate a call from NOVA
          </p>
        </div>

        {/* Branch Line Diagram */}
        <div className="relative mb-20">
          {/* SVG Container */}
          <div className="relative w-full max-w-5xl mx-auto">
            <svg className="w-full h-40" viewBox="0 0 1000 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
              {/* Main vertical trunk line from top */}
              <line x1="500" y1="0" x2="500" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              
              {/* Junction point */}
              <circle cx="500" cy="60" r="3" fill="white" opacity="0.8" />
              
              {/* Smooth curve from junction to left */}
              <path d="M 500 60 C 400 70, 300 90, 200 100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
              
              {/* Smooth curve from junction to right */}
              <path d="M 500 60 C 600 70, 700 90, 800 100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
              
              {/* Left branch - vertical down */}
              <line x1="200" y1="100" x2="200" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              
              {/* Middle branch - vertical down from junction */}
              <line x1="500" y1="60" x2="500" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              
              {/* Right branch - vertical down */}
              <line x1="800" y1="100" x2="800" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

              {/* Animated pulses */}
              {activeTab === "failed" && (
                <circle r="3" fill="white" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))" }}>
                  <animateMotion dur="2s" repeatCount="indefinite" path="M 500 60 C 400 70, 300 90, 200 100 L 200 160" />
                </circle>
              )}
              {activeTab === "abandoned" && (
                <circle r="3" fill="white" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))" }}>
                  <animateMotion dur="1.5s" repeatCount="indefinite" path="M 500 60 L 500 160" />
                </circle>
              )}
              {activeTab === "unpaid" && (
                <circle r="3" fill="white" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))" }}>
                  <animateMotion dur="2s" repeatCount="indefinite" path="M 500 60 C 600 70, 700 90, 800 100 L 800 160" />
                </circle>
              )}
            </svg>

            {/* Tab Labels - Positioned to align with branches */}
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-4">
              <button
                onClick={() => setActiveTab("failed")}
                className={`text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center ${
                  activeTab === "failed" ? "text-white" : "text-gray-500"
                }`}
              >
                {activeTab === "failed" && (
                  <div className="mb-2 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                )}
                Failed Payments
              </button>
              <button
                onClick={() => setActiveTab("abandoned")}
                className={`text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center ${
                  activeTab === "abandoned" ? "text-white" : "text-gray-500"
                }`}
              >
                {activeTab === "abandoned" && (
                  <div className="mb-2 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                )}
                Abandoned Checkouts
              </button>
              <button
                onClick={() => setActiveTab("unpaid")}
                className={`text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center ${
                  activeTab === "unpaid" ? "text-white" : "text-gray-500"
                }`}
              >
                {activeTab === "unpaid" && (
                  <div className="mb-2 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                )}
                Unpaid Balances
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Circle Panel */}
        <div className="relative max-w-2xl mx-auto mt-8">
          {/* Subtle Semicircle Behind with thin rim glow */}
          <div className="absolute left-1/2 top-1/2 translate-y-[15%] -translate-x-1/2 w-[130%] aspect-square pointer-events-none -z-10">
            {/* Dark semicircle body */}
            <div className="absolute inset-0 rounded-full" style={{
              background: 'radial-gradient(circle at 50% 40%, #0c0c14 0%, #08080c 50%, #050506 100%)',
              boxShadow: 'inset 0 -20px 60px rgba(0,0,0,0.5), 0 0 1px rgba(100, 130, 200, 0.3)'
            }}></div>
            
            {/* Thin illuminated rim - just a few pixels */}
            <div className="absolute inset-0 rounded-full" style={{
              background: 'radial-gradient(circle at 50% 42%, transparent 48.5%, rgba(80, 110, 180, 0.25) 49%, rgba(60, 90, 160, 0.15) 49.5%, transparent 50.5%)'
            }}></div>
          </div>

          {/* Main Circle Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-square max-w-md mx-auto"
              >
                {/* Swirling Sphere Background */}
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0">
                    <Image
                      src="/6880684e57538122936ef1fe_spehre.png.avif"
                      alt="Interactive orb"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-full"
                      style={{ filter: tabContent[activeTab].filter }}
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-white/20 shadow-inner"></div>
                </div>

                {/* Start Conversation Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2">
                    <Volume2 className="w-5 h-5" />
                    Start Conversation
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Description */}
          <motion.div
            key={`desc-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-400">
              {tabContent[activeTab].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

