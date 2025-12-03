"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    id: "checkout",
    title: "CHECKOUT BUILDER",
    heading: "Customize regional checkout experiences with a single click.",
    description: "Configure the global design aspects that will affect the overall appearance of your checkout. Add payment methods, modify styles, and test in real-time.",
    image: "https://placehold.co/600x400/f3f4f6/a3a3a3?text=Checkout+Builder+UI"
  },
  {
    id: "routing",
    title: "SMART ROUTING",
    heading: "Route transactions to the best performing provider.",
    description: "Define routing rules based on card BIN, currency, amount, or issuer. Automatically retry failed transactions with backup providers to maximize approval rates.",
    image: "https://placehold.co/600x400/f3f4f6/a3a3a3?text=Smart+Routing+UI"
  },
  {
    id: "workflows",
    title: "OPTIMIZE WORKFLOWS",
    heading: "Intelligently automate manual processes like reconciliation.",
    description: "Save time and reduce errors by automating settlement reconciliation, payout scheduling, and dispute management across all your payment providers.",
    image: "https://placehold.co/600x400/f3f4f6/a3a3a3?text=Workflow+UI"
  }
];

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
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">Platform</div>
              <h2 className="text-4xl font-medium text-gray-900 mb-8 leading-tight">
                Build your ideal<br />payment infrastructure
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Integrate all of your financial services - payins, payouts, multi-psp routing, fraud prevention, reconciliation, subscription - and optimize it for growth.
              </p>
              
              <div className="space-y-6 relative">
                 {/* Vertical Line */}
                 <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />

                {features.map((feature) => (
                  <a 
                    key={feature.id} 
                    href={`#${feature.id}`}
                    className={`relative flex items-center cursor-pointer transition-colors ${activeId === feature.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(feature.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {activeId === feature.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute left-[-3px] w-[7px] h-[7px] rounded-full bg-blue-600 z-10"
                      />
                    )}
                    <span className="text-sm font-bold tracking-wider uppercase pl-6">{feature.title}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-12">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                    See it in action →
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="lg:w-2/3 space-y-32 pt-12 lg:pt-0">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id} 
                id={feature.id} 
                className="min-h-[60vh] scroll-mt-32"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-blue-100 transition-colors">
                   <div className="flex items-center gap-2 text-blue-600 mb-4">
                       <CheckCircle2 className="w-5 h-5" />
                       <span className="text-sm font-bold uppercase tracking-wider">{feature.title}</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 max-w-lg">
                       {feature.heading}
                   </h3>
                   
                   {/* Image/UI Placeholder */}
                   <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-100 relative group">
                       <img 
                         src={feature.image} 
                         alt={feature.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                   </div>

                   {/* Feature Specific UI Overlays (Simulated) */}
                   {feature.id === "routing" && (
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mt-[-40px] relative z-10 mx-4 max-w-md">
                            <div className="flex justify-between items-center text-xs mb-2">
                                <span className="text-gray-500">Routing Logic</span>
                                <span className="text-green-500 font-medium">Active</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-mono">BIN: 424242</div>
                                <div className="text-gray-300">→</div>
                                <div className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-bold">STRIPE</div>
                            </div>
                        </div>
                   )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

