"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export const NovaInAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-blue-950/30 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* White Lines emanating from bottom */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/68805bf09ecd1ea8ff35b312_43e3ffe44c59682ab865e4cc169e5039_bg_lines.png")',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Dotted pixels overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/68805f2fbe65d23189a1f5d2_bg_pixels.png")',
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 rounded-full mb-8 border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Proof Points
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Altura Automations In Action
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Businesses using Altura Automations are seeing real results: faster response times, higher customer satisfaction, and more time for strategic work.
          </p>
        </div>

        {/* Main Metric */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Giant Percentage */}
            <div className="relative">
              {/* Blue glow behind number */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-white leading-none"
              >
                <AnimatedNumber value={75} suffix="%" />
              </motion.div>
            </div>

            {/* Description + Chart */}
            <div className="max-w-md">
              <p className="text-lg md:text-xl font-semibold text-white uppercase tracking-wider mb-8 leading-tight">
                Of customer inquiries resolved automatically
              </p>
              
              <p className="text-gray-400 mb-8">
                Altura Automations handle thousands of conversations daily, providing instant responses and freeing your team to focus on growth and innovation.
              </p>

              {/* Curved Line Chart */}
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Curved path */}
                  <motion.path
                    d="M 0 100 Q 100 90, 200 50 T 400 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  
                  {/* Glowing endpoint */}
                  <motion.circle
                    cx="400"
                    cy="10"
                    r="6"
                    fill="#60A5FA"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 2 }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))" }}
                  />
                  
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Three Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-6xl md:text-7xl font-bold text-white mb-4">
              <AnimatedNumber value={70} suffix="+" />
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
              Communication Channels
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-6xl md:text-7xl font-bold text-white mb-4">
              &lt;2s
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
              Average Response Time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-6xl md:text-7xl font-bold text-white mb-4">
              24/7
            </div>
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
              Always Available
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

