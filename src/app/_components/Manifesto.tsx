'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Manifesto = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [-10, 0]);

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
    <motion.section 
      ref={componentRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ opacity, scale, rotateX: rotate }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <motion.div 
        variants={fadeInUp}
        className="bg-green-700 text-white p-4 sm:p-6 rounded-lg mb-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          THE MANIFESTO FOR ACHIEVING A GREATER BADAGRY
        </h2>
      </motion.div>

      {/* Introduction */}
      <motion.div variants={fadeInUp} className="mb-8">
        <p className="text-lg mb-4">
          This manifesto is tagged THE BRIDGE; A pathway to link Badagry to her untapped development potentials.
        </p>
        <p className="text-lg mb-4">
          My name is Setonji Sunday Balogun and I am proud to come from Badagry. I am also proud of the history, heritage and culture of this ancient city.
        </p>
      </motion.div>

      {/* Goals Section */}
      <motion.div variants={fadeInUp} className="mb-8">
        <h3 className="text-xl font-semibold mb-4">We all want;</h3>
        <motion.ul 
          className="space-y-3 list-none"
          variants={staggerChildren}
        >
          {[
            'A town centre we are proud of and want to associate with.',
            'A Badagry that is equal in development to its peers in the State and Nigeria at large.',
            'A complete review of Council affairs and engagements.',
            'A secure and safe Badagry for tourists and residents.',
            'A booming Badagry economy.',
            'And so much more for our Badagry, the cradle of civilisation.'
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              className="flex items-center space-x-2"
            >
              <span className="w-2 h-2 bg-green-700 rounded-full"></span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Vision Statement */}
      <motion.div 
        variants={fadeInUp}
        className="text-center my-12 px-4"
      >
        <blockquote className="text-xl sm:text-2xl italic text-gray-700">
          "A mission without vision cannot be accomplished,
          <br />
          a vision without mission cannot be fulfilled"
        </blockquote>
        <motion.p 
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-bold text-green-700 mt-4"
        >
          Badagry's best era beckons!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Manifesto;
