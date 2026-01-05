"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center" style={{ background: '#EEF0F8' }}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl" />
        
        {/* Animated traveling lines - Inverted S curves */}
        <svg className="absolute left-0 top-0 w-[400px] h-full opacity-15" viewBox="0 0 400 1000" fill="none">
          {/* Inverted S curve - starts at left, curves inward (right), then curves back outward (left) */}
          <path
            d="M 100 0 Q 200 200, 100 400 Q 50 550, 150 700 Q 200 800, 100 1000"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.rect width="24" height="6" rx="3" fill="#4B56FF">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#heroLeftPath" />
            </animateMotion>
          </motion.rect>
          <path id="heroLeftPath" d="M 100 0 Q 200 200, 100 400 Q 50 550, 150 700 Q 200 800, 100 1000" fill="none" />
        </svg>

        <svg className="absolute right-0 top-0 w-[400px] h-full opacity-15" viewBox="0 0 400 1000" fill="none">
          {/* Inverted S curve - starts at right, curves inward (left), then curves back outward (right) */}
          <path
            d="M 300 0 Q 200 200, 300 400 Q 350 550, 250 700 Q 200 800, 300 1000"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.rect width="24" height="6" rx="3" fill="#4B56FF">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
              <mpath href="#heroRightPath" />
            </animateMotion>
          </motion.rect>
          <path id="heroRightPath" d="M 300 0 Q 200 200, 300 400 Q 350 550, 250 700 Q 200 800, 300 1000" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-8 border border-blue-100"
        >
          <span className="px-1.5 py-0.5 bg-blue-200/50 text-blue-700 rounded text-xs font-bold">ALTURA</span>
          Technology Infrastructure for Modern Businesses
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[3rem] md:text-[5rem] font-normal text-gray-900 mb-8 text-center max-w-5xl mx-auto leading-[1.1]"
          style={{ letterSpacing: '-0.02em' }}
        >
          Technology Infrastructure
          <br />
          that Automates, Connects and Empowers Your Business
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed text-center"
        >
          Technology designed to strengthen your operations, improve your customers' experience and accelerate your company's growth from a single ecosystem.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('automations');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="w-full max-w-md md:w-auto md:max-w-none bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Explore Products
          </button>
          <Link href="/book-a-demo" className="w-full max-w-md md:w-auto md:max-w-none">
            <button className="w-full md:w-auto bg-white text-blue-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2">
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>

        {/* Video Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/yuno-demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

