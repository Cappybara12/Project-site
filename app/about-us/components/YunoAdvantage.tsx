"use client";

import { motion } from "framer-motion";
import { Network, Zap, TrendingUp, Globe } from "lucide-react";

const advantages = [
  {
    icon: Network,
    title: "All-in-one integration",
    description: "Connect to over +1000 payment methods and providers with a single, no-code integration."
  },
  {
    icon: Zap,
    title: "High-performing payments",
    description: "Benefit from industry-leading approval rates and fraud prevention measures to maximize your revenue and minimize risk."
  },
  {
    icon: TrendingUp,
    title: "Unified insights",
    description: "Get a clear view of your payment data with our dashboard. Track metrics, spot trends, and optimize your strategy."
  },
  {
    icon: Globe,
    title: "Built for global scale",
    description: "Altura empowers you to accept payments from anywhere in the world, effortlessly."
  }
];

export const YunoAdvantage = () => {
  const FirstIcon = advantages[0].icon;
  
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">
            Why Altura Stands Out
          </p>
        </motion.div>

        {/* First Row: Blue Card + First Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Blue Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Altura advantage
            </h2>
            <p className="text-lg md:text-xl text-blue-100">
              Altura sets itself apart by offering a comprehensive payments orchestration solution that goes beyond traditional payment processors.
            </p>
          </motion.div>

          {/* First Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <FirstIcon className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {advantages[0].title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {advantages[0].description}
            </p>
          </motion.div>
        </div>

        {/* Second Row: Remaining 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.slice(1).map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {advantage.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

