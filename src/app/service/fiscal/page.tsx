"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Fiscal() {
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="/images/local.jpeg"
          alt="Fiscal Background"
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
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"
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
              SERVICE TO HUMANITY AND SOCIAL DEVELOPMENT
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
            {/* Fiscal Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">FISCAL RESPONSIBILITY</h2>
              <div className="space-y-4">
                <p>·Ensure transparent and accountable use of Local Government funds.</p>
                <p>·Develop a sustainable financial plan to support developmental projects.</p>
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
                <p>·Implement digital-based budget transparency to track public spending.</p>
                <p>·Explore secure and transparent financial transactions.</p>
                <p>·Ensure transparent contract awards through public advertising and proper bidding.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-green-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Public involvement in budget presentation</p>
                <p>-Raising the local IGR: (a) through construction of public parking space and tolling of parking lots (b) development charges and through all the available identified streams.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 