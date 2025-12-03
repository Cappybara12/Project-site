"use client";

import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-40"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm opacity-80"></div>
              </div>
              yuno
            </span>
          </div>

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

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-500 hover:text-blue-600 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
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
    </nav>
  );
};

