"use client";

import { motion } from "framer-motion";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";
import Link from "next/link";

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
    <section className="relative pt-32 pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-8 border border-gray-200"
        >
          <span className="px-1.5 py-0.5 bg-gray-200/50 text-gray-700 rounded text-xs font-bold">
            {badge[currentLang]}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          {titlePart1[currentLang]}
          <br />
          {titlePart2[currentLang]}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle[currentLang]}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <Link href="/book-a-demo">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Book a demo
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
