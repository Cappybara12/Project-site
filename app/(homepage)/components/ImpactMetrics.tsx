"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({ value, suffix = "%" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export const ImpactMetrics = () => {
  const metrics = [
    { value: 30, label: "RECOVERED REVENUE" },
    { value: 27, label: "SAVINGS ON PAYMENT COSTS" },
    { value: 90, label: "REDUCTION IN DEVELOPMENT TIME" }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-12">Real results, measurable impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4" style={{ color: '#4B56FF' }}>
                <AnimatedCounter value={metric.value} />
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

