'use client';

import { motion } from "framer-motion";

const missionData = [
  {
    title: "MISSION",
    content: "To provide quality leadership and good governance that will enhance the living standard of the people through sustainable development and economic growth."
  },
  {
    title: "VISION",
    content: "To make Badagry Local Government a model in grassroots governance through sustainable development and economic growth."
  },
  {
    title: "CORE VALUES",
    items: [
      "Integrity",
      "Transparency",
      "Accountability",
      "Excellence",
      "Innovation",
      "Team Work"
    ]
  }
];

export default function Mission() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b4619]">
            MISSION, VISION & CORE VALUES
          </h2>
          <div className="w-24 h-1 bg-[#e41e26] mx-auto mt-4" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Title Bar */}
              <div className="bg-[#0b4619] py-4 px-6">
                <h3 className="text-xl font-bold text-white text-center">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                {item.content ? (
                  <p className="text-gray-700 leading-relaxed text-center">
                    {item.content}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {item.items?.map((value, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-2 h-2 bg-[#e41e26] rounded-full" />
                        <span>{value}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
