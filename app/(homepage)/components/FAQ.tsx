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
    <section className="relative py-12 md:py-24 bg-white overflow-visible">
      {/* Animated track lines - straight and thinner inverted S pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Left track - straight vertical line with inverted S curve */}
        <svg className="absolute left-0 top-0 w-full h-[calc(100%+200px)]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            id="faqLeftTrack"
            d="M 60 0 L 60 200 Q 60 300, 40 400 Q 60 500, 60 600 L 60 900"
            stroke="rgba(79, 70, 229, 0.12)"
            strokeWidth="1"
            fill="none"
          />
          {/* Animated glowing capsule - thinner */}
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill="#4F46E5" opacity="0.6">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
              <mpath href="#faqLeftTrack" />
            </animateMotion>
          </rect>
        </svg>
        
        {/* Right track - straight vertical line with inverted S curve, moved further right */}
        <svg className="absolute right-0 top-0 w-full h-[calc(100%+200px)]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            id="faqRightTrack"
            d="M 1160 0 L 1160 200 Q 1160 300, 1180 400 Q 1160 500, 1160 600 L 1160 900"
            stroke="rgba(79, 70, 229, 0.12)"
            strokeWidth="1"
            fill="none"
          />
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill="#4F46E5" opacity="0.6">
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

