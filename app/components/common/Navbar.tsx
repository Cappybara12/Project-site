"use client";

import Link from "next/link";
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone,
  LayoutDashboard,
  BarChart3,
  Bot,
  Brain,
  TrendingUp,
  Smartphone,
  Globe as GlobeIcon,
  Plug,
  Settings,
  Workflow,
  ArrowRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguageSwitcher } from "./useLanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const { currentLang, isOpen, setIsOpen, switchLanguage } = useLanguageSwitcher();
  const langDropdownRef = useRef<HTMLDivElement>(null);

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
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#", label: "Product" },
    { href: "/nova", label: "NOVA AI" },
    { href: "#", label: "Developers" },
    { href: "#", label: "Company" },
    { href: "#", label: "Integrations" },
    { href: "/pricing", label: "Pricing" },
  ];

  const resourcesLinks = [
    { title: "Blog", icon: "📝", href: "/blog" },
    { title: "eBooks", icon: "📚", href: "#" },
    { title: "Success Stories", icon: "⚡", href: "#" },
    { title: "Product Updates", icon: "📢", href: "#" },
    { title: "Newsroom", icon: "📰", href: "#" }
  ];

  // Product dropdown content with bilingual support
  const productSections = [
    {
      id: "automations",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      ),
      heading: {
        en: "AUTOMATIONS",
        es: "AUTOMATIZACIONES"
      },
      subheading: {
        en: "AI Agents for Customer Service and Sales",
        es: "Agentes de IA para atención al cliente y ventas"
      },
      items: [
        { 
          name: { en: "WhatsApp", es: "WhatsApp" }, 
          icon: MessageCircle, 
          href: "/products/whatsapp" 
        },
        { 
          name: { en: "Instagram", es: "Instagram" }, 
          icon: Instagram, 
          href: "/products/instagram" 
        },
        { 
          name: { en: "Messenger", es: "Messenger" }, 
          icon: Facebook, 
          href: "/products/messenger" 
        },
        { 
          name: { en: "Email", es: "Email" }, 
          icon: Mail, 
          href: "/products/email" 
        },
        { 
          name: { en: "Calls", es: "Llamadas" }, 
          icon: Phone, 
          href: "/products/calls" 
        }
      ]
    },
    {
      id: "platform",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <LayoutDashboard className="w-5 h-5 text-white" />
        </div>
      ),
      heading: {
        en: "ONE SOURCE PLATFORM",
        es: "PLATAFORMA ÚNICA"
      },
      subheading: {
        en: "Centralize, analyze and power your ecommerce",
        es: "Centraliza, analiza y potencia tu ecommerce"
      },
      items: [
        { 
          name: { en: "Dashboards", es: "Dashboards" }, 
          icon: LayoutDashboard, 
          href: "/products/dashboards" 
        },
        { 
          name: { en: "Deep Analysis", es: "Análisis Profundo" }, 
          icon: BarChart3, 
          href: "/products/deep-analysis" 
        },
        { 
          name: { en: "AI Chat", es: "Chat IA" }, 
          icon: Bot, 
          href: "/products/ai-chat" 
        },
        { 
          name: { en: "Insight ML", es: "Insight ML" }, 
          icon: Brain, 
          href: "/products/insight-ml" 
        },
        { 
          name: { en: "Competitor Intelligence", es: "Inteligencia Competitiva" }, 
          icon: TrendingUp, 
          href: "/products/competitor-intelligence" 
        }
      ]
    },
    {
      id: "projects",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
          <Workflow className="w-5 h-5 text-white" />
        </div>
      ),
      heading: {
        en: "CUSTOM PROJECTS",
        es: "PROYECTOS PERSONALIZADOS"
      },
      subheading: {
        en: "Scale your company's operations",
        es: "Escala la operación de tu empresa"
      },
      items: [
        { 
          name: { en: "Apps", es: "Apps" }, 
          icon: Smartphone, 
          href: "/products/apps" 
        },
        { 
          name: { en: "Websites", es: "Sitios Web" }, 
          icon: GlobeIcon, 
          href: "/products/websites" 
        },
        { 
          name: { en: "Integrations", es: "Integraciones" }, 
          icon: Plug, 
          href: "/products/integrations" 
        },
        { 
          name: { en: "Systems", es: "Sistemas" }, 
          icon: Settings, 
          href: "/products/systems" 
        },
        { 
          name: { en: "Process Automation", es: "Automatización de procesos" }, 
          icon: Workflow, 
          href: "/products/process-automation" 
        }
      ]
    }
  ];

  // Industries dropdown content with bilingual support
  const industriesSections = [
    {
      id: "automations-industries",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      ),
      heading: {
        en: "AUTOMATIONS",
        es: "AUTOMATIZACIONES"
      },
      subheading: {
        en: "AI automation for customer service, sales and operations",
        es: "Automatización con IA para servicio al cliente, ventas y operaciones"
      },
      items: [
        { 
          name: { en: "Retail", es: "Retail" }, 
          icon: MessageCircle, 
          href: "/industries/retail" 
        },
        { 
          name: { en: "Pet Shops", es: "Pet Shops" }, 
          icon: MessageCircle, 
          href: "/industries/retail/pet-shops" 
        },
        { 
          name: { en: "Concesionarios", es: "Concesionarios" }, 
          icon: MessageCircle, 
          href: "/industries/retail/concesionarios" 
        },
        { 
          name: { en: "Distribuidoras", es: "Distribuidoras" }, 
          icon: MessageCircle, 
          href: "/industries/retail/distribuidoras" 
        },
        { 
          name: { en: "Restaurantes", es: "Restaurantes" }, 
          icon: MessageCircle, 
          href: "/industries/retail/restaurantes" 
        },
        { 
          name: { en: "Constructoras", es: "Constructoras" }, 
          icon: MessageCircle, 
          href: "/industries/retail/constructoras" 
        }
      ]
    },
    {
      id: "platform-industries",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <LayoutDashboard className="w-5 h-5 text-white" />
        </div>
      ),
      heading: {
        en: "ONE SOURCE PLATFORM",
        es: "PLATAFORMA ÚNICA"
      },
      subheading: {
        en: "Data ecosystem for ecommerce, marketing and digital operations",
        es: "Ecosistema de datos para ecommerce, marketing y operaciones digitales"
      },
      items: [
        {
          name: { en: "Retail", es: "Retail" },
          icon: LayoutDashboard,
          href: "/industries/retail/platform"
        },
        { 
          name: { en: "Marcas DTC", es: "Marcas DTC" }, 
          icon: LayoutDashboard, 
          href: "/industries/retail/marcas-dtc" 
        },
        { 
          name: { en: "Ecommerce", es: "Ecommerce" }, 
          icon: LayoutDashboard, 
          href: "/industries/retail/ecommerce" 
        },
        { 
          name: { en: "Agencias (marketing, performance, medios)", es: "Agencias (marketing, performance, medios)" }, 
          icon: LayoutDashboard, 
          href: "/industries/retail/agencias" 
        },
        { 
          name: { en: "Marketplaces", es: "Marketplaces" }, 
          icon: LayoutDashboard, 
          href: "/industries/retail/marketplaces" 
        },
        { 
          name: { en: "Empresas de suscripción", es: "Empresas de suscripción" }, 
          icon: LayoutDashboard, 
          href: "/industries/retail/empresas-suscripcion" 
        }
      ]
    },
    {
      id: "projects-industries",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
          <Workflow className="w-5 h-5 text-white" />
        </div>
      ),
      heading: {
        en: "CUSTOM PROJECTS",
        es: "PROYECTOS PERSONALIZADOS"
      },
      subheading: {
        en: "Custom developments for internal processes and enterprise platforms",
        es: "Desarrollos personalizados para procesos internos y plataformas empresariales"
      },
      items: [
        { 
          name: { en: "Constructoras", es: "Constructoras" }, 
          icon: Workflow, 
          href: "/industries/constructoras" 
        },
        { 
          name: { en: "Import & Export", es: "Import & Export" }, 
          icon: Workflow, 
          href: "/industries/constructoras/import-export" 
        },
        { 
          name: { en: "Aseguradoras", es: "Aseguradoras" }, 
          icon: Workflow, 
          href: "/industries/constructoras/aseguradoras" 
        },
        { 
          name: { en: "Distribuidoras", es: "Distribuidoras" }, 
          icon: Workflow, 
          href: "/industries/constructoras/distribuidoras" 
        },
        { 
          name: { en: "Empresas logísticas", es: "Empresas logísticas" }, 
          icon: Workflow, 
          href: "/industries/constructoras/empresas-logisticas" 
        },
        { 
          name: { en: "Retail", es: "Retail" }, 
          icon: Workflow, 
          href: "/industries/constructoras/retail" 
        }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-40"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-80"></div>
              </div>
              yuno
            </span>
          </Link>

          {/* Mobile Menu Button */}
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
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                productOpen ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}>
                Product
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-8">
                    {/* Three Column Grid */}
                    <div className="grid grid-cols-3 gap-8 mb-6">
                      {productSections.map((section) => (
                        <div key={section.id} className="flex flex-col">
                          {/* Icon and Heading */}
                          <div className="flex items-center gap-3 mb-3">
                            {section.icon}
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                                {section.heading[currentLang]}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Subheading */}
                          <p className="text-xs text-gray-500 mb-4">
                            {section.subheading[currentLang]}
                          </p>
                          
                          {/* Items List */}
                          <div className="space-y-2">
                            {section.items.map((item, idx) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                                    {item.name[currentLang]}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <Link href="/book-a-demo">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                          {currentLang === "en" ? "Book a demo" : "Reservar una demo"}
                        </button>
                      </Link>
                      <Link href="#">
                        <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors">
                          {currentLang === "en" ? "See it in action" : "Verlo en acción"}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                industriesOpen ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}>
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-8">
                    {/* Three Column Grid */}
                    <div className="grid grid-cols-3 gap-8 mb-6">
                      {industriesSections.map((section) => (
                        <div key={section.id} className="flex flex-col">
                          {/* Icon and Heading */}
                          <div className="flex items-center gap-3 mb-3">
                            {section.icon}
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                                {section.heading[currentLang]}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Subheading */}
                          <p className="text-xs text-gray-500 mb-4">
                            {section.subheading[currentLang]}
                          </p>
                          
                          {/* Items List */}
                          <div className="space-y-2">
                            {section.items.map((item, idx) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                                    {item.name[currentLang]}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <Link href="/book-a-demo">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                          {currentLang === "en" ? "Book a demo" : "Reservar una demo"}
                        </button>
                      </Link>
                      <Link href="#">
                        <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors">
                          {currentLang === "en" ? "See it in action" : "Verlo en acción"}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/nova" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              NOVA AI
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Developers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Company
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
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
                          <span className="text-xs font-bold">YUNO</span>
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
                      {[
                        { title: "Blog", icon: "📝", href: "/blog" },
                        { title: "eBooks", icon: "📚", href: "#" },
                        { title: "Success Stories", icon: "⚡", href: "#" },
                        { title: "Product Updates", icon: "📢", href: "#" },
                        { title: "Newsroom", icon: "📰", href: "#" }
                      ].map((item) => (
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

            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Integrations
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
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
              {currentLang === "en" ? "Log In" : "Iniciar Sesión"}
            </Link>
            <Link href="/book-a-demo">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                {currentLang === "en" ? "Book a Demo" : "Reservar una Demo"}
              </button>
            </Link>
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
              onClick={() => setMobileMenuOpen(false)}
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
                {/* Header */}
                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1 mb-6 flex-grow">
                  {/* Product Dropdown for Mobile */}
                  <div>
                    <button
                      onClick={() => setMobileProductOpen(!mobileProductOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    >
                      <span>Product</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    
                    {mobileProductOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 space-y-4 pl-4"
                      >
                        {productSections.map((section) => (
                          <div key={section.id} className="space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                              {section.icon}
                              <h4 className="text-sm font-bold text-gray-900">
                                {section.heading[currentLang]}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-500 mb-2 pl-10">
                              {section.subheading[currentLang]}
                            </p>
                            <div className="space-y-1 pl-10">
                              {section.items.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileProductOpen(false);
                                    }}
                                    className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                  >
                                    <IconComponent className="w-4 h-4" />
                                    {item.name[currentLang]}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Industries Dropdown for Mobile */}
                  <div>
                    <button
                      onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    >
                      <span>Industries</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 space-y-4 pl-4"
                      >
                        {industriesSections.map((section) => (
                          <div key={section.id} className="space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                              {section.icon}
                              <h4 className="text-sm font-bold text-gray-900">
                                {section.heading[currentLang]}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-500 mb-2 pl-10">
                              {section.subheading[currentLang]}
                            </p>
                            <div className="space-y-1 pl-10">
                              {section.items.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileIndustriesOpen(false);
                                    }}
                                    className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                  >
                                    <IconComponent className="w-4 h-4" />
                                    {item.name[currentLang]}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  
                  {navLinks.filter(link => link.label !== "Product").map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Resources Section */}
                <div className="mb-6">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  >
                    <span>Resources</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2 space-y-1 pl-4"
                    >
                      {resourcesLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileResourcesOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

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
                    {currentLang === "en" ? "Log In" : "Iniciar Sesión"}
                  </Link>
                  <Link
                    href="/book-a-demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    {currentLang === "en" ? "Book a Demo" : "Reservar una Demo"}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

