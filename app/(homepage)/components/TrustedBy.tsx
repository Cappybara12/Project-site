"use client";

import { companies } from "@/data/companies";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const TrustedBy = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const mobileLogosPerGroup = 3; // Show 3 logos per group on mobile
  const desktopLogosPerGroup = 6; // Show 6 logos per group on desktop
  
  // Split companies into groups for mobile (3 per group)
  const mobileGroups: (typeof companies)[] = [];
  for (let i = 0; i < companies.length; i += mobileLogosPerGroup) {
    mobileGroups.push(companies.slice(i, i + mobileLogosPerGroup));
  }

  // Split companies into groups for desktop (6 per group)
  const desktopGroups: (typeof companies)[] = [];
  for (let i = 0; i < companies.length; i += desktopLogosPerGroup) {
    desktopGroups.push(companies.slice(i, i + desktopLogosPerGroup));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => {
        // Use different group counts for mobile vs desktop
        if (typeof window !== 'undefined') {
          const isMobile = window.innerWidth < 768;
          const maxGroups = isMobile ? mobileGroups.length : desktopGroups.length;
          return (prev + 1) % maxGroups;
        }
        return (prev + 1) % desktopGroups.length;
      });
    }, 4000); // Change group every 4 seconds

    return () => clearInterval(interval);
  }, [mobileGroups.length, desktopGroups.length]);

  const currentMobileLogos = mobileGroups[currentGroup % mobileGroups.length] || mobileGroups[0];
  const currentDesktopLogos = desktopGroups[currentGroup % desktopGroups.length] || desktopGroups[0];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 mb-12">The solution trusted by global leaders</p>
        
        {/* Mobile: 3 logos with blur transition */}
        <div className="md:hidden flex items-center justify-center gap-8 min-h-[80px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentGroup}`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-8"
            >
              {currentMobileLogos.map((company, index) => (
                <motion.div
                  key={`${company.name}-mobile-${currentGroup}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center hover:opacity-100 transition-opacity duration-300 cursor-default flex-shrink-0"
                >
                  <span 
                    className="text-lg font-bold text-gray-800" 
                    style={{ fontFamily: company.name.includes('蚂蚁') ? 'system-ui' : 'inherit' }}
                  >
                    {company.logo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: 6 logos with blur transition */}
        <div className="hidden md:flex items-center justify-center gap-12 min-h-[80px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-${currentGroup}`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-12"
            >
              {currentDesktopLogos.map((company, index) => (
                <motion.div
                  key={`${company.name}-desktop-${currentGroup}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center hover:opacity-100 transition-opacity duration-300 cursor-default flex-shrink-0"
                >
                  <span 
                    className="text-xl font-bold text-gray-800" 
                    style={{ fontFamily: company.name.includes('蚂蚁') ? 'system-ui' : 'inherit' }}
                  >
                    {company.logo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

