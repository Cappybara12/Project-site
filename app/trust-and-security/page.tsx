"use client";

import { Shield, Lock, FileText, ClipboardCheck, CheckCircle, Eye, Code, Search, Server, LucideIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Card = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  cta?: string;
};

type Section = {
  id: string;
  badge: string;
  title: string;
  description: string;
  cards: Card[];
};

const securitySections: Section[] = [
  {
    id: "compliance",
    badge: "COMPLIANCE",
    title: "Safe and secure transactions",
    description: "Compliance is deeply ingrained in our corporate culture and operational practices. Our compliance framework is built on four key pillars.",
    cards: [
      {
        icon: FileText,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
        title: "PCI DSS",
        description: "Altura complies with PCI DSS v4.0, one of the most stringent security standards in the payment industry, ensuring secure payment card processing.",
        cta: "Download PDF"
      },
      {
        icon: ClipboardCheck,
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=400&q=80",
        title: "ISO 27701",
        description: "We are aligned with the protection and privacy of processed data based on the principles established in GDPR (General Data Protection Regulation) for the protection of personal data by being ISO 27701 compliance.",
        cta: "Download PDF"
      },
      {
        icon: CheckCircle,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
        title: "ISO 27001",
        description: "Altura is also ISO 27001 certified which demonstrates our commitment to operating a mature security program.",
        cta: "Download PDF"
      },
      {
        icon: CheckCircle,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
        title: "SOC2",
        description: "Altura is SOC 2 Type 2 compliant, guaranteeing strict controls over security and privacy.",
        cta: "Download PDF"
      }
    ]
  },
  {
    id: "infrastructure",
    badge: "INFRASTRUCTURE",
    title: "Secure & resilient infrastructure",
    description: "Altura's infrastructure is built on the AWS Well-Architected Framework, ensuring top-tier security, reliability, and encryption. With industry-leading protections for data in transit and at rest, we safeguard every transaction with the highest security standards.",
    cards: [
      {
        icon: Shield,
        title: "Infrastructure security",
        description: "Altura's infrastructure is designed following the AWS Well-Architected Framework, ensuring security, reliability, and operational excellence. By leveraging AWS data centers and their audited security programs, we maintain robust physical, environmental, and infrastructure protections as part of our architecture."
      },
      {
        icon: Server,
        title: "Data in transit",
        description: "At Altura, all data is transmitted through secure, encrypted channels using TLS 1.3 ensuring the highest level of protection. This approach safeguards both internal and external communications and reinforces the security of our website by mitigating risks associated with weaker protocol versions."
      },
      {
        icon: Lock,
        title: "Data at rest",
        description: "At Altura we use Advanced Encryption Standard (AES) with 256-bit keys when persisting confidential data within the vault. Each confidential record within the vault is previously encrypted under the SHA-512 hashing algorithm where irreversible and unique hashes are generated. It is then encrypted using a separate, randomly generated encryption key."
      }
    ]
  },
  {
    id: "product-security",
    badge: "PRODUCT SECURITY",
    title: "Robust & proactive product security",
    description: "Altura ensures data protection through strict access controls, a secure development lifecycle, and continuous security testing. With proactive vulnerability management, penetration testing, and a bug bounty program, we stay ahead of emerging threats to keep our platform secure.",
    cards: [
      {
        icon: Eye,
        title: "Data access monitoring",
        description: "Altura policies and procedures ensure access to data is within a particular employee's scope of duty only. All access is based on the principle of least privilege. User-role assignment works to satisfy the least privilege principle and technical controls include enforcement of 2FA and VPN."
      },
      {
        icon: Code,
        title: "Software development lifecycle",
        description: "Altura uses a continuous, secure, build and release process informed by industry practices including OWASP. New features and enhancements are peer reviewed and analyzed for security issues prior to release. Altura also has a dedicated QA team that analyzes all code for issues prior to deployment into production."
      },
      {
        icon: Search,
        title: "Security testing and vulnerability management",
        description: "Altura proactively enhances its security by collaborating with industry experts and security researchers. We conduct regular penetration tests through an external firm and participate in HackerOne's bug bounty program to identify and address potential vulnerabilities. Additionally, our patch management process ensures timely updates for both internal and external services, with vulnerabilities triaged and remediated based on their severity."
      }
    ]
  }
];

