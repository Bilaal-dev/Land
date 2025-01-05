"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LetterOfIntent() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8b1f94]">
          Letter of Intent
        </h2>
        <div className="w-20 h-1 bg-[#e91e63] mx-auto mt-4" />
      </motion.div>

      {/* Letter Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12"
      >
        <div className="space-y-6 text-gray-700">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="font-semibold text-lg"
          >
            Dear fellow Badagrians,
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm md:text-base leading-relaxed"
          >
            Allow me to reignite my journey towards political office with a fundamental belief that has guided my entire career and life: "The beauty of governance is the government that centers around the will of the people." As we stand on the precipice of a new era in our great local government, we must recognize the profound importance of democracy as a beautiful form of government.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm md:text-base leading-relaxed"
          >
            The will of the people, as a powerful force, should not only be robust enough to elect those who will stand as their voice in political realms but also possess the capacity to determine how they should be governed at every juncture in our history.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm md:text-base leading-relaxed"
          >
            For it is in this collective will, this harmonious resonance of our society's voices, that the true power of democracy emerges. In the coming days, together, we shall embark on a journey to ensure that this beautiful form of governance remains vibrant and accountable, as we work hand in hand to forge a brighter future for all. It is imperative that all stakeholders, including the party leadership, political party members, the electorate, and the general public, collectively make a resolute decision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="space-y-6"
          >
            <p className="text-sm md:text-base leading-relaxed">
              This decision should be based on a comprehensive assessment of attributes such as strong personality, capacity, competence, unwavering commitment, extensive experience, and the ability to serve as a servant-leader. Only after this thorough evaluation should they select a leader who aligns with their vision for the office.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              In this instance, I would like to inform you all of my intention to contest for the Badagry Local Government (Central) Chairmanship seat in 2025, under the platform of our great party, the All Progressives Congress (APC).
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              As I continue my consultation and documentation of your desires on how well you wish our public resources should be aggregated for the benefit of all, I further wish to appeal for your kind support and endorsement, as this will allow me to actualize these desires and avail me the opportunity to offer quality, dynamic and good governance to the great people of Badagry Local Government and propel the council to an enviable greater height ever attained in the history of any local government in Nigeria.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              The resources at our disposal, those we will rejuvenate and a focus-driven leadership of ours, will be sufficient to achieve this tall dream.
            </p>

            <p className="text-sm md:text-base leading-relaxed font-semibold">
              I pledge to champion this cause by listening to your voices and working tirelessly in pursuit of a democracy that truly reflects your desires and aspirations. Thank you for joining me on this path towards a government that embodies the spirit of the people, by the people, and for the people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="pt-6 space-y-2"
          >
            <p className="text-sm md:text-base">Thank you.</p>
            <p className="text-sm md:text-base">I remain yours truly,</p>
            <p className="text-sm md:text-base font-bold">Hon. Setonji Sunday Balogun (SSB)</p>
          </motion.div>

        
        </div>
      </motion.div>
    </section>
  );
} 