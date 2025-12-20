"use client";

import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: '#4B56FF' }}>
      {/* Animated track lines with glowing dots - Inverted S curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side track - Inverted S curve */}
        <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Main inverted S curve on left - starts vertical, curves right (inward), then curves back left (outward) */}
          <path
            id="leftTrack"
            d="M 120 -100 L 120 120 Q 120 220, 220 260 Q 320 300, 220 380 Q 120 460, 120 560 L 120 700"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
          />
          {/* Animated glowing capsule - thinner */}
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill="white" opacity="0.8">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#leftTrack" />
            </animateMotion>
          </rect>
          {/* Glow effect - thinner */}
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill="white" filter="url(#glowFilter)" opacity="0.4">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#leftTrack" />
            </animateMotion>
          </rect>
          
          {/* Glow filter */}
          <defs>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        {/* Right side track - Inverted S curve */}
        <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Main inverted S curve on right - starts vertical, curves left (inward), then curves back right (outward) */}
          <path
            id="rightTrack"
            d="M 1080 -100 L 1080 120 Q 1080 220, 980 260 Q 880 300, 980 380 Q 1080 460, 1080 560 L 1080 700"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
          />
          {/* Animated glowing capsule - thinner */}
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill="white" opacity="0.8">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="1s">
              <mpath href="#rightTrack" />
            </animateMotion>
          </rect>
          <rect x="-4" y="-1" width="8" height="2" rx="1" fill="white" filter="url(#glowFilter2)" opacity="0.4">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="1s">
              <mpath href="#rightTrack" />
            </animateMotion>
          </rect>
          
          <defs>
            <filter id="glowFilter2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
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
          Ready to transform<br />your business operations?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-blue-100 mb-10"
        >
          Discover how Altura can automate, connect and empower your business.
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

