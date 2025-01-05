"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Economy() {
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
          src="/images/job.jpeg"
          alt="Economy Background"
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
            {/* Job Creation Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">JOB CREATION AND ECONOMY GROWTH</h2>
              <div className="space-y-4">
                <p>·Attract investments and promote small and medium-sized enterprises (SMEs) to create employment opportunities.</p>
                <p>·Foster agricultural initiatives to support local farmers and agribusiness.</p>
                <p>·Provide tractors to farmers through renting at little cost for clearing and ploughing/tilling.</p>
                <p>·Create a conducive environment for business and leisure where people want to shop, live, work and socialise.</p>
                <p>·Attract new investments to positively encourage more employment in Badagry.</p>
                <p>·Build and improve social facilities within the local council.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Develop a digital job portal.</p>
                <p>·Phase 2: Create entrepreneurship hubs and innovation centres to nurture startups.</p>
                <p>·Phase 3: Attract investments and foster SME growth.</p>
                <p>·Phase 4: Identify emerging commercial spot in line with Lagos State' Badagry Master plan to create a conducive environment for business and leisure where people want to shop, live, work and socialize.</p>
                <p>·Phase 5: Identify and attract new investments to positively encourage more employment in Badagry.</p>
                <p>·Phase 6: Build and improve social facilities within the local council.</p>
                <p>·Phase 7: Build Badagry modern Agricultural market Hub.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-orange-500/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>Build 1000 (seller-customer) capacity food and Agricultural produce hub</p>
                <p>Initiate 10-acres Badagry mechanised farm for food crop production (Food 4 All) and procurement of farm machineries.</p>
                <p>Engagement of local engineers and artisans for direct labours and small-scale contracts under community infrastructure maintenance scheme (CIMS)</p>
                <p>Build Badagry trade and commerce complex comprising of offices, business chambers, Halls etc</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 