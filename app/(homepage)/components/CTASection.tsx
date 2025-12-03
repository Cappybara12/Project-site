"use client";

import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: '#4B56FF' }}>
      {/* Animated track lines with glowing dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side track - comes from top, curves right then down */}
        <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Track path - vertical down, curve right, horizontal, curve down */}
          <path
            id="leftTrack"
            d="M 150 -100 L 150 150 Q 150 250, 250 250 L 400 250 Q 500 250, 500 350 L 500 700"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="none"
          />
          {/* Animated glowing capsule - horizontal orientation (width > height) */}
          <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" opacity="0.9">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#leftTrack" />
            </animateMotion>
          </rect>
          {/* Glow effect */}
          <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" filter="url(#glowFilter)" opacity="0.6">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#leftTrack" />
            </animateMotion>
          </rect>
          
          {/* Second left track */}
          <path
            id="leftTrack2"
            d="M 80 -50 L 80 300 Q 80 400, 180 400 L 300 400"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            fill="none"
          />
          <rect x="-7" y="-2" width="14" height="4" rx="2" fill="white" opacity="0.7">
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="2s">
              <mpath href="#leftTrack2" />
            </animateMotion>
          </rect>
          
          {/* Glow filter */}
          <defs>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        {/* Right side track - comes from top, curves left then down */}
        <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Track path - vertical down, curve left, then curve down and right */}
          <path
            id="rightTrack"
            d="M 1050 -100 L 1050 100 Q 1050 200, 950 200 L 800 200 Q 700 200, 700 300 L 700 450 Q 700 550, 800 550 L 1300 550"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="none"
          />
          {/* Animated glowing capsule - horizontal orientation */}
          <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" opacity="0.9">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="1s">
              <mpath href="#rightTrack" />
            </animateMotion>
          </rect>
          <rect x="-10" y="-3" width="20" height="6" rx="3" fill="white" filter="url(#glowFilter2)" opacity="0.6">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="1s">
              <mpath href="#rightTrack" />
            </animateMotion>
          </rect>
          
          {/* Second right track */}
          <path
            id="rightTrack2"
            d="M 1120 -50 L 1120 200 Q 1120 300, 1020 300 L 900 300"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            fill="none"
          />
          <rect x="-7" y="-2" width="14" height="4" rx="2" fill="white" opacity="0.7">
            <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" begin="3s">
              <mpath href="#rightTrack2" />
            </animateMotion>
          </rect>
          
          <defs>
            <filter id="glowFilter2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Powering the future<br />of financial infrastructure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-blue-100 mb-10"
        >
          Talk with one of our payment experts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="/book-a-demo">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Book a demo
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

