"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts, categories } from "@/data/blog";

export const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All posts" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">
            BLOG
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Dive into the world of<br />payments orchestration
          </h1>
          <p className="text-xl text-gray-600 mb-8">Your go-to library for insights on the payments ecosystem.</p>

          {/* Search Bar */}
          <div className="max-w-xl mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === category
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (if exists) */}
        {featuredPost && (
          <motion.div
            layout
            className="mb-16 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {featuredPost.region && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                    {featuredPost.region}
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-xs text-gray-500 mb-4 uppercase tracking-wider">{featuredPost.date}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">{featuredPost.author}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {post.region && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                    {post.region}
                  </div>
                )}
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">{post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message if no posts in category */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

