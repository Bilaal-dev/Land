"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Staff() {
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
          alt="Staff Welfare Background"
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
            {/* Staff Welfare Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">LOCAL GOVERNMENT STAFF WELFARE (HAPPY STAFF)</h2>
              <div className="space-y-4">
                <p>·Make the Local Government environment work-friendly under the 'Happy Staff Initiative'.</p>
                <p>·Prioritise staff welfare, service and living conditions.</p>
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
                <p>·Construction of new staff quarters and lodges</p>
                <p>·Construction of staff canteen and staff clubhouse</p>
                <p>·Provision of staff buses</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-orange-500/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Target 50 units of staff quarters.</p>
                <p>-Build modern staff club house and canteen to enable balance working environment.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 