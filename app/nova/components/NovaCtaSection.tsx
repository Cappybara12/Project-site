"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const NovaCtaSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Sphere Background - Positioned on right, half overlapped by content */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-[700px] h-[700px] pointer-events-none z-0">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-500/10 to-transparent blur-2xl rounded-full"></div>
        
        {/* Sphere image - Full circle */}
        <div className="absolute inset-0">
          <Image
            src="/6880684e57538122936ef1fe_spehre.png.avif"
            alt="Background sphere"
            width={700}
            height={700}
            className="w-full h-full object-cover rounded-full opacity-60"
            style={{ 
              filter: 'hue-rotate(190deg) saturate(1.3) brightness(0.9)'
            }}
            priority
          />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 rounded-full mb-8 border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Get Started
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Go live with NOVA immediately
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
            Elevate your payment strategy with NOVA. Our team can help you started quickly - no code required.
          </p>

          {/* CTA Button */}
          <Link href="/book-a-demo">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-2xl shadow-blue-600/50 hover:shadow-blue-600/70 hover:scale-105">
              Book a Live Demo
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

