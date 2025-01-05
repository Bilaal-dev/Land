"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Security() {
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
          src="/images/security.jpeg"
          alt="Security Background"
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
              SERVICE TO HUMANITY AND SOCIAL DEVELOPMENT
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Security Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-purple-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">SECURITY</h2>
              <div className="space-y-4">
                <p>·Collaborate with law enforcement agencies to ensure the safety and security of residents.</p>
                <p>·Give adequate support to the Lagos State Neighbourhood Safety Corps Badagry Command, to implement community policing and continuously engage with the Community Development Associations to address security concerns.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Partner with the local community's vigilante groups</p>
                <p>·Phase 2: Implement a community-based surveillance system.</p>
                <p>·Phase 3: Train and equip local security forces.</p>
                <p>·Phase 4: Establish a data-driven crime prevention system.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-navy-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Registering of local vigilante and new CDAs.</p>
                <p>-Enabling Security partnership with State owned security personnel and local security groups.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 