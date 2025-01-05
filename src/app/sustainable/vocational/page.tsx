"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VocationalTraining() {
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
          src="/images/vocation.jpeg"
          alt="Vocational Training Background"
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
            {/* Vocational Training Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">VOCATIONAL TRAINING & SKILL ACQUISITION</h2>
              <div className="space-y-4">
                <p>·Train youths on vocational courses</p>
                <p>·Provide vocational hub.</p>
                <p>·Encourage & promote skill acquisition in fashion, textile design, artistic & sculpture, fishery, barbing, hairdressing.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Expand training centres.</p>
                <p>·Phase 2: Identify sustainable skills needed.</p>
                <p>·Phase 3: Equip training centres with modern tools.</p>
                <p>·Phase 4: Monitoring & follow-up of trainees after graduation.</p>
                <p>·Phase 5: Partner with professionals.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>- Facilitate training of 200 people per year.</p>
                <p>- Empower trained personnel with necessary tools.</p>
                <p>- Encourage & promote start-up through financial supports & grants.</p>
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