"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Youth() {
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
          src="/images/sports.jpeg"
          alt="Youth and Sports Background"
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
            {/* Youth and Sports Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">YOUTH AND SPORTS DEVELOPMENT:</h2>
              <div className="space-y-4">
                <p>·Establish sports and recreational facilities for youth development.</p>
                <p>·Support local talent in sports, arts, and culture.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Develop sport to nurture local talent.</p>
                <p>·Phase 2: Organize e-sports tournaments to engage the tech-savvy youth.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-orange-500/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Yearly sponsor of Badagry football league</p>
                <p>-Yearly sponsor of Badagry marathon</p>
                <p>-Initiate annual Badagry sports festival</p>
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