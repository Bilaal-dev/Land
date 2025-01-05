"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Technology() {
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
          src="/images/technology.jpeg"
          alt="Technology Background"
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
            {/* Technology Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-purple-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">TECHNOLOGY AND INNOVATION</h2>
              <div className="space-y-4">
                <p>·Harness technology for efficient service delivery, including e-governance initiatives.</p>
                <p>·Encourage innovation and entrepreneurship in the local community.</p>
                <p>·Organise a talent hub to discover and train our youths in Tech.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Launch Badagry Digital Hub and platform for Tech and ICT. Encourage innovation through grants and competitions.</p>
                <p>·Phase 2: Establish a tech incubator programme to support tech startups and innovation.</p>
                <p>·Phase 3: Promote coding and STEM education to equip the youth with future-ready skills.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-pink-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p className="font-semibold mb-2">Technology Innovation</p>
                <p>Build 200-capacity Badagry tech hub centre equip with computers, digital tools and Free internet access comprising of lecture rooms, share-space offices, and café with the goal of training 200 tech professional quarterly, a total of 800 tech expert in a year with an opportunity to have low paid office for personal use.</p>
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