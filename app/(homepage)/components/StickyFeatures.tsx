"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, Zap, TrendingUp, Phone, Mail, Instagram } from "lucide-react";

const features = [
  {
    id: "automations",
    title: "ALTURA AUTOMATIONS",
    heading: "AI agents personalized for each type of business.",
    description: "Automate customer service and process management through WhatsApp, Instagram, Messenger, email, and calls. They operate with precision, adapt to your internal flows, and improve your users' experience.",
    icon: MessageCircle,
    cta: "Explore Automations →"
  },
  {
    id: "onesource",
    title: "ONE SOURCE PLATFORM",
    heading: "Platform that centralizes the information of your entire ecommerce ecosystem—website, digital advertising, ERP, CRM and more—to enable a more organized, connected and strategic operation.",
    description: "Boost your data with artificial intelligence and machine learning capabilities.",
    icon: Zap,
    cta: "Explore One Source →"
  },
  {
    id: "custom",
    title: "ALTURA CUSTOM PROJECTS",
    heading: "Custom developments built with enterprise standards.",
    description: "We create applications, platforms, internal systems, and advanced integrations designed to adapt to your operation, strengthen your processes, and scale with your company.",
    icon: TrendingUp,
    cta: "See Custom Projects →"
  }
];

// Animation Component 1: Altura Automations - Multi-Channel AI Customer Service
const AutomationsAnimation = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="relative w-full h-[450px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl overflow-hidden p-6">
      <svg className="w-full h-full" viewBox="0 0 600 450">
        <defs>
          <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Central AI Agent Hub */}
        <motion.g>
          <motion.circle
            cx="300"
            cy="225"
            r="60"
            fill="url(#aiGlow)"
            filter="url(#glow)"
            animate={isActive ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="300"
            cy="225"
            r="50"
            fill="none"
            stroke="#A78BFA"
            strokeWidth="2"
            strokeDasharray="8,4"
            animate={isActive ? { rotate: 360 } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <text x="300" y="235" textAnchor="middle" fontSize="32" fill="white">🤖</text>
          <text x="300" y="260" textAnchor="middle" fontSize="11" fill="white" fontWeight="600">AI AGENT</text>
        </motion.g>

        {/* Customer Channels - Positioned around the agent */}
        {[
          { name: 'WhatsApp', icon: '💬', color: '#25D366', angle: 0, label: 'WA' },
          { name: 'Instagram', icon: '📷', color: '#E4405F', angle: 72, label: 'IG' },
          { name: 'Messenger', icon: '💬', color: '#0084FF', angle: 144, label: 'MSG' },
          { name: 'Email', icon: '✉️', color: '#EA4335', angle: 216, label: 'EMAIL' },
          { name: 'Phone', icon: '📞', color: '#34A853', angle: 288, label: 'CALL' },
        ].map((channel, idx) => {
          const radius = 160;
          const x = 300 + radius * Math.cos((channel.angle - 90) * Math.PI / 180);
          const y = 225 + radius * Math.sin((channel.angle - 90) * Math.PI / 180);
          
          return (
            <g key={channel.name}>
              {/* Connection line with animated flow */}
              <motion.line
                x1="300"
                y1="225"
                x2={x}
                y2={y}
                stroke={channel.color}
                strokeWidth="2"
                strokeDasharray="6,6"
                opacity="0.4"
                animate={isActive ? { strokeDashoffset: [0, -12] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Message flowing to center */}
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                fill={channel.color}
                animate={isActive ? {
                  cx: [x, 300],
                  cy: [y, 225],
                  opacity: [1, 0],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.4,
                  ease: "easeInOut"
                }}
              />

              {/* Channel Icon */}
              <motion.g
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              >
                <circle cx={x} cy={y} r="35" fill={channel.color} opacity="0.15" />
                <circle cx={x} cy={y} r="28" fill={channel.color} />
                <text x={x} y={y + 8} textAnchor="middle" fontSize="24" fill="white">{channel.icon}</text>
              </motion.g>

              {/* Channel Label */}
              <text
                x={x}
                y={y + 50}
                textAnchor="middle"
                fontSize="10"
                fill="#6B7280"
                fontWeight="600"
              >
                {channel.label}
              </text>
            </g>
          );
        })}

        {/* Conversation Bubbles (simulated interactions) */}
        <motion.g
          animate={isActive ? { opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <rect x="380" y="100" width="140" height="35" rx="18" fill="white" opacity="0.9" stroke="#E5E7EB" strokeWidth="2" />
          <text x="450" y="122" textAnchor="middle" fontSize="11" fill="#374151">¿Dónde está mi pedido?</text>
        </motion.g>

        <motion.g
          animate={isActive ? { opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
        >
          <rect x="380" y="310" width="160" height="35" rx="18" fill="#6366F1" opacity="0.9" />
          <text x="460" y="332" textAnchor="middle" fontSize="11" fill="white" fontWeight="500">Tu pedido llegará mañana ✓</text>
        </motion.g>

        <motion.g
          animate={isActive ? { opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
        >
          <rect x="80" y="310" width="130" height="35" rx="18" fill="white" opacity="0.9" stroke="#E5E7EB" strokeWidth="2" />
          <text x="145" y="332" textAnchor="middle" fontSize="11" fill="#374151">Need help with order</text>
        </motion.g>
      </svg>

      {/* Status Indicators */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <motion.div
          className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2"
          animate={isActive ? { opacity: [0.8, 1, 0.8] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-gray-700">24/7 Active</span>
        </motion.div>
        <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Response Time</div>
          <div className="text-lg font-bold text-indigo-600">&lt;2s</div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Conversations/day</div>
          <div className="text-xl font-bold text-indigo-600">1,247</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Satisfaction</div>
          <div className="text-xl font-bold text-green-600">98%</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Auto-resolved</div>
          <div className="text-xl font-bold text-purple-600">87%</div>
        </div>
      </div>
    </div>
  );
};

// Animation Component 2: One Source Platform - Centralized E-commerce Data Hub
const OneSourceAnimation = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="relative w-full h-[450px] bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl overflow-hidden p-6">
      <svg className="w-full h-full" viewBox="0 0 600 450">
        <defs>
          <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="platformGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Central Platform Hub */}
        <motion.g>
          <motion.rect
            x="240"
            y="180"
            width="120"
            height="90"
            rx="12"
            fill="url(#platformGradient)"
            filter="url(#platformGlow)"
            animate={isActive ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.rect
            x="245"
            y="185"
            width="110"
            height="80"
            rx="8"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="6,4"
            animate={isActive ? { strokeDashoffset: [0, -10] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Platform Icon & Label */}
          <text x="300" y="215" textAnchor="middle" fontSize="28" fill="white">🎯</text>
          <text x="300" y="238" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">ONE SOURCE</text>
          <text x="300" y="252" textAnchor="middle" fontSize="8" fill="white" opacity="0.9">PLATFORM</text>
        </motion.g>

        {/* Data Sources flowing into the platform */}
        {[
          { name: 'Website', icon: '🌐', color: '#8B5CF6', x: 80, y: 80, label: 'WEB', dataType: 'Traffic' },
          { name: 'E-commerce', icon: '🛒', color: '#EC4899', x: 520, y: 80, label: 'SHOP', dataType: 'Sales' },
          { name: 'ERP', icon: '📊', color: '#F59E0B', x: 80, y: 225, label: 'ERP', dataType: 'Finance' },
          { name: 'CRM', icon: '👥', color: '#10B981', x: 520, y: 225, label: 'CRM', dataType: 'Customers' },
          { name: 'Ads', icon: '📢', color: '#EF4444', x: 80, y: 370, label: 'ADS', dataType: 'Campaigns' },
          { name: 'Analytics', icon: '📈', color: '#6366F1', x: 520, y: 370, label: 'DATA', dataType: 'Insights' },
        ].map((source, idx) => {
          const isLeft = source.x < 300;
          const targetX = isLeft ? 240 : 360;
          const targetY = 225;

          return (
            <g key={source.name}>
              {/* Connection Line */}
              <motion.line
                x1={source.x + (isLeft ? 30 : -30)}
                y1={source.y}
                x2={targetX}
                y2={targetY}
                stroke={source.color}
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.5"
                animate={isActive ? { strokeDashoffset: [0, isLeft ? -12 : 12] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />

              {/* Data Packet Flowing */}
              <motion.g
                animate={isActive ? {
                  x: [0, isLeft ? 160 : -160],
                  y: [0, targetY - source.y],
                  opacity: [0, 1, 1, 0],
                } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: idx * 0.4,
                  times: [0, 0.1, 0.8, 1],
                  ease: "easeInOut"
                }}
              >
                <circle cx={source.x + (isLeft ? 30 : -30)} cy={source.y} r="6" fill={source.color} />
                <circle cx={source.x + (isLeft ? 30 : -30)} cy={source.y} r="10" fill={source.color} opacity="0.3" />
              </motion.g>

              {/* Source Node */}
              <motion.g
                animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              >
                <rect
                  x={source.x - 30}
                  y={source.y - 25}
                  width="60"
                  height="50"
                  rx="8"
                  fill={source.color}
                  opacity="0.9"
                />
                <text x={source.x} y={source.y - 5} textAnchor="middle" fontSize="20" fill="white">{source.icon}</text>
                <text x={source.x} y={source.y + 15} textAnchor="middle" fontSize="8" fill="white" fontWeight="600">{source.label}</text>
              </motion.g>

              {/* Data Type Label */}
              <text
                x={source.x}
                y={source.y + 40}
                textAnchor="middle"
                fontSize="9"
                fill="#6B7280"
                fontWeight="500"
              >
                {source.dataType}
              </text>
            </g>
          );
        })}

        {/* AI/ML Processing Indicator inside platform */}
        <motion.g
          animate={isActive ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <text x="300" y="195" textAnchor="middle" fontSize="16" fill="white">✨</text>
        </motion.g>

        {/* Data Flow Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx="300"
            cy="225"
            r="3"
            fill="#93C5FD"
            animate={isActive ? {
              x: [0, Math.cos(i * 45 * Math.PI / 180) * 80],
              y: [0, Math.sin(i * 45 * Math.PI / 180) * 80],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </svg>

      {/* AI/ML Badge */}
      <motion.div
        className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-bold">AI + ML</span>
        <span className="text-xs opacity-90">Powered</span>
      </motion.div>

      {/* Platform Benefits */}
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center">
          <div className="text-xs text-gray-500">Sources</div>
          <div className="text-lg font-bold text-cyan-600">6+</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center">
          <div className="text-xs text-gray-500">Real-time</div>
          <div className="text-lg font-bold text-blue-600">✓</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center">
          <div className="text-xs text-gray-500">Unified</div>
          <div className="text-lg font-bold text-indigo-600">100%</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center">
          <div className="text-xs text-gray-500">Strategic</div>
          <div className="text-lg font-bold text-purple-600">∞</div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-gray-700">Syncing Data</span>
      </div>
    </div>
  );
};

// Animation Component 3: Altura Custom Projects - Enterprise Development & Integration
const CustomProjectsAnimation = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="relative w-full h-[450px] bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-2xl overflow-hidden p-6">
      <svg className="w-full h-full" viewBox="0 0 600 450">
        <defs>
          <linearGradient id="buildGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.9" />
          </linearGradient>
          <pattern id="codePattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#CBD5E1" opacity="0.3" />
          </pattern>
          <filter id="codeShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background Grid */}
        <rect width="600" height="450" fill="url(#codePattern)" />

        {/* Central Architecture/Building Animation */}
        <motion.g>
          {/* Foundation Layer */}
          <motion.rect
            x="200"
            y="320"
            width="200"
            height="40"
            rx="4"
            fill="#64748B"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <text x="300" y="345" textAnchor="middle" fontSize="11" fill="white" fontWeight="600">ENTERPRISE FOUNDATION</text>

          {/* Application Layer - Building up */}
          {[
            { y: 260, height: 50, label: 'Internal Systems', delay: 0.4, icon: '⚙️' },
            { y: 200, height: 50, label: 'Custom Platforms', delay: 0.6, icon: '🏗️' },
            { y: 140, height: 50, label: 'Applications', delay: 0.8, icon: '📱' },
          ].map((layer, idx) => (
            <motion.g
              key={layer.label}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isActive ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: layer.delay }}
              style={{ transformOrigin: `300px ${layer.y + layer.height}px` }}
            >
              <rect
                x="200"
                y={layer.y}
                width="200"
                height={layer.height}
                rx="4"
                fill="url(#buildGradient)"
                filter="url(#codeShadow)"
              />
              <text x="220" y={layer.y + 30} fontSize="18" fill="white">{layer.icon}</text>
              <text x="250" y={layer.y + 32} fontSize="10" fill="white" fontWeight="500">{layer.label}</text>
            </motion.g>
          ))}

          {/* Top - Cloud/Scaling Icon */}
          <motion.g
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <circle cx="300" cy="100" r="30" fill="#10B981" opacity="0.2" />
            <circle cx="300" cy="100" r="20" fill="#10B981" />
            <text x="300" y="110" textAnchor="middle" fontSize="20" fill="white">☁️</text>
          </motion.g>
        </motion.g>

        {/* Integration Connectors - Left Side */}
        {[
          { label: 'API', y: 150, color: '#3B82F6' },
          { label: 'DB', y: 225, color: '#8B5CF6' },
          { label: 'ERP', y: 300, color: '#EC4899' },
        ].map((connector, idx) => (
          <motion.g
            key={`left-${connector.label}`}
            initial={{ opacity: 0, x: -50 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
          >
            <line
              x1="100"
              y1={connector.y}
              x2="200"
              y2={connector.y}
              stroke={connector.color}
              strokeWidth="3"
              strokeDasharray="6,3"
            />
            <motion.line
              x1="100"
              y1={connector.y}
              x2="200"
              y2={connector.y}
              stroke={connector.color}
              strokeWidth="3"
              strokeDasharray="6,3"
              animate={isActive ? { strokeDashoffset: [0, -9] } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <rect x="50" y={connector.y - 20} width="50" height="40" rx="6" fill={connector.color} />
            <text x="75" y={connector.y + 5} textAnchor="middle" fontSize="10" fill="white" fontWeight="600">{connector.label}</text>
          </motion.g>
        ))}

        {/* Integration Connectors - Right Side */}
        {[
          { label: 'WEB', y: 150, color: '#F59E0B' },
          { label: 'MOBILE', y: 225, color: '#EF4444' },
          { label: 'IOT', y: 300, color: '#06B6D4' },
        ].map((connector, idx) => (
          <motion.g
            key={`right-${connector.label}`}
            initial={{ opacity: 0, x: 50 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
          >
            <line
              x1="400"
              y1={connector.y}
              x2="500"
              y2={connector.y}
              stroke={connector.color}
              strokeWidth="3"
              strokeDasharray="6,3"
            />
            <motion.line
              x1="400"
              y1={connector.y}
              x2="500"
              y2={connector.y}
              stroke={connector.color}
              strokeWidth="3"
              strokeDasharray="6,3"
              animate={isActive ? { strokeDashoffset: [0, 9] } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <rect x="500" y={connector.y - 20} width="50" height="40" rx="6" fill={connector.color} />
            <text x="525" y={connector.y + 5} textAnchor="middle" fontSize="9" fill="white" fontWeight="600">{connector.label}</text>
          </motion.g>
        ))}

        {/* Code Snippets Floating */}
        {[
          { x: 60, y: 50, code: '</>' },
          { x: 520, y: 60, code: '{}' },
          { x: 70, y: 390, code: 'fn()' },
          { x: 510, y: 400, code: '[]' },
        ].map((snippet, idx) => (
          <motion.g
            key={`code-${idx}`}
            animate={isActive ? {
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.5,
            }}
          >
            <text
              x={snippet.x}
              y={snippet.y}
              fontSize="14"
              fill="#64748B"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {snippet.code}
            </text>
          </motion.g>
        ))}

        {/* Building Progress Indicator */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <rect x="180" y="380" width="240" height="8" rx="4" fill="#E2E8F0" />
          <motion.rect
            x="180"
            y="380"
            width="0"
            height="8"
            rx="4"
            fill="#10B981"
            animate={isActive ? { width: 240 } : {}}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.text
            x="300"
            y="406"
            textAnchor="middle"
            fontSize="9"
            fill="#64748B"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 3 }}
          >
            BUILD COMPLETE ✓
          </motion.text>
        </motion.g>
      </svg>

      {/* Enterprise Badge */}
      <motion.div
        className="absolute top-4 right-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white px-4 py-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="text-xs opacity-80">Enterprise Grade</div>
        <div className="text-sm font-bold">Custom Built</div>
      </motion.div>

      {/* Project Capabilities */}
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center border border-slate-200">
          <div className="text-xs text-gray-500">Scalable</div>
          <div className="text-lg font-bold text-slate-700">∞</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center border border-slate-200">
          <div className="text-xs text-gray-500">Secure</div>
          <div className="text-lg font-bold text-green-600">🔒</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center border border-slate-200">
          <div className="text-xs text-gray-500">Custom</div>
          <div className="text-lg font-bold text-blue-600">100%</div>
        </div>
        <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-sm text-center border border-slate-200">
          <div className="text-xs text-gray-500">Support</div>
          <div className="text-lg font-bold text-purple-600">24/7</div>
        </div>
      </div>

      {/* Development Status */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 border border-slate-200">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-gray-700">Building...</span>
      </div>
    </div>
  );
};

export const StickyFeatures = () => {
  const [activeId, setActiveId] = useState(features[0].id);
  
  // Use IntersectionObserver to update active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // Active when element is in the middle 20% of screen
    );

    features.forEach((feature) => {
      const element = document.getElementById(feature.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-xs font-semibold text-indigo-700 mb-6 uppercase tracking-wider">
                Altura Solutions
              </div>
              <h2 className="text-4xl font-medium text-gray-900 mb-8 leading-tight">
                Three solutions that strengthen<br />your company's operations
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Technology designed to improve how you serve, manage and scale every area of your business.
              </p>
              
              <div className="space-y-6 relative">
                 {/* Vertical Line */}
                 <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />

                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <a 
                      key={feature.id} 
                      href={`#${feature.id}`}
                      className={`relative flex items-center gap-3 cursor-pointer transition-colors group ${
                        activeId === feature.id ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                      onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(feature.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      {activeId === feature.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute left-[-3px] w-[7px] h-[7px] rounded-full bg-indigo-600 z-10"
                        />
                      )}
                      <Icon className="w-4 h-4 ml-6" />
                      <span className="text-sm font-bold tracking-wider uppercase">{feature.title}</span>
                    </a>
                  );
                })}
              </div>
              
              <div className="mt-12">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl">
                    Explore All Solutions →
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="lg:w-2/3 space-y-32 pt-12 lg:pt-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.id} 
                  id={feature.id} 
                  className="min-h-[60vh] scroll-mt-32"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl">
                     <div className="flex items-center gap-3 text-indigo-600 mb-4">
                         <Icon className="w-6 h-6" />
                         <span className="text-sm font-bold uppercase tracking-wider">{feature.title}</span>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 max-w-lg">
                         {feature.heading}
                     </h3>
                     
                     {/* Animated SVG Content */}
                     <div className="mb-8">
                       {feature.id === 'automations' && (
                         <AutomationsAnimation isActive={activeId === feature.id} />
                       )}
                       {feature.id === 'onesource' && (
                         <OneSourceAnimation isActive={activeId === feature.id} />
                       )}
                       {feature.id === 'custom' && (
                         <CustomProjectsAnimation isActive={activeId === feature.id} />
                       )}
                     </div>

                     <p className="text-gray-600 leading-relaxed text-base">
                       {feature.description}
                     </p>

                     {/* Feature Stats */}
                     <div className="mt-8 grid grid-cols-3 gap-4">
                       {feature.id === 'automations' && (
                         <>
                           <div className="bg-white p-4 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors">
                             <div className="text-2xl font-bold text-indigo-600">5</div>
                             <div className="text-xs text-gray-500 mt-1">Channels</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                             <div className="text-2xl font-bold text-green-600">24/7</div>
                             <div className="text-xs text-gray-500 mt-1">Active</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
                             <div className="text-2xl font-bold text-purple-600">98%</div>
                             <div className="text-xs text-gray-500 mt-1">Satisfaction</div>
                           </div>
                         </>
                       )}
                       {feature.id === 'onesource' && (
                         <>
                           <div className="bg-white p-4 rounded-xl border border-cyan-100 hover:border-cyan-300 transition-colors">
                             <div className="text-2xl font-bold text-cyan-600">6+</div>
                             <div className="text-xs text-gray-500 mt-1">Sources</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                             <div className="text-2xl font-bold text-blue-600">Real-time</div>
                             <div className="text-xs text-gray-500 mt-1">Sync</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors">
                             <div className="text-2xl font-bold text-purple-600">AI/ML</div>
                             <div className="text-xs text-gray-500 mt-1">Powered</div>
                           </div>
                         </>
                       )}
                       {feature.id === 'custom' && (
                         <>
                           <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-400 transition-colors">
                             <div className="text-2xl font-bold text-slate-700">100%</div>
                             <div className="text-xs text-gray-500 mt-1">Custom</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                             <div className="text-2xl font-bold text-green-600">🔒</div>
                             <div className="text-xs text-gray-500 mt-1">Secure</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                             <div className="text-2xl font-bold text-blue-600">∞</div>
                             <div className="text-xs text-gray-500 mt-1">Scalable</div>
                           </div>
                         </>
                       )}
                     </div>

                     {/* CTA Button */}
                     <div className="mt-8">
                       <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                         {feature.cta} →
                       </button>
                     </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

