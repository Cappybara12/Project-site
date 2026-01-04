"use client";

import { motion } from "framer-motion";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";

interface Statement {
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  image: string;
}

interface StatementCardsProps {
  statements: Statement[];
}

export const StatementCards = ({ statements }: StatementCardsProps) => {
  const { currentLang } = useLanguageSwitcher();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-gray-300">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {statement.title[currentLang]}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {statement.description[currentLang]}
                </p>
              </div>

              {/* Right: Image */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="w-full h-[400px] bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                  <img
                    src={statement.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


