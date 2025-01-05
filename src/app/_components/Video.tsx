"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  

  return (
    <section className="relative bg-gradient-to-br from-[#ffefef] via-white to-[#efffef] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b4619] mb-2">
            Campaign Video
          </h2>
          <p className="text-gray-600 text-base">
            Watch our campaign message and vision for a Greater Badagry
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Video Player */}
          <div className="relative">
            <iframe
              className="w-full h-auto max-h-[300px] object-contain"
              src="https://drive.google.com/file/d/1XjH8PnzDelwPAXTeoolejt7l0XeEJ9QK/preview"
              allow="autoplay"
              allowFullScreen
            ></iframe>

            {/* Play/Pause Button Overlay - only shows when paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center 
                  bg-black/30 group hover:bg-black/40 transition-colors"
              >
                <div className="transform transition-transform duration-200 group-hover:scale-110">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#0b4619] border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e41e26] rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0b4619] rounded-full filter blur-3xl opacity-10" />
    </section>
  );
}
