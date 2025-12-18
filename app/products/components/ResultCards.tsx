"use client";

import { motion } from "framer-motion";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";

interface Result {
  value: string;
  label: {
    en: string;
    es: string;
  };
}

interface ResultCardsProps {
  results: Result[];
}

export const ResultCards = ({ results }: ResultCardsProps) => {
  const { currentLang } = useLanguageSwitcher();

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                {result.value}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {result.label[currentLang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

