"use client";

import { motion } from "framer-motion";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";
import Link from "next/link";
import Image from "next/image";

interface ProductHeroProps {
  badge: {
    en: string;
    es: string;
  };
  titlePart1: {
    en: string;
    es: string;
  };
  titlePart2: {
    en: string;
    es: string;
  };
  subtitle: {
    en: string;
    es: string;
  };
}

export const ProductHero = ({ badge, titlePart1, titlePart2, subtitle }: ProductHeroProps) => {
  const { currentLang } = useLanguageSwitcher();

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center bg-gradient-to-b from-[#0B0F17] via-[#1a1f2e] to-[#0B0F17] overflow-hidden">
      {/* Large Background Image - Blurred and positioned */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image placeholder - using gradient with pattern to simulate image */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[80%] h-[120%] bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[60%] h-[100%] bg-gradient-to-tr from-indigo-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Decorative diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 1200" preserveAspectRatio="none">
            <path d="M 0 0 L 1200 600" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="2" fill="none" />
            <path d="M 0 600 L 1200 0" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-8 border border-white/20"
          >
            <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-bold uppercase">
              {badge[currentLang]}
            </span>
          </motion.div>

          {/* Title - Split into two parts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {titlePart1[currentLang]}
              <br />
              {titlePart2[currentLang]}
            </h1>
          </motion.div>

          {/* Subtitle - Smaller font */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle[currentLang]}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/book-a-demo">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                {currentLang === "en" ? "Book a demo" : "Reservar una demo"}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

