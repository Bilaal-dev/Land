"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Healthcare() {
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
          src="/images/healthcare.jpeg"
          alt="Healthcare Background"
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
            {/* Healthcare Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">HEALTHCARE</h2>
              <div className="space-y-4">
                <p>·Modernize healthcare facilities to provide accessible and high-quality healthcare services.</p>
                <p>·Promote health education and awareness programs to prevent common diseases.</p>
                <p>·Bring healthcare closer to the grassroots through Community First-Aid Centres (CFAC).</p>
                <p>·Resuscitate First Aid programmes across all Public Primary Schools within the Local Government through public and private support</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Conduct a comprehensive assessment of primary health care centres in Badagry. Taking into account, the accessibility, distance, facilities, bed-to-patient ratio and manpower.</p>
                <p>·Phase 2: Use health data analysis for predictive healthcare planning and resource allocation.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-orange-500/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>-Reduce Bed-patient ratio across the 13 identified PHC to 1:20.</p>
                <p>-Provision of 4 mobile buses for speed-dial medical emergency (mobile hospital).</p>
                <p>-Embrace continuous health sensitisation.</p>
                <p>-Provision of health facility on need base.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 