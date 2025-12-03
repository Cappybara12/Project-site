"use client";

import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Blue Background */}
      <section className="relative py-24 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              Terms and Conditions
            </h1>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
              <span className="text-sm font-semibold text-gray-700">Country</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                RECITALS
              </h2>
            </div>

            {/* Section 1 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">1. Introduction and Acceptance</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">2. Use of Services</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">3. User Responsibilities</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
              <ul className="list-disc list-inside space-y-3 text-base text-gray-700 ml-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">4. Privacy and Data Protection</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">5. Payment Terms</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">6. Intellectual Property</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">7. Limitation of Liability</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">8. Termination</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">9. Governing Law</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">10. Changes to Terms</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                Last updated: December 2, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

