"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Urban() {
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
        src="/images/infrastructure.jpeg"
          alt="Urban Development Background"
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
            {/* Urban Development Section */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-xl transform transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">INFRASTRUCTURAL AND URBAN DEVELOPMENT, AND HOUSING</h2>
              <div className="space-y-4">
                <p>·To actualise sustainable development, all projects will be designed in line with Badagry Master plan.</p>
                <p>·Improve and expand road networks, ensuring better transportation within the Local Government.</p>
                <p>·Upgrade public facilities, including schools, hospitals, tourism and recreational areas.</p>
                <p>·Invest in sanitation infrastructure.</p>
                <p>·Invest in modern, safe and affordable housing schemes.</p>
                <p>·Sustaining and consolidating ongoing projects initiated by the outgoing administration.</p>
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
                <p>·Phase 1: Identification and continuation of ongoing Local government projects initiated by the outgoing administration.</p>
                <p>·Phase 2: Liaise with the State Government to plan and actualise Badagry Master plan</p>
                <p>·Phase 3: Conduct a comprehensive infrastructure assessment of roads in Badagry. Taking into account, the classes of the roads both belonging to the State or Local Government, marking out and construction of new roads for proper transportation network.</p>
                <p>·Phase 4: Mapping out new interlinks and inner communities' roads and marking out public centres.</p>
                <p>·Phase 5: Liaise with the State Government on effective infrastructural development plans on road networks</p>
                <p>·Phase 6: Explore a public-private partnership (PPP) framework to fund and accelerate infrastructure projects.</p>
                <p>·Phase 7: Prioritize and fund critical infrastructure projects.</p>
                <p>·Phase 8: Monitor and ensure project execution within set timelines.</p>
                <p>·Phase 9: Regular road maintenance and drainage repair.</p>
                <p>·Phase 10: Work with the private sector to build modern affordable housing units.</p>
                <p>·Phase 11: Construction of mini water plants and construction of public toilets where necessary.</p>
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
                <p>-Badagry housing estate scheme will target 500 housing units for low-income earners.</p>
                <p>-Develop Badagry Master Plan.</p>
                <p>-Ensuring funding of old projects initiated by the outgoing government to ascertain sustainability of our common resources.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 