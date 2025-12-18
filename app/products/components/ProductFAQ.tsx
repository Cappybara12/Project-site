"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";

interface FAQItem {
  question: {
    en: string;
    es: string;
  };
  answer: {
    en: string;
    es: string;
  };
}

interface ProductFAQProps {
  faqs: FAQItem[];
}

export const ProductFAQ = ({ faqs }: ProductFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { currentLang } = useLanguageSwitcher();

  return (
    <section className="relative py-24 bg-white overflow-visible">
      {/* Animated track lines */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <svg className="absolute left-0 top-0 w-full h-[calc(100%+200px)]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            id="faqLeftTrack"
            d="M 120 0 L 120 500 Q 120 600, 220 600 L 350 600 Q 450 600, 450 700 L 450 900"
            stroke="rgba(79, 70, 229, 0.15)"
            strokeWidth="2"
            fill="none"
          />
          <rect x="-8" y="-2" width="16" height="4" rx="2" fill="#4F46E5" opacity="0.8">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
              <mpath href="#faqLeftTrack" />
            </animateMotion>
          </rect>
        </svg>
        
        <svg className="absolute right-0 top-0 w-full h-[calc(100%+200px)]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            id="faqRightTrack"
            d="M 1080 0 L 1080 400 Q 1080 500, 980 500 L 850 500 Q 750 500, 750 600 L 750 900"
            stroke="rgba(79, 70, 229, 0.15)"
            strokeWidth="2"
            fill="none"
          />
          <rect x="-8" y="-2" width="16" height="4" rx="2" fill="#4F46E5" opacity="0.8">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" begin="2s">
              <mpath href="#faqRightTrack" />
            </animateMotion>
          </rect>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        {/* Left Header */}
        <div className="lg:w-1/3">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">
            {currentLang === "en" ? "Have Questions?" : "¿Tienes Preguntas?"}
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            {currentLang === "en" 
              ? "Frequently asked questions and answers"
              : "Preguntas y respuestas frecuentes"}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {currentLang === "en"
              ? "Find answers to common questions about our solutions and how they can transform your business operations."
              : "Encuentra respuestas a preguntas comunes sobre nuestras soluciones y cómo pueden transformar las operaciones de tu negocio."}
          </p>
        </div>

        {/* Right Accordion */}
        <div className="lg:w-2/3">
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 group">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                    {faq.question[currentLang]}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-gray-500 leading-relaxed">
                        {faq.answer[currentLang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

