"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Tourism() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="/images/tourism.jpeg"
          alt="Tourism Background"
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          quality={100}
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 min-h-screen">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Header Section */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SUSTAINABLE HUMAN CAPITAL DEVELOPMENT
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Tourism Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-pink-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">TOURISM AND HERITAGE</h2>
              <div className="space-y-4">
                <p>·Promote Badagry's historical and cultural heritage for tourism through partnership with the State and Federal Ministries of Tourism and Culture.</p>
                <p>·Invest in infrastructure that supports tourism growth, including museums and heritage sites.</p>
                <p>·Encourage more leisure attractions and cultural experiences into our Badagry.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Develop virtual reality (VR) tours of Badagry's historical sites for a global audience.</p>
                <p>·Phase 2: Launch a cultural heritage app that provides insights into the local history.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-indigo-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Support and sponsor major tourist attraction festivals.</p>
                <p>-Initiate Badagry tourism development Board</p>
                <p>-Invest in Remodelling of tourism sites and recreational facilities.</p>
              </div>
            </motion.div>
          </div>

          {/* Additional Features */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 