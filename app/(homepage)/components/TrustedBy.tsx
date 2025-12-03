"use client";

import { companies } from "@/data/companies";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TrustedBy = () => {
  const [visibleSet, setVisibleSet] = useState(0);
  const itemsPerSet = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSet((prev) => (prev + 1) % Math.ceil(companies.length / itemsPerSet));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleCompanies = companies.slice(
    visibleSet * itemsPerSet,
    (visibleSet + 1) * itemsPerSet
  );

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 mb-12">The solution trusted by global leaders</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center min-h-[80px]">
          {visibleCompanies.map((company, index) => (
            <motion.div
              key={`${company.name}-${visibleSet}`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 0.7, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <span 
                className="text-lg md:text-xl font-bold text-gray-800" 
                style={{ fontFamily: company.name.includes('蚂蚁') ? 'system-ui' : 'inherit' }}
              >
                {company.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

