"use client";

import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export const NovaNavbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);

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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Globe className="w-5 h-5" />
            </button>
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
    </nav>
  );
};


