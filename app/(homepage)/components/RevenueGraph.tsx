"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, decimals = 2, suffix = "%" }: { value: number; decimals?: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(spring, (current) => current.toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const RevenueGraph = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <div className="text-xs opacity-80 mb-1">Total conversion rate</div>
          <div className="text-2xl font-bold">
            <Counter value={71.75} />
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">Cards approval rate</div>
          <div className="text-2xl font-bold text-gray-900">
            <Counter value={84.30} />
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">APMs conversion rate</div>
          <div className="text-2xl font-bold text-gray-900">
            <Counter value={94.74} />
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">Fraud conversion rate</div>
          <div className="text-2xl font-bold text-gray-900">
            <Counter value={3.70} />
          </div>
        </div>
      </div>

      {/* Graph Visual */}
      <div className="flex-1 relative h-32 w-full">
         {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[10px] text-gray-400">
             <span>100%</span>
             <span>75%</span>
             <span>50%</span>
             <span>25%</span>
             <span>0%</span>
        </div>
        
        {/* Chart Area */}
        <div className="absolute left-8 right-0 top-2 bottom-4">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Grid Lines */}
                <line x1="0" y1="25" x2="100" y2="25" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="#f3f4f6" strokeWidth="1" />

                {/* Data Line */}
                <motion.path
                    d="M0 80 C 20 70, 40 75, 60 40 S 80 20, 100 10"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Area fill */}
                <motion.path
                    d="M0 80 C 20 70, 40 75, 60 40 S 80 20, 100 10 V 100 H 0 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

         {/* X-axis labels */}
         <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-gray-400">
            <span>Aug 13</span>
            <span>Aug 15</span>
            <span>Aug 17</span>
            <span>Aug 19</span>
            <span>Aug 21</span>
        </div>
      </div>
    </div>
  );
};

