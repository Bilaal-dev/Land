'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

const Vote = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  
  const mainText = "VOTE FOR CHAIRMAN";
  const subText = "FOR A BETTER BADAGRY";
  
  const letterVariants: Variants = {
    initial: { 
      opacity: 0,
      scale: 0
    },
    animate: (i: number) => ({
      opacity: 1,
      scale: [0, 1.5, 1],
      transition: {
        opacity: { duration: 0.2, delay: i * 0.1 },
        scale: {
          duration: 0.5,
          delay: i * 0.1,
          times: [0, 0.6, 1],
          ease: "easeOut"
        }
      }
    })
  };

  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const backgroundVariants: Variants = {
    animate: {
      background: [
        'linear-gradient(45deg, #166534 0%, #7e22ce 100%)',
        'linear-gradient(135deg, #166534 0%, #7e22ce 100%)',
        'linear-gradient(225deg, #166534 0%, #7e22ce 100%)',
        'linear-gradient(315deg, #166534 0%, #7e22ce 100%)',
        'linear-gradient(45deg, #166534 0%, #7e22ce 100%)',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.section 
      ref={componentRef}
      className="relative min-h-[50vh] py-20 overflow-hidden"
      style={{ opacity, scale, y }}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ 
        once: true,
        amount: 0.2,
        margin: "-200px"
      }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: ['0vw', '100vw'],
              y: ['0vh', '50vh'],
              scale: [1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        variants={containerVariants}
      >
        <motion.div 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider"
        >
          {mainText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              custom={index}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 tracking-wide"
          variants={containerVariants}
        >
          {subText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              custom={index + mainText.length}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Vote;
