"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const themes = [
 {
   number: "1",
   title: "SUSTAINABLE HUMAN CAPITAL DEVELOPMENT",
   color: "bg-[#8b1f94]",
   items: [
     { name: "Education", link: "/sustainable/education" },
     { name: "Vocational Training & Skill Acquisition", link: "/sustainable/vocational" },
     { name: "Technology And Innovation", link: "/sustainable/technology" },
     { name: "Job Creation And Economy Growth", link: "/sustainable/economy" },
     { name: "Youth And Sport Development", link: "/sustainable/youth" },
     { name: "Tourism And Heritage", link: "/sustainable/tourism" },
   ],
 },
 {
   number: "2",
   title: "SERVICE TO HUMANITY AND SOCIAL DEVELOPMENT",
   color: "bg-[#e91e63]",
   items: [
     { name: "Health Care", link: "/service/healthcare" },
     { name: "Security", link: "/service/security" },
     { name: "Community Engagement & Traditional Rulers Participation", link: "/service/community" },
     { name: "Empowerment and Social Welfare", link: "/service/welfare" },
     { name: "Local Government Staff Welfare", link: "/service/staff" },
     { name: "Fiscal Responsibility", link: "/service/fiscal" },
   ],
 },
 {
   number: "3",
   title: "BUILDING SUSTAINABLE INFRASTRUCTURE",
   color: "bg-[#ff5722]",
   items: [
     { name: "Infrastructural & Urban Development & Housing", link: "/infrastructure/urban" },
     { name: "Environment", link: "/infrastructure/environment" },
   ],
 },
];

const Services = () => {
 const [activeTheme, setActiveTheme] = useState<string | null>(null);

 const toggleTheme = (number: string) => {
   setActiveTheme(activeTheme === number ? null : number);
 };

 return (
   <section className="relative h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
     {/* Left Section with Developmental Themes */}
     <div className="absolute left-0 top-0 h-full w-full md:w-[55%] lg:w-[45%] overflow-hidden md:overflow-visible">
       {/* Pink Triangle Background */}
       <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         transition={{ duration: 1, ease: "easeOut" }}
         className="absolute inset-0 bg-[#e91e63] clip-triangle-mobile md:clip-triangle"
       />
        {/* Developmental Themes Container */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
         className="relative z-10 h-[30vh] md:h-full flex flex-col items-center justify-center"
       >
         <div className="text-center -mt-0 md:-mt-20">
           <motion.h2
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-wider"
           >
             DEVELOPMENTAL
           </motion.h2>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.2 }}
             className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-wider mt-2"
           >
             THEMES
           </motion.h2>
         </div>
          {/* SSB Circle */}
         <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="absolute top-[85%] md:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2
             w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 
             bg-white rounded-full shadow-2xl flex items-center justify-center 
             hover:scale-105 transition-transform"
         >
           <div className="text-center">
             <div className="text-[#e91e63] text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wider">
               SSB
             </div>
             <div className="text-[#e91e63] text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold">
               2025
             </div>
           </div>
         </motion.div>
       </motion.div>
     </div>
      {/* Content Container - Right Section */}
     <div className="relative ml-0 md:ml-auto w-full md:w-[65%] lg:w-[60%] h-full pt-[35vh] md:pt-20 px-4 sm:px-6 md:px-8">
       <div className="space-y-6 md:space-y-8 lg:space-y-12">
         {themes.map((theme, index) => (
           <motion.div
             key={theme.number}
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: index * 0.3 }}
             className="relative"
           >
             {/* Accordion Header */}
             <button
               onClick={() => toggleTheme(theme.number)}
               className="w-full flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 hover:translate-x-2 transition-transform"
             >
               {/* Number Box */}
               <motion.div
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: index * 0.3 + 0.4 }}
                 className={`${theme.color} w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
               >
                 <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                   {theme.number}
                 </span>
               </motion.div>
                {/* Title Bar */}
               <motion.div
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                 className={`${theme.color} flex-1 py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg origin-left hover:shadow-lg transition-shadow`}
               >
                 <h3 className="text-white text-sm sm:text-base md:text-lg font-bold text-left">
                   {theme.title}
                 </h3>
               </motion.div>
             </button>
              {/* Accordion Content */}
             <motion.div
               initial={false}
               animate={{
                 height: activeTheme === theme.number ? "auto" : 0,
                 opacity: activeTheme === theme.number ? 1 : 0,
               }}
               transition={{ duration: 0.3 }}
               className="overflow-hidden"
             >
               <ul className="space-y-2 md:space-y-3 pl-20 sm:pl-24 md:pl-32 py-4">
                 {theme.items.map((item, itemIndex) => (
                   <motion.li
                     key={itemIndex}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{
                       delay: activeTheme === theme.number ? itemIndex * 0.1 : 0,
                     }}
                     className="flex items-center gap-2 md:gap-3 group"
                   >
                     <motion.span
                       className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ease-in-out
                         ${theme.color.replace('bg-', 'bg-opacity-50 bg-')}
                         group-hover:w-3 group-hover:h-3`}
                     />
                     <Link
                       href={item.link}
                       className={`text-xs sm:text-sm md:text-base relative
                         text-gray-700 hover:text-gray-900 transition-colors duration-300
                         flex items-center gap-2
                         after:content-['→'] after:opacity-0 after:translate-x-[-10px]
                         after:transition-all after:duration-300
                         hover:after:opacity-100 hover:after:translate-x-0
                         before:absolute before:bottom-0 before:left-0 before:w-full
                         before:h-[1px] before:bg-current before:origin-left
                         before:scale-x-0 hover:before:scale-x-100
                         before:transition-transform before:duration-300`}
                     >
                       {item.name}
                     </Link>
                   </motion.li>
                 ))}
               </ul>
             </motion.div>
           </motion.div>
         ))}
       </div>
     </div>
   </section>
 );
};

export default Services;