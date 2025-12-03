"use client";

import { RevenueGraph } from "./RevenueGraph";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ 
    number, 
    title, 
    description, 
    children, 
    className = "",
    dark = false
}: { 
    number: string; 
    title: string; 
    description: string; 
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}) => (
  <div className={`relative p-8 md:p-12 rounded-3xl overflow-hidden ${dark ? 'bg-[#0B0F17] text-white' : 'bg-gray-50 text-gray-900'} ${className} group border border-gray-100 hover:border-blue-200 transition-colors duration-300`}>
    <div className="relative z-10 max-w-md">
        <div className="text-xs font-mono mb-4 opacity-60">{number}.</div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">{title}</h3>
        <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            {description}
        </p>
    </div>
    
    {/* Content Slot */}
    <div className="mt-8 md:mt-0">
        {children}
    </div>

    {/* Hover Effect Border */}
    <div className="absolute inset-0 border-2 border-blue-500/0 rounded-3xl pointer-events-none transition-all duration-500 group-hover:border-blue-500/50" />
  </div>
);

export const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">Value</div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Make global payments effortless</h2>
            <p className="text-lg text-gray-500">Connect every part of your global payment operation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feature 1: Go Global (Spans 3 columns or 2?) Screenshot suggests it might be full width or large */}
            <div className="lg:col-span-3">
                <FeatureCard 
                    number="01"
                    title="GO GLOBAL IN WEEKS, NOT MONTHS"
                    description="Integrate over 1,000 payment methods, PSPs, and fraud solutions with a single API. Expand into new markets in weeks instead of months."
                    className="min-h-[500px] flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="w-full md:w-1/2 h-[400px] relative flex items-center justify-center bg-blue-50/50 rounded-full overflow-hidden">
                        {/* Placeholder for Globe */}
                         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/400px-Rotating_earth_%28large%29.gif')] bg-cover bg-center opacity-20 mix-blend-multiply grayscale"></div>
                         <div className="relative z-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                            <div className="flex gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-2 text-xs text-gray-600">
                                <div className="flex items-center gap-2"><span className="font-bold">Stripe</span> Connected</div>
                                <div className="flex items-center gap-2"><span className="font-bold">Paypal</span> Connected</div>
                                <div className="flex items-center gap-2"><span className="font-bold">Chase</span> Connected</div>
                            </div>
                         </div>
                        
                         <button className="absolute top-10 left-10 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                            Explore all integrations <ArrowRight className="inline w-4 h-4 ml-1"/>
                         </button>
                    </div>
                </FeatureCard>
            </div>

            {/* Feature 2: Boost Revenue */}
            <div className="lg:col-span-1">
                 <FeatureCard 
                    number="02"
                    title="BOOST REVENUE GROWTH"
                    description="Maximize conversions with intelligent multi-PSP routing, automatic retries and smart network tokenization."
                    className="h-full"
                >
                    <div className="mt-8">
                        <RevenueGraph />
                    </div>
                </FeatureCard>
            </div>

            {/* Feature 3: Minimize Cost */}
             <div className="lg:col-span-1">
                 <FeatureCard 
                    number="03"
                    title="MINIMIZE COST & COMPLEXITY"
                    description="Optimize every transaction, reduce fraud, and simplify workflows with AI-powered automation."
                    className="h-full bg-lime-100/50" // Light green tint from screenshot
                >
                    <div className="mt-8 flex justify-center">
                         {/* Flowchart visual placeholder */}
                         <div className="relative w-full h-64">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-100 rounded-xl border-2 border-blue-200" />
                             <div className="absolute top-20 left-1/4 w-12 h-24 bg-blue-600 rounded-xl" />
                             <div className="absolute top-20 right-1/4 w-12 h-24 bg-green-400 rounded-xl opacity-80" />
                             <svg className="absolute inset-0 w-full h-full -z-10 text-gray-300">
                                 <path d="M 150 50 L 100 100" stroke="currentColor" strokeWidth="2" fill="none" />
                                 <path d="M 150 50 L 200 100" stroke="currentColor" strokeWidth="2" fill="none" />
                             </svg>
                         </div>
                    </div>
                </FeatureCard>
            </div>
             {/* Feature 4 (Optional/Filler based on layout) - Maybe "Insights" or part of the 3rd one */}
             <div className="lg:col-span-1 bg-gray-50 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                <h3 className="text-lg font-semibold mb-4">Real-time Insights</h3>
                 <div className="w-full h-40 bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-end gap-2 h-full pb-2">
                        {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                            <motion.div 
                                key={i} 
                                className="flex-1 bg-blue-500 rounded-t-sm opacity-80"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

