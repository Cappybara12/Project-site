"use client";

import Link from "next/link";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguageSwitcher } from "../../components/common/useLanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export const NovaNavbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
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
  ];

  const resourcesLinks = [
    { title: "Blog", icon: "📝", href: "/blog" },
    { title: "Documentation", icon: "📚", href: "#" },
    { title: "Case Studies", icon: "⚡", href: "#" },
    { title: "Webinars", icon: "📢", href: "#" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-white flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm opacity-40"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm opacity-80"></div>
              </div>
              yuno
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Product
            </Link>
            <Link href="/nova" className="text-white text-sm font-medium">
              NOVA AI
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Developers
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Company
            </Link>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Left - eBook Feature */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
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
                        <div className="text-xs opacity-80">Featured eBook</div>
                        <h3 className="text-lg font-bold mt-2 mb-2">Payment Orchestration Guide</h3>
                        <p className="text-xs opacity-80">Learn how to optimize your payment infrastructure</p>
                      </div>
                      <button className="text-sm font-semibold hover:underline">Download Now →</button>
                    </div>

                    {/* Right - Menu Items */}
                    <div className="p-6 bg-gray-900">
                      <Link href="/blog" className="block px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                        <div className="text-sm font-semibold text-white mb-1">Blog</div>
                        <div className="text-xs text-gray-400">Latest insights and updates</div>
                      </Link>
                      <Link href="#" className="block px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                        <div className="text-sm font-semibold text-white mb-1">Documentation</div>
                        <div className="text-xs text-gray-400">API references and guides</div>
                      </Link>
                      <Link href="#" className="block px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                        <div className="text-sm font-semibold text-white mb-1">Case Studies</div>
                        <div className="text-xs text-gray-400">Success stories from clients</div>
                      </Link>
                      <Link href="#" className="block px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                        <div className="text-sm font-semibold text-white mb-1">Webinars</div>
                        <div className="text-xs text-gray-400">Live and recorded sessions</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Integrations
            </Link>
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                aria-label="Select Language"
              >
                <Globe className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-900 rounded-lg shadow-lg border border-gray-800 min-w-[160px] overflow-hidden z-50">
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-2 ${
                      currentLang === "en"
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span>English</span>
                    {currentLang === "en" && (
                      <span className="ml-auto text-blue-400">✓</span>
                    )}
                  </button>
                  <button
                    onClick={() => switchLanguage("es")}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-2 border-t border-gray-800 ${
                      currentLang === "es"
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span>
                    <span>Español</span>
                    {currentLang === "es" && (
                      <span className="ml-auto text-blue-400">✓</span>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <Link href="#" className="text-gray-300 hover:text-white text-sm font-medium">
              Log In
            </Link>
            <Link href="/book-a-demo">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                Book a Demo
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
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gray-900 shadow-2xl z-[70] md:hidden overflow-y-auto border-l border-gray-800 h-screen"
            >
              <div className="p-6 min-h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1 mb-6 flex-grow">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Resources Section */}
                <div className="mb-6">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors font-medium"
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
                          className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Language Switcher */}
                <div className="mb-6 border-t border-gray-800 pt-6">
                  <div className="px-4 mb-3">
                    <span className="text-sm font-semibold text-gray-300">Language</span>
                  </div>
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`w-full px-4 py-3 text-left rounded-lg transition-colors flex items-center gap-2 ${
                      currentLang === "en"
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span className="font-medium">English</span>
                    {currentLang === "en" && (
                      <span className="ml-auto text-blue-400">✓</span>
                    )}
                  </button>
                  <button
                    onClick={() => switchLanguage("es")}
                    className={`w-full px-4 py-3 text-left rounded-lg transition-colors flex items-center gap-2 border-t border-gray-800 ${
                      currentLang === "es"
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span>
                    <span className="font-medium">Español</span>
                    {currentLang === "es" && (
                      <span className="ml-auto text-blue-400">✓</span>
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 border-t border-gray-800 pt-6">
                  <Link
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors font-medium"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/book-a-demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book a Demo
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




