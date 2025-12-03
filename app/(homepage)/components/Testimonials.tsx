"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Play } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useCallback, useEffect, useState } from "react";

const YOUTUBE_VIDEO_ID = "fQngxBkUjic";

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPlayingVideo(null); // Stop video when slide changes
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handlePlayVideo = (index: number) => {
    setPlayingVideo(index);
    emblaApi?.plugins()?.autoplay?.stop();
  };

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            SUCCESS STORIES
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          Discover how Yuno has helped<br />our customers win
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
          View all success stories →
        </button>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_85%] min-w-0 relative">
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800">
                  {playingVideo === index ? (
                    // YouTube Video Embed
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                      title="Yuno Success Story"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    // Thumbnail with Play Button
                    <>
                      {/* YouTube Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                        alt={item.company}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={() => handlePlayVideo(index)}
                      >
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-700 transition-all shadow-2xl">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">{item.company}</div>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-2 leading-tight">{item.quote}</h3>
                        {item.detail && (
                          <p className="text-lg text-gray-300 mb-3">{item.detail}</p>
                        )}
                        <p className="text-sm text-blue-400 font-medium">{item.metrics}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-blue-600 w-8" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

