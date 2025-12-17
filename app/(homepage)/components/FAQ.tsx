"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Altura Automations and how does it work?",
    answer: "Altura Automations are AI agents personalized for each type of business. They automate customer service and process management through WhatsApp, Instagram, Messenger, email, and calls. They operate with precision, adapt to your internal flows, and improve your users' experience 24/7."
  },
  {
    question: "How does One Source Platform centralize my ecommerce data?",
    answer: "One Source Platform integrates your entire ecommerce ecosystem—website, digital advertising, ERP, CRM, and more—into a single unified platform. It provides customizable dashboards, deep analysis, AI chat capabilities, and machine learning insights to help you make better strategic decisions."
  },
  {
    question: "What can Altura Custom Projects build for my business?",
    answer: "Altura Custom Projects creates applications, platforms, internal systems, and advanced integrations designed to adapt to your operation, strengthen your processes, and scale with your company. All developments are built with enterprise standards for security, scalability, and reliability."
  },
  {
    question: "How quickly can Altura automate my operations?",
    answer: "Implementation time varies by solution, but Altura Automations can typically be deployed within weeks. One Source Platform integration depends on your existing systems, and Custom Projects are built to your specific timeline and requirements."
  },
  {
    question: "Does Altura work with my existing tools and systems?",
    answer: "Yes. Altura solutions are designed to integrate with your existing infrastructure. One Source Platform connects to major ecommerce platforms, ERPs, CRMs, and advertising tools. Custom Projects can integrate with any system through APIs and custom development."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-white overflow-visible">
      {/* Animated track lines that extend into CTA section */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Left track - starts in FAQ, continues down */}
        <svg className="absolute left-0 top-0 w-full h-[calc(100%+200px)]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            id="faqLeftTrack"
            d="M 120 0 L 120 500 Q 120 600, 220 600 L 350 600 Q 450 600, 450 700 L 450 900"
            stroke="rgba(79, 70, 229, 0.15)"
            strokeWidth="2"
            fill="none"
          />
          {/* Animated glowing capsule - horizontal orientation */}
          <rect x="-8" y="-2" width="16" height="4" rx="2" fill="#4F46E5" opacity="0.8">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
              <mpath href="#faqLeftTrack" />
            </animateMotion>
          </rect>
        </svg>
        
        {/* Right track - starts in FAQ, curves down */}
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
             <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">Have Questions?</div>
             <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
                Frequently asked questions and answers
             </h2>
             <p className="text-gray-500 leading-relaxed">
                Find answers to common questions about Altura's technology solutions and how they can transform your business operations.
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
                                {faq.question}
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
                                        {faq.answer}
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

