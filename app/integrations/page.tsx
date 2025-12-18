"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguageSwitcher } from "../components/common/useLanguageSwitcher";

// Country to flag emoji mapping
const countryFlags: { [key: string]: string } = {
  "China": "🇨🇳",
  "Indonesia": "🇮🇩",
  "India": "🇮🇳",
  "South Korea": "🇰🇷",
  "Malaysia": "🇲🇾",
  "Mexico": "🇲🇽",
  "Japan": "🇯🇵",
  "Egypt": "🇪🇬",
  "Botswana": "🇧🇼",
  "Zambia": "🇿🇲",
  "Namibia": "🇳🇦",
  "South Africa": "🇿🇦",
  "United Kingdom": "🇬🇧",
  "UK": "🇬🇧",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Italy": "🇮🇹",
  "Netherlands": "🇳🇱",
  "USA": "🇺🇸",
  "Spain": "🇪🇸",
  "Colombia": "🇨🇴",
  "Brazil": "🇧🇷",
  "Canada": "🇨🇦",
  "UAE": "🇦🇪",
  "Singapore": "🇸🇬",
  "Australia": "🇦🇺",
  "Argentina": "🇦🇷",
  "Chile": "🇨🇱",
  "Nigeria": "🇳🇬",
  "Bahrain": "🇧🇭",
  "Global": "🌍"
};

