"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const pricingCards = [
    {
      id: "automations",
      title: "Altura Automations",
      subtitle: "Custom implementation + monthly fee",
      isPopular: true,
      features: [
        "Enabled channels (WhatsApp, Instagram, Messenger, email calls)",
        "Complexity of conversational flows",
        "Level of personalization by industry",
        "Integrations with internal systems",
        "Volume of interactions"
      ],
      description: "Ideal for companies seeking to automate customer service, sales, and operational processes with AI agents.",
      buttonText: "Request a quote",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "platform",
      title: "One Source Platform",
      subtitle: "Automations and custom projects",
      price: "",
      isPopular: false,
      features: [
        "Customizable dashboards",
        "Deep Analysis",
        "AI Chat",
        "Insight ML",
        "Competitor intelligence",
        "Integration with multiple data sources",
        "Multi-user access"
      ],
      description: "Ideal for E-commerce, OTC brands, agencies, marketplaces, and subscription companies.",
      buttonText: "Get started",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: "custom",
      title: "Altura Custom Projects",
      subtitle: "Custom project (one-time fee) + optional support",
      isPopular: false,
      features: [
        "Functional scope",
        "Required architecture",
        "Necessary integrations",
        "Development time",
        "Expected scalability level"
      ],
      description: "Ideal for companies that need systems, applications, integrations, or process automation designed specifically for their operation.",
      buttonText: "Talk to a specialist",
      buttonColor: "bg-green-600 hover:bg-green-700",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              PRICING
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Clear pricing models, designed to adapt<br />to the reality of each business
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Altura Group we offer flexible solutions. Some products require a personalized approach; others are ready to scale with a simple and transparent subscription model.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ minHeight: '600px' }}
            >
              {/* Most Popular Badge */}
              {card.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{card.subtitle}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">{card.price}</div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6 flex-grow">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-6">{card.description}</p>

              {/* Button */}
              <Link href="/book-a-demo" className="mt-auto">
                <button className={`w-full ${card.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}>
                  {card.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
