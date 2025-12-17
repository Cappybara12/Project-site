"use client";

import Link from "next/link";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguageSwitcher } from "./useLanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
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
    { title: "eBooks", icon: "📚", href: "#" },
    { title: "Success Stories", icon: "⚡", href: "#" },
    { title: "Product Updates", icon: "📢", href: "#" },
    { title: "Newsroom", icon: "📰", href: "#" }
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
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Product
            </Link>
            <Link href="/nova" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              NOVA AI
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Developers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              Company
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
              Log In
            </Link>
            <Link href="/book-a-demo">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
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
                  {navLinks.map((link) => (
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
                    Log In
                  </Link>
                  <Link
                    href="/book-a-demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
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

