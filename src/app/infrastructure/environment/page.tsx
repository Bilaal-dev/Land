"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Environment() {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Animation for the recycle icon
  const recycleIconVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="/images/environment.jpeg"
          alt="Environment Background"
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          quality={100}
          priority
        />
        {/* Animated Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 min-h-screen">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div 
            variants={headerVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              BUILDING SUSTAINABLE INFRASTRUCTURE
            </h1>
            <motion.div 
              className="w-24 h-1 bg-red-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Environment Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-lime-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">ENVIRONMENT</h2>
              <div className="space-y-4">
                <p>·Launch clean and green initiatives to improve the environment and reduce pollution.</p>
                <p>·Promote waste management and recycling programs to keep Badagry clean.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Initiate waste management and recycling programs.</p>
                <p>·Phase 2: Partner with the State Waste Managing Agency for efficient waste collection system and Environmental sanitation</p>
                <p>·Phase 3: Beautification of public areas.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-amber-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Maintenance/Beautification of 10km of inner roads in Badagry per year.</p>
                <p>-Planting of 500 coconut seedlings on setbacks per year.</p>
                <p>-Build a centralised waste recycling centre.</p>
                <p>-Daily desilting of drainage channels and consistent repair of drainages</p>
              </div>
            </motion.div>
          </div>

          {/* Animated Recycle Icon */}
          <motion.div 
            className="flex justify-center mt-12"
            variants={recycleIconVariants}
            animate="rotate"
          >
            <div className="w-32 h-32 relative">
              <Image
                src="/images/recycle.png"
                alt="Recycle Icon"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-12 text-white max-w-3xl mx-auto bg-black/30 p-6 rounded-lg backdrop-blur-sm"
          >
            <p className="text-lg">
              This blueprint provides a structured plan for achieving the manifesto's goals,
              incorporating innovative solutions to address the unique challenges faced by
              the local government of Badagry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 