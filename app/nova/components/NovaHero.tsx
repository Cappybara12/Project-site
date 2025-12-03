"use client";

import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";
import Link from "next/link";

export const NovaHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-transparent to-transparent"></div>
        
        {/* Starfield Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="stars" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="1" fill="white"/%3E%3Ccircle cx="50" cy="30" r="0.5" fill="white"/%3E%3Ccircle cx="90" cy="15" r="1" fill="white"/%3E%3Ccircle cx="130" cy="40" r="0.5" fill="white"/%3E%3Ccircle cx="170" cy="20" r="1" fill="white"/%3E%3Ccircle cx="30" cy="70" r="0.5" fill="white"/%3E%3Ccircle cx="70" cy="90" r="1" fill="white"/%3E%3Ccircle cx="110" cy="80" r="0.5" fill="white"/%3E%3Ccircle cx="150" cy="100" r="1" fill="white"/%3E%3Ccircle cx="190" cy="85" r="0.5" fill="white"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="200" height="200" fill="url(%23stars)"/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }}></div>

        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 rounded-full mb-8 border border-blue-500/30 shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Meet Nova AI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            From Friction to<br />
            Growth—Automatically
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide">
            NOVA turns abandoned check-outs, declined cards, and inbound support into AI-powered conversations that recover revenue, delight customers, and surface the data signals you've been missing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-a-demo">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70 hover:scale-105">
                Book a Live Demo
              </button>
            </Link>
            
            <button className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-full font-semibold text-base hover:border-gray-400 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

