"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookADemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    country: "",
    industry: "",
    transactions: ""
  });

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg text-xs font-bold text-gray-700 uppercase tracking-wider mb-6">
              BOOK A DEMO
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Talk with one of our<br />
              <span className="text-blue-600">payment experts</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Build a payment engine that approves more, fails less, and drives revenue at scale.
            </p>

            {/* Separator */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Testimonial */}
            <div className="mt-8">
              <div className="text-blue-600 text-4xl font-serif mb-4">"</div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Yuno has elevated our payment approval rate by an impressive 10%, directly impacting revenue.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Vasiliy Everstov"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Vasiliy Everstov</div>
                  <div className="text-sm text-gray-500">Head of FinTech, InDrive</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form on Gradient Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-10"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    >
                      <option value="">Please Select</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="BR">Brazil</option>
                      <option value="MX">Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    >
                      <option value="">Please Select</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="travel">Travel</option>
                      <option value="mobility">Mobility</option>
                      <option value="gaming">Gaming</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of transactions per month</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={formData.transactions}
                      onChange={(e) => setFormData({...formData, transactions: e.target.value})}
                    >
                      <option value="">Please Select</option>
                      <option value="0-1k">0 - 1,000</option>
                      <option value="1k-10k">1,000 - 10,000</option>
                      <option value="10k-100k">10,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to receive emails and other communications about news, offers, and updates from Yuno in accordance with{" "}
                    <a href="#" className="text-blue-600 underline">Yuno's Privacy Policy</a>. I accept I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-auto bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
