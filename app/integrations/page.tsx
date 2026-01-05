"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguageSwitcher } from "../components/common/useLanguageSwitcher";

// Integration data - keeping existing structure
const integrations = [
  { name: "2c2p", logo: "2c2p", category: "Payment Provider" },
  { name: "7ELEVEN", logo: "7E", category: "Payment Method" },
  { name: "Adyen", logo: "ADY", category: "Payment Provider" },
  { name: "Stripe", logo: "STR", category: "Payment Provider" },
  { name: "PayPal", logo: "PP", category: "Payment Method" },
  { name: "Visa", logo: "VISA", category: "Card Network" },
  { name: "Mastercard", logo: "MC", category: "Card Network" },
  { name: "Shopify", logo: "SHOP", category: "Ecommerce" },
  { name: "WooCommerce", logo: "WOO", category: "Ecommerce" },
  { name: "Magento", logo: "MAG", category: "Ecommerce" },
  { name: "Salesforce", logo: "SF", category: "CRM" },
  { name: "HubSpot", logo: "HS", category: "CRM" },
  { name: "Mailchimp", logo: "MC", category: "Email" },
  { name: "SendGrid", logo: "SG", category: "Email" },
  { name: "QuickBooks", logo: "QB", category: "Finance & Accounting" },
  { name: "Xero", logo: "XERO", category: "Finance & Accounting" },
  { name: "Google Ads", logo: "GA", category: "Marketing" },
  { name: "Facebook Ads", logo: "FB", category: "Marketing" },
  { name: "Klarna", logo: "KL", category: "Payment Method" },
  { name: "Square", logo: "SQ", category: "Payment Provider" },
  { name: "Rapyd", logo: "RPD", category: "Payment Provider" },
  { name: "Worldpay", logo: "WP", category: "Payment Provider" },
  { name: "Checkout.com", logo: "CO", category: "Payment Provider" },
  { name: "Pix", logo: "PIX", category: "Payment Method" },
  { name: "OXXO", logo: "OXX", category: "Payment Method" },
  { name: "American Express", logo: "AMEX", category: "Card Network" },
  { name: "Discover", logo: "DISC", category: "Card Network" },
  { name: "BigCommerce", logo: "BC", category: "Ecommerce" },
  { name: "PrestaShop", logo: "PS", category: "Ecommerce" },
  { name: "Zoho CRM", logo: "ZOHO", category: "CRM" },
  { name: "Pipedrive", logo: "PD", category: "CRM" },
  { name: "Constant Contact", logo: "CC", category: "Email" },
  { name: "Campaign Monitor", logo: "CM", category: "Email" },
  { name: "Sage", logo: "SAGE", category: "Finance & Accounting" },
  { name: "FreshBooks", logo: "FB", category: "Finance & Accounting" },
  { name: "LinkedIn Ads", logo: "LI", category: "Marketing" },
  { name: "Twitter Ads", logo: "TW", category: "Marketing" },
];

const categories = [
  "All",
  "Payment Provider",
  "Payment Method",
  "Card Network",
  "CRM",
  "Ecommerce",
  "Email",
  "Finance & Accounting",
  "Marketing"
];

export default function IntegrationsPage() {
  const { currentLang } = useLanguageSwitcher();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    if (isCategoryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoryDropdownOpen]);

  const content = {
    heading: {
      en: "We connect your technology so your systems work as one ecosystem",
      es: "Conectamos tu tecnología para que tus sistemas trabajen como un solo ecosistema"
    },
    subheading: {
      en: "Altura integrates with ecommerce platforms, CRM, ERP, marketing tools, messaging, payments, analytics and internal systems. We design stable and secure integrations that allow information to flow between tools and processes to operate in a coordinated and efficient manner.",
      es: "Altura se integra con plataformas de ecommerce, CRM, ERP, herramientas de marketing, mensajería, pagos, analítica y sistemas internos. Diseñamos integraciones estables y seguras que permiten que la información fluya entre herramientas y que los procesos operen de forma coordinada y eficiente."
    }
  };

  const filteredIntegrations = useMemo(() => {
    return integrations.filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider border border-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              INTEGRATIONS
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            {content.heading[currentLang]}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-4xl mx-auto mt-6 leading-relaxed">
            {content.subheading[currentLang]}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile: Dropdown Categories */}
            <div className="lg:hidden">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  <span>Categories: {selectedCategory}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-gray-200 shadow-lg z-50 max-h-64 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop: Left Sidebar - Categories */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                  Categories:
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Search and Grid */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    SEARCH
                  </button>
                </div>
              </div>

              {/* All Sources Label */}
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                All sources
              </h3>

              {/* Integrations Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredIntegrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Logo Placeholder */}
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold text-gray-600 group-hover:bg-blue-50 transition-colors">
                        {integration.logo.substring(0, 3)}
                      </div>
                      {/* Name */}
                      <span className="text-sm font-medium text-gray-900 flex-1">
                        {integration.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredIntegrations.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500">No integrations found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powering the future of financial infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Talk with one of our payment experts.
          </p>
          <Link href="/book-a-demo" className="w-full max-w-md mx-auto block md:w-auto md:max-w-none">
            <button className="w-full md:w-auto px-6 py-2.5 md:px-12 md:py-3 bg-white text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
