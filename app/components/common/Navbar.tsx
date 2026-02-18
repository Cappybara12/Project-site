"use client";

import Link from "next/link";
import { Globe, ChevronDown, Menu, X, ArrowLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguageSwitcher } from "./useLanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null); // "product", "industries", "resources", etc.
  const { currentLang, isOpen, setIsOpen, switchLanguage } = useLanguageSwitcher();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const productDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  
  // Hover delay timers
  const productTimerRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset submenu when menu closes
      setMobileSubmenu(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (productTimerRef.current) clearTimeout(productTimerRef.current);
      if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
    };
  }, []);

  const navLinks = [
    { href: "#", label: "Product" },
    { href: "/about-us", label: "Company" },
    { href: "/pricing", label: "Pricing" },
    { href: "/integrations", label: "Integrations" },
  ];

  const resourcesLinks = [
    { title: "Blog", icon: "📝", href: "/blog" },
    { title: "Trust & Security", icon: "🛡️", href: "/trust-and-security" },
    { title: "Terms & Conditions", icon: "📄", href: "/terms-and-conditions" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-40"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-80"></div>
              </div>
              altura
            </span>
          </Link>

          {/* Right: Mobile Menu Button / Desktop Menu + Book a Demo */}
          <div className="flex items-center gap-3">
            {/* Book a Demo Button - Mobile Only */}
            <Link 
              href="/book-a-demo" 
              className="md:hidden flex-shrink-0"
            >
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                Book a Demo
              </button>
            </Link>

            {/* Mobile Menu Button - Only on mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div 
              className="relative"
              ref={productDropdownRef}
              onMouseEnter={() => {
                if (productTimerRef.current) clearTimeout(productTimerRef.current);
                setProductOpen(true);
              }}
              onMouseLeave={() => {
                productTimerRef.current = setTimeout(() => {
                  setProductOpen(false);
                }, 200);
              }}
            >
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1">
                Product
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productOpen && (
                <div 
                  className="fixed top-20 left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  onMouseEnter={() => {
                    if (productTimerRef.current) clearTimeout(productTimerRef.current);
                    setProductOpen(true);
                  }}
                  onMouseLeave={() => {
                    productTimerRef.current = setTimeout(() => {
                      setProductOpen(false);
                    }, 200);
                  }}
                >
                  <div className="grid grid-cols-3 gap-0 p-8">
                    {/* Column 1: AUTOMATIONS */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">AUTOMATIONS</h3>
                          <p className="text-xs text-gray-500">{currentLang === "es" ? "Agentes de IA para servicio al cliente y ventas" : "AI Agents for Customer Service and Sales"}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { name: "WhatsApp", href: "/products/whatsapp", icon: "💬" },
                          { name: "Instagram", href: "/products/instagram", icon: "📷" },
                          { name: "Messenger", href: "/products/messenger", icon: "💬" },
                          { name: "Email", href: "/products/email", icon: "✉️" },
                          { name: "Calls", href: "/products/calls", icon: "📞" }
                        ].map((item) => (
                          <Link key={item.name} href={item.href} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: ONE SOURCE PLATFORM */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">ONE SOURCE PLATFORM</h3>
                          <p className="text-xs text-gray-500">{currentLang === "es" ? "Potencia tu ecosistema de ecommerce" : "Empower your eCommerce Ecosystem"}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { name: "Dashboards", href: "/products/dashboards", icon: "📊" },
                          { name: "Deep Analysis", href: "/products/deep-analysis", icon: "🔍" },
                          { name: "AI Chat", href: "/products/ai-chat", icon: "🤖" },
                          { name: "Insight ML", href: "/products/insight-ml", icon: "🧠" },
                          { name: "Competitor Intelligence", href: "/products/competitor-intelligence", icon: "📈" }
                        ].map((item) => (
                          <Link key={item.name} href={item.href} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: CUSTOM PROJECTS */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">CUSTOM PROJECTS</h3>
                          <p className="text-xs text-gray-500">{currentLang === "es" ? "Escala las operaciones de tu empresa" : "Scale your company's operations"}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { name: "Apps", href: "/products/apps", icon: "📱" },
                          { name: "Websites", href: "/products/websites", icon: "🌐" },
                          { name: "Integrations", href: "/integrations", icon: "🔗" },
                          { name: "Systems", href: "/products/systems", icon: "⚙️" },
                          { name: "Process Automation", href: "/products/process-automation", icon: "🔄" }
                        ].map((item) => (
                          <Link key={item.name} href={item.href} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 px-8 py-4 flex items-center justify-end bg-gray-50">
                    <Link href="/book-a-demo" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Book a demo
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              ref={industriesDropdownRef}
              onMouseEnter={() => {
                if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
                setIndustriesOpen(true);
              }}
              onMouseLeave={() => {
                industriesTimerRef.current = setTimeout(() => {
                  setIndustriesOpen(false);
                }, 200);
              }}
            >
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1">
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {industriesOpen && (
                <div 
                  className="fixed top-20 left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  onMouseEnter={() => {
                    if (industriesTimerRef.current) clearTimeout(industriesTimerRef.current);
                    setIndustriesOpen(true);
                  }}
                  onMouseLeave={() => {
                    industriesTimerRef.current = setTimeout(() => {
                      setIndustriesOpen(false);
                    }, 200);
                  }}
                >
                  <div className="grid grid-cols-3 gap-0 p-8">
                    {/* Column 1: AUTOMATIONS */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">AUTOMATIONS</h3>
                          <p className="text-xs text-gray-500">{currentLang === "es" ? "Automatización de IA para servicio al cliente, ventas y operaciones" : "AI automation for customer service, sales and operations"}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { name: { en: "Retail", es: "Retail" }, href: "/industries/retail", icon: "🛍️" },
                          { name: { en: "Pet Shops", es: "Tiendas de Mascotas" }, href: "/industries/retail/pet-shops", icon: "🐾" },
                          { name: { en: "Dealerships", es: "Concesionarios" }, href: "/industries/retail/concesionarios", icon: "🚗" },
                          { name: { en: "Distributors", es: "Distribuidoras" }, href: "/industries/retail/distribuidoras", icon: "📦" },
                          { name: { en: "Restaurants", es: "Restaurantes" }, href: "/industries/retail/restaurantes", icon: "🍽️" },
                          { name: { en: "Construction", es: "Constructoras" }, href: "/industries/constructoras", icon: "🏗️" }
                        ].map((item) => (
                          <Link key={item.name.en} href={item.href} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name[currentLang]}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: ONE SOURCE PLATFORM */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">ONE SOURCE PLATFORM</h3>
                          <p className="text-xs text-gray-500">{currentLang === "es" ? "Potencia tu ecosistema de ecommerce" : "Empower your eCommerce Ecosystem"}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { name: { en: "Retail", es: "Retail" }, href: "/industries/retail/platform", icon: "🛍️" },
                          { name: { en: "DTC Brands", es: "Marcas DTC" }, href: "/industries/retail/marcas-dtc", icon: "🏷️" },
                          { name: { en: "Ecommerce", es: "Ecommerce" }, href: "/industries/retail/ecommerce", icon: "🛒" },
                          { name: { en: "Agencies", es: "Agencias" }, href: "/industries/retail/agencias", icon: "📊" },
                          { name: { en: "Marketplaces", es: "Marketplaces" }, href: "/industries/retail/marketplaces", icon: "🏪" },
                          { name: { en: "Subscription Companies", es: "Empresas de suscripción" }, href: "/industries/retail/empresas-suscripcion", icon: "🔄" }
                        ].map((item) => (
                          <Link key={item.name.en} href={item.href} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name[currentLang]}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: CUSTOM PROJECTS */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">CUSTOM PROJECTS</h3>
                          <p className="text-xs text-gray-500">{currentLang === "es" ? "Desarrollos personalizados para procesos internos y plataformas empresariales" : "Custom developments for internal processes and enterprise platforms"}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { name: { en: "Construction", es: "Constructoras" }, href: "/industries/constructoras", icon: "🏗️" },
                          { name: { en: "Import & Export", es: "Importación y Exportación" }, href: "/industries/constructoras/import-export", icon: "📦" },
                          { name: { en: "Insurance", es: "Aseguradoras" }, href: "/industries/constructoras/aseguradoras", icon: "🛡️" },
                          { name: { en: "Distributors", es: "Distribuidoras" }, href: "/industries/constructoras/distribuidoras", icon: "🚚" },
                          { name: { en: "Logistics Companies", es: "Empresas logísticas" }, href: "/industries/constructoras/empresas-logisticas", icon: "📋" },
                          { name: { en: "Retail", es: "Retail" }, href: "/industries/constructoras/retail", icon: "🛍️" }
                        ].map((item) => (
                          <Link key={item.name.en} href={item.href} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name[currentLang]}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 px-8 py-4 flex items-center justify-end bg-gray-50">
                    <Link href="/book-a-demo" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Book a demo
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about-us" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Company
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (productTimerRef.current) clearTimeout(productTimerRef.current);
                setResourcesOpen(true);
              }}
              onMouseLeave={() => {
                productTimerRef.current = setTimeout(() => {
                  setResourcesOpen(false);
                }, 200);
              }}
            >
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {resourcesOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  onMouseEnter={() => {
                    if (productTimerRef.current) clearTimeout(productTimerRef.current);
                    setResourcesOpen(true);
                  }}
                  onMouseLeave={() => {
                    productTimerRef.current = setTimeout(() => {
                      setResourcesOpen(false);
                    }, 200);
                  }}
                >
                  <div className="grid grid-cols-2 gap-0">
                    {/* Left - eBook Feature */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                      <div className="mb-6 bg-black/20 rounded-xl p-4 aspect-[3/4]">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-sm opacity-60"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-sm opacity-80"></div>
                          </div>
                          <span className="text-xs font-bold">ALTURA</span>
                        </div>
                        <p className="text-xs text-blue-200 mb-2">Crypto Meets Payments</p>
                        <h4 className="text-sm font-bold">How Orchestration Bridges the Fiat-Crypto Divide</h4>
                      </div>
                      <div className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">LATEST EBOOK</div>
                      <h3 className="text-lg font-bold mb-3">The Crypto Payment Orchestration Playbook</h3>
                      <button className="text-white text-sm underline hover:no-underline">
                        Download eBook →
                      </button>
                    </div>

                    {/* Right - Menu Items */}
                    <div className="p-4">
                      {resourcesLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{item.title}</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/integrations" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Integrations
            </Link>

            {/* Book a Demo Button - In main navigation */}
            <Link href="/book-a-demo" className="flex-shrink-0 ml-4">
              <button className="bg-blue-600 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                Book a Demo
              </button>
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6 ml-6">
            {/* Language Switcher */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
                aria-label="Select Language"
              >
                <Globe className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[160px] overflow-hidden z-50">
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-2 ${
                      currentLang === "en"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span>English</span>
                    {currentLang === "en" && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
                  <button
                    onClick={() => switchLanguage("es")}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-2 border-t border-gray-100 ${
                      currentLang === "es"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span>
                    <span>Español</span>
                    {currentLang === "es" && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Log In
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSubmenu(null);
              }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-[70] md:hidden overflow-y-auto h-screen"
            >
              <div className="p-6 min-h-full flex flex-col">
                <AnimatePresence mode="wait">
                  {!mobileSubmenu ? (
                    // Main Menu View
                    <motion.div
                      key="main"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col h-full"
                    >
                {/* Header */}
                      <div className="flex items-center justify-between mb-6 flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">Menu</span>
                  <button
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileSubmenu(null);
                          }}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                      {/* Contact Button at Top */}
                      <div className="mb-6">
                        <Link
                          href="/book-a-demo"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block w-full bg-blue-600 text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                        >
                          Contáctanos
                        </Link>
                      </div>

                {/* Navigation Links */}
                      <div className="space-y-0 mb-6 flex-grow">
                        {/* Product */}
                        <button
                          onClick={() => setMobileSubmenu("product")}
                          className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-200"
                        >
                          <span>Product</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Industries */}
                        <button
                          onClick={() => setMobileSubmenu("industries")}
                          className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-200"
                        >
                          <span>Industries</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Company */}
                        <button
                          onClick={() => setMobileSubmenu("company")}
                          className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-200"
                        >
                          <span>Company</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Resources */}
                        <button
                          onClick={() => setMobileSubmenu("resources")}
                          className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-200"
                        >
                          <span>Resources</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Other Links */}
                        {navLinks.filter(link => link.label !== "Product" && link.label !== "Company").map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                            className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-200"
                    >
                            <span>{link.label}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                    </Link>
                  ))}
                </div>
                    </motion.div>
                  ) : (
                    // Submenu View
                    <motion.div
                      key={mobileSubmenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col h-full"
                    >
                      {/* Back Button and Title */}
                      <div className="mb-6 flex-shrink-0">
                        <button
                          onClick={() => setMobileSubmenu(null)}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                        >
                          <ArrowLeft className="w-5 h-5" />
                          <span className="font-medium">Back</span>
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {mobileSubmenu === "product" && "Product"}
                          {mobileSubmenu === "industries" && "Industries"}
                          {mobileSubmenu === "company" && "Company"}
                          {mobileSubmenu === "resources" && "Resources"}
                        </h2>
                      </div>

                      {/* Submenu Content */}
                      <div className="flex-grow overflow-y-auto">
                        {mobileSubmenu === "product" && (
                          <div className="space-y-6">
                            {/* AUTOMATIONS */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 px-4">AUTOMATIONS</h3>
                              <p className="text-xs text-gray-500 mb-4 px-4">{currentLang === "es" ? "Agentes de IA para servicio al cliente y ventas" : "AI Agents for Customer Service and Sales"}</p>
                              <div className="space-y-0">
                                {[
                                  { name: "WhatsApp", href: "/products/whatsapp", icon: "💬" },
                                  { name: "Instagram", href: "/products/instagram", icon: "📷" },
                                  { name: "Messenger", href: "/products/messenger", icon: "💬" },
                                  { name: "Email", href: "/products/email", icon: "✉️" },
                                  { name: "Calls", href: "/products/calls", icon: "📞" }
                                ].map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                                  >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* ONE SOURCE PLATFORM */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 px-4">ONE SOURCE PLATFORM</h3>
                              <p className="text-xs text-gray-500 mb-4 px-4">{currentLang === "es" ? "Potencia tu ecosistema de ecommerce" : "Empower your eCommerce Ecosystem"}</p>
                              <div className="space-y-0">
                                {[
                                  { name: "Dashboards", href: "/products/dashboards", icon: "📊" },
                                  { name: "Deep Analysis", href: "/products/deep-analysis", icon: "🔍" },
                                  { name: "AI Chat", href: "/products/ai-chat", icon: "🤖" },
                                  { name: "Insight ML", href: "/products/insight-ml", icon: "🧠" },
                                  { name: "Competitor Intelligence", href: "/products/competitor-intelligence", icon: "📈" }
                                ].map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                                  >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* CUSTOM PROJECTS */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 px-4">CUSTOM PROJECTS</h3>
                              <p className="text-xs text-gray-500 mb-4 px-4">{currentLang === "es" ? "Escala las operaciones de tu empresa" : "Scale your company's operations"}</p>
                              <div className="space-y-0">
                                {[
                                  { name: "Apps", href: "/products/apps", icon: "📱" },
                                  { name: "Websites", href: "/products/websites", icon: "🌐" },
                                  { name: "Integrations", href: "/integrations", icon: "🔗" },
                                  { name: "Systems", href: "/products/systems", icon: "⚙️" },
                                  { name: "Process Automation", href: "/products/process-automation", icon: "🔄" }
                                ].map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                                  >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {mobileSubmenu === "industries" && (
                          <div className="space-y-6">
                            {/* AUTOMATIONS */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 px-4">AUTOMATIONS</h3>
                              <p className="text-xs text-gray-500 mb-4 px-4">{currentLang === "es" ? "Automatización de IA para servicio al cliente, ventas y operaciones" : "AI automation for customer service, sales and operations"}</p>
                              <div className="space-y-0">
                                {[
                                  { name: { en: "Retail", es: "Retail" }, href: "/industries/retail", icon: "🛍️" },
                                  { name: { en: "Pet Shops", es: "Tiendas de Mascotas" }, href: "/industries/retail/pet-shops", icon: "🐾" },
                                  { name: { en: "Dealerships", es: "Concesionarios" }, href: "/industries/retail/concesionarios", icon: "🚗" },
                                  { name: { en: "Distributors", es: "Distribuidoras" }, href: "/industries/retail/distribuidoras", icon: "📦" },
                                  { name: { en: "Restaurants", es: "Restaurantes" }, href: "/industries/retail/restaurantes", icon: "🍽️" },
                                  { name: { en: "Construction", es: "Constructoras" }, href: "/industries/constructoras", icon: "🏗️" }
                                ].map((item) => (
                                  <Link
                                    key={item.name.en}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                                  >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.name[currentLang]}</span>
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* ONE SOURCE PLATFORM */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 px-4">ONE SOURCE PLATFORM</h3>
                              <p className="text-xs text-gray-500 mb-4 px-4">{currentLang === "es" ? "Potencia tu ecosistema de ecommerce" : "Empower your eCommerce Ecosystem"}</p>
                              <div className="space-y-0">
                                {[
                                  { name: { en: "Retail", es: "Retail" }, href: "/industries/retail/platform", icon: "🛍️" },
                                  { name: { en: "DTC Brands", es: "Marcas DTC" }, href: "/industries/retail/marcas-dtc", icon: "🏷️" },
                                  { name: { en: "Ecommerce", es: "Ecommerce" }, href: "/industries/retail/ecommerce", icon: "🛒" },
                                  { name: { en: "Agencies", es: "Agencias" }, href: "/industries/retail/agencias", icon: "📊" },
                                  { name: { en: "Marketplaces", es: "Marketplaces" }, href: "/industries/retail/marketplaces", icon: "🏪" },
                                  { name: { en: "Subscription Companies", es: "Empresas de suscripción" }, href: "/industries/retail/empresas-suscripcion", icon: "🔄" }
                                ].map((item) => (
                                  <Link
                                    key={item.name.en}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                                  >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.name[currentLang]}</span>
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* CUSTOM PROJECTS */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 px-4">CUSTOM PROJECTS</h3>
                              <p className="text-xs text-gray-500 mb-4 px-4">{currentLang === "es" ? "Desarrollos personalizados para procesos internos y plataformas empresariales" : "Custom developments for internal processes and enterprise platforms"}</p>
                              <div className="space-y-0">
                                {[
                                  { name: { en: "Construction", es: "Constructoras" }, href: "/industries/constructoras", icon: "🏗️" },
                                  { name: { en: "Import & Export", es: "Importación y Exportación" }, href: "/industries/constructoras/import-export", icon: "📦" },
                                  { name: { en: "Insurance", es: "Aseguradoras" }, href: "/industries/constructoras/aseguradoras", icon: "🛡️" },
                                  { name: { en: "Distributors", es: "Distribuidoras" }, href: "/industries/constructoras/distribuidoras", icon: "🚚" },
                                  { name: { en: "Logistics Companies", es: "Empresas logísticas" }, href: "/industries/constructoras/empresas-logisticas", icon: "📋" },
                                  { name: { en: "Retail", es: "Retail" }, href: "/industries/constructoras/retail", icon: "🛍️" }
                                ].map((item) => (
                                  <Link
                                    key={item.name.en}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                                  >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.name[currentLang]}</span>
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {mobileSubmenu === "company" && (
                          <div className="space-y-0">
                            {[
                              { name: "About us", href: "/about-us", icon: "🏢" },
                              { name: "Trust & Security", href: "/trust-and-security", icon: "🛡️" }
                            ].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileSubmenu(null);
                                }}
                                className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                              >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        )}

                        {mobileSubmenu === "resources" && (
                          <div className="space-y-0">
                      {resourcesLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                                  setMobileSubmenu(null);
                                }}
                                className="flex items-center px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-200"
                              >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                <span className="font-medium">{item.title}</span>
                                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                        </Link>
                      ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Language Switcher and Action Buttons - Only show in main menu */}
                {!mobileSubmenu && (
                  <>
                {/* Language Switcher */}
                <div className="mb-6 border-t border-gray-200 pt-6">
                  <div className="px-4 mb-3">
                    <span className="text-sm font-semibold text-gray-700">Language</span>
                  </div>
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`w-full px-4 py-3 text-left rounded-lg transition-colors flex items-center gap-2 ${
                      currentLang === "en"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="font-medium">English</span>
                    {currentLang === "en" && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
                  <button
                    onClick={() => switchLanguage("es")}
                    className={`w-full px-4 py-3 text-left rounded-lg transition-colors flex items-center gap-2 border-t border-gray-100 ${
                      currentLang === "es"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span>
                    <span className="font-medium">Español</span>
                    {currentLang === "es" && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <Link
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/book-a-demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-2.5 text-center bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

