"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Select your data source
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-64 flex-shrink-0">
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
          <Link href="/book-a-demo">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
