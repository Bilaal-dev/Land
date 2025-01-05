'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const TheBridge = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);
  const imageX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.section 
      ref={componentRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ opacity, scale }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div 
        style={{ x: textX }}
        className="bg-purple-700 text-white p-4 sm:p-6 rounded-lg mb-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          THE BRIDGE
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div 
          style={{ x: imageX }}
          className="relative h-[500px] lg:h-[600px]"
        >
          <Image
            src="/images/The-Bridge.jpg"
            alt="Hon. Setonji Sunday Balogun"
            fill
            className="object-cover object-center rounded-lg shadow-xl"
          />
        </motion.div>

        <motion.div 
          style={{ x: textX }}
          className="bg-purple-700 text-white p-8 rounded-lg shadow-xl"
        >
          <div className="space-y-4">
            <p className="text-lg">
              Empowerment at its core starts from the ground up, emphasizing sustainable transformation rather than temporary fixes. Instead of merely addressing immediate needs, true empowerment stems from investing in the development of individuals and communities.
            </p>

            <p className="text-lg">
              By focusing on human capital development, we prioritize education, skills training, and capacity building, equipping people with the tools and knowledge to thrive independently. This deliberate approach fosters long-term growth and resilience, laying the foundation for lasting change.
            </p>

            <p className="text-lg">
              To truly cultivate a culture of empowerment, we must foster an environment where local voices are amplified, initiatives are supported, and grassroots movements are nurtured. By championing community-driven solutions, we ensure that the diverse needs and perspectives of every individual are recognized and addressed.
            </p>

            <p className="text-lg">
              As we sow the seeds of change in our communities, we commit to fostering inclusivity, valuing every person's contribution, and expanding opportunities for all. This collective effort paves the way for a future where everyone has the chance to fulfill their potential, and no one is left behind.
            </p>

            <p className="text-xl font-semibold mt-6">
              SSB
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TheBridge;