export default function TrustAndSecurityPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Badges */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">
                TRUST & SECURITY
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Safe and secure transactions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At Altura, security is a top priority. Users trust us with their sensitive data, and we continuously evolve our security measures to meet the highest standards of the global financial industry.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Read the whitepaper
              </button>
            </div>

            {/* Right - Certification Badges SVG */}
            <div className="relative h-[500px] flex items-center justify-center">
              <Image
                src="/certificate-security.svg"
                alt="Security Certifications - ISO 27001, PCI, SOC2, GDPR, ISO 27701"
                width={600}
                height={500}
                className="w-full h-auto max-w-[600px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Stacking Sections */}
      <div className="relative">
        {securitySections.map((section, sectionIndex) => (
          <div 
            key={section.id} 
            className="relative bg-white"
            style={{ zIndex: sectionIndex + 1 }}
          >
            {/* Separator line between sections */}
            {sectionIndex > 0 && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200"></div>
              </div>
            )}
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Content - Sticky and Stacking */}
                <div 
                  className="lg:sticky lg:top-32 lg:self-start bg-white pb-8"
                  style={{ zIndex: 10 + sectionIndex }}
                >
                  <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">
                    {section.badge}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Right Cards */}
                <div className="space-y-8">
                  {section.cards.map((card, cardIndex) => {
                    const IconComponent = card.icon;
                    return (
                      <div 
                        key={cardIndex} 
                        className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                      >
                        {card.image ? (
                          <div className="flex items-start gap-6">
                            <div className="w-28 h-36 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                              <div className="text-center p-3">
                                <div className="text-xs text-blue-600 font-medium mb-1">altura</div>
                                <div className="text-sm font-bold text-gray-800">{card.title}</div>
                                <div className="text-xs text-gray-500">Compliance</div>
                                {/* Wave pattern */}
                                <svg className="w-full h-12 mt-2 opacity-30" viewBox="0 0 100 40">
                                  <path d="M0 20 Q25 5, 50 20 T100 20" stroke="#3B82F6" strokeWidth="2" fill="none" />
                                  <path d="M0 25 Q25 10, 50 25 T100 25" stroke="#3B82F6" strokeWidth="2" fill="none" />
                                  <path d="M0 30 Q25 15, 50 30 T100 30" stroke="#3B82F6" strokeWidth="2" fill="none" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{card.description}</p>
                              {card.cta && (
                                <button className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-2">
                                  {card.cta}
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                              <IconComponent className="w-6 h-6 text-gray-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Transparency Section - Dark */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden py-24 px-8 md:px-16">
            {/* Decorative circles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-700 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-700 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-gray-700 rounded-full opacity-10"></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Altura's commitment to security transparency
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Learn about our commitment to security and compliance. Visit our{" "}
                <Link href="/trust-and-security" className="text-white underline hover:text-blue-400 transition-colors">
                  Trust Security Center
                </Link>{" "}
                for policies, certifications, and more.
              </p>
              <Link href="/book-a-demo">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Book a Demo Form Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:sticky lg:top-32">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">
                Book a Demo
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Talk with one of our<br />payment experts
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Explore how Altura's innovative payment orchestration solutions can help you increase approval rates, reduce costs, seamlessly integrate over 1,000 global and local payment methods, and simplify payment management.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Work email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Job title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Please Select</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="travel">Travel</option>
                      <option value="mobility">Mobility</option>
                      <option value="gaming">Gaming</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of transactions per month</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Please Select</option>
                      <option value="0-1k">0 - 1,000</option>
                      <option value="1k-10k">1,000 - 10,000</option>
                      <option value="10k-100k">10,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <input
                    type="checkbox"
                    id="consent-security"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent-security" className="text-sm text-gray-600">
                    I agree to receive emails and other communications about news, offers, and updates from Altura in accordance with{" "}
                    <a href="#" className="text-blue-600 underline">Altura's Privacy Policy</a>. I accept I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

