"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
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
          src="/images/graduation.jpg"
          alt="Education Background"
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
            {/* Education Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-red-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">EDUCATION</h2>
              <div className="space-y-4">
                <p>·Improve the quality of education in local schools through teacher training and modern teaching aids.</p>
                <p>·Encourage adult education and vocational training programs to empower the local communities.</p>
                <p>·Support disadvantaged students with scholarships and bursary awards from Senior Secondary to tertiary Institutions.</p>
                <p>·Organise special coaching centres for WAEC, GCE and JAMB candidates.</p>
              </div>
            </motion.div>

            {/* Blueprint Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-blue-600/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">BLUE PRINT</h2>
              <div className="space-y-4">
                <p>·Phase 1: Conduct a comprehensive assessment of Primary Schools in Badagry. Taking into account, the student-teacher ratio, facilities, teachers and students' welfare.</p>
                <p>·Phase 2: Launch subsidized transport system for teachers and students living in long distance from school area.</p>
                <p>·Phase 3: Embark on Basic Education for All, campaign, and support for out-of-school children.</p>
                <p>·Phase 4: Embark on the construction of classroom blocks.</p>
                <p>·Phase 5: Establish Badagry Scholarship Board and Education Trust Fund.</p>
                <p>·Phase 6: Launch Badagry secondary school education and art competition.</p>
              </div>
            </motion.div>

            {/* Policy Target Section */}
            <motion.div 
              variants={fadeInUp}
              className="bg-green-800/90 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">POLICY TARGET AND SPECIFIC GOAL</h2>
              <div className="space-y-4">
                <p>- Construct 50 classrooms across the 23 identified primary schools to reduce student-teacher ratio to 1:30.</p>
                <p>- Purchase 5 buses for students and teachers' transportation. These will aid movement of about 2500 students and teachers to and from school per day across Badagry.</p>
                <p>- Under the Badagry educational trust fund (BETF): 300 undergraduate students will be enlisted on yearly Bursary.</p>
                <p>- 50 high-grade undergraduates will be enlisted for scholarship.</p>
                <p>- 100 master students will qualify for educational grants and support</p>
                <p>- 20 PhD students will be targeted for research grants and financial aids.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 