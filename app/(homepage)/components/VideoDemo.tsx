"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            See Altura in Action
          </h2>
          <p className="text-lg text-gray-500">Watch how Altura simplifies global payment orchestration</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div 
            className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden cursor-pointer group border border-gray-700"
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-semibold">Platform Demo</p>
                  <p className="text-gray-300 text-sm">3 min overview</p>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  src="/yuno-demo.mov"
                >
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

