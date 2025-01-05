"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Community() {
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
          src="/images/ttradition.jpeg"
          alt="Community Background"
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
            {/* Community Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">COMMUNITY ENGAGEMENT AND TRADITIONAL RULERS PARTICIPATION</h2>
              <div className="space-y-4">
                <p>·Hold regular town hall meetings to involve the communities in decision-making.</p>
                <p>·Encourage civic participation and transparency in Local Government affairs.</p>
                <p>·Chieftaincy engagement in decision-making.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Physical town hall meeting with residents and groups representative.</p>
                <p>·Phase 2: Regular involvement of traditional rulers on community policing.</p>
                <p>·Phase 3: Chieftaincy welfare and remunerations.</p>
                <p>·Phase 4: Use digital platform for online town hall meetings and real-time feedback.</p>
                <p>·Phase 5: Implement digital technology for transparent public fund management.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-orange-500/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>- Organise two (2) public engagement meetings yearly.</p>
                <p>- Monthly media brief of Local Government activities to the public and feedback review</p>
                <p>- Procurement of Chieftaincy Bus for the council of Traditional Rulers and improvement on their remuneration.</p>
                <p>- Quarterly engagement with traditional rulers on community security and policing</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 