// Integration data
const integrations = [
  {
    name: "2c2p",
    logo: "2c2p",
    category: "Provider",
    regions: ["APAC"],
    countries: ["China", "Indonesia", "India", "South Korea"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "7ELEVEN",
    logo: "7E",
    category: "Payment Method",
    regions: ["APAC"],
    countries: ["Malaysia", "Mexico", "Japan"],
    features: []
  },
  {
    name: "AAIB",
    logo: "AAIB",
    category: "Provider",
    regions: ["Middle East"],
    countries: ["Egypt"],
    features: []
  },
  {
    name: "ABK Wallet",
    logo: "ABK",
    category: "Payment Method",
    regions: ["Middle East"],
    countries: ["Egypt"],
    features: []
  },
  {
    name: "ABSA",
    logo: "ABSA",
    category: "Provider",
    regions: ["Africa"],
    countries: ["Botswana", "Zambia", "Namibia", "South Africa"],
    features: []
  },
  {
    name: "ACI Worldwide",
    logo: "ACI",
    category: "Provider",
    regions: ["Europe", "LATAM", "APAC", "Middle East", "Africa"],
    countries: ["United Kingdom", "Germany", "France", "Italy"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "Adyen",
    logo: "ADY",
    category: "Provider",
    regions: ["Europe", "LATAM", "APAC", "North America"],
    countries: ["Netherlands", "USA", "UK", "Germany"],
    features: ["Network Tokenization", "3DS", "Recurring"]
  },
  {
    name: "Afirme",
    logo: "AFR",
    category: "Payment Method",
    regions: ["LATAM"],
    countries: ["Mexico"],
    features: []
  },
  {
    name: "Ahli United Bank",
    logo: "AUB",
    category: "Provider",
    regions: ["Middle East"],
    countries: ["Bahrain"],
    features: []
  },
  {
    name: "Apple Pay",
    logo: "APL",
    category: "Payment Method",
    regions: ["Europe", "LATAM", "APAC", "North America"],
    countries: ["USA", "UK", "Germany", "Japan"],
    features: ["Tokenization"]
  },
  {
    name: "Banorte",
    logo: "BNT",
    category: "Provider",
    regions: ["LATAM"],
    countries: ["Mexico"],
    features: ["3DS"]
  },
  {
    name: "BBVA",
    logo: "BBVA",
    category: "Provider",
    regions: ["LATAM", "Europe"],
    countries: ["Mexico", "Spain", "Colombia"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "Boleto",
    logo: "BOL",
    category: "Payment Method",
    regions: ["LATAM"],
    countries: ["Brazil"],
    features: []
  },
  {
    name: "Braintree",
    logo: "BT",
    category: "Provider",
    regions: ["North America", "Europe"],
    countries: ["USA", "UK", "Canada"],
    features: ["Network Tokenization", "3DS", "Recurring"]
  },
  {
    name: "Checkout.com",
    logo: "CHK",
    category: "Provider",
    regions: ["Europe", "APAC", "Middle East"],
    countries: ["UK", "UAE", "Singapore"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "Cielo",
    logo: "CIE",
    category: "Provider",
    regions: ["LATAM"],
    countries: ["Brazil"],
    features: ["3DS"]
  },
  {
    name: "dLocal",
    logo: "dL",
    category: "Provider",
    regions: ["LATAM", "Africa", "APAC"],
    countries: ["Brazil", "Mexico", "Argentina", "Nigeria"],
    features: ["Network Tokenization"]
  },
  {
    name: "Google Pay",
    logo: "GPY",
    category: "Payment Method",
    regions: ["Europe", "LATAM", "APAC", "North America"],
    countries: ["USA", "UK", "India", "Brazil"],
    features: ["Tokenization"]
  },
  {
    name: "Mastercard",
    logo: "MC",
    category: "Card Network",
    regions: ["Europe", "LATAM", "APAC", "North America", "Africa", "Middle East"],
    countries: ["Global"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "Mercado Pago",
    logo: "MP",
    category: "Provider",
    regions: ["LATAM"],
    countries: ["Argentina", "Brazil", "Mexico", "Chile"],
    features: ["Recurring"]
  },
  {
    name: "Nuvei",
    logo: "NUV",
    category: "Provider",
    regions: ["North America", "Europe", "LATAM"],
    countries: ["Canada", "USA", "UK", "Brazil"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "OXXO",
    logo: "OXX",
    category: "Payment Method",
    regions: ["LATAM"],
    countries: ["Mexico"],
    features: []
  },
  {
    name: "PayPal",
    logo: "PP",
    category: "Payment Method",
    regions: ["Europe", "LATAM", "APAC", "North America"],
    countries: ["USA", "UK", "Germany", "Australia"],
    features: ["Recurring"]
  },
  {
    name: "Pix",
    logo: "PIX",
    category: "Payment Method",
    regions: ["LATAM"],
    countries: ["Brazil"],
    features: ["Instant"]
  },
  {
    name: "Rapyd",
    logo: "RPD",
    category: "Provider",
    regions: ["Europe", "APAC", "LATAM"],
    countries: ["UK", "Singapore", "Brazil"],
    features: ["Network Tokenization"]
  },
  {
    name: "Stripe",
    logo: "STR",
    category: "Provider",
    regions: ["Europe", "LATAM", "APAC", "North America"],
    countries: ["USA", "UK", "Japan", "Australia"],
    features: ["Network Tokenization", "3DS", "Recurring"]
  },
  {
    name: "Visa",
    logo: "VISA",
    category: "Card Network",
    regions: ["Europe", "LATAM", "APAC", "North America", "Africa", "Middle East"],
    countries: ["Global"],
    features: ["Network Tokenization", "3DS"]
  },
  {
    name: "Worldpay",
    logo: "WP",
    category: "Provider",
    regions: ["Europe", "North America", "APAC"],
    countries: ["UK", "USA", "Australia"],
    features: ["Network Tokenization", "3DS", "Recurring"]
  }
];

const categories = ["Provider", "Payment Method", "Card Network"];
const regions = ["Europe", "LATAM", "APAC", "North America", "Africa", "Middle East"];
const allCountries = [...new Set(integrations.flatMap(i => i.countries))].sort();
const allFeatures = ["Network Tokenization", "3DS", "Recurring", "Tokenization", "Instant"];

export default function IntegrationsPage() {
  const { currentLang } = useLanguageSwitcher();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || integration.category === selectedCategory;
      const matchesRegion = !selectedRegion || integration.regions.includes(selectedRegion);
      const matchesCountry = !selectedCountry || integration.countries.includes(selectedCountry);
      const matchesFeature = !selectedFeature || integration.features.includes(selectedFeature);
      
      return matchesSearch && matchesCategory && matchesRegion && matchesCountry && matchesFeature;
    });
  }, [searchQuery, selectedCategory, selectedRegion, selectedCountry, selectedFeature]);

  const visibleIntegrations = filteredIntegrations.slice(0, visibleCount);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
        {/* Animated decorative lines with illuminated dots */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left curved lines */}
          <svg className="absolute top-0 left-0 w-72 h-full" viewBox="0 0 120 500" preserveAspectRatio="none">
            {/* Track line 1 */}
            <path 
              d="M 100 0 Q 30 125, 100 250 Q 170 375, 100 500" 
              stroke="rgba(99, 102, 241, 0.15)" 
              strokeWidth="2" 
              fill="none" 
            />
            {/* Animated glowing dot 1 */}
            <circle r="4" fill="url(#glowGradient1)">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 100 0 Q 30 125, 100 250 Q 170 375, 100 500" />
            </circle>
            
            {/* Track line 2 */}
            <path 
              d="M 60 0 Q -10 125, 60 250 Q 130 375, 60 500" 
              stroke="rgba(99, 102, 241, 0.1)" 
              strokeWidth="2" 
              fill="none" 
            />
            {/* Animated glowing dot 2 */}
            <circle r="3" fill="url(#glowGradient2)">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 60 0 Q -10 125, 60 250 Q 130 375, 60 500" begin="2s" />
            </circle>
            
            {/* Gradient definitions */}
            <defs>
              <radialGradient id="glowGradient1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="glowGradient2">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
          
          {/* Right curved lines */}
          <svg className="absolute top-0 right-0 w-72 h-full" viewBox="0 0 120 500" preserveAspectRatio="none">
            {/* Track line 1 */}
            <path 
              d="M 20 0 Q 90 125, 20 250 Q -50 375, 20 500" 
              stroke="rgba(99, 102, 241, 0.15)" 
              strokeWidth="2" 
              fill="none" 
            />
            {/* Animated glowing dot 1 */}
            <circle r="4" fill="url(#glowGradientR1)">
              <animateMotion dur="7s" repeatCount="indefinite" path="M 20 0 Q 90 125, 20 250 Q -50 375, 20 500" begin="1s" />
            </circle>
            
            {/* Track line 2 */}
            <path 
              d="M 60 0 Q 130 125, 60 250 Q -10 375, 60 500" 
              stroke="rgba(99, 102, 241, 0.1)" 
              strokeWidth="2" 
              fill="none" 
            />
            {/* Animated glowing dot 2 */}
            <circle r="3" fill="url(#glowGradientR2)">
              <animateMotion dur="9s" repeatCount="indefinite" path="M 60 0 Q 130 125, 60 250 Q -10 375, 60 500" begin="3s" />
            </circle>
            
            {/* Gradient definitions */}
            <defs>
              <radialGradient id="glowGradientR1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="glowGradientR2">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {currentLang === "en" 
                ? "We connect your technology so your systems work as a single ecosystem"
                : "Conectamos tu tecnología para que tus sistemas trabajen como un solo ecosistema"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {currentLang === "en"
                ? "Altura integrates with ecommerce platforms, CRM, ERP, marketing tools, messaging, payments, analytics and internal systems. We design stable and secure integrations that allow information to flow between tools and processes to operate in a coordinated and efficient way."
                : "Altura se integra con plataformas de ecommerce, CRM, ERP, herramientas de marketing, mensajería, pagos, analítica y sistemas internos. Diseñamos integraciones estables y seguras que permiten que la información fluya entre herramientas y que los procesos operen de forma coordinada y eficiente."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[140px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Region Filter */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[120px]"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">Region</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Country Filter */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[120px]"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Country</option>
                {allCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Features Filter */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[120px]"
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
              >
                <option value="">Features</option>
                {allFeatures.map(feature => (
                  <option key={feature} value={feature}>{feature}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Table */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-5 gap-4 py-4 border-b border-gray-200 text-sm font-semibold text-gray-600 uppercase tracking-wide">
            <div>Name</div>
            <div>Category</div>
            <div>Region</div>
            <div>Countries</div>
            <div>Features</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {visibleIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 items-start"
              >
                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold text-gray-600">
                    {integration.logo.substring(0, 3)}
                  </div>
                  <span className="font-medium text-gray-900">{integration.name}</span>
                </div>

                {/* Category */}
                <div>
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
                    {integration.category}
                  </span>
                </div>

                {/* Region */}
                <div className="flex flex-wrap gap-2">
                  {integration.regions.slice(0, 2).map(region => (
                    <span key={region} className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
                      {region}
                    </span>
                  ))}
                  {integration.regions.length > 2 && (
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
                      +{integration.regions.length - 2}
                    </span>
                  )}
                </div>

                {/* Countries */}
                <div className="flex flex-wrap gap-2">
                  {integration.countries.slice(0, 3).map(country => (
                    <span key={country} className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                      <span>{countryFlags[country] || "🌍"}</span> {country}
                    </span>
                  ))}
                  {integration.countries.length > 3 && (
                    <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                      +{integration.countries.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {integration.features.map(feature => (
                    <span key={feature} className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredIntegrations.length && (
            <div className="text-center py-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 10)}
                className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Load More
              </button>
            </div>
          )}

          {/* No results */}
          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No integrations found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Blue CTA Section */}
      <section className="relative py-24 bg-blue-600 overflow-hidden">
        {/* Animated track lines with glowing dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left side track */}
          <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <path
              id="intLeftTrack"
              d="M 150 -100 L 150 150 Q 150 250, 250 250 L 400 250 Q 500 250, 500 350 L 500 700"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              fill="none"
            />
            <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" opacity="0.9">
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#intLeftTrack" />
              </animateMotion>
            </rect>
            <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" filter="url(#intGlow)" opacity="0.6">
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#intLeftTrack" />
              </animateMotion>
            </rect>
            <path
              id="intLeftTrack2"
              d="M 80 -50 L 80 300 Q 80 400, 180 400 L 300 400"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <rect x="-7" y="-2" width="14" height="4" rx="2" fill="white" opacity="0.7">
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="2s">
                <mpath href="#intLeftTrack2" />
              </animateMotion>
            </rect>
            <defs>
              <filter id="intGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
          
          {/* Right side track */}
          <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <path
              id="intRightTrack"
              d="M 1050 -100 L 1050 100 Q 1050 200, 950 200 L 800 200 Q 700 200, 700 300 L 700 450 Q 700 550, 800 550 L 1300 550"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              fill="none"
            />
            <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" opacity="0.9">
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="1s">
                <mpath href="#intRightTrack" />
              </animateMotion>
            </rect>
            <path
              id="intRightTrack2"
              d="M 1120 -50 L 1120 200 Q 1120 300, 1020 300 L 900 300"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <rect x="-7" y="-2" width="14" height="4" rx="2" fill="white" opacity="0.7">
              <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" begin="3s">
                <mpath href="#intRightTrack2" />
              </animateMotion>
            </rect>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight italic">
              {currentLang === "en" 
                ? <>Powering the future<br />of financial infrastructure</>
                : <>Impulsando el futuro<br />de la infraestructura financiera</>}
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              {currentLang === "en"
                ? "Talk with one of our payment experts."
                : "Habla con uno de nuestros expertos en pagos."}
            </p>
            <Link href="/book-a-demo">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                {currentLang === "en" ? "Book a Demo" : "Reservar una demo"}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

